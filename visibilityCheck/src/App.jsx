import { useState } from 'react'

import './App.css'

function App() {
  const [isVisible, setIsVisibility] = useState(true);

  const toggleVisibility = () => {
    setIsVisibility(prev => !prev); // toggle the state
  }

  return (
    <>
      <div className='flex flex-col items-center gap-2'>

        {/* textarea */}
        <textarea 
        style={{display: isVisible ? 'block' : 'none'}}
        cols={25} rows={5}></textarea>

        {/* Button */}
        <button 
        onClick={toggleVisibility} 
        className='rounded-xl px-3 py-1 cursor-pointer hover:shadow-lg shadow-blue-400'>
          {isVisible ? 'Hide' : 'Show'} {/* dynamic text update */}
        </button>

        {/* Visibility Mode */}
        <div className='text-2xl font-bold'>Visibility: {isVisible.toString()}</div>
      </div>

    </>
  )
}

export default App
