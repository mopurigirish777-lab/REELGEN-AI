import { Bell, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-slate-900 border-b border-slate-800 p-5">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>
        <p className="text-gray-400">
          Welcome to ReelGen AI
        </p>
      </div>

      <div className="flex items-center gap-6">
        <Bell className="text-white cursor-pointer" />
        <UserCircle
          className="text-violet-500 cursor-pointer"
          size={35}
        />
      </div>
    </div>
  );
}