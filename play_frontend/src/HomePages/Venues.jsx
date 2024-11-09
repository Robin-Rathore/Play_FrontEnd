import React from "react";
import Card from "./Card";

const Venues = () => {
  return (
    <div className="md:mx-12 mx-4 md:mt-14 mt-8 bg-white md:rounded-3xl rounded-2xl md:pt-12 pt-6 xxl:mx-auto max-w-page min-h-[350px]" >
       <div>
       <div class="flex justify-between font-bold md:px-12 px-4"><h2 class="md:leading-9 md:text-2xl text-xl">Book Venues</h2><button class="text-primary flex justify-center items-center gap-2 font-bold leading-6">SEE ALL VENUES<img src="https://playo-website.gumlet.io/playo-website-v3/icons/right_arrow_green.png" alt="right" width="16" height="16"/></button></div>
       <div className="flex mt-6" >
        <div className="relative overflow-hidden" >
            <div className="flex no-scroller " style={{overflowX:"auto", whiteSpace:"nowrap"}} >
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
       </div>
       </div>

    </div>
  );
};

export default Venues;
