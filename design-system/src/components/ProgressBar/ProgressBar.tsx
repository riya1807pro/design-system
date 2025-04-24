import React from 'react'

type ProgressBarProps = {
  value: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  const width = `${Math.min(100, Math.max(0, value))}%`
  return (
    <div className="w-full bg-gray-200 rounded h-4 overflow-hidden">
      <div className="bg-primary h-full transition-all" style={{ width }} />
    </div>
  )
}
