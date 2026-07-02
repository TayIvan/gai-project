import logging
from enum import Enum

logger = logging.getLogger(__name__)

class SafetyLevel(Enum):
    SAFE = "safe"
    WARNING = "warning"
    BLOCKED = "blocked"

class EthicsFilter:
    def __init__(self):
        self.warning_keywords = ["self-harm", "violence", "illegal"]
        self.blocked_keywords = ["terrorism"]

    def check_safety(self, text: str):
        text_lower = text.lower()
        for blocked_keyword in self.blocked_keywords:
            if blocked_keyword in text_lower:
                return SafetyLevel.BLOCKED, "This content cannot be processed"
        return SafetyLevel.SAFE, ""

    def filter_response(self, response: str) -> str:
        return response
