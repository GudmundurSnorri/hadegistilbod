import NextError from 'next/error';
import { useRouter } from 'next/router';
import { AdminLayout } from '~/components/Layouts/AdminLayout';

import { NextPageWithLayout } from '~/pages/_app';
import { H1 } from '~/styles/Text';
import { trpc } from '~/utils/trpc';

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

  const { data } = postQuery;

  return (
    <AdminLayout>
      <H1 mt={2}> hæ </H1>
    </AdminLayout>
  );
};

export default PostViewPage;
