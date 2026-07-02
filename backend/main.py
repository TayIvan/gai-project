from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import logging
from dotenv import load_dotenv
import os

from src.api import chat, health, medical_kb
from src.llm.manager import LLMManager
from src.mcp.server import MCPServer
from src.ethics.guardrails import EthicsFilter

load_dotenv()

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

llm_manager = None
mcp_server = None
ethics_filter = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    global llm_manager, mcp_server, ethics_filter
    logger.info("🚀 Initializing GAI Avatar Backend...")
    llm_manager = LLMManager()
    mcp_server = MCPServer()
    ethics_filter = EthicsFilter()
    logger.info("✅ All services initialized")
    yield
    logger.info("🛑 Shutting down services...")
    await mcp_server.shutdown()

app = FastAPI(
    title="GAI Avatar API",
    description="General AI with Animated Visual Interface",
    version="0.1.0",
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("CORS_ORIGINS", "*").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api/v1", tags=["health"])
app.include_router(chat.router, prefix="/api/v1", tags=["chat"])
app.include_router(medical_kb.router, prefix="/api/v1", tags=["medical"])

@app.get("/")
async def root():
    return {
        "message": "Welcome to GAI Avatar API",
        "version": "0.1.0",
        "docs": "/docs"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
