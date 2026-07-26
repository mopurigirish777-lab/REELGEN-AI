import {
  LayoutDashboard,
  FileText,
  Hash,
  Video,
  History,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, title: "Dashboard" },
  { icon: FileText, title: "Script Generator" },
  { icon: Hash, title: "Hashtag Generator" },
  { icon: Video, title: "Caption Generator" },
  { icon: History, title: "History" },
  { icon: Settings, title: "Settings" },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 border-r border-slate-800 text-white fixed">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-violet-500">
          ReelGen AI
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          AI Content Studio
        </p>
      </div>

      <div className="mt-6">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className="flex items-center gap-4 w-full px-6 py-4 hover:bg-slate-800 transition-all duration-300"
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}