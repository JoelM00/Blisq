import React from "react";

import Header from "../components/HeaderComponent"
import Banner from "../components/BannerComponent"
import Hightlights from "../components/HightlightsComponent"


export default function Homepage() {

  return (
    <div>
        <Header></Header>
        <Banner></Banner>
        <Hightlights></Hightlights>
    </div>
  );
}