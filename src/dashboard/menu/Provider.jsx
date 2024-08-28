import { Input, Modal, Space, Table } from "antd";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import users from '../../../public/image/users.jpg'
import '../serviceTable.css'
 
const { Search } = Input;
 
const dataSource = [
    {
      key: '1',
      
      customerName: 'Bashar Islam',
      email: 'abc@email.com',
      address: 'Dhaka Bangladesh',
      date: '16 Apr 2024',
      phone:'4536656'
    },
    {
      key: '2',
      applicationId: '12345678',
      customerName: 'Bashar Islam',
      email: 'abc@email.com',
      address: 'Dhaka Bangladesh',
      date: '16 Apr 2024',
      phone:'4536656'
    },
    {
      key: '3',
      applicationId: '12345678',
      customerName: 'Bashar Islam',
      email: 'abc@email.com',
      address: 'Dhaka Bangladesh',
      date: '16 Apr 2024',
      phone:'4536656'
    },
]
const Provider = () => {
 
    const [isModalOpen, setIsModalOpen] = useState(false);

 
// const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
 
  const columns = [
    {
      title: "#SI",
      dataIndex: "si",
      key: "si",
      render: (text,_,index) => index + 1,
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <img
            className="w-[34px] h-[34px] rounded-full"
            src={users}
            alt=""
          />
          <p className="font-medium">Absayed</p>
        </div>
      ),
    },
   
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, record) => (
        <p>{(record?.email) ?  record?.email : "Apple Or Facebook User"}</p>
      )
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
      render: (_, record) => (
        // <p>{record?.createdAt?.split("T")[0] ? record?.createdAt?.split("T")[0] : "N/A"}</p>
        <p>34/04/24</p>
      )
    },
    
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
         
            <BsInfoCircle  onClick={() => handleView(record)}  size={18} className="text-[red] cursor-pointer" />
          
          {/* <a><RxCross2 size={18} className='text-[red]'/></a> */}
        </Space>
      ),
    },
  ];
  
  const handleView = () => {
    // setUser(value);
    // console.log(value)
    setIsModalOpen(true);
  };
//   const onChange = (date, dateString) => {
//     console.log(date, dateString);
//   };
//   console.log(user);
//   const handleChangePage = (page) => {
//     setCurrentPage(page);
//     console.log(page);
//   };
const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className="">
       
      <div className="rounded-t-lg mt-[24px]">
        <div className="flex py-[22px] justify-between items-center">
          <p className=" text-[24px]">Provider List</p>
          <Search style={{
            width:"200px"
          }} placeholder="input search text" onSearch={onSearch} enterButton />
        </div>
        <Table
        //   pagination={{
        //     position: ["bottomCenter"],
        //     current: currentPage,
        //       pageSize:10,
        //       total:usersAll?.pagination?.totalUsers,
        //       showSizeChanger: false,
        //       onChange: handleChangePage,
        //   }}
          columns={columns}
          dataSource={dataSource}
        />
      </div>
      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
        closeIcon
      >
      <div>
        <div style={{fontFamily:'Aldrich'}} className="flex justify-center items-center gap-2 flex-col border-b border-b-gray-300">
          <img className="w-[140px] h-[140px] rounded-full my-4"   src={users} alt="" />
          <p className="text-[16px] mb-[16px]">absayed</p>
        </div>
        <div style={{fontFamily:'Aldrich'}} className="p-[20px]">
        <div className="flex justify-between border-b py-[16px]">
            <p>Full Name:</p>
            <p>
              {/* {user?.name ? user?.name : "N/A"} */}
              absayed
            </p>
          </div>
        
         
          <div className="flex justify-between border-b py-[16px] ">
            <p>Email:</p>
            <p>
              {/* {user?.email ? user?.email : "N/A"} */}
              ab@gmail.com
            </p>
          </div>
          <div className="flex justify-between border-b py-[16px]">
            <p>Phone:</p>
            <p>
              {/* {user?.phone ? user?.phone : "N/A"} */}
              +45269875
            </p>
          </div>
          <div className="flex justify-between border-b py-[16px]">
            <p>Date:</p>
            <p>
              {/* {user?.createdAt  ? user?.createdAt?.split("T")[0] : "N/A"} */}
              23-11-24
            </p>
          </div>
          <div className="flex justify-between items-center pt-[16px]">
            <p>address:</p>
            <p className="px-[15px] py-[10px] rounded-lg">
              {/* Regular P550 */}
              UK
            </p>
          </div>

        </div>
      </div>
      </Modal>
    </div>
  );
};

export default Provider;
