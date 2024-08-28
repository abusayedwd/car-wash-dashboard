
import React, { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import { Link, useNavigate } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Button, Form, notification } from "antd";
 
// import Swal from "sweetalert2";
 
 

const EditTermCondition = () => {
 
  // console.log(addTermCondition);
  const editor = useRef(null);
  const [content, setContent] = useState("this is termcomdition pagee e");
  
  const navigate = useNavigate()  

 
//   const dataContent  = {
//     content:content
//   }

  const handleEditTermCondition = async () => {
    // try{
    //     await addTermCondition(dataContent).unwrap();
    //         notification.success({
            
    //         message: 'Success',
    //         description: 'Terms&Condition Updated successfully',
           
    //       })
       
        navigate("/dashboard/settings/termcondition")
    // }catch{
    //     notification.error({
    //       message:"Error",
    //       description: "Tercms&Condition not Update"
    //     })
        
    // }
  }

//   if (isLoading) {
//     return (
//       <div className="w-4/12 mx-auto mt-40">
//         <PropagateLoader color="#00BF63" size={30} />
//       </div>
//     );
//   } 
  
    
  return (
    <div className="mt-8 mx-6">
        <Link to ='/dashboard/settings/termcondition' className="flex items-center gap-2">
      <FaCircleArrowLeft className=" !text-[#69C0BE] w-8 h-8" />
        <p className=" font-semibold text-[30px]">Edit Term&Condition</p>
      </Link>
      <Form
     labelCol={{ span: 22 }}
     wrapperCol={{ span: 40 }}
     layout="vertical"
     initialValues={{
       remember: true,
       
     }}
     onFinish = {handleEditTermCondition}
      > 
      <div className="mt-6">
        <JoditEditor 
          ref={editor}
          value={content} 
          onChange={(newContent) => {
            setContent(newContent)
          }}
        />
      </div>
      <div className="text-right mt-6">
          <Form.Item>
            <Button
              htmlType="submit"
             className=" h-[44px] w-[260px] !text-black !bg-[#69C0BE] rounded-[8px]"
            >
              Update termCondition
            </Button>
          </Form.Item>
        </div>
      </Form>
       
    </div>
  );
};

export default EditTermCondition;
