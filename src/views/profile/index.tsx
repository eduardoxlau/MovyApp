import Input from "../../components/input/dark";
import ProfileImg from "../../assets/profile.png";

const Profile = () => {
  return (
    <div className="bg-mate flex flex-col">
      <div className="container text-white profile">
        <div className="text-5xl mb-4 text-center md:text-left">
          Edit Profile
        </div>
        <hr className="separator" />
        <div className="flex flex-col md:flex-row my-11">
          <div className="w-full md:w-1/3 flex items-center justify-center md:items-start md:justify-start mb-4 m:m-0">
            <div className="flex items-center justify-center w-40 h-40 bg-gray-200 rounded">
              <img className="w-32" src={ProfileImg} alt="" />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-2/3 text-2xl">
            <div className="flex flex-col md:flex-row  md:items-center mb-1">
              <Input />
              <div className="flex my-1 m:m-0">
                <input
                  className="mr-6 md:mx-6 w-8 h-8 order-1 md:order-none"
                  type="checkbox"
                  name="isKid"
                />
                <label className="mr-10" htmlFor="isKid">
                  Kid?
                </label>
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className="mb-1">Language:</div>
              <select className="bg-black w-full md:w-60 h-10 p-2 text-lg rounded border border-button">
                <option value="en">English</option>
                <option value="es">Spanish</option>
              </select>
            </div>
            <div className="flex flex-col mb-1">
              <div className="mb-1">Allowed TV shows and movies:</div>
              <select className="bg-black w-full md:w-60  h-10 p-2 text-lg rounded border border-button">
                <option value="en">All Maturity levels</option>
                <option value="es">Other</option>
              </select>
            </div>
          </div>
        </div>
        <hr className="separator" />
        <div className="mt-5">
          <button className="bg-button py-1.5 px-8 rounded m-1 w-full md:w-auto">
            SAVE
          </button>
          <button className="border-button border py-1.5 px-8 rounded m-1 w-full  md:w-auto">
            CANCEL
          </button>
          <button className="border-button border py-1.5 px-8 rounded m-1 w-full md:w-auto">
            DELETE PROFILE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
