import { FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";

export default function ResultCard({ title, content }) {

  const copy = () => {
    navigator.clipboard.writeText(content);
    toast.success("Copied!");
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-bold text-violet-400">
          {title}
        </h2>

        <button
          onClick={copy}
          className="bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-lg text-white flex items-center gap-2"
        >
          <FaCopy />
          Copy
        </button>

      </div>

      <p className="whitespace-pre-wrap text-gray-300 leading-8">
        {content}
      </p>

    </div>
  );
}