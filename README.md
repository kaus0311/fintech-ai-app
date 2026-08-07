# Fintech AI App

A multi-part fintech AI project that combines a portfolio risk dashboard, a stock-analysis browser extension, a lightweight FastAPI backend, and a Python-based agent workflow for ingesting, ranking, analyzing, and summarizing financial information. The repository description presents it as a fintech AI suite with two main tracks: a **Portfolio Risk Manager** and a **Stock Analyzer extension**. [1]

## Overview

This repository is structured as an end-to-end fintech intelligence system with two product directions:

- **Portfolio Risk Manager** — designed to score and explain portfolio risk using financial fundamentals and news context. [1]
- **Stock Insights Extension** — designed to detect supported stock pages and generate explainable stock summaries using company fundamentals, news, and social-signal context. [1]

The project is split across multiple layers:

- A **frontend** web application for the main product UI. [1]
- A **backend** FastAPI service. [1]
- A **browser extension** built as a separate app. [1]
- A **Python agent workflow** for ingestion, scoring, analysis, and output generation. [1]

## Updated Repository Structure

Because the AI workflow files were moved into `backend/`, the repository structure should now be documented like this:

```text
fintech-ai-app/
├── frontend/                 # React + TypeScript + Vite web app
├── backend/                  # FastAPI backend + Python agent workflow
│   ├── main.py               # FastAPI entry point / API shell
│   ├── agent_main.py         # Main Python agent demo entry point
│   ├── ingest_agent.py       # Ingestion logic
│   ├── analyst_agent.py      # Analysis logic
│   ├── decision_agent.py     # Relevance scoring / decision logic
│   ├── output_agent.py       # Output and memo generation
│   └── ...                   # Backend config, utilities, and dependencies
├── extension/                # Browser extension project
├── requirements.txt          # Python dependencies
└── README.md
```

This is the main README change needed after relocating the agent files from the repo root into the backend layer.

## Architecture

### Frontend

The `frontend/` directory contains the main web app. It uses React, TypeScript, and Vite, and follows a modern SPA-style structure with source files, public assets, and Vite configuration. [1]

This layer is the most likely home for the Portfolio Risk Manager dashboard and any user-facing controls that connect to backend analysis. That framing fits the repository overview, even if some product wiring is still evolving. [1]

### Backend

The `backend/` directory is the API and orchestration layer. The current README describes it as a lightweight FastAPI service with a basic route and permissive CORS, which means it is still closer to a starter shell than a finished product API. [1]

Now that `agent_main.py`, `ingest_agent.py`, `analyst_agent.py`, `decision_agent.py`, and `output_agent.py` are inside `backend/`, this folder should be described as the combined **API + AI workflow layer**, not just a thin backend service. That is a better match for the current code organization. [1]

### Extension

The `extension/` directory is a standalone browser-extension app with its own build structure and manifest. It is intended to detect stock-related pages and surface explainable stock summaries directly in the browsing experience. [1]

### Agent Workflow

The AI workflow appears to follow this sequence:

1. Load configuration and input sources. [1]
2. Ingest relevant financial/news/content data. [1]
3. Score or rank the ingested items for relevance. [1]
4. Run deeper analysis on the most important signals. [1]
5. Produce a final memo, summary, or output artifact. [1]

With the files now located inside `backend/`, this pipeline should be presented as an internal service layer of the backend rather than a completely separate top-level subsystem.

## Tech Stack

### Frontend

- React [1]
- TypeScript [1]
- Vite [1]
- ESLint [1]

### Backend

- FastAPI [1]
- Uvicorn [1]
- CORS middleware [1]
- Python agent modules colocated with the backend service layer. [1]

### Python / AI Workflow

The current README names these Python-side dependencies and workflow technologies:

- Python [1]
- requests [1]
- feedparser [1]
- PyYAML [1]
- scikit-learn [1]

### Extension

- Chrome Extension / Manifest V3 [1]
- Vite-based extension structure [1]
- Content/background extension workflow [1]

## How to Run

### 1. Frontend

```bash
cd frontend
npm install
npm run dev
```

Useful frontend scripts include build, lint, and preview flows in the current project setup. [1]

### 2. Backend API

```bash
cd backend
uvicorn main:app --reload
```

The current README documents a basic backend status route at `/` that returns an API-running message. [1]

### 3. Agent Workflow

Install Python dependencies from the project root:

```bash
pip install -r requirements.txt
```

After moving the agent files into `backend/`, the run command should also be updated in the README to reflect their new location. A more accurate command is:

```bash
cd backend
python agent_main.py
```

That is the most important run-instruction correction after the file move.

### 4. Browser Extension

To load the extension locally in Chrome:

1. Open `chrome://extensions/`. [1]
2. Enable **Developer mode**. [1]
3. Click **Load unpacked**. [1]
4. Select the `extension/` folder. [1]

## What the App Does

### Portfolio Risk Manager

The portfolio side is intended to help users:

- Evaluate portfolio risk. [1]
- Understand why a portfolio may be risky. [1]
- Connect risk scoring with fundamentals and market/news context. [1]

### Stock Insights Extension

The extension is intended to help users:

- Detect stock-related pages. [1]
- Gather stock-specific signals. [1]
- Surface explainable summaries inside the browsing workflow. [1]

### Backend Agent System

With the AI files inside `backend/`, the backend can now be described as doing more than serving routes. It also houses the internal analysis pipeline for ingestion, relevance scoring, deeper analysis, and output generation, using the agent modules listed above. [1]

That updated wording matters because the previous README described those files as top-level pipeline components, but the current repo state places them under the backend service boundary. [1]

## Current State

This repository is best described as a multi-part prototype or in-progress fintech AI system. The repo clearly contains a real frontend, a FastAPI backend shell, a separate browser extension, and an agent-style Python analysis workflow. [1]

The latest visible commit message says **“added ai files to backend,”** which confirms the new organization and supports updating the README to reflect the backend as the combined API and agent layer. [1]

## README Changes You Should Make

These are the specific README updates recommended after moving the AI files:

- Change the repo tree so the five agent files appear under `backend/` instead of the repo root. [1]
- Update the backend description from “lightweight FastAPI app” to “FastAPI backend plus AI analysis pipeline.” [1]
- Update the agent run command from `python agent_main.py` at the project root to `cd backend && python agent_main.py`. [1]
- Update architecture language so the Python agent workflow is described as backend-internal rather than fully separate. [1]

## Notes

- The current README still describes the old file layout with agent files at the root. [1]
- The frontend and extension appear more structurally complete than the backend API surface, so avoid presenting the backend as production-ready unless more routes and integrations are implemented. [1]
- The repository is strongest when framed as an **end-to-end fintech AI prototype** with separate UI, API, extension, and explainable analysis layers. [1]

## Future Improvements

- Add real backend routes for portfolio analysis and stock insight delivery. [1]
- Connect frontend actions directly to backend services. [1]
- Expose agent outputs through the API so the frontend and extension consume a unified backend contract. [1]
- Add environment variable documentation and sample outputs. [1]
- Replace any remaining template documentation with product-specific docs. [1]
- Add screenshots, sample analysis flows, and diagrams of how the frontend, backend, extension, and agent modules interact. [1]

## Suggested One-Line Description

**Fintech AI App is an end-to-end fintech intelligence prototype that combines a portfolio risk dashboard, a stock-analysis browser extension, and a backend AI workflow for ingesting, ranking, analyzing, and summarizing financial signals.**
