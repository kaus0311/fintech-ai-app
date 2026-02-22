"use client";

import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import {
  Panel as ResizablePanel,
  PanelGroup as ResizablePanelGroup,
  PanelResizeHandle as ResizableHandle,
} from "react-resizable-panels";

import { cn } from "./utils";

function ResizablePanelGroupWrapper({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePanelGroup>) {
  return (
    <ResizablePanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

function ResizablePanelWrapper(
  props: React.ComponentProps<typeof ResizablePanel>,
) {
  return <ResizablePanel data-slot="resizable-panel" {...props} />;
}

function ResizableHandleWrapper({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizableHandle> & {
  withHandle?: boolean;
}) {
  return (
    <ResizableHandle
      data-slot="resizable-handle"
      className={cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizableHandle>
  );
}

export {
  ResizablePanelGroupWrapper as ResizablePanelGroup,
  ResizablePanelWrapper as ResizablePanel,
  ResizableHandleWrapper as ResizableHandle,
};