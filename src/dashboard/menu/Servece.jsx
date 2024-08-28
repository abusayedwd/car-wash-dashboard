import { Button, Card, Input, Modal, Pagination, Upload, Form } from 'antd';
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import basic from '../../../public/image/basic.png'
import prem from '../../../public/image/premium.png'
import stand from '../../../public/image/standart.png'

const servicesData = [
    {
        id: 1,
        name: 'basic wash',
        image: prem,
         type: "offline"
    },
    {
        id: 2,
        name: 'Premium wash',
        image: basic,
        type: "online"
    },
    {
        id: 3,
        name: 'standard wash',
        image: stand,
         type: "online"
    }
];

const Servece = () => {
    const [services, setServices] = useState(servicesData);
    const [addServiceModalOpen, setAddServiceModalOpen] = useState(false);
    const [editServiceModalOpen, setEditServiceModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [file, setFile] = useState(null);

    const handleAddFinish = (values) => {
        console.log(values);
        
        const newService = {
            id: services.length + 1,
            ...values,
            image: file ? URL.createObjectURL(file) : '',
        };
        console.log(newService);
        
        setServices([...services, newService]);
        setAddServiceModalOpen(false);
    };

    const handleEditFinish = (values) => {
        console.log(values);
        
        const updatedService = {
            ...selectedService,
            ...values,
            image: file ? URL.createObjectURL(file) : selectedService.image,
        };
        const updatedServices = services.map(service =>
            service.id === selectedService.id ? updatedService : service
        );
        setServices(updatedServices);
        setEditServiceModalOpen(false);
    };

    const handleImageChange = (info) => {
        setFile(info.file.originFileObj);
        getBase64(info.file.originFileObj, (url) => setImageUrl(url));
    };

    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => callback(reader.result);
    };

    const handleEdit = (service) => {
        setSelectedService(service);
        setImageUrl(service.image);
        setFile(null); // Clear file if editing to ensure correct image handling
        setEditServiceModalOpen(true);
    };

    return (
        <div className='mt-6'>
            <div className="text-end">
                <button
                    onClick={() => {
                        setSelectedService(null); // Reset selected service for adding
                        setImageUrl(null); // Clear image preview
                        setFile(null); // Clear file input
                        setAddServiceModalOpen(true);
                    }}
                    className="text-[18px] font-normal px-4 py-2 rounded !text-black !bg-[#69C0BE]"
                >
                    +Add Service
                </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 sm:grid-cols-2 gap-2 mt-4">
                {servicesData.map((service) => (
                    <div key={service.id}>
                       <div
              className=""
              style={{ height: 330, width: 260 }}
              // cover={<img alt="service" className="h-52 w-40 image" src={baseUrl + service.image} />}
            >
             <div class="relative ">
    <img src= {service?.image}  class=" h-[300px] w-full object-cover opacity-70 rounded-2xl"/>
    <div class="absolute bottom-0 rounded-b-md left-0 right-0 bg-green-100 bg-opacity-60 p-2 text-black">
        <h3 class="text-lg ml-2 font-medium text-[#414141]">{service?.name}</h3>
        <p class="text-sm ml-2 font-medium">${service?.price}</p>
    </div>
</div>
             
              <div className="flex justify-between mt-4 items-center">
                <button  className="font-normal text-[18px] rounded px-4 border border-[#69C0BE]">
                  Delete
                </button>
                <button
                //   onClick={() => navigate(`/dashboard/service/editservice/${service?._id}`)}
                onClick={() => handleEdit(service)}
                  className="bg-[#69C0BE] font-normal text-[18px] px-6 text-white rounded"
                >
                  Edit
                </button>
              </div>
            </div>
                    </div>
                ))}
            </div>

             

            {/* Add Service Modal */}
            <Modal
                open={addServiceModalOpen}
                onOk={() => setAddServiceModalOpen(false)}
                onCancel={() => setAddServiceModalOpen(false)}
                footer={null}
                closeIcon={true}
            >
                <div style={{ maxWidth: 400, margin: '0 auto' }}>
                    <h2>Add New Service</h2>
                    <Form
                        layout="vertical"
                        onFinish={handleAddFinish}
                        initialValues={{
                            serviceName: '',
                            serviceType: '',
                        }}
                    >
                        <Form.Item
                            label="Service Name"
                            name="serviceName"
                            rules={[{ required: true, message: 'Please enter service name' }]}
                        >
                            <Input placeholder="Enter Service name" />
                        </Form.Item>

                        <Form.Item
                            label="Service Type"
                            name="serviceType"
                            rules={[{ required: true, message: 'Please enter service type' }]}
                        >
                            <Input placeholder="Enter Service type" />
                        </Form.Item>

                        <Form.Item
                            label="Upload Image"
                            name="image"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                            rules={[{ required: true, message: 'Please upload an image' }]}
                        >
                            <Upload
                                name="image"
                                listType="picture"
                                maxCount={1}
                                onChange={handleImageChange}
                                beforeUpload={() => false} // Prevent automatic upload
                            >
                                <Button icon={<UploadOutlined />}>Upload Image</Button>
                            </Upload>
                        </Form.Item>

                        {imageUrl && (
                            <Form.Item label="Preview">
                                <img src={imageUrl} alt="Image Preview" style={{ width: '100%' }} />
                            </Form.Item>
                        )}

                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '100%',color:'#000', backgroundColor: '#69C0BE', borderColor: '#69C0BE' }}>
                                Add Service
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>

            {/* Edit Service Modal */}
            <Modal
                open={editServiceModalOpen}
                onOk={() => setEditServiceModalOpen(false)}
                onCancel={() => setEditServiceModalOpen(false)}
                footer={null}
                closeIcon={true}
            >
                <div style={{ maxWidth: 400, margin: '0 auto' }}>
                    <h2>Edit Service</h2>
                    <Form
                        layout="vertical"
                        onFinish={handleEditFinish}
                        initialValues={{
                            serviceName: selectedService?.name || '',
                            serviceType: selectedService?.type || '',
                        }}
                    >
                        <Form.Item
                            label="Service Name"
                            name="serviceName"
                            rules={[{ required: true, message: 'Please enter service name' }]}
                        >
                            <Input placeholder="Enter Service name" />
                        </Form.Item>

                        <Form.Item
                            label="Service Type"
                            name="serviceType"
                            rules={[{ required: true, message: 'Please enter service type' }]}
                        >
                            <Input placeholder="Enter Service type" />
                        </Form.Item>

                        <Form.Item
                            label="Upload Image"
                            name="image"
                            valuePropName="fileList"
                            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                        >
                            <Upload
                                name="image"
                                listType="picture"
                                maxCount={1}
                                onChange={handleImageChange}
                                beforeUpload={() => false} // Prevent automatic upload
                            >
                                <Button icon={<UploadOutlined />}>Upload Image</Button>
                            </Upload>
                        </Form.Item> 
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{width: '100%',color:'#000', backgroundColor: '#69C0BE', borderColor: '#69C0BE' }}>
                                Save Changes
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    );
};

export default Servece;
