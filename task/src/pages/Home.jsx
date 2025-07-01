import { Navbar } from "../components/navbar";
import {BodySection} from "../components/BodySection";
import {Tabs} from "../components/Tabs"
import {Carousel} from "../components/Carousel"

import { useState } from "react";

const tabLabels = ["Furniture", "Cosmetic", "Interior", "Fashion"];

const imageMap = tabLabels.reduce((map, tab) => {
  const folder = tab;
  const imageCount = {
    Furniture: 7,
    Cosmetic: 7,
    Interior: 7,
    Fashion: 7,
  }[tab];

  map[tab] = Array.from({ length: imageCount }, (_, i) => `public/images/${folder}/${i + 1}.png`);
  return map;
}, {});

export const Home = () => {
      const [selectedTab, setSelectedTab] = useState("Interior");

    return (<div className="min-h-full ">
    <Navbar/>


    <div className="w-full  mx-auto md-10">
       <BodySection/>
          <div className="">
        <Tabs tabs={tabLabels} selected={selectedTab} onSelect={setSelectedTab} />
          <Carousel images={imageMap[selectedTab]} />

      </div>
    </div>

    </div>
    );

};