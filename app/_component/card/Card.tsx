import { IconType } from "react-icons";
import { Heading, PText } from "..";

import "./index.css";
import { LucideIcon } from "lucide-react";

interface Props {
  Icons: LucideIcon;
  title: string;
  description: string;
}


export const Card = ({ Icons, title, description }: Props) => {
  return (
    <div className="card flex-center">
      <div className="flex-center mb-8">
        <Icons className="w-16 h-16 text-green-600" />
      </div>
      <div className="flex px-3 flex-col justify-center items-center text-center">
        {/* <Globe /> */}
        {/* <h1 className="h-20">icon</h1> */}
        <Heading content={title} addClass="mb-4 text-xl " />
        <PText addClass="text-sm" content={description} />
      </div>
    </div>
  );
};
