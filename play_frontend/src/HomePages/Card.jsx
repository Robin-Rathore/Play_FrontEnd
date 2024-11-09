import React from "react";

const Card = () => {
  return (
    <div>
      <div className="first:ml-4 ml-4 last:mr-4 md:first:ml-12 md:ml-6 md:last:mr-12 mb-6">
        <div className="shadow-card flex cursor-pointer overflow-hidden max-w-[340px] relative w-full min-w-[316px] flex-col space-y-3 bg-white items-start p-2 justify-start border rounded-lg border-[#E3E8E6] h-full">
          <div className="relative w-full h-36 rounded-lg sm:h-36 md:h-36">
            <span className="block overflow-hidden absolute inset-0">
              <img
                alt="JP High Performance Sports Academy"
                sizes="100vw"
                srcset=""
                src="https://playo.gumlet.io/SHAANZCRICKETGROUNDS20190422103027670556/ShuttleZoneBadmintonFitnessCenter1698311177426.jpeg?mode=crop&crop=smart&h=200&width=450&q=40&format=webp"
                decoding="async"
                data-nimg="fill"
                className="rounded-lg bg-surface absolute inset-0 object-cover"
              />
            </span>
            <div className="flex bg-opacity-20 absolute bottom-0 flex-row items-center">
              <div className="relative w-8 h-8">
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-between">
            <div className="w-full flex flex-row items-start justify-between">
              <span className="font-bold text-[16px] text-on_background truncate">
                JP High Performance Sp...
              </span>
              <div className="text-primary p-1 font-semibold text-[14px] bg-primary bg-opacity-20 rounded-md">
                5.00
                <span className="font-normal md:text-xs text-[10px] leading-5">
                  {" "}
                  (10)
                </span>
              </div>
            </div>
            <div className="w-full mt-1 flex flex-row items-start justify-between">
              <span className="font-medium md:text-sm text-xs text-mute_text md:leading-[22px] leading-[18px]">
                Niranjanpur sabzi mand... (~29.45 Kms)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
