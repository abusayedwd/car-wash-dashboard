import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from "@ant-design/icons";

const Settings = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const changePassword = (values) => {
    const { confirmPassword, ...ChangePassword } = values;
    console.log("Form values: ", ChangePassword);
  };

  return (
    <div className="mt-8 mx-6 ">
      <h1 className="font-semibold text-[30px]">Settings</h1>
      <div>
        <div onClick={openModal} className="mt-8 cursor-pointer flex justify-between border rounded border-[#00BF63] items-center w-full h-[75px]">
          <p className="text-[18px] ml-8 font-medium text-[#00BF63]">
            Change Password
          </p>
          <p  className="mr-8 bg-[#69C0BE] px-2 py-1 rounded cursor-pointer">
            <IoIosArrowForward />
          </p>
          </div>
          <Modal
            open={isModalOpen}
            onOk={() => setIsModalOpen(false)}
            onCancel={() => setIsModalOpen(false)}
            footer={[]}
          >
            <div className="mb-1 flex justify-center self-stretch">
              <div className="container-xs flex justify-center pl-14 pr-[36px]  md:p-5 md:px-5 sm:px-4">
                <div className="flex w-[90%] flex-col items-start gap-8 rounded-[16px] bg-foundation-floral_white-floral_white_500 py-[86px] lg:w-full lg:py-8 md:w-full md:p-2 sm:p-4">
                  <div className="flex flex-col !items-start gap-4">
                    <h1 level={1} className="md:text-[28px] sm:text-[22px]">
                      Change Password
                    </h1>
                    <p className="!text-foundation-black-black_400-1">
                      Enter your new password.
                    </p>
                  </div>
                  <Form
                    name="changePassword"
                    layout="vertical"
                    onFinish={changePassword}
                    className="w-full"
                  >
                    <Form.Item
                      name="oldPassword"
                      label="Old Password"
                      rules={[{ required: true, message: "Please enter your old password!" }]}
                    >
                      <Input.Password
                        style={{ padding: "10px", fontSize: "18px" }}
                        placeholder="Old Password"
                        prefix={<LockOutlined />}
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Form.Item>

                    <Form.Item
                      name="newPassword"
                      label="New Password"
                      rules={[{ required: true, message: "Please enter your new password!" }]}
                    >
                      <Input.Password
                        style={{ padding: "10px", fontSize: "18px" }}
                        placeholder="New Password"
                        prefix={<LockOutlined />}
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Form.Item>

                    <Form.Item
                      name="confirmPassword"
                      label="Confirm Password"
                      dependencies={["newPassword"]}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your new password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("newPassword") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error("The two passwords that you entered do not match!")
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password
                        style={{ padding: "10px", fontSize: "18px" }}
                        placeholder="Confirm Password"
                        prefix={<LockOutlined />}
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full py-5 rounded-md !text-black !bg-[#69C0BE] text-[16px]"
                      >
                        Change Password
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
       
            </div>
          </Modal>
      
        {/* Privacy policy */}
        <div onClick={() => navigate("/dashboard/settings/privacypolicy")} className="mt-8 cursor-pointer flex justify-between bg-[#F7F7F7] rounded items-center w-full h-[75px]">
          <p className="text-[18px] ml-8 font-medium">Privacy Policy</p>
          <Link to="/dashboard/settings/privacypolicy" className="mr-8 bg-[#69C0BE] px-2 py-1 rounded cursor-pointer">
            <IoIosArrowForward />
          </Link>
        </div>
        <div onClick={() => navigate("/dashboard/settings/termcondition")} className="mt-8 flex justify-between cursor-pointer bg-[#F7F7F7] rounded items-center w-full h-[75px]">
          <p className="text-[18px] ml-8 font-medium">Terms and Condition</p>
          <Link to="/dashboard/settings/termcondition" className="mr-8 bg-[#69C0BE] px-2 py-1 rounded cursor-pointer">
            <IoIosArrowForward />
          </Link>
        </div>
        <div onClick={() => navigate("/dashboard/settings/about")} className="mt-8 cursor-pointer flex justify-between bg-[#F7F7F7] rounded items-center w-full h-[75px]">
          <p className="text-[18px] ml-8 font-medium">About Us</p>
          <Link to="/dashboard/settings/about" className="mr-8 bg-[#69C0BE] px-2 py-1 rounded cursor-pointer">
            <IoIosArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
