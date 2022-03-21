import '../styles/globals.css'

import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component }: AppProps) {
  return (
    <NextUIProvider>
      <Component />
    </NextUIProvider>
  );
}

export default MyApp
