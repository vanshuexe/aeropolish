import { Fragment } from "react";
import SiteLink from "../SiteLink";
import site from "../../config/site";
import { cssStyle, formatDate } from "../../lib/presentation";

export default function ColorTrendsPage({ catalog } = {}) {
  const UPLOADS =
    "https://storage.googleapis.com/npportal.repository.liried.com/npwebsite/assetsnew/upload/";
  const banner = UPLOADS + "3714_s_s.png";
  const themes = [
    {
      title: "Quietude - A Timeless Embrace of Softness and Light",
      image: UPLOADS + "3803.gif",
    },
    {
      title: "Symbiosis - Where Deep Blue Meets Luminous Light",
      image: UPLOADS + "3804.gif",
    },
    {
      title: "Homecoming - The Comfort of Heritage and Warmth",
      image: UPLOADS + "3805.gif",
    },
    {
      title: "Renegade - A Bold Statement of Rebellion and Creativity",
      image: UPLOADS + "3806.gif",
    },
  ];
  return (
    <>
      <div className={"min-h-screen"}>
        <section className={"w-full relative"}>
          <div className={"hidden md:block w-full"}>
            <img
              alt={"Color Trends Banner"}
              width={"1920"}
              height={"400"}
              className={"w-full h-auto object-cover"}
              src={banner}
            />
          </div>
          <div className={"block md:hidden w-full pt-4"}>
            <img
              alt={"Color Trends Banner"}
              width={"1920"}
              height={"400"}
              className={"w-full h-48 object-cover"}
              src={banner}
            />
          </div>
          <div
            className={
              "absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 md:gap-6"
            }
          >
            <h1
              className={
                "sm:text-4xl font-poppins text-center text-3xl font-bold text-white drop-shadow-lg md:text-4xl lg:text-5xl"
              }
            >
              NCS Color Trends 2026
            </h1>
            {catalog ? (
              <>
                <SiteLink
                  href={catalog.link}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className={
                    "inline-flex items-center justify-center rounded-full bg-[#f47422] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#e06518] md:px-8 md:py-3 md:text-base"
                  }
                >
                  Download Catalogue
                </SiteLink>
              </>
            ) : null}
          </div>
        </section>
        <section className={"w-full"}>
          <div className={"container mx-auto px-4 pt-4 pb-4"}>
            <div className={"flex flex-col items-center text-center"}>
              {themes.map((theme, index0) => {
                return (
                  <Fragment key={index0}>
                    <div className={"w-full py-4 my-4"}>
                      <div className={"block md:hidden"}>
                        <img
                          alt={theme.title}
                          loading={"lazy"}
                          width={"1200"}
                          height={"800"}
                          className={"w-full h-auto object-contain"}
                          src={theme.image}
                        />
                      </div>
                      <div className={"hidden md:flex justify-center"}>
                        <img
                          alt={theme.title}
                          loading={"lazy"}
                          width={"1200"}
                          height={"800"}
                          className={"h-auto object-contain"}
                          style={cssStyle("max-height: calc(100vh - 200px)")}
                          src={theme.image}
                        />
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
