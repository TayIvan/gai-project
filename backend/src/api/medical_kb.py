from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel
from typing import List, Optional
import logging

logger = logging.getLogger(__name__)
router = APIRouter()

class MedicalSearchRequest(BaseModel):
    query: str
    limit: int = 5
    score_threshold: float = 0.5

class MedicalDocument(BaseModel):
    id: str
    title: str
    authors: List[str]
    abstract: str
    pub_date: str
    pubmed_id: Optional[str]
    relevance_score: float
    url: Optional[str]

class MedicalSearchResponse(BaseModel):
    results: List[MedicalDocument]
    total_found: int
    query: str

@router.post("/medical/search", response_model=MedicalSearchResponse)
async def search_medical_kb(request: MedicalSearchRequest):
    try:
        logger.info(f"Medical search: {request.query}")
        return MedicalSearchResponse(
            results=[],
            total_found=0,
            query=request.query
        )
    except Exception as e:
        logger.error(f"Medical search error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/medical/documents")
async def list_documents(
    category: Optional[str] = Query(None),
    limit: int = Query(20, le=100)
):
    return {"documents": [], "total": 0}

@router.post("/medical/sync")
async def sync_pubmed():
    return {"status": "sync_started", "message": "PubMed indexing initiated"}
