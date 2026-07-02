from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
import logging

logger = logging.getLogger(__name__)
router = APIRouter()

class ChatRequest(BaseModel):
    message: str
    conversation_id: Optional[str] = None
    language: str = "en"

class ChatResponse(BaseModel):
    response: str
    conversation_id: str
    language: str

@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        logger.info(f"Received message: {request.message}")
        return ChatResponse(
            response="Thank you for your message! This is a placeholder response.",
            conversation_id=request.conversation_id or "conv-001",
            language=request.language
        )
    except Exception as e:
        logger.error(f"Chat error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/conversations")
async def list_conversations():
    return {"conversations": []}
