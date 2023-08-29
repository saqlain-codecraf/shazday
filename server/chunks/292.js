"use strict";
exports.id = 292;
exports.ids = [292];
exports.modules = {

/***/ 9405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ products_featured)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/product-item/index.tsx
var product_item = __webpack_require__(8575);
;// CONCATENATED MODULE: ./components/products-featured/carousel/index.tsx


const ProductsCarousel = ({ products  })=>{
    if (!products) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Loading"
        });
    } else {
        var requireProduct = products.slice(0, 6);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "product-item-container",
        children: requireProduct.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(product_item/* default */.Z, {
                id: item.id,
                name: item.name,
                price: item.price,
                color: item.color,
                discount: item.discount,
                currentPrice: item.currentPrice,
                images: item.images
            }, item.id))
    });
};
/* harmony default export */ const carousel = (ProductsCarousel);

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
;// CONCATENATED MODULE: ./components/products-featured/index.tsx



const ProductsFeatured = ()=>{
    const fetcher = (url)=>fetch(url).then((res)=>res.json());
    const { data  } = external_swr_default()("/api/products", fetcher);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "section section-products-featured",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "story-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "story-heading",
                        style: {
                            color: "#454343"
                        },
                        children: "TASTEFUL DRY FRUITS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "dry-fruit-icon",
                        src: "/images/icons/dry-fruits.jpg",
                        width: 90,
                        height: 90,
                        alt: "perfect dry fruits"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "story-discovery",
                        children: "The Perfect Blend"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(carousel, {
                products: data
            })
        ]
    });
};
/* harmony default export */ const products_featured = (ProductsFeatured);


/***/ })

};
;