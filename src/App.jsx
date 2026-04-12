import React from 'react'
export default function App() {
  // BROKEN STATE: Invalid negative z-index hides content behind background
  return (
    <div className="absolute inset-0 bg-black flex flex-col items-center justify-center w-full h-full p-4 overflow-hidden z-10 opacity-90 transition-all duration-300">
      <h1 className="text-5xl font-bold uppercase drop-shadow-lg tracking-widest text-center">Alamar</h1>
    </div>
  )
}
