import React, { useEffect, useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
 
 

const TermCondition = () => {

 
 ;

  const navigate = useNavigate(); 

//   if (isLoading) {
//     return (
//       <div className="w-4/12 mx-auto mt-40">
//         <PropagateLoader color="#00BF63" size={30} />
//       </div>
//     );
//   } 
//   if (error) return <p>Error: {error.message}</p>;


  return (
    
    <div className=" mt-8 mx-6">
      <Link to="/dashboard/settings" className="flex items-center gap-2">
        <FaCircleArrowLeft className=" text-[#69C0BE] w-8 h-8" />
        <p className=" font-semibold text-[30px]">Terms & Condition</p>
      </Link>
      <div className='mt-4'>
        {/* <p dangerouslySetInnerHTML={{ __html: termCondition?.data?.attributes[0]?.content }}> 
        </p> */}
        <p>hello termcomdition</p>
      </div>
      <div className=" text-right mt-16">
        <button onClick={() => navigate('/dashboard/settings/edittermcondition')}  className=" h-[44px] w-[260px] !text-black !bg-[#69C0BE] rounded-[8px]">Edit</button>
      </div>
    </div>
  );
};

export default TermCondition;
