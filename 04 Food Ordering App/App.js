import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
// import Card from "./Card";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const restObj =
// [ {
//    "cardType": "messageCard",
//    "layoutAlignmentType": "VERTICAL",
//    "data": {
//      "type": "messageCard",
//      "data": {
//        "message": "All Restaurants"
//      },
//      "subtype": "sortedRestaurantCount",
//      "sticky": 1
//    },
//    "parentWidget": false
//  },
//  {
//    "cardType": "restaurant",
//    "layoutAlignmentType": "VERTICAL",
//    "data": {
//      "type": "restaurant",
//      "data": {
//        "type": "F",
//        "id": "129390",
//        "name": "Jay Bhavani Vadapav",
//        "uuid": "64eb3570-e472-41b9-a227-25f32ba1f2a0",
//        "city": "10",
//        "area": "Navrangpura",
//        "totalRatingsString": "1000+ ratings",
//        "cloudinaryImageId": "srpzyib5twe2gunhvdvr",
//        "cuisines": [
//          "Snacks",
//          "American",
//          "Pizzas",
//          "Beverages"
//        ],
//        "tags": [

//        ],
//        "costForTwo": 10000,
//        "costForTwoString": "₹100 FOR TWO",
//        "deliveryTime": 35,
//        "minDeliveryTime": 35,
//        "maxDeliveryTime": 35,
//        "slaString": "35 MINS",
//        "lastMileTravel": 9.5,
//        "slugs": {
//          "restaurant": "jay-bhavani-vadapav-c-g-road-navrangpura",
//          "city": "ahmedabad"
//        },
//        "cityState": "10",
//        "address": "Shop no 9. GF block A Ganesh Plaza C.G.road  Nr.Narvangpura Bus Stand Navranpura, Ahmedabad, Gujarat -380009",
//        "locality": "C G Road",
//        "parentId": 4428,
//        "unserviceable": false,
//        "veg": true,
//        "select": false,
//        "favorite": false,
//        "tradeCampaignHeaders": [

//        ],
//        "chain": [

//        ],
//        "feeDetails": {
//          "fees": [
//            {
//              "name": "distance",
//              "fee": 9500,
//              "message": ""
//            },
//            {
//              "name": "time",
//              "fee": 0,
//              "message": ""
//            },
//            {
//              "name": "special",
//              "fee": 0,
//              "message": ""
//            }
//          ],
//          "totalFees": 9500,
//          "message": "",
//          "title": "Delivery Charge",
//          "amount": "9500",
//          "icon": ""
//        },
//        "availability": {
//          "opened": true,
//          "nextOpenMessage": "",
//          "nextCloseMessage": ""
//        },
//        "longDistanceEnabled": 1,
//        "rainMode": "NONE",
//        "thirdPartyAddress": false,
//        "thirdPartyVendor": "",
//        "adTrackingID": "",
//        "badges": {
//          "imageBased": [

//          ],
//          "textBased": [

//          ],
//          "textExtendedBadges": [

//          ]
//        },
//        "lastMileTravelString": "9.5 kms",
//        "hasSurge": false,
//        "sla": {
//          "restaurantId": "129390",
//          "deliveryTime": 35,
//          "minDeliveryTime": 35,
//          "maxDeliveryTime": 35,
//          "lastMileTravel": 9.5,
//          "lastMileDistance": 0,
//          "serviceability": "SERVICEABLE",
//          "rainMode": "NONE",
//          "longDistance": "IT_IS_LONG_DISTANCE",
//          "preferentialService": false,
//          "iconType": "EMPTY"
//        },
//        "promoted": false,
//        "avgRating": "3.2",
//        "totalRatings": 1000,
//        "new": false
//      },
//      "subtype": "basic"
//    },
//    "parentWidget": false
//  }]

const restObj = [
  {
    info: {
      id: "394156",
      name: "Gajananad Pauva House",
      cloudinaryImageId: "rnxkixdvczpq4ubdef95",
      locality: "Jyotiplaza Complex",
      areaName: "Prahlad Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Beverages"],
      avgRating: 3.9,
      veg: true,
      feeDetails: {
        restaurantId: "394156",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "245961",
      avgRatingString: "3.9",
      totalRatingsString: "500+",
      promoted: true,
      adTrackingId:
        "cid=6739944~p=1~eid=00000188-0333-05ce-3d0b-d1fe0090012e~45995",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-11 00:00:00",
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
        header: "10% OFF",
        subHeader: "UPTO ₹40",
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
      link: "swiggy://menu?restaurant_id=394156",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "36191",
      name: "R.K. Egg Eatery",
      cloudinaryImageId: "fm7jin6qt8lhitzdmkl4",
      locality: "Vastrapur",
      areaName: "Himalaya Arcade",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Mughlai", "Snacks", "North Indian"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "36191",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "163871",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-17 00:00:00",
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
        header: "60% OFF",
        subHeader: "UPTO ₹120",
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
      link: "swiggy://menu?restaurant_id=36191",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "640207",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "gbpomiyqjcskfepffyjo",
      locality: "Thaltej taluka",
      areaName: "Vastrapur",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "640207",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "582",
      avgRatingString: "4.4",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-10 22:15:00",
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
      isNewlyOnboarded: true,
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=640207",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "121267",
      name: "Gajanand Pauva House",
      cloudinaryImageId: "coc0azguj2qywvrm5jej",
      locality: "Himalaya Arcade",
      areaName: "Vastrapur",
      costForTwo: "₹200 for two",
      cuisines: ["Street Food", "Snacks"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "121267",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "7615",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-10 06:59:00",
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
      link: "swiggy://menu?restaurant_id=121267",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "158450",
      name: "Jay Kalyan Poha Center",
      cloudinaryImageId: "dzjvhzvxp1x3axv9h1ld",
      locality: "ISRO",
      areaName: "Jodhpur Village",
      costForTwo: "₹100 for two",
      cuisines: ["Snacks"],
      avgRating: 3.9,
      veg: true,
      feeDetails: {
        restaurantId: "158450",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "110132",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=6539507~p=3~eid=00000188-0333-05ce-3d0b-d20000900373~45995",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-10 20:00:00",
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
      link: "swiggy://menu?restaurant_id=158450",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "43098",
      name: "Tea Post",
      cloudinaryImageId: "47a5a4f1020f6715556094680749bada",
      locality: "S G Highway",
      areaName: "opp iscon mega mall",
      costForTwo: "₹200 for two",
      cuisines: ["Beverages", "Fast Food", "Gujarati"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "43098",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4900,
      },
      parentId: "4509",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 7.6,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "7.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-11 02:00:00",
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
        header: "30% OFF",
        subHeader: "UPTO ₹75",
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
      link: "swiggy://menu?restaurant_id=43098",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "653542",
      name: "Manekchowk Sandwich\t",
      cloudinaryImageId: "7368ed44662f4da5852b1c883f60a08e",
      locality: "Vastrapur Road",
      areaName: "Vastrapur",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Beverages"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "653542",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "393257",
      avgRatingString: "3.9",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "37 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-10 11:59:00",
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
        header: "50% OFF",
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
      isNewlyOnboarded: true,
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=653542",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "354020",
      name: "Sandwich N Shakes",
      cloudinaryImageId: "yl40qzr05fdlhxfcgby0",
      locality: "Shivranjni",
      areaName: "Ambawadi",
      costForTwo: "₹100 for two",
      cuisines: ["Snacks", "Beverages"],
      avgRating: 2.9,
      feeDetails: {
        restaurantId: "354020",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "177032",
      avgRatingString: "2.9",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-11 04:59:00",
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
        header: "40% OFF",
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
      link: "swiggy://menu?restaurant_id=354020",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "37296",
      name: "Ab Chai Pe Charcha",
      cloudinaryImageId: "jfxawlhg7imqsydgdhb9",
      locality: "Shivranjani",
      areaName: "Ambawadi",
      costForTwo: "₹200 for two",
      cuisines: ["Snacks", "Beverages"],
      avgRating: 3.9,
      veg: true,
      feeDetails: {
        restaurantId: "37296",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3400,
      },
      parentId: "4666",
      avgRatingString: "3.9",
      totalRatingsString: "5K+",
      promoted: true,
      adTrackingId:
        "cid=6740907~p=4~eid=00000188-0333-05ce-3d0b-d2010090047b~45995",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-11 05:59:00",
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
      link: "swiggy://menu?restaurant_id=37296",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "491800",
      name: "Tamil Pasanga Cafe",
      cloudinaryImageId: "hjivmdrklmuqyrncuwlf",
      locality: "Vastrapur",
      areaName: "Amrapali Lakeview",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "491800",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "294921",
      avgRatingString: "4.4",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-10 23:59:00",
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
      link: "swiggy://menu?restaurant_id=491800",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "358021",
      name: "The Hungry House Kitchen",
      cloudinaryImageId: "rsktsoesjh3rg0zroasf",
      areaName: "Vastrapur",
      costForTwo: "₹200 for two",
      cuisines: ["Fast Food", "Burgers"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "358021",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "209878",
      avgRatingString: "3.8",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "43 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-10 08:00:00",
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
        header: "15% OFF",
        subHeader: "ABOVE ₹149",
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
      link: "swiggy://menu?restaurant_id=358021",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "224293",
      name: "Cake Eggless",
      cloudinaryImageId: "u9zuuwtw4clnmplvhcms",
      locality: "Navrangpura",
      areaName: "Vastrapur",
      costForTwo: "₹600 for two",
      cuisines: ["Desserts"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "224293",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "54867",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-17 00:00:00",
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
        header: "50% OFF",
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
      link: "swiggy://menu?restaurant_id=224293",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "168666",
      name: "Cake Bonzer Bites",
      cloudinaryImageId: "eqyqykgxqduewpor0hvv",
      locality: "Vidyanagar",
      areaName: "Vastrapur",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "168666",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "54771",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-17 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
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
      link: "swiggy://menu?restaurant_id=168666",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];

const Card = ({ restData }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    restData?.info || {};
  const { deliveryTime } = restData?.info.sla || {};

  return (
    <>
      <div className="card w-[300px] rounded-md border bg-[#F5F5F6]">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt="Laptop"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {name}
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {cuisines ? cuisines.join(", ") : " "}
          </p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-[#48C479]  text-[12px] px-3 py-1 text-[10px] font-bold text-gray-900">
              {avgRating} +
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-[#DB7C38] text-[12px] px-3 py-1 text-[10px] font-semibold text-gray-900">
              {deliveryTime} MINS
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-[#8A584B] text-[12px] px-3 py-1 text-[10px] font-semibold text-gray-900">
              {costForTwo}
            </span>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Let's Order
          </button>
        </div>
      </div>
    </>
  );
};

root.render(
  <>
    <Header />
    <div className="container">
      {restObj.map((rest) => (
        <Card key={rest.info.id} restData={rest} />
      ))}
    </div>
  </>
);
