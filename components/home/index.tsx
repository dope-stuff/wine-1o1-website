"use client";
import { useEffect, useState } from "react";
import { homeService } from "../../services/home.service";
import dayjs from "dayjs";

import Banner from "../../components/home/banner";
import OurHighLightsIcon from "../common/images/our-highlights";
import Carousel from "../../components/carousel";
import WineCard from "../../components/card/wine";
import OurServiceIcon from "../common/images/our-service";
import ServiceCard from "../../components/card/service";
import Footer from "../../components/footer";
import { IHome, IService } from "../../services/types/home";
import { workshopService } from "../../services/workshop.service";
import Event from "./event";
import { IWorkshop } from "../../services/types/workshop";

export default function Home() {
  const { innerWidth } = window;

  const data = [
    {
      name: "test",
      image_url: "test",
      type: "test",
      country: "test",
      wine_type: "test",
      price: 1200,
      color: "#ECF2CB",
    },
    {
      name: "test2",
      image_url: "test2",
      type: "test2",
      country: "test2",
      wine_type: "test2",
      price: 1100,
      color: "#F9E4C0",
    },
    {
      name: "test3",
      image_url: "test3",
      type: "test3",
      country: "test3",
      wine_type: "test3",
      price: 1200,
      color: "#FFD2DE",
    },
    {
      name: "test",
      image_url: "test",
      type: "test",
      country: "test",
      wine_type: "test",
      price: 1200,
      color: "#ECF2CB",
    },
    {
      name: "test2",
      image_url: "test2",
      type: "test2",
      country: "test2",
      wine_type: "test2",
      price: 1100,
      color: "#F9E4C0",
    },
    {
      name: "test3",
      image_url: "test3",
      type: "test3",
      country: "test3",
      wine_type: "test3",
      price: 1200,
      color: "#FFD2DE",
    },
    {
      name: "test",
      image_url: "test",
      type: "test",
      country: "test",
      wine_type: "test",
      price: 1200,
      color: "#ECF2CB",
    },
    {
      name: "test2",
      image_url: "test2",
      type: "test2",
      country: "test2",
      wine_type: "test2",
      price: 1100,
      color: "#F9E4C0",
    },
    {
      name: "test3",
      image_url: "test3",
      type: "test3",
      country: "test3",
      wine_type: "test3",
      price: 1200,
      color: "#FFD2DE",
    },
    {
      name: "test",
      image_url: "test",
      type: "test",
      country: "test",
      wine_type: "test",
      price: 1200,
      color: "#ECF2CB",
    },
    {
      name: "test2",
      image_url: "test2",
      type: "test2",
      country: "test2",
      wine_type: "test2",
      price: 1100,
      color: "#F9E4C0",
    },
    {
      name: "test3",
      image_url: "test3",
      type: "test3",
      country: "test3",
      wine_type: "test3",
      price: 1200,
      color: "#FFD2DE",
    },
  ];
  // [
  //   { name: "wine profile workshop", background: "#ECF2CB" },
  //   { name: "wine event private event", background: "#F9E4C0" },
  //   { name: "collaboration", background: "#FFD2DE" },
  //   { name: "wine wedding", background: "#E3E9FF" },
  //   { name: "pop-up booth", background: "#F9E4C0" },
  // ];
  const elements = data.map((e, i) => <WineCard key={i} data={e} />);

  const [pageData, setPageData] = useState<IHome>();
  const [events, setEvents] = useState<IWorkshop>();

  const getData = async () => {
    const { data } = await homeService.get();
    if (data) {
      setPageData(data.data);
    }
  };
  const getEventData = async () => {
    const { data } = await workshopService.get(dayjs().format("YYYY-MM-DD"));
    if (data) {
      setEvents(data.data[0]);
    }
  };
  useEffect(() => {
    getData();
    getEventData();
  }, []);
  return (
    pageData && (
      <div className="w-screen flex flex-col items-center gap-4">
        {events && <Event data={events} />}
        <Banner data={pageData.header} />
        <div>
          <OurHighLightsIcon height={110} />
        </div>
        <div className="w-full px-4 py-2">
          <Carousel
            elements={elements}
            slidesPerView={innerWidth >= 1440 ? 7 : innerWidth > 640 ? 4 : 2}
          />
        </div>
        <div>
          <OurServiceIcon width={200} height={110} />
        </div>
        <div className="w-full min-h-[300px] h-full grid grid-cols-2 md:grid-cols-5 gap-4 px-4 mb-4">
          {pageData.services.map((data, i) => (
            <ServiceCard key={i} data={data} />
          ))}
        </div>
        <Footer />
      </div>
    )
  );
}
