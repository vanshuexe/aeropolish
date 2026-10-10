import { Fragment } from "react";
import SiteLink from "../SiteLink";
import CompanyContent from "../CompanyContent";
import site from "../../config/site";
import { cssStyle, formatDate } from "../../lib/presentation";

export default function HomePage({ home, countries } = {}) {
  const inkBy = Object.fromEntries(home.inks.map((ink) => [ink.label, ink]));
  const sectionHeading =
    "sm:text-3xl font-bold font-poppins text-black text-2xl md:text-3xl lg:text-4xl";
  const sectionStyle =
    "flex-shrink: 0; padding-top: 2rem; padding-bottom: 2rem";
  const inputClass =
    "w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200";
  const labelClass =
    "block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2";
  const inkTitle =
    "lg:text-2xl font-poppins text-black font-semibold text-sm sm:text-base md:text-lg group-hover:text-orange-500 transition-colors";
  const inkCard =
    "relative bg-white rounded-[15px] md:rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300";
  const inkImage =
    "object-cover group-hover:scale-105 transition-transform duration-300 absolute inset-0 w-full h-full";
  return (
    <>
      <div className={"bg-white"}>
        <div className={"w-full"} style={cssStyle("overflow-x: hidden")}>
          <div
            className={"w-full"}
            style={cssStyle("display: flex; flex-direction: column")}
          >
            {/* Hero slider */}
            <div style={cssStyle("flex-shrink: 0")}>
              <section
                data-slider=""
                data-interval={"5000"}
                className={
                  "relative h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-[95vh] overflow-hidden"
                }
                style={cssStyle(
                  "padding-top: calc(50px + 1.5vh); margin-top: 1.5vh",
                )}
              >
                {home.hero.slides.map((src, i) => {
                  return (
                    <Fragment key={i}>
                      <div
                        data-slide=""
                        className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center w-[96%] sm:w-[98%] h-[98%] mx-auto rounded-[20px] ${i === 0 ? "opacity-100" : "opacity-0"}`}
                        style={cssStyle(
                          "top: 0px; left: 1%; right: 1%; bottom: 20px",
                        )}
                      >
                        <div className={"relative w-full h-full group"}>
                          <img
                            alt={`Slide ${i + 1}`}
                            loading={"lazy"}
                            className={
                              "object-cover w-full h-full rounded-[20px] absolute inset-0"
                            }
                            src={src}
                          />
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
                <div
                  className={
                    "absolute inset-0 flex flex-col items-center justify-center z-20"
                  }
                >
                  <div
                    className={
                      "text-center mb-4 md:mb-6 px-4 transition-opacity duration-1000"
                    }
                  >
                    <h1
                      className={
                        "font-bold font-poppins text-white drop-shadow-lg mb-2 md:mb-4 text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                      }
                    >
                      {home.hero.title}
                    </h1>
                    <p
                      className={
                        "font-manrope text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-white drop-shadow-lg font-medium"
                      }
                    >
                      {home.hero.subtitle}
                    </p>
                  </div>
                  <SiteLink
                    className={
                      "px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 text-xs sm:text-sm md:text-base lg:text-lg rounded-full font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 flex items-center gap-1.5 md:gap-2 lg:gap-3"
                    }
                    style={cssStyle("background-color: #512178")}
                    href={home.hero.button.href}
                  >
                    {home.hero.button.label}
                    <img
                      alt={""}
                      width={"24"}
                      height={"24"}
                      className={"w-4 h-4 sm:w-6 sm:h-6"}
                      src={home.hero.button.icon}
                    />
                  </SiteLink>
                </div>
                <div
                  className={
                    "absolute bottom-4 sm:bottom-12 lg:bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1 sm:space-x-2"
                  }
                >
                  {home.hero.slides.map((src, i) => {
                    return (
                      <Fragment key={i}>
                        <button
                          type={"button"}
                          data-slide-dot=""
                          aria-label={`Show slide ${i + 1}`}
                          className={`hero-dot w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${i === 0 ? "bg-[#512178]" : "bg-white bg-opacity-50 hover:bg-opacity-75"}`}
                        ></button>
                      </Fragment>
                    );
                  })}
                </div>
              </section>
            </div>

            {/* Products */}
            <section style={{ padding: "32px 16px", background: "#f8fafc" }}>
              <CompanyContent compact />
              <div className="company-actions" style={{ justifyContent: "center" }}>
                <SiteLink href="/about-us">Our Vision & Mission</SiteLink>
                <SiteLink href="/client">Client Inquiry</SiteLink>
                <SiteLink href="/vendor">Become a Vendor</SiteLink>
                <SiteLink href="/investor">Investment & Partnerships</SiteLink>
              </div>
            </section>
            <div
              className={"py-8"}
              style={cssStyle(
                "flex-shrink: 0; padding-top: 2rem; padding-bottom: 2rem",
              )}
            >
              <div className={"w-[96%] sm:w-[98%] mx-auto"}>
                <section className={"relative w-full h-full flex flex-col"}>
                  <div
                    className={
                      "w-[96%] mx-auto px-2 sm:px-4 flex-1 flex flex-col justify-center"
                    }
                    style={cssStyle("max-width: none")}
                  >
                    <div
                      className={"text-center mb-1 md:mb-3 px-2 py-1 md:py-2"}
                    >
                      <h2
                        className={
                          "sm:text-3xl font-bold font-poppins text-black mb-1 md:mb-2 text-2xl md:text-3xl lg:text-4xl"
                        }
                      >
                        Products
                      </h2>
                      <p
                        className={
                          "sm:text-base lg:text-xl font-manrope text-center text-gray-600 text-sm md:text-base mt-2 mb-4"
                        }
                      >
                        Explore
                        <SiteLink
                          className={
                            "text-orange-500 hover:text-orange-600 font-semibold hover:underline"
                          }
                          href={"/interior-paints"}
                        >
                          Decorative
                        </SiteLink>
                        ,
                        <SiteLink
                          className={
                            "text-orange-500 hover:text-orange-600 font-semibold hover:underline"
                          }
                          href={"/industrial-paints"}
                        >
                          Industrial
                        </SiteLink>
                        ,
                        <SiteLink
                          className={
                            "text-orange-500 hover:text-orange-600 font-semibold hover:underline"
                          }
                          href={"/ink"}
                        >
                          Inks
                        </SiteLink>{" "}
                        &amp;
                        <SiteLink
                          className={
                            "text-orange-500 hover:text-orange-600 font-semibold hover:underline"
                          }
                          href={"/alkyd"}
                        >
                          Alkyd
                        </SiteLink>
                        Paints for Every Masterpiece
                      </p>
                    </div>

                    {/* Desktop */}
                    <div
                      className={"hidden lg:block relative w-full"}
                      style={cssStyle(
                        "min-height: 400px; height: clamp(400px, 70vh, 95vh)",
                      )}
                    >
                      <div
                        className={"flex justify-center items-center"}
                        style={cssStyle(
                          "gap: clamp(0.5rem, 2vw, 4rem); height: 100%; width: 100%",
                        )}
                      >
                        {home.productTiles.map((tile, index0) => {
                          return (
                            <Fragment key={index0}>
                              <div
                                className={"flex-1 group relative"}
                                style={cssStyle(
                                  "height: clamp(260px, 55vh, 520px); min-height: 260px; max-height: 520px; flex: 1 1 0%",
                                )}
                              >
                                <SiteLink
                                  className={
                                    "relative w-full h-full block z-10"
                                  }
                                  href={tile.href}
                                >
                                  <div
                                    className={"relative w-full h-full group"}
                                  >
                                    <img
                                      alt={tile.label}
                                      loading={"lazy"}
                                      className={
                                        "object-cover rounded-[10px] lg:rounded-[20px] transition-transform duration-300 group-hover:scale-105 cursor-pointer absolute inset-0 w-full h-full"
                                      }
                                      src={tile.image}
                                    />
                                  </div>
                                </SiteLink>
                                <SiteLink
                                  className={
                                    "absolute top-full mt-3 left-1/2 transform -translate-x-1/2 group cursor-pointer w-full"
                                  }
                                  href={tile.href}
                                >
                                  <p
                                    className={
                                      "sm:text-base font-manrope font-bold text-black text-center text-xs md:text-sm lg:text-sm xl:text-lg 2xl:text-xl transition-colors duration-300 group-hover:text-orange-500"
                                    }
                                  >
                                    {tile.label}
                                  </p>
                                </SiteLink>
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>

                    {/* Mobile */}
                    <div className={"md:hidden relative"}>
                      <div
                        className={"absolute top-0 right-0 z-20"}
                        style={cssStyle(
                          "width: 10%; height: 240px; border-radius: 0 0 0 30px; background: linear-gradient(to right, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 1) 100%); pointer-events: none",
                        )}
                      ></div>
                      <div
                        className={
                          "flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide px-1"
                        }
                      >
                        {home.productTiles.map((tile, index1) => {
                          return (
                            <Fragment key={index1}>
                              <div
                                className={
                                  "flex-shrink-0 w-40 sm:w-44 group relative"
                                }
                              >
                                <SiteLink
                                  className={"relative h-52 mb-2 block z-10"}
                                  href={tile.href}
                                >
                                  <img
                                    alt={tile.label}
                                    loading={"lazy"}
                                    className={
                                      "object-cover rounded-[10px] transition-transform duration-300 group-hover:scale-105 absolute inset-0 w-full h-full"
                                    }
                                    src={tile.image}
                                  />
                                </SiteLink>
                                <SiteLink href={tile.href}>
                                  <p
                                    className={
                                      "lg:text-xl font-manrope font-bold text-black text-center text-[10px] sm:text-xs md:text-sm transition-colors duration-300 group-hover:text-orange-500"
                                    }
                                  >
                                    {tile.label}
                                  </p>
                                </SiteLink>
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>

                    {/* Tablet */}
                    <div className={"hidden md:block lg:hidden"}>
                      <div
                        className={
                          "flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide px-1"
                        }
                      >
                        {home.productTiles.map((tile, index2) => {
                          return (
                            <Fragment key={index2}>
                              <div
                                className={
                                  "flex-shrink-0 w-52 md:w-60 group relative"
                                }
                              >
                                <SiteLink
                                  className={
                                    "relative h-64 md:h-72 mb-3 block z-10"
                                  }
                                  href={tile.href}
                                >
                                  <img
                                    alt={tile.label}
                                    loading={"lazy"}
                                    className={
                                      "object-cover rounded-[10px] transition-transform duration-300 group-hover:scale-105 absolute inset-0 w-full h-full"
                                    }
                                    src={tile.image}
                                  />
                                </SiteLink>
                                <SiteLink href={tile.href}>
                                  <p
                                    className={
                                      "sm:text-base font-manrope font-bold text-black text-center text-sm md:text-base lg:text-lg transition-colors duration-300 group-hover:text-orange-500"
                                    }
                                  >
                                    {tile.label}
                                  </p>
                                </SiteLink>
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Unleash Your Creativity (catalogs) */}
            <div className={"w-full"} style={cssStyle(sectionStyle)}>
              <div
                className={"text-center px-2"}
                style={cssStyle("padding-bottom: 2rem")}
              >
                <h2 className={sectionHeading}>Unleash Your Creativity</h2>
              </div>
              <div
                className={
                  "relative w-[96%] sm:w-[98%] mx-auto rounded-2xl md:rounded-3xl overflow-hidden"
                }
                style={cssStyle(
                  "height: clamp(400px, 500px, 758px); min-height: clamp(400px, 500px, 758px)",
                )}
              >
                <section
                  data-slider=""
                  data-interval={"3000"}
                  className={"relative h-full flex items-center justify-center"}
                >
                  <div
                    className={
                      "relative w-[98%] h-full overflow-hidden rounded-[20px] px-[20%] sm:px-0"
                    }
                  >
                    {home.creativitySlides.map((src, i) => {
                      return (
                        <Fragment key={i}>
                          <div
                            data-slide=""
                            className={`absolute inset-0 transition-opacity duration-300 ${i === 0 ? "opacity-100" : "opacity-0"}`}
                          >
                            <div
                              className={
                                "absolute inset-0 flex items-center justify-center"
                              }
                            >
                              <div
                                className={
                                  "w-full h-[96%] relative overflow-hidden rounded-[20px]"
                                }
                              >
                                <img
                                  alt={`Interior Design ${i + 1}`}
                                  loading={"lazy"}
                                  className={
                                    "object-cover rounded-[20px] absolute inset-0 w-full h-full"
                                  }
                                  src={src}
                                />
                              </div>
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                    <div className={"absolute inset-0 z-10"}>
                      <img
                        alt={""}
                        loading={"lazy"}
                        className={
                          "object-cover rounded-[20px] absolute inset-0 w-full h-full"
                        }
                        src={home.creativityOverlay}
                      />
                    </div>
                    <div
                      className={
                        "absolute top-6 sm:top-10 left-1/2 sm:left-8 z-20 pt-1 sm:pt-2 lg:pt-8 text-center sm:text-left px-2 transform -translate-x-1/2 sm:translate-x-0"
                      }
                    >
                      <h2
                        className={
                          "font-bold font-poppins text-white drop-shadow-lg mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl"
                        }
                      >
                        Unleash Your Creativity
                      </h2>
                      <SiteLink
                        className={
                          "flex items-center justify-center sm:justify-start gap-2 md:gap-3 hover:opacity-80 transition-opacity cursor-pointer"
                        }
                        href={"/catalogs"}
                      >
                        <p
                          className={
                            "font-manrope text-xs sm:text-sm md:text-base lg:text-lg text-white drop-shadow-lg"
                          }
                        >
                          Get Inspired by our catalogs
                        </p>
                        <div className={"text-white drop-shadow-lg"}>
                          <svg
                            width={"24"}
                            height={"24"}
                            viewBox={"0 0 24 24"}
                            fill={"none"}
                            stroke={"currentColor"}
                            strokeWidth={"2"}
                            strokeLinecap={"round"}
                            strokeLinejoin={"round"}
                            className={"w-6 h-6"}
                          >
                            <path d={"M9 18l6-6-6-6"}></path>
                          </svg>
                        </div>
                      </SiteLink>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Special Paint Effects */}
            <div className={"w-full"} style={cssStyle(sectionStyle)}>
              <div className={"text-center px-2"}>
                <h2 className={sectionHeading}>Special Paint Effects</h2>
              </div>
              <div
                className={
                  "relative w-[96%] sm:w-[98%] mx-auto rounded-2xl md:rounded-3xl overflow-hidden"
                }
                style={cssStyle(
                  "height: clamp(400px, 500px, 758px); min-height: clamp(400px, 500px, 758px)",
                )}
              >
                <div
                  className={
                    "relative overflow-hidden h-full w-full rounded-2xl md:rounded-3xl"
                  }
                >
                  <img
                    alt={"Smart Aeropolish Background"}
                    loading={"lazy"}
                    className={
                      "object-cover object-left absolute inset-0 w-full h-full"
                    }
                    src={home.images.smart}
                  />
                  <div
                    className={
                      "absolute z-10 flex flex-col items-start text-left"
                    }
                    style={cssStyle("top: 12%; left: 3%")}
                  >
                    <div
                      className={
                        "relative flex-shrink-0 mb-2 md:mb-3 mx-auto md:mx-0"
                      }
                      style={cssStyle(
                        "width: clamp(120px, 15vw, 300px); height: clamp(40px, 5vw, 100px); min-width: 120px; max-width: 300px; margin-top: 1vh",
                      )}
                    >
                      <img
                        alt={"Smart"}
                        className={
                          "object-contain object-center md:object-left absolute inset-0 w-full h-full"
                        }
                        src={"/prodcuts-bg/smart.png"}
                      />
                    </div>
                    <h2
                      className={
                        "font-bold font-poppins text-white drop-shadow-lg text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                      }
                    >
                      Special Paint Effects
                    </h2>
                  </div>
                  <div
                    className={
                      "absolute z-10 flex justify-center md:justify-start items-center"
                    }
                    style={cssStyle("top: 42%; left: 3%")}
                  >
                    <SiteLink
                      href={
                        "/interior-paints?subcategory=Special%20Effects%20(Smart%20)"
                      }
                      className={
                        "flex items-center gap-2 md:gap-3 bg-transparent border-none text-white font-medium hover:opacity-80 transition-opacity sm:text-sm xl:text-xl text-sm md:text-base lg:text-lg"
                      }
                    >
                      <span>crafted for durable elegance</span>
                      <svg
                        viewBox={"0 0 24 24"}
                        fill={"none"}
                        className={"flex-shrink-0"}
                        style={cssStyle(
                          "width: clamp(16px, 1.5vw, 24px); height: clamp(16px, 1.5vw, 24px)",
                        )}
                      >
                        <path
                          d={"M9 18L15 12L9 6"}
                          stroke={"currentColor"}
                          strokeWidth={"2"}
                          strokeLinecap={"round"}
                          strokeLinejoin={"round"}
                        ></path>
                      </svg>
                    </SiteLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Discover Your Perfect Shade (colour trends) */}
            <div className={"w-full"} style={cssStyle(sectionStyle)}>
              <div className={"text-center px-2"}>
                <h2 className={sectionHeading}>Discover Your Perfect Shade</h2>
              </div>
              <div
                className={
                  "relative w-[96%] sm:w-[98%] mx-auto rounded-2xl md:rounded-3xl overflow-hidden"
                }
                style={cssStyle(
                  "height: clamp(400px, 500px, 758px); min-height: clamp(400px, 500px, 758px)",
                )}
              >
                <div
                  className={
                    "relative overflow-hidden h-full w-full rounded-2xl md:rounded-3xl"
                  }
                >
                  <img
                    alt={"Color Trends Background"}
                    loading={"lazy"}
                    className={
                      "object-cover object-right absolute inset-0 w-full h-full"
                    }
                    src={home.images.shiny}
                  />
                  <div
                    className={
                      "absolute z-10 flex flex-col items-start text-left"
                    }
                    style={cssStyle("top: 20%; left: 55vw")}
                  >
                    <div
                      className={
                        "relative flex-shrink-0 mb-2 md:mb-3 mx-auto md:mx-0"
                      }
                      style={cssStyle(
                        "width: clamp(120px, 15vw, 300px); height: clamp(40px, 5vw, 100px); min-width: 120px; max-width: 300px; margin-top: 1vh",
                      )}
                    >
                      <img
                        alt={"Shiny"}
                        className={
                          "object-contain object-center md:object-left absolute inset-0 w-full h-full"
                        }
                        src={"/home/shiny.png"}
                      />
                    </div>
                    <h2
                      className={
                        "font-bold font-poppins text-white drop-shadow-lg text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                      }
                    >
                      Discover Your Perfect Shade
                    </h2>
                  </div>
                  <div
                    className={
                      "absolute z-10 flex flex-col items-start text-left"
                    }
                    style={cssStyle("top: 45%; left: 55vw")}
                  >
                    <p
                      className={
                        "font-manrope text-xs sm:text-sm md:text-base lg:text-lg text-white drop-shadow-lg"
                      }
                    >
                      Explore Aeropolish Paints' Mocha Mousse-Inspired Hues!
                    </p>
                  </div>
                  <div
                    className={
                      "absolute z-10 flex justify-center md:justify-start items-center"
                    }
                    style={cssStyle("top: 55%; left: 55vw")}
                  >
                    <SiteLink
                      href={"/color-trends"}
                      className={
                        "inline-flex items-center justify-center rounded-3xl font-medium transition-all duration-200 hover:scale-105 active:scale-95 h-8 px-3 text-xs sm:h-12 sm:px-6 sm:text-lg text-white"
                      }
                      style={cssStyle(
                        "background: linear-gradient(to right, #d89669, #431b0b); border: none",
                      )}
                    >
                      Color Trend 2026
                    </SiteLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Stronger Prints (inks) */}
            <div
              className={"w-full"}
              style={cssStyle("flex-shrink: 0; padding-top: 2rem")}
            >
              <div className={"w-[96%] sm:w-[98%] mx-auto"}>
                <section
                  className={"relative w-full py-0 md:py-2 lg:py-4"}
                  style={cssStyle("min-height: 100vh")}
                >
                  <div
                    className={"relative w-full rounded-xl overflow-hidden"}
                    style={cssStyle("min-height: 100vh")}
                  >
                    <div className={"absolute inset-0 z-0"}>
                      <img
                        alt={""}
                        className={
                          "object-cover absolute inset-0 w-full h-full"
                        }
                        src={"/prodcuts-bg/background_gradients%20(1).webp"}
                      />
                    </div>
                    <div
                      className={"relative z-10 w-full p-2 md:p-4 lg:p-6"}
                      style={cssStyle("min-height: 100vh; padding-bottom: 0")}
                    >
                      <div
                        className={
                          "text-center mb-6 md:mb-8 lg:mb-10 px-2 py-4 md:py-6"
                        }
                      >
                        <h2
                          className={
                            "font-poppins text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
                          }
                        >
                          Stronger Prints, Brighter Results
                        </h2>
                        <p
                          className={
                            "font-manrope text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg mt-2 md:mt-4"
                          }
                        >
                          Explore Specialized Ink Solutions Crafted for Clarity
                          and Consistency
                        </p>
                      </div>

                      <div
                        className={
                          "flex md:hidden overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide"
                        }
                      >
                        {home.inks.map((ink, index3) => {
                          return (
                            <Fragment key={index3}>
                              <div
                                className={
                                  "flex-shrink-0 snap-center w-[280px]"
                                }
                              >
                                <SiteLink
                                  className={
                                    "relative group cursor-pointer block"
                                  }
                                  href={ink.href}
                                >
                                  <div
                                    className={
                                      "relative bg-white rounded-[15px] overflow-hidden shadow-lg h-[350px]"
                                    }
                                  >
                                    <img
                                      alt={ink.label}
                                      loading={"lazy"}
                                      className={
                                        "object-cover absolute inset-0 w-full h-full"
                                      }
                                      src={ink.image}
                                    />
                                  </div>
                                  <div className={"mt-2 text-center"}>
                                    <h3
                                      className={
                                        "sm:text-2xl md:text-2xl lg:text-2xl font-poppins text-black font-semibold text-sm"
                                      }
                                    >
                                      {ink.label}
                                    </h3>
                                  </div>
                                </SiteLink>
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>

                      <div
                        className={
                          "hidden md:grid grid-cols-1 gap-2 lg:gap-2 lg:[grid-template-columns:30%_40%_30%]"
                        }
                      >
                        <div>
                          <SiteLink
                            className={"relative group cursor-pointer block"}
                            href={inkBy["Offset Inks"].href}
                          >
                            <div
                              data-offset-inks=""
                              className={`${inkCard} mx-auto`}
                              style={cssStyle(
                                "height: clamp(500px, 59vh, 800px); max-width: 85%",
                              )}
                            >
                              <img
                                alt={"Offset Inks"}
                                loading={"lazy"}
                                className={inkImage}
                                src={inkBy["Offset Inks"].image}
                              />
                            </div>
                            <div className={"mt-2 md:mt-3 text-center"}>
                              <h3 className={inkTitle}>Offset Inks</h3>
                            </div>
                          </SiteLink>
                        </div>
                        <div>
                          <div className={"space-y-2"}>
                            <div className={"grid grid-cols-3 gap-4"}>
                              <SiteLink
                                className={
                                  "col-span-2 md:col-span-1 relative group cursor-pointer block"
                                }
                                href={inkBy["Flexo"].href}
                              >
                                <div
                                  data-flexo=""
                                  className={inkCard}
                                  style={cssStyle(
                                    "height: clamp(180px, 26vh, 350px)",
                                  )}
                                >
                                  <img
                                    alt={"Flexo"}
                                    loading={"lazy"}
                                    className={inkImage}
                                    src={inkBy["Flexo"].image}
                                  />
                                </div>
                                <div className={"mt-2 md:mt-3 text-center"}>
                                  <h3 className={inkTitle}>Flexo</h3>
                                </div>
                              </SiteLink>
                              <SiteLink
                                className={
                                  "col-span-2 relative group cursor-pointer block"
                                }
                                href={inkBy["Silk Screen"].href}
                              >
                                <div
                                  data-silk-screen=""
                                  className={inkCard}
                                  style={cssStyle(
                                    "height: clamp(150px, 22vh, 300px)",
                                  )}
                                >
                                  <img
                                    alt={"Silk Screen"}
                                    loading={"lazy"}
                                    className={inkImage}
                                    src={inkBy["Silk Screen"].image}
                                  />
                                </div>
                                <div className={"mt-2 md:mt-3 text-center"}>
                                  <h3 className={inkTitle}>Silk Screen</h3>
                                </div>
                              </SiteLink>
                            </div>
                            <div className={"grid grid-cols-3 gap-4"}>
                              <SiteLink
                                className={
                                  "col-span-2 md:col-span-1 relative group cursor-pointer block"
                                }
                                href={inkBy["Metal Coating"].href}
                              >
                                <div
                                  data-metal-coating=""
                                  className={inkCard}
                                  style={cssStyle(
                                    "height: clamp(180px, 26vh, 350px)",
                                  )}
                                >
                                  <img
                                    alt={"Metal Coating"}
                                    loading={"lazy"}
                                    className={inkImage}
                                    src={inkBy["Metal Coating"].image}
                                  />
                                </div>
                                <div className={"mt-2 md:mt-3 text-center"}>
                                  <h3 className={inkTitle}>Metal Coating</h3>
                                </div>
                              </SiteLink>
                              <SiteLink
                                className={
                                  "col-span-2 relative group cursor-pointer block"
                                }
                                href={inkBy["Rotogravure"].href}
                              >
                                <div
                                  data-rotogravure=""
                                  className={inkCard}
                                  style={cssStyle(
                                    "height: clamp(150px, 22vh, 300px)",
                                  )}
                                >
                                  <img
                                    alt={"Rotogravure"}
                                    loading={"lazy"}
                                    className={inkImage}
                                    src={inkBy["Rotogravure"].image}
                                  />
                                </div>
                                <div className={"mt-2 md:mt-3 text-center"}>
                                  <h3 className={inkTitle}>Rotogravure</h3>
                                </div>
                              </SiteLink>
                            </div>
                          </div>
                        </div>
                        <div>
                          <SiteLink
                            className={"relative group cursor-pointer block"}
                            href={inkBy["Textile"].href}
                          >
                            <div
                              style={cssStyle(
                                "margin-top: 1vh; border-radius: 15px; position: relative; overflow: hidden",
                              )}
                            >
                              <div
                                data-textile=""
                                className={
                                  "relative rounded-[15px] md:rounded-[20px] overflow-hidden transition-all duration-300 mx-auto"
                                }
                                style={cssStyle(
                                  "height: clamp(380px, 52vh, 680px); max-width: 85%",
                                )}
                              >
                                <img
                                  alt={"Textile"}
                                  loading={"lazy"}
                                  className={
                                    "object-cover transition-transform duration-300 absolute inset-0 w-full h-full"
                                  }
                                  src={inkBy["Textile"].image}
                                />
                              </div>
                            </div>
                            <div className={"mt-2 md:mt-3 text-center"}>
                              <h3 className={inkTitle}>Textile</h3>
                            </div>
                          </SiteLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Tinting Centers */}
            <div
              className={"w-full"}
              style={cssStyle(
                "flex-shrink: 0; padding-bottom: 2rem; padding-top: 2rem",
              )}
            >
              <div
                className={"text-center px-2"}
                style={cssStyle("padding-bottom: 2rem")}
              >
                <h2 className={sectionHeading}>Tinting Centers</h2>
              </div>
              <div
                className={
                  "relative w-[96%] sm:w-[98%] mx-auto rounded-2xl md:rounded-3xl overflow-hidden"
                }
                style={cssStyle("height: 50vh; min-height: 50vh")}
              >
                <div
                  className={
                    "relative overflow-hidden h-full w-full rounded-2xl md:rounded-3xl"
                  }
                >
                  <img
                    alt={"Tinting Centers Background"}
                    loading={"lazy"}
                    className={
                      "object-cover object-center absolute inset-0 w-full h-full"
                    }
                    src={home.images.tinting}
                  />
                  <div
                    className={
                      "absolute z-10 flex flex-col items-start text-left"
                    }
                    style={cssStyle("top: 35%; left: 3%")}
                  >
                    <h2
                      className={
                        "font-bold font-poppins drop-shadow-lg text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black"
                      }
                    >
                      Tinting Centers
                    </h2>
                  </div>
                  <div
                    className={
                      "absolute z-10 flex flex-col items-start text-left"
                    }
                    style={cssStyle("top: 50%; left: 3%")}
                  >
                    <p
                      className={
                        "font-manrope text-xs sm:text-sm md:text-base lg:text-lg drop-shadow-lg text-black"
                      }
                    >
                      Professional color mixing and tinting services for all
                      your painting needs
                    </p>
                  </div>
                  <div
                    className={
                      "absolute z-10 flex justify-center md:justify-start items-center"
                    }
                    style={cssStyle("top: 65%; left: 3%")}
                  >
                    <SiteLink
                      href={"/tinting-center"}
                      className={
                        "inline-flex items-center justify-center rounded-3xl font-medium transition-all duration-200 text-white hover:scale-105 active:scale-95 h-8 px-3 text-xs sm:h-12 sm:px-6 sm:text-lg"
                      }
                      style={cssStyle("background-color: #f65c00")}
                    >
                      Find Centers
                    </SiteLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className={"w-full"} style={cssStyle(sectionStyle)}>
              <div
                className={"text-center px-2"}
                style={cssStyle("padding-bottom: 2rem")}
              >
                <h2 className={sectionHeading}>Contact Us</h2>
              </div>
              <div className={"w-[96%] sm:w-[98%] mx-auto"}>
                <section
                  id={"contact"}
                  className={"w-full py-8 md:py-12 lg:py-16 md:h-full"}
                >
                  <div
                    className={
                      "relative w-[96%] sm:w-[98%] mx-auto h-auto md:h-full rounded-xl overflow-hidden"
                    }
                  >
                    <div data-contact-layout="" className={"flex flex-col md:flex-row h-full gap-4"}>
                      <div
                        className={
                          "w-full md:w-[40%] h-[300px] sm:h-[400px] md:h-auto rounded-xl overflow-hidden relative"
                        }
                      >
                        <img
                          alt={"Contact Background"}
                          loading={"lazy"}
                          className={
                            "object-cover object-center absolute inset-0 w-full h-full"
                          }
                          src={home.images.contact}
                        />
                        <div
                          className={
                            "absolute z-10 flex flex-col items-start text-left"
                          }
                          style={cssStyle("top: 20%; left: 10%")}
                        >
                          <h2
                            className={
                              "font-bold font-poppins text-white drop-shadow-lg text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                            }
                          >
                            Get In Touch
                          </h2>
                        </div>
                      </div>
                      <div
                        className={
                          "w-full md:w-[60%] h-auto md:h-full bg-[#CDCDCD] flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 rounded-xl"
                        }
                      >
                        <div className={"w-full max-w-4xl"}>
                          <form
                            data-contact-form=""
                            action={"/api/contact"}
                            method={"post"}
                            className={"space-y-4 md:space-y-6"}
                            noValidate
                          >
                            <div>
                              <label htmlFor={"name"} className={labelClass}>
                                Name
                              </label>
                              <input
                                type={"text"}
                                id={"name"}
                                name={"name"}
                                required
                                className={inputClass}
                                placeholder={"Enter your name"}
                              />
                            </div>
                            <div
                              className={
                                "grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
                              }
                            >
                              <div>
                                <label htmlFor={"city"} className={labelClass}>
                                  City
                                </label>
                                <input
                                  type={"text"}
                                  id={"city"}
                                  name={"city"}
                                  required
                                  className={inputClass}
                                  placeholder={"Enter your city"}
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor={"category"}
                                  className={labelClass}
                                >
                                  Choose
                                </label>
                                <select
                                  id={"category"}
                                  name={"category"}
                                  required
                                  className={inputClass}
                                >
                                  <option value={""}>Select an option</option>
                                  {home.contactCategories.map((c, index4) => {
                                    return (
                                      <Fragment key={index4}>
                                        <option value={c.value}>
                                          {c.label}
                                        </option>
                                      </Fragment>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div
                              className={
                                "grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4"
                              }
                            >
                              <div className={"space-y-3 md:space-y-4"}>
                                <div>
                                  <label
                                    htmlFor={"email"}
                                    className={labelClass}
                                  >
                                    Email
                                  </label>
                                  <input
                                    type={"email"}
                                    id={"email"}
                                    name={"email"}
                                    required
                                    className={inputClass}
                                    placeholder={"Enter your email"}
                                  />
                                </div>
                                <div
                                  className={"grid grid-cols-2 gap-2 items-end"}
                                >
                                  <div className={"flex flex-col"}>
                                    <label
                                      htmlFor={"countryCode"}
                                      className={labelClass}
                                    >
                                      Country Code
                                    </label>
                                    <select
                                      defaultValue={home.defaultCountryCode}
                                      id={"countryCode"}
                                      name={"countryCode"}
                                      className={
                                        "w-full h-10 md:h-12 px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                      }
                                    >
                                      {countries.map((c, index5) => {
                                        return (
                                          <Fragment key={index5}>
                                            <option value={c.code}>
                                              {c.flag} {c.name} ({c.code})
                                            </option>
                                          </Fragment>
                                        );
                                      })}
                                    </select>
                                  </div>
                                  <div className={"flex flex-col"}>
                                    <label
                                      htmlFor={"phone"}
                                      className={labelClass}
                                    >
                                      Phone
                                    </label>
                                    <input
                                      type={"tel"}
                                      id={"phone"}
                                      name={"phone"}
                                      required
                                      className={
                                        "w-full h-10 md:h-12 px-2 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                                      }
                                      placeholder={"Enter your phone number"}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div>
                                <label
                                  htmlFor={"message"}
                                  className={labelClass}
                                >
                                  Message
                                </label>
                                <textarea
                                  id={"message"}
                                  name={"message"}
                                  rows={"5"}
                                  required
                                  className={`${inputClass} resize-none`}
                                  placeholder={"Enter your message"}
                                ></textarea>
                              </div>
                            </div>
                            <div
                              data-form-status=""
                              className={"form-status hidden"}
                              role={"status"}
                            ></div>
                            <div className={"pt-2 md:pt-4"}>
                              <button
                                type={"submit"}
                                className={
                                  "inline-flex items-center justify-center rounded-3xl font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 text-white active:scale-95 h-10 px-4 sm:h-14 sm:px-8 sm:text-xl w-full hover:bg-[#512178] text-sm md:text-base py-2 md:py-3"
                                }
                                style={cssStyle("background-color: #512178")}
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
