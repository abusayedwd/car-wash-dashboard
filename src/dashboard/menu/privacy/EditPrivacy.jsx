import React, { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import { Link, useNavigate } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";
 
import { Button, Form, notification } from "antd";
import '../../../index.css'
 

const EditPrivacy = () => {
 
 
 
  const editor = useRef(null);
 
//   const [content, setContent] = useState(pricacy?.data?.attributes[0]?.content);
  const [content, setContent] = useState("heloo privacy");
//  console.log(pricacy);
 
  const navigate = useNavigate()
 
 
 
//   const dataContent  = {
//     content:content
//   }

  const handlePostPrivacy = async () => {
    // try{
    //     await addPrivacy(dataContent).unwrap();
    //         notification.success({
            
    //         message: 'Success',
    //         description: 'Privacy Updated successfully',
           
    //       })
       
        navigate("/dashboard/settings/privacypolicy")
    // }catch{
    //     notification.error({
    //       message:"Error",
    //       description: ("Privacy not Update", error)
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
        <Link to ='/dashboard/settings/privacypolicy' className="flex items-center gap-2">
      <FaCircleArrowLeft className=" text-[#69C0BE] w-8 h-8" />
        <p className=" font-semibold text-[30px]">Edit Privacy Policy</p>
      </Link>
      <Form
     labelCol={{ span: 22 }}
     wrapperCol={{ span: 40 }}
     layout="vertical"
     initialValues={{
       remember: true,
       
     }}
     onFinish = {handlePostPrivacy}
      > 
      <div className="mt-6">
        <JoditEditor 
          ref={editor}
          value ={content}
          defu
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
              Update Privacy
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default EditPrivacy;
