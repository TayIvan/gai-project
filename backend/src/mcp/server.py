import logging
from typing import Dict, Any

logger = logging.getLogger(__name__)

class MCPServer:
    def __init__(self):
        self.tools = {}
        logger.info("MCP Server initialized")

    def register_tool(self, name: str, tool_func):
        self.tools[name] = tool_func
        logger.info(f"Registered tool: {name}")

    async def execute_tool(self, tool_name: str, params: Dict[str, Any]):
        if tool_name not in self.tools:
            raise ValueError(f"Tool {tool_name} not found")
        return await self.tools[tool_name](**params)

    async def shutdown(self):
        logger.info("MCP Server shutdown")
