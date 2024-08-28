import otpImage from '../../public/image/otp.png';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import OTPInput from 'react-otp-input';

const VerifyOtp = () => {
    const [otp, setOtp] = useState('');
     const navigate = useNavigate()
    const sendOtp = () => {
        console.log("otp >>>>>>>>>", otp);

    navigate('/updatepassword')
    }

    return (
        <div className='w-full max-w-[1296px] shadow-xl mt-12 sm:mt-24 mx-auto rounded-[8px] p-4 sm:p-10'>
            <h1 className='text-slate-300 text-center text-2xl sm:text-4xl mb-6 sm:mb-8'>OTP</h1>
            <div className="flex flex-col sm:flex-row md:justify-around justify-between items-center gap-4 sm:gap-10">
                <div className='w-full sm:w-[480px] flex justify-center sm:justify-start'>
                    <img src={otpImage} alt="OTP Illustration" className='w-[200px] sm:w-[480px] h-auto' />
                </div>
                <div className='w-full sm:w-[494px] mt-4 sm:mt-0'>
                    <h1 className='text-[#222222] font-medium text-2xl sm:text-3xl'>Verify OTP</h1>
                    <p className='font-poppins text-[14px] sm:text-[16px] font-normal mt-2'>
                        We'll send a verification code to your email. Check your inbox and enter the code here.
                    </p>
                    <div className="py-4 sm:py-6">
                        <div className="flex justify-center sm:justify-start items-center gap-2 outline-none focus:border-blue-400 w-full">
                        <OTPInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                inputStyle={{
                                    height: "55px",
                                    width: "55px", // Default width for mobile
                                    background: "transparent",
                                    border: "1px solid green",

                                    borderRadius: '10px',
                                    marginRight: "8px",
                                    outline: "none",
                                    // Adjusting width for larger screens
                                    sm: {
                                        width: "80px" // Width for larger screens
                                    }
                                }}
                                renderSeparator={<span className="md:w-6"> </span>}
                                renderInput={(props) => <input {...props} className="sm:w-[60px]" />}
                            />
                        </div>
                        <div className='flex justify-between items-center mt-4 sm:mt-6'>
                            <small className='text-[14px] sm:text-[16px] font-normal'>Didn’t receive the code?</small>
                            <small className='text-[14px] sm:text-[16px] font-medium text-[#00BF63] cursor-pointer'>Resend</small>
                        </div>
                    </div>
                     
                        <button onClick={sendOtp} className="p-[12px] sm:p-[16px] rounded-[8px] mt-5 bg-[#69C0BE] w-full hover:bg-[#008f4f] transition duration-300">
                            Verify
                        </button>
                    
                </div>
            </div>
        </div>
    );
};

export default VerifyOtp;
