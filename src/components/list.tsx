import { FC } from "react";
import listImg from "../assets/list.jpg";

const List: FC = () => {
  return (
    <div className="container py-10 font-[Roboto] flex flex-col gap-y-4 md:flex-row">
      <div className="w-full">
        <div className="flex flex-col gap-y-2">
          <div className="font-bold tex-[20px]">3000+ therapy hours</div>
          <p className="text-[#0D47A1] text-base">
            Proven methods and individual approaches have led to success
            stories.
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="font-bold tex-[20px]">200+ happy clients</div>
          <p className="text-[#0D47A1] text-base">
            A wide range of people overcame obstacles and reached their goals
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="font-bold tex-[20px]">200+ happy clients</div>
          <p className="text-[#0D47A1] text-base">
            A wide range of people overcame obstacles and reached their goals
          </p>
        </div>
      </div>

      <img src={listImg} alt="" className="rounded-3xl md:h-[280px]" />
    </div>
  );
};

export { List };
