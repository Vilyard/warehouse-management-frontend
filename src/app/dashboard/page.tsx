import React from 'react';
import { CustomDashboardContent } from '@/components/CustomDashboardContent';
import { DashboardLayout } from '@/components/DashboardLayout';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <CustomDashboardContent />
    </DashboardLayout>
  );
};

export default DashboardPage;
