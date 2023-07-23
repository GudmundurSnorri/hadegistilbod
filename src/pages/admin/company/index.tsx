import { ReactElement } from 'react';
import { AdminLayout } from '~/Layouts/AdminLayout';
import TabsOverview from '~/components/tabs-overview/TabsOverview';
import { NextPageWithLayout } from '~/pages/_app';

const CompanyOverview: NextPageWithLayout = () => {
  return <TabsOverview />;
};

CompanyOverview.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default CompanyOverview;
