// import components below
import NextHead from '@/layout/Head';
import Display from '@/components/Display';
import Keys from '@/components/Keys';

const HomePage = () => {
  return (
    <>
      <NextHead title='JavaScript Calculator' />
      <div id='calculator'>
        <Display />
        <Keys />
      </div>
    </>
  );
};

export default HomePage;
