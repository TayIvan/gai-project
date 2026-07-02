import logging
from typing import List, Dict, Any

logger = logging.getLogger(__name__)

class PubMedCrawler:
    def __init__(self):
        logger.info("PubMed crawler initialized")

    async def search(self, query: str, limit: int = 100) -> List[Dict[str, Any]]:
        try:
            logger.info(f"Searching PubMed for: {query}")
            return []
        except Exception as e:
            logger.error(f"PubMed search error: {e}")
            return []
