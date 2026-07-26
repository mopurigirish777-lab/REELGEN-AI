import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
export default function DashboardLayout({ children }) {
  return (
    <div className="bg-slate-950 min-h-screen flex">
      <Sidebar />

      <div className="ml-64 flex-1">
        <Navbar />

        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}