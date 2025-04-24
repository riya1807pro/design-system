import { useState } from "react";
import "./App.css";
import "./index.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./components/Home";
import  Badge  from "./components/Badge/Badge"
import Accordion from "./components/Accordion";
import TooltipPage from "./pages/TooltipPage";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "accordion": return <Accordion />;
      case "badge": return <Badge label="Default Label" />;
      case "tooltip": return <TooltipPage />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex h-screen bg-surface text-gray-900">
      <Sidebar setPage={setPage} />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-6 overflow-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;