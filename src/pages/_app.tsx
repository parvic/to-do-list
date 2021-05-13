import { AppProps } from 'next/app';

import Global from '../../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Global />
    </>
  );
}

export default MyApp;
