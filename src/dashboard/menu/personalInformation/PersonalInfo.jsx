import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import user from '../../../../public/image/randomuser.jpg';

const PersonlaInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mt-10 mb-16">
        <h1 className="text-2xl md:text-3xl font-medium">Profile Information</h1>
        <div
          onClick={() => navigate(`/dashboard/editpersonalinfo`)}
          className="flex gap-2 items-center py-3 px-6 rounded-lg cursor-pointer bg-[#69C0BE] text-black"
        >
          <FaEdit size={17} />
          <p>Edit Profile</p>
        </div>
      </div>

      <div className="lg:flex md:flex gap-4 shadow-md bg-white p-4 rounded-xl">
        <div className="lg:w-1/3 flex flex-col border border-dotted p-4 justify-center items-center gap-8">
          <img
            className="w-40 h-40 border p-2 rounded-full"
            src={user}
            alt="User Profile"
          />
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-lg md:text-xl">Admin</p>
            <h1 className="text-2xl md:text-3xl font-medium">Absayed</h1>
          </div>
        </div>

        <div className="lg:w-2/3 mt-8 lg:mt-0 px-5">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="name" className="text-lg md:text-xl font-medium">
                  Name
                </label>
                <Input
                  placeholder="First name"
                  value="abusayed"
                  className="p-4 cursor-pointer text-lg md:text-xl bg-[#ebf5f5] text-black rounded w-full mt-3 outline-none focus:bg-[#69C0BE] hover:bg-[#e1f1f1]"
                  type="text"
                  readOnly
                />
              </div>
            </div>

            <div className="flex-1">
              <label htmlFor="email" className="text-lg md:text-xl font-medium">
                Email
              </label>
              <Input
                placeholder="Email"
                value="ab@gmail.com"
                className="p-4 text-lg md:text-xl bg-[#ebf5f5] rounded w-full mt-3 outline-none focus:bg-[#69C0BE] hover:bg-[#69C0BE]"
                type="text"
                readOnly
              />
            </div>

            <div className="flex-1">
              <label htmlFor="phone" className="text-lg md:text-xl font-medium">
                Phone Number
              </label>
              <Input
                placeholder="Phone"
                value="+454566736"
                className="p-4 text-lg md:text-xl bg-[#ebf5f5] rounded w-full mt-3 outline-none focus:bg-[#69C0BE] hover:bg-[#69C0BE]"
                type="text"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonlaInfo;
