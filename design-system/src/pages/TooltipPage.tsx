import React from "react";
import Tooltip from "../components/Tooltip/Tooltip";

const TooltipPage = () => (
  <div className="bg-white p-6 rounded-xl shadow text-secondary space-y-6">
    <h2 className="text-xl font-semibold">Tooltip Component</h2>
    <p className="text-gray-600">Hover over the button below to see the tooltip in action.</p>
    <Tooltip />
  </div>
);

export default TooltipPage;
