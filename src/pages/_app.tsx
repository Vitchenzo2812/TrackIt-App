import { GlobalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const Modals = dynamic(async () => import('@/ui/shared/context/modals/index'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <div style={{ position: 'relative' }}>
        <Modals />
        <Component {...pageProps} />
      </div>
    </>
  );
}
