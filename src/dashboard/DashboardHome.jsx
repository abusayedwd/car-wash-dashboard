import React from 'react';
import Card from './Card';
import BarchartOne from './BarchartOne';
import ServiceRequestTable from './ServiceRequestTable';
 
 

const DashboardHome = () => {
    return (
        <div>
            <Card> </Card>
            <BarchartOne></BarchartOne>
            <ServiceRequestTable></ServiceRequestTable>
        </div>
    );
};

export default DashboardHome;