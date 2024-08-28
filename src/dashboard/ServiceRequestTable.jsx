import React from 'react';
import { Table } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import './ServiceTable.css'; // Importing custom CSS
import { BsInfoCircle } from 'react-icons/bs';

const dataSource = [
  {
    key: '1',
    applicationId: '12345678',
    customerName: 'Bashar Islam',
    email: 'abc@email.com',
    address: 'Dhaka Bangladesh',
    date: '16 Apr 2024',
  },
  {
    key: '2',
    applicationId: '12345678',
    customerName: 'Bashar Islam',
    email: 'abc@email.com',
    address: 'Dhaka Bangladesh',
    date: '16 Apr 2024',
  },
  {
    key: '3',
    applicationId: '12345678',
    customerName: 'Bashar Islam',
    email: 'abc@email.com',
    address: 'Dhaka Bangladesh',
    date: '16 Apr 2024',
  },
  {
    key: '4',
    applicationId: '12345678',
    customerName: 'Bashar Islam',
    email: 'abc@email.com',
    address: 'Dhaka Bangladesh',
    date: '16 Apr 2024',
  },
  {
    key: '5',
    applicationId: '12345678',
    customerName: 'Bashar Islam',
    email: 'abc@email.com',
    address: 'Dhaka Bangladesh',
    date: '16 Apr 2024',
  },
];

const columns = [
  {
    title: '#Application ID',
    dataIndex: 'applicationId',
    key: 'applicationId',
  },
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <BsInfoCircle style={{ fontSize: '18px', color: '#000' }} />
    ),
  },
];

const ServiceRequestTable = () => {
  return (
    <div className="table-container">
        <h1 className='text-[16px] font-medium'>Recent Service Requests</h1>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered
      />
    </div>
  );
};

export default ServiceRequestTable;
