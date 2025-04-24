import React from 'react'

export const TopNav: React.FC = () => {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between">
      <div className="font-bold">Logo</div>
      <div className="space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
      </div>
    </nav>
  )
}
