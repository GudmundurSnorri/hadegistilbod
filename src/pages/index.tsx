import Box from '~/styles/Box';
import { NextPageWithLayout } from './_app';
import Link from 'next/link';
import { COLORS } from '~/styles/theme';
import { ReactElement } from 'react';
import { DefaultLayout } from '~/Layouts/DefaultLayout';

const IndexPage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col bg-gray-800 py-8">
      <h1 className="text-4xl font-bold">
        Welcome to your tRPC with Prisma starter!
      </h1>
      <p className="text-gray-400">
        If you get stuck, check{' '}
        <Link className="underline" href="https://trpc.io">
          the docs
        </Link>
        , write a message in our{' '}
        <Link className="underline" href="https://trpc.io/discord">
          Discord-channel
        </Link>
        , or write a message in{' '}
        <Link
          className="underline"
          href="https://github.com/trpc/trpc/discussions"
        >
          GitHub Discussions
        </Link>
        .
      </p>
      <Box mt={4} px={5} backgroundColor={COLORS.PINK} height={99}>
        hæ
      </Box>
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      <IndexPage>{page}</IndexPage>
    </DefaultLayout>
  );
};
