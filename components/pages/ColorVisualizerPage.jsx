import { Fragment, cloneElement } from "react";
import SiteLink from "../SiteLink";
import site from "../../config/site";
import { cssStyle, formatDate } from "../../lib/presentation";

export default function ColorVisualizerPage({
  sofas,
  counts,
  defaultColor,
} = {}) {
  const copyIcon = (
    <svg
      className={"w-4 h-4 text-gray-700"}
      fill={"none"}
      stroke={"currentColor"}
      viewBox={"0 0 24 24"}
    >
      <path
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={
          "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        }
      ></path>
    </svg>
  );
  const chevron = (
    <svg
      data-chevron=""
      className={
        "w-4 h-4 md:w-6 md:h-6 transition-transform duration-200 text-black flex-shrink-0"
      }
      fill={"none"}
      stroke={"currentColor"}
      viewBox={"0 0 24 24"}
    >
      <path
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"M19 9l-7 7-7-7"}
      ></path>
    </svg>
  );
  const panelStyle =
    "border-radius: 20px; border: 1px solid #6b7280; background-color: rgba(255, 255, 255, 0.8); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2)";
  const popupStyle =
    "border: 1px solid #6b7280; background-color: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px)";
  return (
    <>
      <div
        className={"min-h-screen bg-transparent"}
        data-visualizer=""
        data-sofas={JSON.stringify(sofas)}
      >
        <div
          data-wall=""
          className={
            "main-container w-full md:w-[99%] flex items-center justify-center relative md:rounded-[20px] overflow-hidden"
          }
          style={cssStyle(
            `min-height: 95vh; padding-top: calc(60px + 2vh); margin: 1.5vh 1.5vh 5vh; background-color: ${defaultColor.hexCode}; transition: background-color 0.4s ease`,
          )}
        >
          <div
            className={
              "absolute top-[15%] left-1/2 transform -translate-x-1/2 z-30 text-center px-4"
            }
          >
            <h1
              className={
                "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 text-white"
              }
              style={cssStyle("text-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px")}
            >
              Color Visualizer
            </h1>
            <p
              className={
                "text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl opacity-90 px-2 text-white"
              }
              style={cssStyle("text-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px")}
            >
              Visualize your home in colors
            </p>
          </div>

          <div
            className={
              "absolute inset-0 z-20 flex items-end justify-center overflow-hidden"
            }
          >
            <picture className={"w-full h-full"}>
              <source
                data-sofa-mobile=""
                media={"(max-width: 767px)"}
                srcSet={sofas[0].mobile}
              />
              <img
                data-sofa-image=""
                src={sofas[0].desktop}
                alt={"Living room with sofa"}
                className={
                  "w-full h-full object-cover transition-all duration-500 ease-in-out"
                }
                style={cssStyle("object-position: center")}
              />
            </picture>
            <div
              className={
                "absolute inset-0 bg-black bg-opacity-30 pointer-events-none"
              }
            ></div>
          </div>

          <div
            className={
              "absolute bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-[30%] md:bottom-auto md:left-4 lg:left-8 z-40 flex flex-row md:flex-col px-2 md:px-0 color-visualizer-buttons w-[95vw] md:w-auto md:min-w-[400px]"
            }
            style={cssStyle("gap: 2vh")}
          >
            {/* Sofa colour */}
            <div
              className={"flex-1 md:flex-none flex flex-col relative"}
              data-picker=""
            >
              <button
                type={"button"}
                data-picker-toggle=""
                aria-expanded={"false"}
                className={
                  "flex items-center gap-2 md:gap-3 w-full py-3 px-4 md:py-5 md:px-5 min-h-12 md:h-[60px] text-sm md:text-base"
                }
                style={cssStyle(panelStyle)}
              >
                <span
                  data-sofa-dot=""
                  className={
                    "flex-shrink-0 border-2 border-white rounded-full w-[18px] h-[18px] md:w-6 md:h-6"
                  }
                  style={cssStyle(
                    `background-color: ${sofas[0].hex}; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)`,
                  )}
                ></span>
                <span
                  className={
                    "text-sm md:text-base font-bold flex-1 text-left text-black"
                  }
                >
                  SOFA COLOR
                </span>
                <span
                  className={
                    "hidden md:flex items-center gap-2 flex-shrink-0 rounded-[20px] bg-[#fef3e7] border-2 border-[#e5e7eb] py-2 px-3"
                  }
                >
                  <span
                    data-sofa-hex=""
                    className={"text-sm font-bold text-black"}
                  >
                    {sofas[0].hex}
                  </span>
                </span>
                {chevron}
              </button>
              <div
                data-picker-popup=""
                className={
                  "color-popup hidden mt-1 md:mt-2 z-50 overflow-y-auto max-h-[25vh] md:max-h-[30vh] scrollbar-hide rounded-lg p-3 md:p-4 w-full"
                }
                style={cssStyle(popupStyle)}
              >
                <h3
                  className={
                    "text-sm md:text-base lg:text-lg font-bold text-black mb-2 md:mb-3 text-center"
                  }
                >
                  SOFA COLOR
                </h3>
                <div
                  className={"flex flex-wrap gap-1.5 md:gap-2 justify-center"}
                >
                  {sofas.map((sofa, i) => {
                    return (
                      <Fragment key={i}>
                        <button
                          type={"button"}
                          data-sofa={i}
                          title={`Sofa ${i + 1} - ${sofa.hex}`}
                          className={`color-dot w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full transition-all duration-300 border-2 border-gray-300 ${i === 0 ? "is-active" : "opacity-50 hover:opacity-75"}`}
                          style={cssStyle(`background-color: ${sofa.hex}`)}
                        ></button>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Aeropolish wall colour */}
            <div
              className={"flex-1 md:flex-none flex flex-col relative"}
              data-picker=""
            >
              <button
                type={"button"}
                data-picker-toggle=""
                aria-expanded={"false"}
                className={
                  "flex items-center gap-2 md:gap-3 w-full py-3 px-4 md:py-5 md:px-5 min-h-12 md:h-[60px] text-sm md:text-base"
                }
                style={cssStyle(panelStyle)}
              >
                <span
                  data-wall-dot=""
                  className={
                    "flex-shrink-0 border-2 border-white rounded-full w-[18px] h-[18px] md:w-6 md:h-6"
                  }
                  style={cssStyle(
                    `background-color: ${defaultColor.hexCode}; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)`,
                  )}
                ></span>
                <span
                  className={
                    "text-sm md:text-base font-bold flex-1 text-left text-black"
                  }
                >
                  AEROPOLISH COLOR
                </span>
                <span
                  className={
                    "hidden md:flex items-center gap-2 flex-shrink-0 rounded-[20px] border-2 border-[#e5e7eb] py-2 px-3"
                  }
                  style={cssStyle("background-color: #fef3e7")}
                >
                  <span
                    data-wall-name=""
                    className={"text-sm font-bold text-black"}
                  >
                    {defaultColor.dataColorname}
                  </span>
                </span>
                {chevron}
              </button>
              <div
                data-picker-popup=""
                className={
                  "color-popup hidden mt-1 md:mt-2 z-50 overflow-y-auto max-h-[25vh] md:max-h-[35vh] scrollbar-hide rounded-lg p-3 md:p-4 w-full"
                }
                style={cssStyle(popupStyle)}
              >
                <div
                  className={
                    "flex flex-wrap gap-1 md:gap-1.5 justify-center mb-2 md:mb-3"
                  }
                >
                  {site.colorFamilies.map((family, index0) => {
                    return (
                      <Fragment key={index0}>
                        <button
                          type={"button"}
                          data-family={family.type}
                          title={`${family.label} (${counts[family.type] || 0})`}
                          className={
                            "color-dot w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full transition-all duration-300 opacity-50 hover:opacity-75"
                          }
                          style={cssStyle(`background-color: ${family.swatch}`)}
                        ></button>
                      </Fragment>
                    );
                  })}
                </div>
                <div
                  data-family-title=""
                  className={
                    "hidden text-center text-sm md:text-base lg:text-lg font-bold text-black mb-2 border-t border-gray-300 pt-2"
                  }
                ></div>
                <div
                  data-family-colors=""
                  className={"grid grid-cols-4 md:grid-cols-3 gap-0.5 md:gap-1"}
                ></div>
              </div>
            </div>

            <button
              type={"button"}
              data-copy-wall=""
              title={"Copy color code"}
              className={
                "self-start md:self-auto hidden md:inline-flex items-center gap-2 text-xs text-white/90 hover:text-white"
              }
            >
              {cloneElement(copyIcon, { className: "w-4 h-4 text-white" })}
              <span data-copy-label="">Copy color code</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
