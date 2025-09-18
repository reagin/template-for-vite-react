import { useState } from 'react';

import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-6 text-center'>
      <div className='flex gap-8'>
        <a href='https://vite.dev' rel='noreferrer noopener' target='_blank'>
          <img alt='Vite logo'className='h-28 w-28 transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]'src={viteLogo} />
        </a>
        <a href='https://react.dev' rel='noreferrer noopener' target='_blank'>
          <img alt='React logo'className='h-28 w-28 transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-[spin_20s_linear_infinite]'src={reactLogo} />
        </a>
      </div>
      <h1 className='text-5xl font-bold'>Vite + React</h1>
      <div className='p-8'>
        <button className='cursor-pointer rounded border border-transparent bg-gray-100 px-4 py-2 transition duration-200 hover:border-purple-400' onClick={() => setCount(count => count + 1)} type='button'>
          {`count is ${count}`}
        </button>
        <p className='mt-4 font-light'>
          Edit
          <span className='px-1 text-sm text-gray-600'>src/App.tsx</span>
          and save to test HMR
        </p>
      </div>
      <p className='text-gray-400'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
