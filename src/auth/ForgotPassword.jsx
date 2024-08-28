import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import character from "../../public/image/forgotpass.png";
import { HiOutlineMailOpen } from "react-icons/hi";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleForgotPassword = (values) => {
    console.log("Received values:", values);
    console.log('hit >>>>>>>>>>>>>>>>');

    // Handle form submission here
    navigate("/verifyotp");
  };

  return (
    <div className="mt-20 shadow-xl w-[90%] md:w-[1196px] mx-auto bg-white rounded-lg">
      <h1 className="text-slate-300 text-center md:text-left mt-4 md:mt-8">
        Forgot Password
      </h1>
      <div className="flex flex-col md:flex-row justify-around gap-4 px-6 md:px-10 py-8 md:py-4">
        
        {/* Image Section */}
        <div className="hidden md:block mt-4 md:mt-[200px] w-full md:w-[490px] h-[300px] md:h-[460px] mx-auto md:mx-0">
          <img src={character} alt="Forgot Password" className="w-full h-full object-cover" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-[494px] mt-8 md:mt-[250px] mx-auto md:mx-0">
          <h1 className="text-[#222222] font-medium text-xl md:text-2xl">
            Forgot Password!
          </h1>
          <p className="font-poppins text-[14px] md:text-[16px] font-normal mt-2">
            Enter the email address associated with your account. We'll send
            you an OTP to your email.
          </p>

          <Form
            name="forgot_password"
            layout="vertical"
            onFinish={handleForgotPassword}
            className="mt-5"
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

            <Form.Item>
              <Button 
                type="primary"
                htmlType="submit"
                className="w-full h-[56px] !bg-[#69C0BE] !text-black"
              >
                Send OTP
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
