import asyncio
import logging
from .pubmed_crawler import PubMedCrawler
from .vector_indexer import VectorIndexer

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

async def main():
    logger.info("🏥 Starting Medical Knowledge Base Setup...")
    indexer = VectorIndexer()
    pubmed = PubMedCrawler()
    logger.info("📚 Knowledge base setup complete!")

if __name__ == "__main__":
    asyncio.run(main())
