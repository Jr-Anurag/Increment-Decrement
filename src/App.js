import React, { useState} from 'react';
import './App.css';

function App() {
  const[count,setcount]=useState(0);

  function decreaseHandler()
  {
    setcount(count-1);
  }
  function increaseHandler()
  {
    setcount(count+1);
  }
  function resetHandler()
  {
    setcount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] bg-[#344151] flex justify-center items-center flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl" >
         Increment & Decrement
      </div>
      <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151] '>
        <button onClick={decreaseHandler} className='border-r-2 text-center w-20 text-5xl border-[#bfbfbf]'>   -   </button>
        <div className='font-bold gap-12 text-5xl'> {count}</div>
        <button onClick={increaseHandler} className='border-l-2 text-center w-20 text-5xl border-[#bfbfbf] '>   +  </button>
      </div>
      <button onClick={resetHandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg '>Reset</button>
    </div>
  );
}

export default App;
