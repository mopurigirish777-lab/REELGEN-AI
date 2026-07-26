import { useState } from "react";
import api from "../services/api";
import ResultCard from "../components/ResultCard";
import LoadingAnimation from "../components/LoadingAnimation";

function GenerateScript() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
const sections = {
  hook: "",
  script: "",
  caption: "",
  hashtags: "",
};

if (result) {
  const hookMatch = result.match(/Hook:\s*([\s\S]*?)Script:/);
  const scriptMatch = result.match(/Script:\s*([\s\S]*?)Caption:/);
  const captionMatch = result.match(/Caption:\s*([\s\S]*?)Hashtags:/);
  const hashtagMatch = result.match(/Hashtags:\s*([\s\S]*)/);

  sections.hook = hookMatch ? hookMatch[1].trim() : "";
  sections.script = scriptMatch ? scriptMatch[1].trim() : "";
  sections.caption = captionMatch ? captionMatch[1].trim() : "";
  sections.hashtags = hashtagMatch ? hashtagMatch[1].trim() : "";
}

  const generate = async () => {
    setLoading(true);

try {
    const res = await api.post("/ai/generate-script", {
        topic,
        platform: "Instagram Reels",
        duration: "30 seconds",
        tone: "Motivational",
    });

    setResult(res.data.result);

} catch (err) {

    console.log("Full Error:", err);

    if (err.response) {
        console.log("Status:", err.response.status);
        console.log("Data:", err.response.data);
        alert(JSON.stringify(err.response.data));
    } else if (err.request) {
        alert("Cannot connect to backend.");
    } else {
        alert(err.message);
    }

} finally {
    setLoading(false);
}
  };

 return (
  <div className="max-w-6xl mx-auto">

    {/* Header */}

    <div className="mb-8">
      <h1 className="text-4xl font-bold text-white">
        AI Reel Script Generator
      </h1>

      <p className="text-gray-400 mt-2">
        Generate viral Instagram, YouTube Shorts and TikTok scripts in seconds.
      </p>
    </div>


    {/* Input Card */}

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

      <label className="text-gray-300 font-semibold">
        Reel Topic
      </label>

      <input
        type="text"
        placeholder="Example: AI Tools Every Student Should Use"
        value={topic}
        onChange={(e)=>setTopic(e.target.value)}
        className="
          mt-3
          w-full
          bg-slate-950
          border
          border-slate-700
          rounded-xl
          p-4
          text-white
          outline-none
          focus:border-violet-500
        "
      />

      <button
        onClick={generate}
        className="
          mt-6
          w-full
          bg-violet-600
          hover:bg-violet-700
          transition
          rounded-xl
          py-4
          text-white
          font-bold
        "
      >
        {loading ? "Generating..." : "🚀 Generate Script"}
      </button>

    </div>


    {/* Empty State */}

    {!result && (

      <div className="mt-10">

        <div className="bg-slate-900 rounded-xl border border-slate-800 p-12 text-center">

          <h2 className="text-2xl text-white font-bold">
            Ready to Create Viral Content?
          </h2>

          <p className="text-gray-400 mt-3">
            Enter any topic and ReelGen AI will generate:
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-8">

            <div className="bg-slate-950 rounded-xl p-5">
              🔥
              <h3 className="text-white mt-2 font-semibold">
                Hook
              </h3>
            </div>

            <div className="bg-slate-950 rounded-xl p-5">
              📝
              <h3 className="text-white mt-2 font-semibold">
                Script
              </h3>
            </div>

            <div className="bg-slate-950 rounded-xl p-5">
              📄
              <h3 className="text-white mt-2 font-semibold">
                Caption
              </h3>
            </div>

            <div className="bg-slate-950 rounded-xl p-5">
              #
              <h3 className="text-white mt-2 font-semibold">
                Hashtags
              </h3>
            </div>

          </div>

        </div>

      </div>

    )}

{loading && <LoadingAnimation />}
    {/* Results */}

    {result && (

      <div className="space-y-6 mt-10">

        <ResultCard
          title="🔥 Hook"
          content={sections.hook}
        />

        <ResultCard
          title="📝 Script"
          content={sections.script}
        />

        <ResultCard
          title="📄 Caption"
          content={sections.caption}
        />

        <ResultCard
          title="#️⃣ Hashtags"
          content={sections.hashtags}
        />

      </div>

    )}

  </div>
);
}
export default GenerateScript;