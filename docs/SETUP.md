# Setup Guide

## Prerequisites

- Node.js 18+
- Python 3.10+
- Docker & Docker Compose (optional)
- Git

## Local Development Setup

### 1. Clone Repository

```bash
git clone https://github.com/TayIvan/gai-project.git
cd gai-project
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs at http://localhost:3000

### 3. Backend Setup

```bash
cd ../backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

Backend runs at http://localhost:8000
API docs at http://localhost:8000/docs

### 4. Knowledge Base Setup

```bash
cd ../knowledge-base
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python indexer/setup.py
```

## Docker Setup

```bash
cp .env.example .env
# Edit .env with your API keys
docker-compose up
```

Services:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- Chroma Vector DB: http://localhost:8001

## Verification

### Backend Health

```bash
curl http://localhost:8000/api/v1/health
```

### Chat Endpoint

```bash
curl -X POST http://localhost:8000/api/v1/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}'
```

## Troubleshooting

### Port Already in Use

```bash
lsof -i :3000  # Find process
kill -9 <PID>  # Kill it
```

### npm Install Issues

```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Python Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```
