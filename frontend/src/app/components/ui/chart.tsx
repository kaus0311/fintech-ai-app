"use client";

import * as React from "react";
import {
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
} from "recharts";

import type {
  TooltipProps,
  LegendProps,
} from "recharts";

import { cn } from "./utils";

const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k: string]: {
    label?: React.ReactElement;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = { config: ChartConfig };

const ChartContext = React.createContext<ChartContextProps | null>(null);

export function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) throw new Error("useChart must be used within a <ChartContainer />");
  return ctx;
}

export function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ReactElement;
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs",
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
          "[&_.recharts-cartesian-grid_line]:stroke-border/50",
          "[&_.recharts-tooltip-cursor]:stroke-border",
          "[&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

export function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const colorConfig = Object.entries(config).filter(
    ([, cfg]) => cfg.theme || cfg.color
  );

  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, cfg]) => {
    const color =
      cfg.theme?.[theme as keyof typeof cfg.theme] || cfg.color;
    return color ? `  --color-${key}: ${color};` : "";
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                                TOOLTIP v2                                  */
/* -------------------------------------------------------------------------- */

export const ChartTooltip = RechartsTooltip;

export function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  hideLabel = false,
  hideIndicator = false,
  indicator = "dot",
  formatter,
  labelFormatter,
  nameKey,
  labelKey,
  color,
}: TooltipProps<number, string> & {
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "dot" | "line" | "dashed";
  nameKey?: string;
  labelKey?: string;
  color?: string;
  className?: string;
  formatter?: (value: number, name: string, item: any, index: number) => React.ReactNode; // <-- FIXED
}) {
  const { config } = useChart();

  if (!active || !payload?.length) return null;

  const first = payload[0];
  const key = labelKey || first.dataKey || first.name || "value";

  const itemCfg = config[key];

  const tooltipLabel = !hideLabel
    ? labelFormatter
      ? labelFormatter(label, payload)
      : itemCfg?.label || label
    : null;

  return (
    <div
      className={cn(
        "border-border/50 bg-background min-w-[8rem] rounded-lg border px-2.5 py-1.5 text-xs shadow-xl grid gap-1.5",
        className
      )}
    >
      {tooltipLabel && <div className="font-medium">{tooltipLabel}</div>}

      <div className="grid gap-1.5">
        {payload.map((item, i) => {
          const k = nameKey || item.name || item.dataKey || "value";
          const cfg = config[k];
          const indicatorColor = color || item.color;

          return (
            <div
              key={i}
              className="flex items-center gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5"
            >
              {!hideIndicator && (
                <div
                  className={cn(
                    "shrink-0 rounded-[2px]",
                    indicator === "dot" && "h-2.5 w-2.5",
                    indicator === "line" && "w-1 h-2.5",
                    indicator === "dashed" &&
                      "w-0 border-[1.5px] border-dashed bg-transparent"
                  )}
                  style={{
                    backgroundColor: indicator === "dot" ? indicatorColor : "",
                    borderColor: indicatorColor,
                  }}
                />
              )}

              <div className="flex flex-1 justify-between">
                <span className="text-muted-foreground">
                  {cfg?.label || item.name}
                </span>

                {item.value != null && (
                  <span className="font-mono font-medium tabular-nums">
                    {formatter
                      ? formatter?.(item.value, item.name ?? "", item, i) // <-- FIXED
                      : item.value.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                LEGEND v2                                   */
/* -------------------------------------------------------------------------- */

export const ChartLegend = RechartsLegend;

export function ChartLegendContent({
  payload,
  className,
  hideIcon = false,
  nameKey,
  verticalAlign = "bottom",
}: LegendProps & {
  hideIcon?: boolean;
  nameKey?: string; // <-- FIXED
  className?: string;
}) {
  const { config } = useChart();

  if (!payload?.length) return null;

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item, i) => {
        const key: string =
          nameKey ??
          (item.dataKey as string) ??
          "value"; // <-- FIXED

        const cfg = config[key];

        return (
          <div key={i} className="flex items-center gap-1.5">
            {!hideIcon ? (
              cfg?.icon ? (
                <cfg.icon />
              ) : (
                <div
                  className="h-2 w-2 rounded-[2px]"
                  style={{ backgroundColor: item.color }}
                />
              )
            ) : null}
            {cfg?.label}
          </div>
        );
      })}
    </div>
  );
}