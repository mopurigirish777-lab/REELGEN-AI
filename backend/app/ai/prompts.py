def create_script_prompt(
    topic: str,
    platform: str,
    duration: str,
    tone: str,
):
    return f"""
You are an expert viral content creator.

Generate a {duration} reel script.

Topic:
{topic}

Platform:
{platform}

Tone:
{tone}

Return exactly in this format.

Hook:
...

Script:
...

Caption:
...

Hashtags:
#tag1
#tag2
#tag3
#tag4
#tag5
"""