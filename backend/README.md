# Fintech AI App

A multi-part fintech AI project that combines a portfolio risk dashboard, a stock-analysis browser extension, a lightweight FastAPI backend, and a Python-based agent workflow for ingesting, ranking, analyzing, and summarizing financial information.

## Overview

This repository is structured as an end-to-end fintech intelligence system with two core product directions:

- **Portfolio Risk Manager** — designed to score and explain portfolio risk using financial fundamentals and news context.
- **Stock Insights Extension** — a browser extension designed to detect supported stock pages and generate explainable stock summaries using market data, news, and sentiment signals.

The project is split across multiple layers:
- A **frontend** web application for the main user experience.
- A **backend** API service built with FastAPI.
- A **browser extension** built as a separate Vite project.
- A **Python agent pipeline** for ingestion, ranking, analysis, and output generation.

## Repository Structure

```text
fintech-ai-app/
├── frontend/              # React + TypeScript + Vite web app
├── backend/               # FastAPI backend
├── extension/             # Browser extension project
├── agent_main.py          # Main Python agent demo entry point
├── ingest_agent.py        # Ingestion logic
├── analyst_agent.py       # Analysis logic
├── decision_agent.py      # Relevance scoring / decision logic
├── output_agent.py        # Output and memo generation
├── requirements.txt       # Python dependencies
└── README.md
```

## Architecture

The project follows a modular architecture:

### 1. Frontend
The `frontend/` directory contains the main web application. It is built with React, TypeScript, and Vite, and uses a modern SPA structure with `src/`, `public/`, `index.html`, TypeScript configs, and Vite configuration.

### 2. Backend
The `backend/` service is currently a lightweight FastAPI application. At the moment, it exposes a basic root route and is configured with permissive CORS, making it a starter API shell that can be extended with product-specific endpoints.

### 3. Extension
The `extension/` directory is a standalone browser-extension app with its own Vite-style structure, including `src/`, `public/`, `index.html`, `manifest.json`, and `vite.config.js`. It is intended to power stock-page analysis directly inside the browser.

### 4. Python Agent Layer
The root-level Python files represent an analysis pipeline. Based on the current structure, the flow appears to:
1. load configuration,
2. ingest data sources,
3. store ingested items,
4. score and rank them,
5. analyze the most relevant items,
6. generate a memo or summary output.

This suggests the repository is designed as a combined product + agent system rather than a single monolithic app.

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- ESLint
- Modern SPA folder structure

### Backend
- FastAPI
- Uvicorn
- CORS middleware

### Python / AI workflow
- Python
- requests
- feedparser
- PyYAML
- scikit-learn

### Extension
- Chrome Extension / Manifest V3
- Vite-based project structure
- Content/background-extension workflow

## How to Run

### 1. Frontend

```bash
cd frontend
npm install
npm run dev
```

Useful frontend scripts:

```bash
npm run build
npm run lint
npm run preview
```

### 2. Backend

```bash
cd backend
uvicorn main:app --reload
```

Backend status route:

```http
GET /
```

Expected response:

```json
{ "status": "API running" }
```

### 3. Python Agent Workflow

Install Python dependencies from the project root:

```bash
pip install -r requirements.txt
```

Run the main agent flow:

```bash
python agent_main.py
```

### 4. Browser Extension

To load the extension locally in Chrome:

1. Open `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `extension/` folder

If the built output is required instead of source, use the extension build directory if applicable.

## What the App Does

This project aims to make financial analysis more explainable by combining multiple signals into readable outputs.

### Portfolio Risk Manager
The portfolio side is intended to help users:
- evaluate portfolio risk,
- understand why a portfolio may be risky,
- connect risk scoring with underlying fundamentals and market/news context.

### Stock Insights Extension
The browser extension is intended to help users:
- detect stock-related pages,
- gather stock-specific signals,
- surface explainable summaries directly in the browsing experience.

### Agent Workflow
The Python analysis layer appears to support:
- data ingestion,
- memory/storage of incoming items,
- relevance scoring,
- deeper analysis,
- memo/report generation.

## Current State

This repository is best understood as a multi-part prototype / in-progress product system.

What is already clear from the codebase structure:
- The frontend is a real React + Vite application.
- The backend is initialized as a FastAPI service.
- The extension is structured as a standalone browser app.
- The Python layer models an agent-style workflow.

What still appears to be evolving:
- deeper backend business routes,
- full wiring between frontend, backend, and agents,
- more complete project-level documentation.

## Notes

- The `frontend/README.md` currently contains the default Vite starter documentation and should be replaced with project-specific documentation.
- The backend currently looks minimal, so avoid overstating production readiness unless additional routes and integrations are implemented.
- The repository is strongest when presented as an **end-to-end fintech AI system prototype** with separate UI, API, extension, and analysis layers.

## Future Improvements

Potential next steps for the project:
- Add real backend API routes for portfolio analysis and stock insights.
- Connect frontend actions directly to backend services.
- Integrate Python agent outputs into the API layer.
- Add environment variable documentation.
- Add screenshots, flow diagrams, and sample outputs.
- Remove generated or vendor directories from version control where appropriate.
- Replace template READMEs with product-specific documentation.

## License

Add your preferred license here.
