from fastapi import HTTPException

from app.ai.gemini import client
from app.ai.prompts import create_script_prompt


def generate_script(data):
    try:
        prompt = create_script_prompt(
            data.topic,
            data.platform,
            data.duration,
            data.tone,
        )

        print("Prompt:", prompt)

        response = client.models.generate_content(
            model="gemini-3.6-flash",
            contents=prompt,
        )

        print(response)

        return response.text

    except Exception as e:
        print("AI ERROR:", e)
        raise HTTPException(status_code=500, detail=str(e))