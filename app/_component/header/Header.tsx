import { LinkButton, PrimHeading, SubHeading } from "@/app/_component";
import { MainIcon } from "../icon";

import "./index.css";

export const Header = () => {
  return (
    <header className="max-w-full">
      <div className="logo-box">
        <MainIcon varient="white" />
      </div>
      <div className="text-box">
        <PrimHeading content="Roamify" addClass="slide-left break-all" />
        <SubHeading
          content={"Your Journey, Your Way!"}
          addClass="slide-right -ml-3"
        />
        <LinkButton
          addClass="btn-white btn-animated mt-20"
          url={"#section-tour"}
          btnName="Discover Our tour"
        />
      </div>
    </header>
  );
};
