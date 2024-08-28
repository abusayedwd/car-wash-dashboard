import { Button, Form, Input, Upload } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import "react-phone-number-input/style.css";
import defaultUserImage from "../../../../public/image/randomuser.jpg";

const EditPersonalInfo = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState(defaultUserImage);

  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList[0]?.originFileObj) {
      const reader = new FileReader();
      reader.readAsDataURL(newFileList[0].originFileObj);
      reader.onload = () => setImageUrl(reader.result);
    }
  };
//  console.log("fileeeeeeeeeeeeeeeeeeeee", imageUrl);
 
  const handleUpdateProfile = async (values) => {
    console.log(values);
    
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", phoneNumber);
    if (fileList[0]?.originFileObj) {
      formData.append("image", fileList[0].originFileObj);
      // formData.append("image", imageUrl);
    }
    // console.log(formData);
    

    // try {
    //   const response = await baseURL.patch(`/user/update/${id}`, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       authentication: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   });
    //   if (response?.data?.statusCode === 200) {
    //     Swal.fire({
    //       position: "top-center",
    //       icon: "success",
    //       title: response.data.message,
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //     localStorage.setItem(
    //       "user-update",
    //       JSON.stringify(response?.data?.data?.attributes)
    //     );
    //     navigate("/", { replace: true });
    //     setTimeout(() => window.location.reload(), 1700);
    //   }
    // } catch (error) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Error...",
    //     text: error?.response?.data?.message,
    //     footer: '<a href="#">Why do I have this issue?</a>',
    //   });
    // }
  };

  return (
    <div className="font-[Aldrich]">
      <div
        onClick={() => navigate("/dashboard/personalinfo")}
        className="flex items-center cursor-pointer ml-6 mt-10 mb-16"
      >
        <MdOutlineKeyboardArrowLeft size={30} />
        <h1 className="text-xl font-medium ml-2">Edit Profile</h1>
      </div>

      <div className="mx-6 p-9 rounded-xl bg-white shadow-md">
        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleUpdateProfile}
        >
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex flex-col items-center w-full lg:w-1/3 border-dotted border">
              <div className="relative w-56 h-56 rounded-full flex justify-center items-center mt-5 bg-gray-50 border">
                <Upload
                  name="avatar"

                  showUploadList={false}
                  onChange={handleUploadChange}
                 
                >
                  <img
                    className="w-44 h-44 rounded-full"
                    src={imageUrl}
                    in
                    alt="Profile"
                  />
                  <Button
                    className="border-none text-md text-blue-500 absolute bottom-6 flex items-center"
                    icon={<LuImagePlus size={20} className="mr-2" />}
                  >
                    Change Picture
                  </Button>
                </Upload>

              </div>


              <div className="text-center mt-6">
                <p className="text-lg">{'admin'}</p>
                <h1 className="text-2xl font-medium">{"absayed"}</h1>
              </div>
            </div>

            <div className="flex-1 w-full lg:w-2/3">
              <div className="flex flex-col gap-6">
                <Form.Item
                  label={<span className="text-lg font-medium">Name</span>}
                  name="name"
                  rules={[{ required: true, message: "Please input your name!" }]}
                  initialValue={"absayed"}
                >
                  <Input
                    placeholder="Name"
                    className="p-4 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="text-lg font-medium">Email</span>}
                  name="email"
                  rules={[{ required: true, message: "Please input your email!" }]}
                  initialValue={"ab@gamil.com"}
                >
                  <Input
                    placeholder="Email"
                    className="p-4 rounded-lg border-gray-300 bg-gray-100"
                   
                  />
                </Form.Item>

                <div className="flex flex-col">
                  <label className="text-lg font-medium mb-2">Phone Number</label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    international
                    defaultCountry="Bangladesh"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    className="p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    style={{ height: '50px',  }}
                  />
                </div>
              </div>
            </div>
          </div>

          <Button
            htmlType="submit"
            className="w-full mt-12 h-14 !bg-[#69C0BE] !text-black rounded-lg text-lg font-medium"
          >
            Update Profile
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditPersonalInfo;
