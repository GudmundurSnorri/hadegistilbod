'use client';
import Head from 'next/head';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { Box } from '~/styles';
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
        <Box>HELLO MOTO</Box>
        <main className="h-screen">{children}</main>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};
