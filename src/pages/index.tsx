import Box from '~/styles/Box';
import { NextPageWithLayout } from './_app';
import Link from 'next/link';
import { COLORS } from '~/styles/theme';

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
      <Box mt={4} px={5} backgroundColor={COLORS.PINKTHEME} height={99}>
        hæ
      </Box>
    </div>
  );
};

export default IndexPage;

/**
 * If you want to statically render this page
 * - Export `appRouter` & `createContext` from [trpc].ts
 * - Make the `opts` object optional on `createContext()`
 *
 * @link https://trpc.io/docs/ssg
 */
// export const getStaticProps = async (
//   context: GetStaticPropsContext<{ filter: string }>,
// ) => {
//   const ssg = createServerSideHelpers({
//     router: appRouter,
//     ctx: await createContext(),
//   });
//
//   await ssg.post.all.fetch();
//
//   return {
//     props: {
//       trpcState: ssg.dehydrate(),
//       filter: context.params?.filter ?? 'all',
//     },
//     revalidate: 1,
//   };
// };
