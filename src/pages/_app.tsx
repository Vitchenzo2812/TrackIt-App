import { GlobalStyles } from '@/styles/global';
import Modals from '@/ui/shared/context/modals';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Modals />
      <div style={{ position: 'relative' }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
