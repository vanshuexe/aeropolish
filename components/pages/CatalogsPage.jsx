import { Fragment } from "react";
import SiteLink from "../SiteLink";
import site from "../../config/site";
import { cssStyle, formatDate } from "../../lib/presentation";

export default function CatalogsPage({ catalogs } = {}) {
  return (
    <>
      <div className={"min-h-screen bg-gray-50"}>
        <div
          className={
            "w-[96%] md:w-[98%] h-[40vh] md:h-[50vh] rounded-md bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden ml-[2%] md:ml-[1%] mr-[2%] md:mr-[1%]"
          }
          style={cssStyle("background-image: url('/Rectangle%201%20(3).webp')")}
        >
          <div
            className={"absolute inset-0 bg-black bg-opacity-40 rounded-md"}
          ></div>
          <div className={"relative z-10 text-center text-white px-4 w-full"}>
            <h1
              className={
                "font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4"
              }
            >
              Catalogs
            </h1>
            <p
              className={
                "font-manrope text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl max-w-3xl mx-auto mb-4 md:mb-6 px-2"
              }
            >
              Browse our collection of product catalogs and resources
            </p>
          </div>
        </div>
        <div className={"py-12"}>
          <div className={"catalogs-container"}>
            <div>
              {!catalogs.length ? (
                <>
                  <p className={"text-center font-manrope text-gray-500 py-12"}>
                    No catalogs available at the moment.
                  </p>
                </>
              ) : null}
              <div
                className={
                  "catalogs-grid"
                }
              >
                {catalogs.map((catalog, index0) => {
                  return (
                    <Fragment key={index0}>
                      <div className={"relative group"}>
                        <SiteLink
                          target={"_blank"}
                          rel={"noopener noreferrer"}
                          className={
                            "block overflow-hidden flex flex-col mx-auto"
                          }
                          href={catalog.link}
                          style={{ width: "100%", aspectRatio: "3 / 4" }}
                        >
                          <div
                            className={
                              "relative w-full overflow-hidden rounded-3xl"
                            }
                            style={cssStyle("height: 100%")}
                          >
                            <img
                              alt={catalog.title}
                              loading={"lazy"}
                              className={
                                "object-cover group-hover:scale-105 transition-transform duration-300 rounded-3xl absolute inset-0 w-full h-full"
                              }
                              src={catalog.image}
                            />
                            <div
                              className={
                                "absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 lg:p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-3xl"
                              }
                            >
                              <h3
                                className={
                                  "text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white text-center line-clamp-2"
                                }
                              >
                                {catalog.title}
                              </h3>
                            </div>
                          </div>
                        </SiteLink>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
