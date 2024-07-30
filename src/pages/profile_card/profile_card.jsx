//* IMPORT
import React from "react";
import { BodyProfileCard, HeaderProfileCard, ProfileCardButton } from "../../components/profile_card";

const ProfileCard = () => {
  const logos = [
    "src\\assets\\logo\\ic_fb.svg",
    "src\\assets\\logo\\ic_linkedin.svg",
    "src\\assets\\logo\\ic_twitter.svg",
    "src\\assets\\logo\\ic_instagram.svg",
    "src\\assets\\logo\\ic_dribbble.svg",
  ];

  return (
    <React.Fragment>
      <div className="flex justify-center w-screen">
        <div className="w-72 bg-white rounded-[10%] shadow-md text-center font-sans overflow-hidden">
          <HeaderProfileCard />
          <BodyProfileCard logos={logos} />
          <ProfileCardButton />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileCard;
