import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons';
import { BiArrowBack } from 'react-icons/bi';
import { MdArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaCircleArrowLeft } from 'react-icons/fa6';

const AddManeger = () => {
  const onFinish = (values) => {
    console.log('Form values: ', values);
  };

  return (
    <div className='mt-6'>
      <Link to ='/dashboard/maneger' className="flex items-center gap-2">
      <FaCircleArrowLeft className=" text-[#69C0BE] w-8 h-8" />
        <p className=" font-semibold text-[30px]"> Add Manager</p>
      </Link>
        {/* <h1 className='text-[26px] font-normal mt-12 flex items-center'>
            <MdArrowBackIos />
            <p>  Add Manager</p>
     
        </h1> */}
        <div className='lg:w-[720px] bg-[#f6faf7] lg:h-[530px] lg:mt-12 lg:mx-auto border py-16 px-20 shadow-md rounded-md'>
        <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Name" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email!' },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      </Form.Item>

      <Form.Item>
      <Button
              type="primary"
              htmlType="submit"
             className="w-full mt-4 h-[36px] !bg-[#69C0BE] !text-black"
            >
              Add Maneger
            </Button>
      </Form.Item>
    </Form>
        </div>
          
    </div>
   
  );
};

export default AddManeger;
