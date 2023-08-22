// import utils below
import { DisplayContextProvider } from '@/store/display-context';

// import assets below
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <DisplayContextProvider>
      <Component {...pageProps} />
    </DisplayContextProvider>
  );
}
