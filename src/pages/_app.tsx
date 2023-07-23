import type { NextPage } from 'next';
import type { AppType, AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

import { trpc } from '~/utils/trpc';
import '~/styles/globals.css';
import { Session } from 'next-auth';

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps,
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

const MyApp = (({
  Component,
  pageProps: { ...pageProps },
}: AppPropsWithLayout<{ session: Session }>) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <SessionProvider session={pageProps.session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}) as AppType;

export default trpc.withTRPC(MyApp);
