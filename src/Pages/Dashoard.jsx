import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import DashboardContent from '../components/DashoardContent';
import DashFooter from '../components/DashFooter';


const Dashboard = () => {
  return (

      <div className="flex">


<Sidebar />


<div className="flex-1 flex flex-col ml-64">
<DashboardHeader />
<DashboardContent />
</div>

</div>
   

  );
};

export default Dashboard;
