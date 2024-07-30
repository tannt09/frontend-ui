import CustomButton from "./custom_button";

const ProfileCardButton = () => {
  return (
    <div className="flex justify-center mb-[20px] space-x-4">
      <CustomButton text="Follow" isOn={true} />
      <CustomButton text="Message" isOn={false} />
    </div>
  );
};

export default ProfileCardButton;
