import Head from 'next/head';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import Box from '~/styles/Box';
import theme, { COLORS, SIZES } from '~/styles/theme';

type AdminLayoutProps = { children: ReactNode };

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Box display="flex" justifyContent="center" width="100%">
          <Box
            maxWidth={SIZES.MAX_WIDTH}
            width="100%"
            backgroundColor={COLORS.PINKTHEME}
            minHeight="100vh"
          >
            {children}
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};
