import React from 'react';
import { BiSolidUserPlus } from 'react-icons/bi';
import { CiBag1 } from 'react-icons/ci';
import { FaUsers } from 'react-icons/fa6';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';

const Card = () => {
    return (
        <div className=' mt-6'>
               <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-2 grid-cols-1 lg:gap-1 xl:gap-2 w-full">
        <div className="w-[320px] rounded h-[180px] flex justify-between items-center card bg-[#FFFFFF] shadow-xl">
          <div className="mx-6 h-16 w-16 rounded bg-[#00BF63] flex justify-center items-center">
            <HiOutlineCurrencyDollar className=" text-white w-12 h-12" />
          </div>
          <div className="mx-2 text-center">
            <p className="text-[18px] font-semibold text-[#494949] my-4">
              Total Earnings
            </p>
            <h1 className="text-[34px] font-medium">$570</h1>
          </div>
        </div>
        <div className="w-[320px] rounded h-[180px] flex justify-between items-center card bg-[#FFFFFF] shadow-xl">
          <div className="mx-6 h-16 w-16 rounded bg-[#1BC5BD] flex justify-center items-center">
            <FaUsers className=" text-white w-12 h-12" />
          </div>
          <div className="mx-6 text-center">
            <p className="text-[18px] font-semibold text-[#494949] my-4">
              Total Users
            </p>
            <h1 className="text-[34px] font-medium">$23</h1>
          </div>
        </div>
        <div className="w-[320px] rounded h-[180px] flex justify-between items-center card bg-[#FFFFFF] shadow-xl">
          <div className="mx-6 h-16 w-16 rounded bg-[#5EE46E] flex justify-center items-center">
            <BiSolidUserPlus className=" text-white w-12 h-12" />
          </div>
          <div className="mx-6 text-center">
            <p className="text-[18px] font-semibold text-[#494949] my-4">
              Total Provider
            </p>
            <h1 className="text-[34px] font-medium">$95</h1>
          </div>
        </div>

        <div className="w-[320px] rounded h-[180px] flex justify-between items-center card bg-[#FFFFFF] shadow-xl">
          <div className="mx-6 h-16 w-16 rounded bg-[#5F5CF1] flex justify-center items-center">
            < CiBag1 className=" text-white w-12 h-12" />
          </div>
          <div className="mx-6 text-center">
            <p className="text-[18px] font-semibold text-[#494949] my-4">
              Total Services
            </p>
            <h1 className="text-[34px] font-medium">$890</h1>
          </div>
        </div>
        
      </div>

        </div>
    );
};

export default Card;