import React, { useState } from 'react'

type Tab = { id: string; label: string }
type TabsProps = {
  tabs: Tab[]
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [active, setActive] = useState(tabs[0].id)

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 font-medium ${
              active === tab.id
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-500 hover:text-primary'
            }`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-gray-700 dark:text-white">Selected tab: {active}</p>
      </div>
    </div>
  )
}
