import { Button, Checkbox, Form, Input } from "antd";
import signin from "../../public/image/signin.png";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiLock } from "react-icons/bi";
import { Link } from "react-router-dom";

const Signin = () => {
  const onFinish = async (values) => {
    console.log(values);
  };

  return (
    <div className="mt-12 h-auto md:h-[780px] shadow-xl w-[90%] md:w-[1196px] mx-auto bg-white rounded-[8px]">
      <h1 className="text-slate-300 mt-4 md:mt-8">Signin page</h1>
      <div className="flex flex-col-reverse md:flex-row justify-around gap-4 px-6 md:px-10 mt-8 md:mt-12 py-4">
        <div className="h-[200px] hidden md:block md:h-[488px] mt-4 md:mt-[100px]">
          <img src={signin} alt="Signin" className="w-full h-full object-cover" />
        </div>
        <div className="mt-[20px] md:w-1/2">
          <h1 className="mt-4 md:mt-7 text-left text-[#222222] font-medium text-xl md:text-2xl">
            Hello, Welcome!
          </h1>
          <p className="font-poppins text-left w-full text-[14px] md:text-[16px] font-normal mt-2">
            Please Enter Your Details Below to Continue
          </p>
          <Form
            name="normal_login"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
  name="email"
  label={<span className="text-[16px] mt-5 font-medium">Email</span>}
  rules={[
    {
      required: true,
      message: "Please input your email!",
    },
    {
      type: 'email',
      message: 'Please enter a valid email address!',
    },
    {
      pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
      message: 'Please enter a Gmail address!',
    },
  ]}
>
  <Input
    size="large"
    placeholder="Enter Your Email"
    name="email"
    prefix={
      <HiOutlineMailOpen
        className="mr-2 bg-white text-black rounded-full p-[6px]"
        size={28}
        color="red"
      />
    }
    style={{
      height: "52px",
      background: "#E6F9EF",
      outline: "none",
      marginBottom: "20px",
      border: '1px solid green'
    }}
  />
</Form.Item>
 

            <Form.Item
              name="password"
              label={<span className="text-[16px] font-medium">Password</span>}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Enter Your Password"
                name="current_password"
                prefix={
                  <BiLock
                    className="mr-2 bg-white rounded-full p-[6px]"
                    size={28}
                    color="red"
                  />
                }
                style={{
                  background: "#E6F9EF",
                  height: "52px",
                  outline: "none",
                  marginBottom: "20px",
                  border:'1px solid green'
                }}
                bordered={false}
              />
            </Form.Item>

            <div className="mb-4 flex justify-between items-center">
              <Checkbox className="text-black">Remember me</Checkbox>
              <Link to = "/forgotpassword">
              
              <p className="cursor-pointer text-[14px] font-medium text-[#00BF63]">
                Forgot password?
              </p>
              </Link>
            </div>

            <Form.Item>
              <Button
                htmlType="submit"
                className="block w-full h-[52px] px-2 py-4 mt-2 !text-black !bg-[#69C0BE]"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
