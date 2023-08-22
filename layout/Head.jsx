// import packages below
import Head from 'next/head';

const NextHead = (props) => {
  const { title } = props;

  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      ></meta>
      <meta name='author' content='Almer Tampus' />
      <meta
        name='description'
        content='JavaScript Calculator built using React'
      />
      <meta
        name='keywords'
        content='HTML, CSS, JavaScript, React, Next.js, FreeCodeCamp'
      />
      <title>{title}</title>
    </Head>
  );
};

export default NextHead;
