import { Home, Layers, Tag ,Info} from "lucide-react";

const Sidebar = ({ setPage }: { setPage: (page: string) => void }) => {
  return (
    <aside className="w-64 bg-white shadow-md p-4 space-y-4">
      <h2 className="text-xl font-bold text-primary">Design System</h2>
      <nav className="space-y-2">
        <button onClick={() => setPage("home")} className="flex items-center gap-2 text-gray-700 hover:text-primary">
          <Home size={18} /> Home
        </button>
        <button onClick={() => setPage("accordion")} className="flex items-center gap-2 text-gray-700 hover:text-primary">
          <Layers size={18} /> Accordion
        </button>
        <button onClick={() => setPage("badge")} className="flex items-center gap-2 text-gray-700 hover:text-primary">
          <Tag size={18} /> Badge
        </button>
       
<button onClick={() => setPage("tooltip")} className="flex items-center gap-2 text-gray-700 hover:text-primary">
  <Info size={18} /> Tooltip
</button>

      </nav>
    </aside>
  );
};

export default Sidebar;
