from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.models.user import User

from app.routes.auth import router as auth_router
from app.routes.ai import router as ai_router

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="ReelGen AI API",
    version="1.0.0"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth_router)
app.include_router(ai_router)

@app.get("/")
def home():
    return {
        "message": "Welcome to ReelGen AI 🚀"
    }