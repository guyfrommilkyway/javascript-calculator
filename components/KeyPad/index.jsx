// import packages below
import { useContext } from 'react';

// import utils below
import { DisplayContext } from '@/store/display-context';

const KeyPad = (props) => {
  // destructure props
  const { id, content, clickHandler } = props;

  return (
    <button
      className='w-full h-20 font-xl text-white bg-slate-600 hover:bg-slate-500 hover:transition hover:ease-in-out'
      id={id}
      onClick={clickHandler}
    >
      {content}
    </button>
  );
};

export default KeyPad;
