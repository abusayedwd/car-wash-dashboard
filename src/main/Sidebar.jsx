// import { NavLink, useNavigate, } from "react-router-dom";
// import logo from '../../public/image/logoC.png'
// import { FaUser, FaUsersLine } from "react-icons/fa6";
// import { MdCategory, MdOutlineMedicalServices } from "react-icons/md";
// import { BiSolidDashboard } from "react-icons/bi";
// import { HiLogout, } from "react-icons/hi";
// import { AiOutlineSafetyCertificate } from "react-icons/ai";
// import { TbLogs } from "react-icons/tb";
// import { CiSettings } from "react-icons/ci";
// import Swal from "sweetalert2";
// import { PiGitPullRequestDuotone, PiHandWithdraw } from "react-icons/pi";
// import { RiSecurePaymentFill } from "react-icons/ri";
 

// const Sidebar = () => {

//   const navigate = useNavigate(); 
  
//   const handleLogOut = () => {
    
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to logout from heare!!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         localStorage.removeItem('token')
//         localStorage.removeItem('user')
       
//           Swal.fire({
//             title: "LogOut!",
//             text: "User has been logout success.",
//             icon: "success",
//             timer: 2000
//           }); 
//           navigate('/')
//       }
//     });
//   };

 


//   return (
//     <div className="lg:w-[250px] xl:w-[300px] md:w-[200px] w-[100px] flex flex-col justify-between rounded-md bg-[#69C0BE] h-[400px] min-h-screen rounded-l-md">
//       <div className="">
//         <div className="p-[32px]">
//           <img src={logo} alt="" />
//           <hr className="w-full mt-4 text-[#54D496] mr-12" />
//         </div>
//         <div className="ml-5">
//           <ul>
//           <NavLink
//   to="home"
//   className={({ isActive }) =>
//     isActive
//       ? "flex text-[#69C0BE] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] m-[6px] rounded-lg"
//       : "flex text-[white] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#69C0BE] m-[6px] rounded-lg"
//   }
// >
//   <div className="flex justify-start items-center gap-2">
//     <BiSolidDashboard width={25} height={25} /> Dashboard
//   </div>
// </NavLink>


// <NavLink
//   to="users"
//   className={({ isActive }) =>
//     isActive
//       ? "flex text-[#69C0BE] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] lg:m-[10px] m-[6px] rounded-lg"
//       : "flex text-[white] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#69C0BE] lg:m-[10px] m-[6px] rounded-lg"
//   }
// >
//   <div className="flex justify-start items-center gap-2">
//     <FaUsersLine width={25} height={25} /> Users
//   </div>
// </NavLink>

// <NavLink
//   to="maneger"
//   className={({ isActive }) =>
//     isActive
//       ? "flex text-[#69C0BE] p-[10px] lg:m-[10px] m-[6px] cursor-pointer items-center font-medium bg-[#FFFFFF] rounded-lg"
//       : "flex text-[white] p-[10px] lg:m-[10px] m-[6px] cursor-pointer items-center font-medium bg-[#69C0BE] rounded-lg"
//   }
// >
//   <div className="flex justify-start items-center gap-2">
//     <FaUser width={25} height={25} /> Manager
//   </div>
// </NavLink>

// <NavLink
//   to="provider"
//   className={({ isActive }) =>
//     isActive
//       ? "flex text-[#69C0BE] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] lg:m-[10px] m-[6px] rounded-lg"
//       : "flex text-[white] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#69C0BE] lg:m-[10px] m-[6px] rounded-lg"
//   }
// >
//   <div className="flex justify-start items-center gap-2">
//     <AiOutlineSafetyCertificate width={25} height={25} /> Provider
//   </div>
// </NavLink>

// <NavLink
//   to="request"
//   className={({ isActive }) =>
//     isActive
//       ? "flex text-[#69C0BE] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] lg:m-[10px] m-[6px] rounded-lg"
//       : "flex text-[white] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#69C0BE] lg:m-[10px] m-[6px] rounded-lg"
//   }
// >
//   <div className="flex justify-start items-center gap-2">
//     <PiGitPullRequestDuotone height={25} width={25} /> Request
 
//   </div>
// </NavLink>

// <NavLink
//   to="service"
//   className={({ isActive }) =>
//     isActive
//       ? "flex text-[#69C0BE] p-[10px] lg:m-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#FFFFFF] rounded-lg"
//       : "flex text-[white] p-[10px] lg:m-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#69C0BE] rounded-lg"
//   }
// >
//   <div className="flex justify-start items-center gap-2">
//     <MdOutlineMedicalServices width={25} height={25} /> Service
//   </div>
// </NavLink>

// <NavLink
//   to="payment"
//   className={({ isActive }) =>
//     isActive
//       ? "flex text-[#69C0BE] p-[10px] lg:m-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#FFFFFF] rounded-lg"
//       : "flex text-[white] p-[10px] lg:m-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#69C0BE] rounded-lg"
//   }
// >
//   <div className="flex justify-start items-center gap-2">
//     <RiSecurePaymentFill width={25} height={25} /> Payment
//   </div>
// </NavLink>

// <NavLink
//   to="settings"
//   className={({ isActive }) =>
//     isActive
//       ? "flex text-[#69C0BE] p-[10px] lg:m-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#FFFFFF] rounded-lg"
//       : "flex text-[white] p-[10px] lg:m-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#69C0BE] rounded-lg"
//   }
// >
//   <div className="flex justify-start items-center gap-2">
//     <CiSettings width={25} height={25} /> Settings
//   </div>
// </NavLink>

//           </ul>
//         </div> 
//       <div className="mb-[40px] mt-6">
//         <div onClick={handleLogOut}
//           className="flex items-center ml-[18px] cursor-pointer gap-2 text-[#FFFFFF] font-medium"
//         >
//           <HiLogout width={25} height={25} />
//           <span className="text-[20px] ">Log Out</span>
//         </div>

//       </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../public/image/logoC.png'
import { FaUser, FaUsersLine } from "react-icons/fa6";
import { MdCategory, MdOutlineMedicalServices } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { HiLogout } from "react-icons/hi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { PiGitPullRequestDuotone } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import Swal from "sweetalert2";

const Sidebar = () => {

  const navigate = useNavigate();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to log out from here!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        Swal.fire({
          title: "Logged Out!",
          text: "User has been logged out successfully.",
          icon: "success",
          timer: 2000
        });
        navigate('/');
      }
    });
  };

  return (
    <div className="lg:w-[250px] xl:w-[300px] md:w-[200px] sm:w-[120px] w-[120px] flex flex-col justify-between bg-[#69C0BE] h-full min-h-screen rounded-l-md">
      <div>
        <div className="p-[32px] sm:p-[16px]">
          <img src={logo} alt="Logo" />
          <hr className="w-full mt-4 text-[#54D496] hidden sm:block" />
        </div>
        <div className="ml-5">
          <ul>
            <NavLink
              to="home"
              className={({ isActive }) =>
                isActive
                  ? "flex text-[#69C0BE] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] m-[6px] rounded-lg"
                  : "flex text-[white] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#69C0BE] m-[6px] rounded-lg"
              }
            >
              <BiSolidDashboard className="h-7 w-7 lg:h-5 lg:w-5"/>
              <span className="hidden ml-2 sm:block">Dashboard</span>
            </NavLink>

            <NavLink
              to="users"
              className={({ isActive }) =>
                isActive
                  ? "flex text-[#69C0BE] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] m-[6px] rounded-lg"
                  : "flex text-[white] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#69C0BE] m-[6px] rounded-lg"
              }
            >
              <FaUsersLine className="h-7 w-7 lg:h-5 lg:w-5"/>
              <span className="hidden ml-2 sm:block">Users</span>
            </NavLink>

            <NavLink
              to="maneger"
              className={({ isActive }) =>
                isActive
                  ? "flex text-[#69C0BE] p-[10px] m-[6px] cursor-pointer items-center font-medium bg-[#FFFFFF] rounded-lg"
                  : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center font-medium bg-[#69C0BE] rounded-lg"
              }
            >
              <FaUser className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Manager</span>
            </NavLink>

            <NavLink
              to="provider"
              className={({ isActive }) =>
                isActive
                  ? "flex text-[#69C0BE] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] m-[6px] rounded-lg"
                  : "flex text-[white] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#69C0BE] m-[6px] rounded-lg"
              }
            >
              <AiOutlineSafetyCertificate className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Provider</span>
            </NavLink>

            <NavLink
              to="request"
              className={({ isActive }) =>
                isActive
                  ? "flex text-[#69C0BE] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] m-[6px] rounded-lg"
                  : "flex text-[white] cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#69C0BE] m-[6px] rounded-lg"
              }
            >
              <PiGitPullRequestDuotone className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Request</span>
            </NavLink>

            <NavLink
              to="service"
              className={({ isActive }) =>
                isActive
                  ? "flex text-[#69C0BE] p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#FFFFFF] rounded-lg"
                  : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#69C0BE] rounded-lg"
              }
            >
              <MdOutlineMedicalServices className="h-7 w-7 lg:h-5 lg:w-5"/>
              <span className="hidden ml-2 sm:block">Service</span>
            </NavLink>

            <NavLink
              to="payment"
              className={({ isActive }) =>
                isActive
                  ? "flex text-[#69C0BE] p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#FFFFFF] rounded-lg"
                  : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#69C0BE] rounded-lg"
              }
            >
              <RiSecurePaymentFill className="h-7 w-7 lg:h-5 lg:w-5"/>
              <span className="hidden ml-2 sm:block">Payment</span>
            </NavLink>

            <NavLink
              to="settings"
              className={({ isActive }) =>
                isActive
                  ? "flex text-[#69C0BE] p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#FFFFFF] rounded-lg"
                  : "flex text-[white] p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#69C0BE] rounded-lg"
              }
            >
              <CiSettings className="h-8 w-8 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Settings</span>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="mb-[60px] mt-2">
        <div
          onClick={handleLogOut}
          className="flex items-center ml-[18px] cursor-pointer gap-2 text-[#FFFFFF] font-medium"
        >
          <HiLogout className="h-8 w-8 lg:h-5 lg:w-5" />
          <span className="hidden sm:block text-[20px]">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
