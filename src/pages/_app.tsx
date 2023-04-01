import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  const getLayout = Component?.getLayout ?? ((page: any) => page);

  return typeof getLayout === 'function'
    ? getLayout(<Component {...pageProps} />)
    : <Component {...pageProps} />
}
