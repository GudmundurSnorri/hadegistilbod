'use client';
import Head from 'next/head';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '~/styles/theme';
import StyledComponentsRegistry from '~/utils/registry';

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <StyledComponentsRegistry>
      <Head>
        <title>Hádegistilboð</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <main className="h-screen">{children}</main>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};
