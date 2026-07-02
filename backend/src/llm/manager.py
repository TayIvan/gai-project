import logging

logger = logging.getLogger(__name__)

class LLMManager:
    def __init__(self):
        logger.info("Initializing LLM Manager")

    async def generate_response(self, message: str) -> str:
        try:
            return f"Echo: {message}"
        except Exception as e:
            logger.error(f"LLM error: {e}")
            raise

    def clear_memory(self):
        pass
