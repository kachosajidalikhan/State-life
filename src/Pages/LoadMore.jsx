import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import DashboardContent from '../components/DashoardContent';
import DashboardLoad from '../components/DashboardLoad';
import DashFooter from '../components/DashFooter';

const LoadMore = () => {
  return (
    <div className="flex ">


      <Sidebar />


      <div className="flex-1 flex flex-col ml-64">
  <DashboardHeader />
  <DashboardLoad />
</div>

    </div>
  );
};

export default LoadMore;
