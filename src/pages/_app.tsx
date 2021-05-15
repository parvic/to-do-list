import { AppProps } from 'next/app';

import Global from '../../styles/global';
import { TaskProvider } from '../context/TaskContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TaskProvider>
      <>
        <Global />
        <Component {...pageProps} />
      </>
    </TaskProvider>
  );
}

export default MyApp;
