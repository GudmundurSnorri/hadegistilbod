import NextError from 'next/error';
import { useRouter } from 'next/router';

import { NextPageWithLayout } from '~/pages/_app';
import { RouterOutput, trpc } from '~/utils/trpc';

type PostByIdOutput = RouterOutput['resturant']['byId'];

const PostViewPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const id = query.id ? +query.id : undefined;
  const postQuery = trpc.resturant.byId.useQuery({ id: id ?? 0 });

  if (postQuery?.error) {
    return (
      <NextError
        title={postQuery.error.message}
        statusCode={postQuery.error.data?.httpStatus ?? 500}
      />
    );
  }

  if (postQuery.status !== 'success') {
    return (
      <div className="flex flex-col justify-center h-full px-8 ">
        <div className="w-full bg-zinc-900/70 rounded-md h-10 animate-pulse mb-2"></div>
        <div className="w-2/6 bg-zinc-900/70 rounded-md h-5 animate-pulse mb-8"></div>

        <div className="w-full bg-zinc-900/70 rounded-md h-40 animate-pulse"></div>
      </div>
    );
  }
  const { data } = postQuery;
  console.log(data);
  return <div>hello</div>;
};

export default PostViewPage;
