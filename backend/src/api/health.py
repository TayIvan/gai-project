from fastapi import APIRouter
from datetime import datetime

router = APIRouter()

@router.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
        "service": "GAI Avatar API"
    }

@router.get("/status")
async def status():
    return {
        "api_version": "0.1.0",
        "features": [
            "chat",
            "medical_knowledge_base",
            "speech_recognition",
            "text_to_speech",
            "mcp_integration"
        ]
    }
