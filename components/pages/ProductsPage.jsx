import { Fragment } from "react";
import SiteLink from "../SiteLink";
import site from "../../config/site";
import { cssStyle, formatDate } from "../../lib/presentation";
import ProductCard from "../ProductCard";

export default function ProductsPage({
  category,
  subcategories,
  products,
  activeSubcategory,
  query,
  isVisible,
  visibleCount,
} = {}) {
  return (
    <>
      <div className={"bg-gray-50"}>
        <div
          className={"w-[98%] mx-auto pb-8"}
          data-products-page=""
          data-all-label={category.allLabel}
        >
          <div
            className={
              "w-[96%] sm:w-[98%] h-[40vh] md:h-[50vh] rounded-xl bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
            }
            style={cssStyle(
              `padding-top: calc(60px + 2vh); margin-top: 2vh; background-image: url('${category.heroImage}')`,
            )}
          >
            <div
              className={"absolute inset-0 bg-black bg-opacity-40 rounded-xl"}
            ></div>
            <div className={"relative z-10 text-center text-white px-4"}>
              <h1
                className={
                  "font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4"
                }
              >
                {category.title}
              </h1>
              <p
                className={
                  "font-manrope text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl opacity-90 mb-4 md:mb-6 px-2"
                }
              >
                {category.description}
              </p>
            </div>
          </div>

          <div className={"w-[98%] mx-auto py-4 md:py-8"}>
            <div className={"w-[98%] max-w-7xl mx-auto px-2"}>
              <form
                className={"relative"}
                action={""}
                method={"get"}
                role={"search"}
              >
                {activeSubcategory ? (
                  <>
                    <input
                      type={"hidden"}
                      name={"subcategory"}
                      defaultValue={activeSubcategory.subcategoryEn}
                    />
                  </>
                ) : null}
                <input
                  data-product-search=""
                  name={"q"}
                  defaultValue={query}
                  placeholder={
                    "Search products by name, code, or subcategory..."
                  }
                  className={
                    "w-full p-3 md:p-4 pl-10 md:pl-12 text-sm md:text-base lg:text-lg rounded-xl md:rounded-2xl transition-colors"
                  }
                  type={"search"}
                  style={cssStyle(
                    "border: 2px solid rgba(79, 39, 119, 0.3); background-color: rgba(79, 39, 119, 0.05)",
                  )}
                />
                <div
                  className={
                    "absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2"
                  }
                >
                  <svg
                    className={"w-4 h-4 md:w-5 md:h-6 text-gray-400"}
                    fill={"none"}
                    stroke={"currentColor"}
                    viewBox={"0 0 24 24"}
                  >
                    <path
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                      strokeWidth={"2"}
                      d={"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}
                    ></path>
                  </svg>
                </div>
              </form>
            </div>
          </div>

          <div className={"w-[98%] mx-auto pb-4 md:pb-8"}>
            <div className={"w-[98%]"}>
              <div className={"max-w-7xl mx-auto px-2"}>
                <div
                  className={
                    "flex gap-2 md:gap-3 pb-4 overflow-x-auto scrollbar-hide"
                  }
                >
                  <SiteLink
                    href={"?"}
                    data-subcategory-filter={""}
                    title={"All Products"}
                    className={`filter-btn ${activeSubcategory ? "" : "is-active"} flex-shrink-0 px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl flex items-center justify-center gap-1.5 md:gap-2 transition-all duration-200 whitespace-nowrap`}
                  >
                    <span className={"text-xs md:text-sm lg:text-base"}>
                      All Products
                    </span>
                  </SiteLink>
                  {subcategories.map((sub, index0) => {
                    return (
                      <Fragment key={index0}>
                        <SiteLink
                          href={`?subcategory=${encodeURIComponent(sub.subcategoryEn.trim())}`}
                          data-subcategory-filter={sub._id}
                          data-subcategory-name={sub.subcategoryEn.trim()}
                          title={sub.subcategoryEn.trim()}
                          className={`filter-btn ${activeSubcategory && activeSubcategory._id === sub._id ? "is-active" : ""} flex-shrink-0 px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl flex items-center justify-center gap-1.5 md:gap-2 transition-all duration-200 whitespace-nowrap`}
                        >
                          <span className={"text-xs md:text-sm lg:text-base"}>
                            {sub.subcategoryEn.trim()}
                          </span>
                        </SiteLink>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className={"w-full pb-12"}>
            <div
              className={
                "w-[94%] md:w-[98%] ml-[3%] md:ml-[1%] mr-[3%] md:mr-[1%]"
              }
            >
              <div className={"max-w-7xl mx-auto"}>
                <div className={"text-center mb-6 md:mb-8 px-2"}>
                  <h2
                    data-products-heading=""
                    className={
                      "font-poppins text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2"
                    }
                  >
                    {activeSubcategory
                      ? activeSubcategory.subcategoryEn.trim()
                      : category.allLabel}{" "}
                    ({visibleCount})
                  </h2>
                </div>
                <div
                  data-products-grid=""
                  className={
                    "products-grid grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
                  }
                >
                  {products.map((product, index1) => {
                    return (
                      <Fragment key={index1}>
                        <ProductCard
                          product={product}
                          visible={isVisible(product)}
                        />
                      </Fragment>
                    );
                  })}
                </div>
                <div
                  data-products-empty=""
                  className={`${visibleCount ? "hidden" : ""} text-center py-8 md:py-12 px-2`}
                >
                  <p
                    className={
                      "font-manrope text-xs sm:text-sm md:text-base lg:text-lg text-gray-500"
                    }
                  >
                    No products available in this category.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
