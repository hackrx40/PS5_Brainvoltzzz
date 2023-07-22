module.exports = {
  DreamProductCategories: [
    {
      id: 1,
      name: "Bajaj Services (More Rewarding)",
      key: "bajaj-services",
      type: "non-tech",
      products: [
        {
          id: 1,
          name: "Cards",
          key: "cards",
          image: "/ProductImages/card.png",
          investAmount: 17000,
        },
        {
          id: 2,
          name: "Insurance",
          key: "insurance",
          image: "/ProductImages/insurance.png",
          investAmount: 17000,
        },
        {
          id: 3,
          name: "Loans",
          key: "loans",
          image: "/ProductImages/loan.png",
          investAmount: 17000,
        },
      ],
    },
    {
      id: 2,
      name: "Audio Device",
      key: "audio-device",
      type: "tech",
      products: [
        {
          id: 1,
          name: "AirPods",
          key: "airpods",
          image: "/ProductImages/airpods.png",
          investAmount: 5000,
        },
        {
          id: 2,
          name: "AirPods Pro",
          key: "airpods-pro",
          image: "/ProductImages/airpods-pro.png",
          investAmount: 6500,
        },
        {
          id: 3,
          name: "Sony XMH5",
          key: "sony-xmh5",
          image: "/ProductImages/sony-xmh3.png",
          investAmount: 6000,
        },
        {
          id: 4,
          name: "OnePlus Buds",
          key: "oneplus-buds",
          image: "/ProductImages/oneplus-buds.png",
          investAmount: 3000,
        },
        {
          id: 5,
          name: "Nothing Ear(2)",
          key: "nothing-ear(2)",
          image: "/ProductImages/nothingear2.png",
          investAmount: 2500,
        },
        {
          id: 6,
          name: "Pixel Buds",
          key: "pixel-buds",
          image: "/ProductImages/pixelbuds.png",
          investAmount: 2500,
        },
      ],
    },
    {
      id: 3,
      name: "Wearables",
      key: "wearables",
      type: "tech",

      products: [
        {
          id: 1,
          name: "Amazfit GTR4",
          key: "amazfit-gtr4",
          image: "/ProductImages/amazfitgtr4.png",
          investAmount: 4000,
        },
        {
          id: 2,
          name: "Apple Watch",
          key: "apple-watch",
          image: "/ProductImages/apple-watch.png",
          investAmount: 11000,
        },
        {
          id: 3,
          name: "OnePlus Watch",
          key: "oneplus-watch",
          image: "/ProductImages/oneplus-watch.png",
          investAmount: 3500,
        },
        {
          id: 4,
          name: "Galaxy Watch 5",
          key: "galaxy-watch5",
          image: "/ProductImages/samsung-watch5.png",
          investAmount: 8000,
        },
        {
          id: 5,
          name: "Galaxy Watch 5 Pro",
          key: "galaxy-watch-5-Pro",
          image: "/ProductImages/samsungwatch5pro.png",
          investAmount: 12000,
        },
        {
          id: 6,
          name: "Apple Watch Ultra",
          key: "watch-ultra.png",
          image: "/ProductImages/apple-watch.png",
          investAmount: 21000,
        },
      ],
    },
    {
      id: 4,
      name: "Smartphones",
      key: "smartphones",
      type: "tech",
      products: [
        {
          id: 1,
          name: "iPhone 13",
          key: "iphone-13",
          image: "/ProductImages/iphone12.png",
          investAmount: 15000,
        },
        {
          id: 2,
          name: "Samsung Galaxy S22",
          key: "samsung-galaxy-s22",
          image: "/ProductImages/samsungs21.png",
          investAmount: 18000,
        },
        {
          id: 3,
          name: "OnePlus 11",
          key: "oneplus-11",
          image: "/ProductImages/oneplus11.png",
          investAmount: 14000,
        },
        {
          id: 4,
          name: "Google Pixel 7",
          key: "google-pixel-7",
          image: "/ProductImages/pixel7.png",
          investAmount: 12000,
        },
        {
          id: 5,
          name: "iPhone 14",
          key: "iphone-14",
          image: "/ProductImages/iphone14.png",
          investAmount: 16000,
        },
        {
          id: 6,
          name: "Samsung Z Flip",
          key: "samsung-z-flip",
          image: "/ProductImages/zflip.png",
          investAmount: 16000,
        },
      ],
    },
  ],
  TiersList: [
    {
      id: 1,
      key: "Bronze",
      name: "Bronze Saver",
      tokenStart: 0,
      tokenEnd: 1000,
      amountRatio: 0.15,
      image: "/Tiers/bronze.png",
      nonmonetaryRewards: [
        {
          id: 1,
          key: "warranty",
          name: "Warranty Extension",
          type: "tech",
          tokens: 900,
        },
      ],
      monetaryRewards: [
        {
          id: 1,
          key: "5%offon2",
          name: "5% Off On Second Product",
          type: "tech",
          tokens: 900,
        },
      ],
    },
    {
      id: 2,
      key: "Silver",
      name: "Silver Saver",
      tokenStart: 1001,
      tokenEnd: 6000,
      amountRatio: 0.18,
      image: "/Tiers/silver.png",
      nonmonetaryRewards: [
        {
          id: 1,
          key: "lowcost",
          name: "Low Cost EMI",
          type: "tech",
          tokens: 5000,
        },
      ],
      monetaryRewards: [
        {
          id: 1,
          key: "nonapplewatch",
          name: "550 Off On Werables",
          type: "tech",
          tokens: 5000,
        },
      ],
    },
    {
      id: 3,
      key: "Gold",
      name: "Gold Saver",
      tokenStart: 6001,
      tokenEnd: 15000,
      amountRatio: 0.2,
      image: "/Tiers/gold.png",
      nonmonetaryRewards: [
        {
          id: 1,
          key: "pricematch",
          name: "Price Matching",
          type: "tech",
          tokens: 13000,
        },
      ],
      monetaryRewards: [
        {
          id: 1,
          key: "5percentoff",
          name: "5% Off",
          type: "tech",
          tokens: 9000,
        },
        {
          id: 2,
          key: "audiooff",
          name: "750 Off On Audio Products",
          type: "tech",
          tokens: 15000,
        },
      ],
    },
    {
      id: 4,
      key: "Diamond",
      name: "Diamond Saver",
      tokenStart: 15001,
      tokenEnd: 25000,
      amountRatio: 0.23,
      image: "/Tiers/diamond.png",
      nonmonetaryRewards: [
        {
          id: 1,
          key: "pricelock",
          name: "Price Locking",
          type: "tech",
          tokens: 19000,
        },
        {
          id: 2,
          key: "duedateextension",
          name: "Due Date Extension",
          type: "non-tech",
          tokens: 22000,
        },
      ],
      monetaryRewards: [
        {
          id: 1,
          key: "10percentoff",
          name: "10% Off",
          type: "tech",
          tokens: 23000,
        },
        {
          id: 2,
          key: "noclaim",
          name: "No Claim Bonus",
          type: "non-tech",
          tokens: 16000,
        },
        {
          id: 3,
          key: "annualfeewavier",
          name: "Annual Fee Wavier",
          type: "non-tech",
          tokens: 19000,
        },
      ],
    },
    {
      id: 5,
      key: "Elite",
      name: "Elite Saver",
      tokenStart: 25000,
      tokenEnd: 50000,
      amountRatio: 0.25,
      image: "/Tiers/elite.png",
      nonmonetaryRewards: [
        {
          id: 1,
          key: "nocostemi",
          name: "No Cost EMI",
          type: "tech",
          tokens: 33000,
        },
        {
          id: 2,
          key: "combineddiscount",
          name: "F&F Combined Discount",
          type: "tech",
          tokens: 44000,
        },
      ],
      monetaryRewards: [
        {
          id: 1,
          key: "15percentoff",
          name: "15% Off",
          type: "tech",
          tokens: 34000,
        },
        {
          id: 2,
          key: "1500offf",
          name: "1500 OFF",
          type: "tech",
          tokens: 37000,
        },
        {
          id: 3,
          key: "flexipay",
          name: "Flexible Repayment Option",
          type: "non-tech",
          tokens: 45000,
        },
      ],
    },
  ],
  TransactionCategories: [
    {
      id: 1,
      name: "Food",
      key: "food",
      color: "#ff4500",
    },
    {
      id: 2,
      name: "Transport",
      key: "transport",
      color: "#FFA500",
    },
    {
      id: 3,
      name: "Installment",
      key: "installment",
      color: "#73e373",
    },
    {
      id: 4,
      name: "Electronics",
      key: "electronics",
      color: "#4682B4",
    },
    {
      id: 5,
      name: "Others",
      key: "others",
      color: "#483d8b",
    },
    {
      id: 6,
      name: "ATM",
      key: "atm",
      color: "#00bfff",
    },
    {
      id: 7,
      name: "UPI",
      key: "upi",
      color: "#00ced1",
    },
  ],
};
