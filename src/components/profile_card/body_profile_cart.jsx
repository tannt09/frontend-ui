const BodyProfileCart = ({ logos }) => {
  return (
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
        Crafting brand and communication strategies, creating visual designs,
        leading art direction, and capturing portraits through photography.
      </p>
    </div>
  );
};

export default BodyProfileCart;
