import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Card from "./Card";

const root = ReactDOM.createRoot(document.getElementById("root"));

const resObj = [
  {
    info: {
      id: "63715",
      name: "Aryan Fast Food",
      cloudinaryImageId: "f5ci4nquk6wlhtx9lt2f",
      locality: "Chandkheda",
      areaName: "Chandkheda",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Chinese"],
      avgRating: 3.9,
      veg: true,
      feeDetails: {
        restaurantId: "63715",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "36586",
      avgRatingString: "3.9",
      totalRatingsString: "5K+",
      promoted: true,
      adTrackingId:
        "cid=6598245~p=5~eid=00000187-dd24-28c2-1f16-c65500820533~45995",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-02 23:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹700",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=63715",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "611273",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "yg2imqk5e1ivyx6tfa6j",
      locality: "Ranip",
      areaName: "NEW RANIP",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Mexican", "Desserts"],
      avgRating: 3.9,
      veg: true,
      feeDetails: {
        restaurantId: "611273",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "4961",
      avgRatingString: "3.9",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-02 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=611273",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "193610",
      name: "Subway",
      cloudinaryImageId: "0bf19a82b109b40c2f5c56d00f071a33",
      locality: "Gota",
      areaName: "Gota",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "193610",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-02 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=193610",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "63478",
      name: "Shivam Snacks",
      cloudinaryImageId: "bsy7xgbybc8ortboerek",
      locality: "Vandemataram Cross Wind",
      areaName: "Gota",
      costForTwo: "₹400 for two",
      cuisines: ["Snacks", "Indian", "South Indian"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "63478",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "7630",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-02 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=63478",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "591770",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "i3sa1wapjwymmj6zpl2v",
      locality: "Opp Satyamev Hospital",
      areaName: "Chandkheda",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "591770",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      promoted: true,
      adTrackingId:
        "cid=6685779~p=6~eid=00000187-dd24-28c2-1f16-c6560082066f~45995",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-03 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=591770",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "416822",
      name: "Ms Abu Dal Bati",
      cloudinaryImageId: "64458c2fd945362c003fe7617d0cfa54",
      locality: "Nirma University Road",
      areaName: "Nirma University Road",
      costForTwo: "₹150 for two",
      cuisines: ["Rajasthani"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "416822",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "140687",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-03 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹600",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=416822",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "502062",
      name: "Grameen Kulfi",
      cloudinaryImageId: "hcw5wfjlcem6ak7qblh9",
      locality: "Chandkheda",
      areaName: "Navrangpura",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      feeDetails: {
        restaurantId: "502062",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "12175",
      avgRatingString: "4.7",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-03 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=502062",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "664632",
      name: "9834 The Fruit Truck",
      cloudinaryImageId: "8c8be309fb7e3fd4a6c702c9270d26cb",
      locality: "Box Park",
      areaName: "Food Box Park, Gota",
      costForTwo: "₹200 for two",
      cuisines: ["Juices", "Beverages", "Desserts", "Healthy Food"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "664632",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3600,
      },
      parentId: "24369",
      avgRatingString: "4.4",
      totalRatingsString: "20+",
      promoted: true,
      adTrackingId:
        "cid=6613915~p=7~eid=00000187-dd24-28c2-1f16-c65700820756~45995",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-03 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=664632",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];


root.render(
  <>
    <Header />
    {resObj.map((res) => (<Card resData={res}/>))}
  </>
);
