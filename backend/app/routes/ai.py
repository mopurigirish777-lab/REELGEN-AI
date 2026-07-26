from fastapi import APIRouter

from app.schemas.ai import ScriptRequest
from app.services.ai_service import generate_script

router = APIRouter(
    prefix="/ai",
    tags=["AI"],
)


@router.post("/generate-script")
def generate(data: ScriptRequest):
    result = generate_script(data)

    return {
        "result": result
    }