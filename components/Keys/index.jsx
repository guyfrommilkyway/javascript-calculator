// import packages below
import { useContext } from 'react';

// import components below
import KeyPad from '@/components/KeyPad';

// import utils below
import { DisplayContext } from '@/store/display-context';

const Keys = () => {
  const { calculateHandler, addHandler, deleteHandler, clearHandler } =
    useContext(DisplayContext);

  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full'>
        <KeyPad id='clear' content='AC' clickHandler={clearHandler} />
        <KeyPad id='delete' content='DEL' clickHandler={deleteHandler} />
        <KeyPad
          id='percentage'
          content='%'
          clickHandler={() => addHandler('%')}
        />
        <KeyPad id='add' content='+' clickHandler={() => addHandler('+')} />
      </div>
      <div className='flex w-full'>
        <KeyPad id='seven' content='7' clickHandler={() => addHandler('7')} />
        <KeyPad id='eight' content='8' clickHandler={() => addHandler('8')} />
        <KeyPad id='nine' content='9' clickHandler={() => addHandler('9')} />
        <KeyPad
          id='subtract'
          content='-'
          clickHandler={() => addHandler('-')}
        />
      </div>
      <div className='flex w-full'>
        <KeyPad id='four' content='4' clickHandler={() => addHandler('4')} />
        <KeyPad id='five' content='5' clickHandler={() => addHandler('5')} />
        <KeyPad id='six' content='6' clickHandler={() => addHandler('6')} />
        <KeyPad
          id='multiply'
          content='*'
          clickHandler={() => addHandler('*')}
        />
      </div>
      <div className='flex w-full'>
        <KeyPad id='one' content='1' clickHandler={() => addHandler('1')} />
        <KeyPad id='two' content='2' clickHandler={() => addHandler('2')} />
        <KeyPad id='three' content='3' clickHandler={() => addHandler('3')} />
        <KeyPad id='divide' content='/' clickHandler={() => addHandler('/')} />
      </div>
      <div className='flex w-full'>
        <KeyPad id='' content='' />
        <KeyPad id='zero' content='0' clickHandler={() => addHandler('0')} />
        <KeyPad id='decimal' content='.' clickHandler={() => addHandler('.')} />
        <KeyPad id='equals' content='=' clickHandler={calculateHandler} />
      </div>
    </div>
  );
};

export default Keys;
