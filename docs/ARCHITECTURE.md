# GAI Avatar - System Architecture

## Overview

Three-tier application:

```
┌─────────────────────┐
│  Frontend (React)   │ Port 3000
└──────────┬──────────┘
           │ HTTP/WebSocket
           ▼
┌─────────────────────┐
│  Backend (FastAPI)  │ Port 8000
└──────────┬──────────┘
           │
    ┌──────┼──────┬─────────┬──────────┐
    ▼      ▼      ▼         ▼          ▼
  Chroma Postgres PubMed OpenAI    Anthropic
```

## Frontend Stack

- **Framework**: React 18 with TypeScript
- **3D Rendering**: Three.js + React Three Fiber
- **State Management**: Zustand
- **Localization**: i18next
- **HTTP Client**: Axios

## Backend Stack

- **Framework**: FastAPI + Uvicorn
- **LLM Integration**: LangChain
- **Security**: JWT + Passlib
- **Database**: PostgreSQL
- **Vector DB**: Chroma
- **Medical Data**: PubMed API + BioPython

## Knowledge Base Stack

- **Vector Database**: Chroma (local, open-source)
- **Embeddings**: Sentence Transformers
- **Medical Source**: PubMed API (free)
- **Processing**: BioPython + Pandas

## Data Flow

### Chat Request

```
1. User input → Frontend
2. POST /api/v1/chat
3. Backend: Ethics filter → LLM → Response filter
4. Response → Frontend → TTS
```

### Medical Search

```
1. Medical query detected
2. Search Chroma vector DB
3. Retrieve relevant PubMed docs
4. RAG: Augment LLM prompt
5. Generate response with citations
```

## File Structure

```
gai-project/
├── frontend/           React SPA
├── backend/            FastAPI server
├── knowledge-base/     Medical DB indexer
└── docs/               Documentation
```

## Security Architecture

1. **API Layer**: JWT auth, rate limiting, CORS
2. **Data Layer**: Encrypted at rest, HTTPS/TLS
3. **Audit Layer**: Request logging, response filtering

## Deployment

- **Dev**: Docker Compose
- **Prod**: Cloud platforms (AWS, GCP, Azure)
