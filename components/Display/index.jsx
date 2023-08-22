// import packages below
import { useContext } from 'react';

// import utils below
import { DisplayContext } from '@/store/display-context';

const Display = () => {
  const { display } = useContext(DisplayContext);

  return (
    <div
      className='flex justify-end items-end w-full h-36 p-4 bg-slate-700'
      id='display'
    >
      <span className='text-white text-4xl font-bold'>{display}</span>
    </div>
  );
};

export default Display;
