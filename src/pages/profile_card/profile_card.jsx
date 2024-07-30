const ProfileCard = () => {
  const logos = [
    "src\\assets\\logo\\ic_fb.svg",
    "src\\assets\\logo\\ic_linkedin.svg",
    "src\\assets\\logo\\ic_twitter.svg",
    "src\\assets\\logo\\ic_instagram.svg",
    "src\\assets\\logo\\ic_dribbble.svg",
  ];

  return (
    <div className="flex justify-center w-screen">
      <div className="w-72 bg-white rounded-[10%] shadow-md text-center font-sans overflow-hidden">
        <div className="bg-gradient-to-r from-[#ff6f91] to-[#ff9671] h-[150px] flex rounded-b-[30px] items-center">
          <img
            className="w-[100px] h-[100px] rounded-[50px] bg-slate-700 mx-auto mb-2.5 border-white object-cover"
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="avatar"
          ></img>
        </div>
        <div className="text-center mb-[40px] mt-[40px]">
          <h2 className="text-[24px] font-semibold">Johnny Rogers</h2>
          <h4 className="text-[12px] text-gray-500">@jonnyrogers</h4>
          <div className="flex justify-center mt-[10px] space-x-4">
            {logos.map((item) => {
              return (
                <img
                  key={item}
                  className="w-[18px] h-[18px]"
                  src={item}
                  alt="facebook"
                />
              );
            })}
          </div>
          <p className="mx-[20px] mt-2 text-black text-[10px] font-medium">
            Crafting brand and communication strategies, creating visual
            designs, leading art direction, and capturing portraits through
            photography.
          </p>
        </div>
        <div className="flex justify-center mb-[20px] space-x-4">
          <button className="h-[30px] w-[110px] bg-pink-500 text-white text-[12px] font-normal rounded-full">
            Follow
          </button>
          <button className="h-[30px] w-[110px] bg-white text-gray-400 text-[12px] font-normal rounded-full border-[2px] border-gray-300">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
