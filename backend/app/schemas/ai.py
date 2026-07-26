from pydantic import BaseModel


class ScriptRequest(BaseModel):
    topic: str
    platform: str
    duration: str
    tone: str


class ScriptResponse(BaseModel):
    hook: str
    script: str
    caption: str
    hashtags: list[str]