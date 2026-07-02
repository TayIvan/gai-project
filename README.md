# GAI Avatar - General AI with Animated Visual Interface

A full-stack AI system featuring an animated, cartoonish avatar with voice I/O, multi-language support, and secure medical knowledge base integration.

## ✨ Features

- 🎨 **Animated 3D Avatar** - Cute, cartoonish face with expressions
- 🎤 **Voice I/O** - Speech recognition & text-to-speech in multiple languages
- 🌍 **Multi-Language Support** - English, Spanish, French, German, Chinese
- 🔒 **Secure & Ethical** - Built-in safety guardrails & code of ethics
- 📚 **Medical Knowledge Base** - PubMed integration with vector DB
- 🔌 **MCP Support** - Model Context Protocol for extensibility
- 🏥 **PubMed Search** - Indexed medical documents with semantic search

## 📋 Prerequisites

- Node.js 18+
- Python 3.10+
- Docker & Docker Compose (optional)
- OpenAI API Key (or compatible LLM)

## 🚀 Quick Start

### Local Development

```bash
# Clone & setup
git clone https://github.com/TayIvan/gai-project.git
cd gai-project

# Frontend
cd frontend
npm install
npm start

# Backend (new terminal)
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py

# Knowledge Base (new terminal)
cd knowledge-base
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python indexer/setup.py
```

### Docker (Recommended)

```bash
cp .env.example .env
# Edit .env with your API keys
docker-compose up
```

## 📁 Project Structure

```
gai-project/
├── frontend/                 # React + Three.js UI
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Avatar, Chat, Controls
│   │   ├── store/           # Zustand state
│   │   ├── styles/          # CSS modules
│   │   ├── i18n/            # Translations
│   │   └── App.tsx
│   ├── package.json
│   └── Dockerfile
│
├── backend/                  # FastAPI server
│   ├── src/
│   │   ├── api/             # REST endpoints
│   │   ├── llm/             # LLM integration
│   │   ├── mcp/             # MCP server
│   │   ├── ethics/          # Safety guardrails
│   │   └── security/        # Auth & security
│   ├── main.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── knowledge-base/           # Medical DB indexing
│   ├── indexer/
│   │   ├── pubmed_crawler.py
│   │   ├── vector_indexer.py
│   │   └── service.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── docs/                     # Documentation
│   ├── ARCHITECTURE.md
│   ├── ETHICS.md
│   └── SETUP.md
│
├── .env.example
├── docker-compose.yml
└── LICENSE
```

## 🔌 API Endpoints

### Chat
- `POST /api/v1/chat` - Send message to AI
- `GET /api/v1/conversations` - Get conversation history

### Medical Knowledge Base
- `POST /api/v1/medical/search` - Search medical documents
- `GET /api/v1/medical/documents` - List indexed documents
- `POST /api/v1/medical/sync` - Sync PubMed data

### Health
- `GET /api/v1/health` - API health check
- `GET /api/v1/status` - System status

## 🧠 LLM Integration

Supported models:
- OpenAI (GPT-4, GPT-3.5-Turbo)
- Anthropic Claude
- Local models via Ollama
- Custom LLM endpoints

## 🔐 Security

- JWT authentication
- CORS protection
- Rate limiting
- Content filtering
- Audit logging
- Encrypted data transmission

## 📚 Medical Knowledge Base

- **Source**: PubMed API (free)
- **Vector DB**: Chroma (local, open-source)
- **Embeddings**: Sentence Transformers
- **Search**: Semantic similarity matching
- **Citations**: Automatic PubMed links

## 🎯 Ethics & Safety

Built-in guardrails for:
- Content filtering
- Transparency about AI nature
- Medical disclaimers
- Data privacy (HIPAA considerations)
- User consent mechanisms

See [ETHICS.md](./docs/ETHICS.md) for details.

## 🛠️ Configuration

Create `.env` file:

```env
OPENAI_API_KEY=sk-...
JWT_SECRET=your-secret-key
PUBMED_EMAIL=your-email@example.com
CORS_ORIGINS=http://localhost:3000
```

See `.env.example` for all options.

## 📖 Documentation

- [Setup Guide](./docs/SETUP.md) - Detailed installation
- [Architecture](./docs/ARCHITECTURE.md) - System design
- [Ethics Framework](./docs/ETHICS.md) - Safety principles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT - See [LICENSE](./LICENSE) file

## 💬 Support

- 📖 [Issues](https://github.com/TayIvan/gai-project/issues)
- 💭 [Discussions](https://github.com/TayIvan/gai-project/discussions)
- 📧 Email: support@gai-avatar.dev

---

**Made with ❤️ by AI Engineers | Ethical AI by Design**
