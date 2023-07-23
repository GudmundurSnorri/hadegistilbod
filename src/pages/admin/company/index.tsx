import { AdminLayout } from '~/Layouts/AdminLayout';
import TabsOverview from '~/components/tabs-overview/TabsOverview';
import { Box } from '~/styles';

const CompanyOverview = () => {
  return (
    <AdminLayout>
      <TabsOverview />
    </AdminLayout>
  );
};

export default CompanyOverview;
