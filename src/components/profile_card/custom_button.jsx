//* IMPORT
import cn from "../../helpers/cn";

const CustomButton = ({ text, isOn }) => {
  return (
    <button
      className={cn(
        "h-[30px] w-[110px] text-[12px] font-normal rounded-full",
        isOn
          ? "bg-pink-500 text-white"
          : "bg-white text-gray-400 border-[2px] border-gray-300"
      )}
    >
      {text}
    </button>
  );
};

export default CustomButton;
