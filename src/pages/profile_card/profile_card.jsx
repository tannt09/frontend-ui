
const ProfileCard = () => {
  return (
    <div className="flex justify-center w-screen">
      <div className="w-72 bg-white rounded-[10%] shadow-md text-center font-sans overflow-hidden">
        <div className="bg-gradient-to-r from-[#ff6f91] to-[#ff9671] h-[150px] flex rounded-b-[30px] items-center">
          <div className="w-[100px] h-[100px] rounded-[50px] bg-slate-700 mx-auto mb-2.5 border-white"></div>
        </div>
        <div className="flex justify-center mt-[10px] space-x-4">
          <a href="#" className="text-pink-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-pink-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="text-center mb-[40px]">
          <h2 className="text-xl font-semibold">Johnny Rogers</h2>
          <h4 className="text-gray-500">@jonnyrogers</h4>
          <p className="mt-2 text-gray-600 text-sm">
            Crafting brand and communication strategies, creating visual
            designs, leading art direction, and capturing portraits through
            photography.
          </p>
        </div>
        <div className="flex justify-center mb-[20px] space-x-4">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
            Follow
          </button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
