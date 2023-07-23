import React from 'react'
import { AdminLayout } from "~/Layouts/AdminLayout";
import TabsOverview from "~/components/tabs-overview/TabsOverview";

const Dashboard = () => {
  return (
    <AdminLayout>
      <TabsOverview />
    </AdminLayout>
  );
};

export default Dashboard;