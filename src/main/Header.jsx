 
import { useNavigate } from "react-router-dom";
import { Badge, Dropdown} from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
 
 
 
 
// import SearchBox from "../SearchBox/SearchBox";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-between items-center shadow-xl mb-[24px] p-[16px] rounded-md !bg-[#69C0BE]"> 
     <div>
      <p className="text-2xl font-medium">Webcome !</p>
      <h1>Abu Sayed</h1>
     </div>

      <div className="flex gap-5">
        {/* <Dropdown overlay={menu} placement="bottomRight" arrow> */}
        <div
          onClick={(e) => navigate("/dashboard/notification")}
          className="relative flex items-center"
        >
          <Badge style={{ backgroundColor: "red", marginTop:'10px', marginRight:'5px' }} count={2}>
            <IoIosNotificationsOutline
              style={{ cursor: "pointer" }}
              className={` bg-primary w-[52px] h-[52px] text-[#Ffffffff] border-2 border-[#e7e0e0] rounded-full p-2 `}
            />
          </Badge>
        </div>
        {/* </Dropdown> */}
        <div
          onClick={() => navigate("/dashboard/personalinfo")}
          className="flex items-center cursor-pointer mr-[30px] bg-primary text-white rounded-full p-1"
        >
          <FaRegUser className="text-[#Ffff] border-2 border-[#Fffff] rounded-full p-2 w-[52px] h-[52px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
