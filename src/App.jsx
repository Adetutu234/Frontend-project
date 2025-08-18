import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Bags from './pages/Bags'
import Homepage from './pages/Homepage'
import Shoes from './pages/Shoes'
import Beauty from './pages/Beauty'
import Clothes from './pages/Clothes'
import Sports from './pages/Sports'
import Sales from './pages/Sales'
import ProductDetails from './components/ProductDetails'
import { CounterProvider } from './context/CounterContext'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Electronics from './pages/Electronics'

const App = () => {
const bags = [
  {
    id: 1,
    name: "Chanel Quilted Classic Flap Bag",
    category: "Fashion",
    quantity: 0,
    subcategory: ["Bags & Purses","Jewelry","Sunglasses", "Hair Clips","Belts","Watches"],
    image: "https://www.chanel.com/images///f_auto//-9543229145118.jpg",
    price: "₦2,500,000",
    color: ["black", "beige","red","navy", "white"],
    sizes: ["Midi", "Maxi"],
    brand: "Chanel",
    stock: 10,
    details: [
      "Iconic double C turn-lock clasp",
      "Lambskin leather with diamond quilting",
      "Gold-tone chain strap with leather interwoven"
    ],
    productSpecs: {
      sku: "CHANEL-CF-MED-BLK",
      productLine: "Classic Flap",
      model: "2025-QF",
      weight: 1.1,
      color: "black",
      mainMaterial: "Lambskin",
      madeIn: "France",
    },
    ratings: 4.9,
    reviewsCount: 211,
    tags: ["luxury", "designer", "chanel"],
    isFeatured: true,
    dateAdded: "2025-07-20"
  },
  {
    id: 2,
    name: "Dior Lady Dior Medium Bag",
    category: "Fashion",
    subcategory: "Bags",
    image: "https://assets.christiandior.com/is/image/diorprod/M0565OWCBM323_E01-1?$default_GHC$&crop=381,361,1155,1450&wid=1850&hei=2000&scale=0.875&bfc=on&qlt=85",
    price: "₦2,150,000",
    color: ["gray", "navy"],
    sizes: ["Medium"],
    brand: "Dior",
    stock: 8,
    details: [
      "Signature Dior Cannage stitching",
      "Detachable shoulder strap",
      "Polished metal 'D.I.O.R.' charms"
    ],
    productSpecs: {
      sku: "DIOR-LDY-GRY-M",
      productLine: "Lady Dior",
      model: "LD-2025",
      weight: 1.05,
      color: "gray",
      mainMaterial: "Calfskin",
      madeIn: "Italy",
    },
    ratings: 4.8,
    reviewsCount: 189,
    tags: ["elegant", "timeless", "dior"],
    isFeatured: false,
    dateAdded: "2025-07-15"
  },
  {
    id: 3,
    name: "Gucci Marmont Small Shoulder Bag",
    category: "Fashion",
    subcategory: "Bags",
    image: "https://cdn-images.farfetch-contents.com/12/96/49/36/12964936_54952067_1000.jpg",
    price: "₦1,350,000",
    color: ["red", "black"],
    sizes: ["Small"],
    brand: "Gucci",
    stock: 15,
    details: [
      "Matelassé chevron leather",
      "Double G antique gold-toned hardware",
      "Sliding chain strap"
    ],
    productSpecs: {
      sku: "GUCCI-MARM-SML-RED",
      productLine: "Marmont",
      model: "GG2025",
      weight: 0.9,
      color: "red",
      mainMaterial: "Leather",
      madeIn: "Italy",
    },
    ratings: 4.7,
    reviewsCount: 173,
    tags: ["gucci", "marmont", "chain bag"],
    isFeatured: true,
    dateAdded: "2025-07-21"
  },
  {
    id: 4,
    name: "Prada Saffiano Leather Tote",
    category: "Fashion",
    subcategory: "Bags",
    image: "https://www.cocoon.club/cdn/shop/products/PRADA_Double-Tote-Bag_Brown_Saffiano-Leather_FRONT.jpg?v=1737478304",
    price: "₦1,850,000",
    color: ["camel", "black"],
    sizes: ["Large"],
    brand: "Prada",
    stock: 12,
    details: [
      "Elegant structured silhouette",
      "Detachable shoulder strap",
      "Logo-engraved metal tag"
    ],
    productSpecs: {
      sku: "PRADA-SAFF-LG-CAM",
      productLine: "Saffiano Luxe",
      model: "PR-2025-XL",
      weight: 1.3,
      color: "camel",
      mainMaterial: "Saffiano leather",
      madeIn: "Italy",
    },
    ratings: 4.5,
    reviewsCount: 162,
    tags: ["prada", "structured", "luxury"],
    isFeatured: false,
    dateAdded: "2025-07-17"
  },
  {
    id: 5,
    name: "Hermès Birkin 30 Bag",
    category: "Fashion",
    subcategory: "Bags",
    image: "https://globalboutique.com/wp-content/uploads/2022/08/73-1200x1200.jpg",
    price: "₦9,500,000",
    color: ["etoupe", "gold"],
    sizes: ["30cm"],
    brand: "Hermès",
    stock: 3,
    details: [
      "Handcrafted with exquisite craftsmanship",
      "Palladium or gold hardware options",
      "Comes with lock and key clochette"
    ],
    productSpecs: {
      sku: "HERMES-BIRKIN-30-ETO",
      productLine: "Birkin",
      model: "BRK-30",
      weight: 1.5,
      color: "etoupe",
      mainMaterial: "Togo leather",
      madeIn: "France",
    },
    ratings: 5.0,
    reviewsCount: 78,
    tags: ["hermes", "birkin", "ultraluxury"],
    isFeatured: true,
    dateAdded: "2025-07-18"
  },
  {
    id: 6,
    name: "Balenciaga Hourglass Top Handle Bag",
    category: "Fashion",
    subcategory: "Bags",
    image: "https://images.bloomingdalesassets.com/is/image/BLM/products/0/optimized/11832930_fpx.tif",
    price: "₦1,600,000",
    color: ["black", "white"],
    sizes: ["Medium"],
    brand: "Balenciaga",
    stock: 9,
    details: [
      "Croc-embossed calfskin leather",
      "B-shaped magnetic closure",
      "Adjustable shoulder strap"
    ],
    productSpecs: {
      sku: "BALEN-HGLS-MED-BLK",
      productLine: "Hourglass",
      model: "BAG-2025",
      weight: 1.2,
      color: "black",
      mainMaterial: "Calfskin",
      madeIn: "Italy",
    },
    ratings: 4.6,
    reviewsCount: 123,
    tags: ["balenciaga", "structured", "statement"],
    isFeatured: false,
    dateAdded: "2025-07-22"
  },  {
    id: 7,
    name: "YSL Kate Chain Bag",
    image: "https://www.adornmillinery.com.au/wp-content/uploads/saint-laurent-grain-de-poudre-medium-monogram-kate-satchel-nude-00.jpg",
    price: "₦89,000",
    details: [
      "Iconic YSL logo hardware",
      "Gold-tone chain strap",
      "Magnetic flap closure"
    ],
    isFeatured: true,
    brand: "YSL",
    color: ["Black", "Burgundy", "Ivory"],
    productSpecs: {
      material: "Calfskin Leather",
      dimensions: "20 x 12 x 5 cm",
      compartments: "1 Main + Inner Zip"
    }
  },
  {
    id: 8,
    name: "Michael Kors Jet Set Travel Tote",
    image: "https://michaelkors.scene7.com/is/image/MichaelKors/35F4GTVT9L-0606_1?$large$",
    price: "₦64,500",
    details: [
      "Spacious interior",
      "Signature logo print",
      "Top zip closure"
    ],
    isFeatured: true,
    brand: "Michael Kors",
    color: ["Brown", "Vanilla", "Black"],
    productSpecs: {
      material: "Coated Canvas",
      dimensions: "28 x 25 x 14 cm",
      compartments: "1 Main + Pockets"
    }
  },
  {
    id: 9,
    name: "Prada Re-Edition Nylon Mini Bag",
    image: "https://images.squarespace-cdn.com/content/v1/580cf7ce6b8f5b3576a3da9f/1631916797778-POCZ410HYC1G7XCNOR6G/Screen+Shot+2021-09-17+at+6.13.06+PM.png",
    price: "₦98,000",
    details: [
      "Trendy nylon finish",
      "Adjustable strap",
      "Logo triangle plaque"
    ],
    isFeatured: true,
    brand: "Prada",
    color: ["Pink", "Black", "Yellow"],
    productSpecs: {
      material: "Nylon",
      dimensions: "18 x 12 x 6 cm",
      compartments: "1 Zip Compartment"
    }
  },
  {
    id: 10,
    name: "LV Neverfull MM Tote",
    image: "https://the-collectory.com/cdn/shop/files/LouisVuittonWildatHeartNeverfullMMM45856.webp?v=1693927150",
    price: "₦140,000",
    details: [
      "Signature monogram canvas",
      "Side laces to adjust shape",
      "Removable zip pouch"
    ],
    isFeatured: true,
    brand: "Louis Vuitton",
    color: ["Monogram", "Damier Azur", "Ebene"],
    productSpecs: {
      material: "Coated Canvas",
      dimensions: "31 x 28 x 14 cm",
      compartments: "Main + Detachable Pouch"
    }
  },
  {
    id: 11,
    name: "Charles & Keith Crescent Hobo Bag",
    image: "https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwb949ad28/images/hi-res/2024-L2-CK2-40151242-1-73-1.jpg?sw=756&sh=1008",
    price: "₦34,000",
    details: [
      "Minimalist curve design",
      "Zip-top closure",
      "Textured faux leather"
    ],
    isFeatured: false,
    brand: "Charles & Keith",
    color: ["Olive", "Cream", "Black"],
    productSpecs: {
      material: "Faux Leather",
      dimensions: "26 x 20 x 8 cm",
      compartments: "Main + Inner Pocket"
    }
  },
  {
    id: 12,
    name: "Telfar Medium Shopping Bag",
    image: "https://cdn.shopify.com/s/files/1/0880/7204/files/TELFAR-MEDIUM-TAN-SHOPPING-BAG-FRONT_245e3d8a-453b-4e49-903e-d8797453c84f.jpg?v=1701756587&width=800&height=800&crop=center",
    price: "₦58,000",
    details: [
      "Embossed logo",
      "Double strap handles",
      "Vegan leather"
    ],
    isFeatured: false,
    brand: "Telfar",
    color: ["Oxblood", "White", "Dark Green"],
    productSpecs: {
      material: "Vegan Leather",
      dimensions: "37 x 26 x 12 cm",
      compartments: "1 Main"
    }
  },
  {
    id: 13,
    name: "Coach Tabby Shoulder Bag 26",
    image: "https://img2.ans-media.com/i/840x1260/SS23-TOD21O-88X_F1.jpg?v=1673605403",
    price: "₦82,500",
    details: [
      "Signature hardware",
      "Convertible strap",
      "Pebbled leather"
    ],
    isFeatured: true,
    brand: "Coach",
    color: ["Tan", "Chalk", "Green"],
    productSpecs: {
      material: "Polished Pebble Leather",
      dimensions: "26 x 15 x 8 cm",
      compartments: "Main + Interior Zip"
    }
  },
  {
    id: 14,
    name: "Aldo Quilted Crossbody Bag",
    image: "https://cdn.mall.adeptmind.ai/https%3A%2F%2Fmedia.aldoshoes.com%2Fv3%2Fproduct%2Floraax%2F001-002-039%2Floraax_black_001-002-039_main_sq_gy_1200x1200.jpg_large.webp",
    price: "₦25,000",
    details: [
      "Quilted finish",
      "Chain strap",
      "Turn-lock closure"
    ],
    isFeatured: false,
    brand: "Aldo",
    color: ["Black", "Wine", "White"],
    productSpecs: {
      material: "PU Leather",
      dimensions: "22 x 14 x 7 cm",
      compartments: "1 Main + Divider"
    }
  },
  {
    id: 15,
    name: "Guess Noelle Elite Tote",
    image: "https://www.cilentodesignerwear.com/media/catalog/product/g/u/guess-noelle-elite-tote-brown-lf787923-cilento-1.jpg?store=default&image-type=image",
    price: "₦41,000",
    details: [
      "Logo-embossed texture",
      "Double handle straps",
      "Top zip closure"
    ],
    isFeatured: false,
    brand: "Guess",
    color: ["Rose", "Beige", "Navy"],
    productSpecs: {
      material: "PU Leather",
      dimensions: "32 x 24 x 14 cm",
      compartments: "Main + Slip Pockets"
    }
  },
  {
    id: 16,
    name: "Dior Book Tote Medium",
    image: "https://assets.christiandior.com/is/image/diorprod/M1324CETKM34I_E01?$default_GHC$&crop=267,274,1419,1514&wid=1850&hei=2000&scale=0.875&bfc=on&qlt=85",
    price: "₦155,000",
    details: [
      "Embroidered canvas",
      "Signature Dior logo",
      "Structured shape"
    ],
    isFeatured: true,
    brand: "Dior",
    color: ["Navy", "Beige", "Multicolor"],
    productSpecs: {
      material: "Canvas",
      dimensions: "36 x 28 x 17 cm",
      compartments: "Open Main Compartment"
    }
  },
  {
    id: 17,
    name: "Shein Mini Croc Satchel",
    image: "https://i.pinimg.com/736x/5f/6e/71/5f6e71682a3d40ed2c397d4fbdd8dfa3.jpg",
    price: "₦12,500",
    details: [
      "Crocodile print",
      "Mini top handle",
      "Removable strap"
    ],
    isFeatured: false,
    brand: "Shein",
    color: ["Lilac", "Mint", "Brown"],
    productSpecs: {
      material: "PU Leather",
      dimensions: "18 x 12 x 6 cm",
      compartments: "1 Zip"
    }
  },
  {
    id: 18,
    name: "Fendi Baguette Shoulder Bag",
    image: "https://static.fendi.com/dam/is/image/fendi/8BR600AFPMF1QI1_01?wid=1000&hei=1000&hash=44d827abc26d853cc772e9c81cc21300-197671b7c9c",
    price: "₦130,000",
    details: [
      "Flap with FF magnetic closure",
      "Adjustable shoulder strap",
      "Embroidered or leather variants"
    ],
    isFeatured: true,
    brand: "Fendi",
    color: ["Tan", "Black", "Gold"],
    productSpecs: {
      material: "Lambskin / Canvas",
      dimensions: "27 x 15 x 6 cm",
      compartments: "Main + Interior Zip"
    }
  },
  {
    id: 19,
    name: "Kate Spade Knott Satchel",
    image: "https://katespade.scene7.com/is/image/KateSpade/K4386_960?$mobileProductV3$",
    price: "₦48,000",
    details: [
      "Structured body",
      "Adjustable crossbody strap",
      "Soft pebble leather"
    ],
    isFeatured: false,
    brand: "Kate Spade",
    color: ["Blush", "Sky Blue", "Tan"],
    productSpecs: {
      material: "Pebbled Leather",
      dimensions: "24 x 18 x 10 cm",
      compartments: "Zip Top + Side Pockets"
    }
  },
  {
    id: 20,
    name: "Bottega Veneta Mini Jodie",
    image: "https://bottega-veneta.dam.kering.com/m/27082bd3e3bc16f5/Medium-651876VCPP52916_A.jpg?v=2",
    price: "₦175,000",
    details: [
      "Knotted handle",
      "Soft woven leather",
      "Rounded silhouette"
    ],
    isFeatured: true,
    brand: "Bottega Veneta",
    color: ["Lime", "Black", "White"],
    productSpecs: {
      material: "Lambskin Leather",
      dimensions: "28 x 23 x 8 cm",
      compartments: "1 Main"
    }
  }
];
const shoes = [
 {
    id: 21,
    name: "YSL Opyum Patent Leather Heels",
    image: "https://saint-laurent.dam.kering.com/m/642eebcb4a2bd17b/eCom-4720110NPVV1000_A.jpg?v=1",
    price: "₦67,000",
    details: [
      "Classic pointed toe",
      "Logo heel design",
      "Patent leather finish"
    ],
    isFeatured: true,
    brand: "YSL",
    color: ["Black", "Beige", "White"],
    sizes: [36, 37, 38, 39, 40],
    productSpecs: {
      heelHeight: "10 cm",
      material: "Patent Leather",
      sole: "Leather"
    }
  },
  {
    id: 22,
    name: "Christian Louboutin Red Bottom Pumps",
    image: "https://asia.christianlouboutin.com/media/catalog/product/cache/28/image/9df78eab33525d08d6e5fb8d27136e95/1/2/5/0/christianlouboutin-missz-1250939_B439_1_1200x1200_1744649775.jpg",
    price: "₦72,000",
    details: [
      "Signature red sole",
      "Glossy finish",
      "Elegant arch support"
    ],
    isFeatured: true,
    brand: "Louboutin",
    color: ["Red", "Black"],
    sizes: [37, 38, 39, 40, 41],
    productSpecs: {
      heelHeight: "12 cm",
      material: "Leather",
      sole: "Rubber"
    }
  },
  {
    id: 23,
    name: "Zara Block Heel Sandals",
    image: "https://i.pinimg.com/736x/b8/4d/d6/b84dd668deb4246ecbe26325d6555294.jpg",
    price: "₦23,500",
    details: [
      "Open toe design",
      "Adjustable strap",
      "Textured block heel"
    ],
    isFeatured: false,
    brand: "Zara",
    color: ["Nude", "Brown", "Black"],
    sizes: [36, 37, 38, 39],
    productSpecs: {
      heelHeight: "6 cm",
      material: "PU",
      sole: "Synthetic"
    }
  },
  {
    id: 24,
    name: "Kitten Heel Ankle Strap",
    image: "https://cdna.lystit.com/1040/1300/n/photos/cb97-2014/12/14/jcrew-black-dulci-patent-ankle-strap-kitten-heels-product-1-22322356-1-548435690-normal.jpeg",
    price: "₦28,000",
    details: [
      "Delicate kitten heel",
      "Strap with buckle",
      "Suede finish"
    ],
    isFeatured: false,
    brand: "Steve Madden",
    color: ["Blue", "Pink", "Grey"],
    sizes: [35, 36, 37, 38],
    productSpecs: {
      heelHeight: "4 cm",
      material: "Suede",
      sole: "Rubber"
    }
  },
  {
    id: 25,
    name: "Amina Muaddi Begum Glass Heels",
    image: "https://www.aminamuaddi.com/cdn/shop/files/S9S332544BEG_BEGUM_SLING_AZUR_SATIN-2.jpg?v=1687961367&width=960",
    price: "₦96,000",
    details: [
      "Crystal embellishment",
      "Transparent design",
      "Sculpted heel"
    ],
    isFeatured: true,
    brand: "Amina Muaddi",
    color: ["Clear", "Silver", "Nude"],
    sizes: [36, 37, 38, 39, 40],
    productSpecs: {
      heelHeight: "9.5 cm",
      material: "PVC",
      sole: "Leather"
    }
  },
  {
    id: 26,
    name: "Strappy Stiletto Sandals",
    image: "https://shop.mango.com/assets/rcs/pics/static/T4/fotos/S/47064414_99.jpg?imwidth=2048&imdensity=1&ts=1670945921471",
    price: "₦30,000",
    details: [
      "Minimalist straps",
      "Adjustable ankle closure",
      "Stiletto heel"
    ],
    isFeatured: false,
    brand: "Public Desire",
    color: ["White", "Tan", "Gold"],
    sizes: [36, 37, 38, 39],
    productSpecs: {
      heelHeight: "11 cm",
      material: "Faux Leather",
      sole: "Synthetic"
    }
  },
  {
    id: 27,
    name: "Versace Medusa Aevitas Platform",
    image: "https://cdn-images.farfetch-contents.com/20/49/81/39/20498139_50460357_600.jpg",
    price: "₦120,000",
    details: [
      "Chunky platform heel",
      "Ankle strap",
      "Signature Medusa charm"
    ],
    isFeatured: true,
    brand: "Versace",
    color: ["Black", "Red", "Gold"],
    sizes: [37, 38, 39, 40],
    productSpecs: {
      heelHeight: "14 cm",
      material: "Satin",
      sole: "Leather"
    }
  },
  {
    id: 28,
    name: "Nike Air Force 1 Shadow",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/67c44400-2268-4899-a90f-c4e8755c731f/W+AF1+SHADOW.png",
    price: "₦49,000",
    details: [
      "Layered design",
      "Chunky sole",
      "Streetwear essential"
    ],
    isFeatured: false,
    brand: "Nike",
    color: ["White", "Pink", "Lilac"],
    sizes: [38, 39, 40, 41],
    productSpecs: {
      heelHeight: "Flat",
      material: "Leather/Textile",
      sole: "Rubber"
    }
  },
  {
    id: 29,
    name: "Adidas Superstar Originals",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/478929/1.jpg?9963",
    price: "₦38,000",
    details: [
      "Classic shell toe",
      "Iconic 3-stripes",
      "Comfort fit"
    ],
    isFeatured: false,
    brand: "Adidas",
    color: ["White/Black", "White/Gold"],
    sizes: [36, 37, 38, 39, 40],
    productSpecs: {
      heelHeight: "Flat",
      material: "Leather",
      sole: "Rubber"
    }
  },
  {
    id: 30,
    name: "Balenciaga Track Sneakers",
    image: "https://cdn.salla.sa/RvPxw/h3m5N08MfZqbtSlJ1DZfWJ2XTJ2h5tH2vjZft1bJ.jpg",
    price: "₦130,000",
    details: [
      "Multi-panel design",
      "Lace-up front",
      "Thick sole"
    ],
    isFeatured: true,
    brand: "Balenciaga",
    color: ["White", "Black", "Grey"],
    sizes: [39, 40, 41, 42],
    productSpecs: {
      heelHeight: "Flat",
      material: "Mesh/Synthetic",
      sole: "Rubber"
    }
  },
  {
    id: 31,
    name: "ASOS Faux Suede Pumps",
    image: "https://www.charleskeith.eu/on/demandware.static/-/Sites-ck-products/default/dwa8fda1e9/images/hi-res/2024-L7-CK1-60280455-B8-1.jpg",
    price: "₦17,000",
    details: [
      "Simple slip-on",
      "Rounded toe",
      "Suede finish"
    ],
    isFeatured: false,
    brand: "ASOS",
    color: ["Beige", "Blush", "Burgundy"],
    sizes: [36, 37, 38, 39],
    productSpecs: {
      heelHeight: "5 cm",
      material: "Faux Suede",
      sole: "Synthetic"
    }
  },
  {
    id: 32,
    name: "Pointed Toe Court Heels",
    image: "https://www.emmylondon.com/cdn/shop/files/Rebecca-Court-Shoes-Midnight-1.jpg?v=1705510773",
    price: "₦25,000",
    details: [
      "Closed toe",
      "Office wear ready",
      "Smooth matte finish"
    ],
    isFeatured: true,
    brand: "Charles & Keith",
    color: ["Black", "Navy", "Camel"],
    sizes: [36, 37, 38, 39, 40],
    productSpecs: {
      heelHeight: "8 cm",
      material: "Faux Leather",
      sole: "Rubber"
    }
  }, {
    id: 33,
    name: "YSL Tribute Patent Leather Sandals",
    image: "https://www.mytheresa.com/media/1094/1238/100/8e/P00275223.jpg",
    price: "₦230,000",
    isFeatured: true,
    brand: "Yves Saint Laurent",
    color: ["black", "red", "nude"],
    details: [
      "Iconic tribute silhouette",
      "Patent leather finish",
      "Adjustable ankle strap"
    ],
    productSpecs: {
      heelHeight: "5 inches",
      material: "Patent Leather",
      type: "Platform Sandals",
      sizes: ["37", "38", "39", "40"]
    }
  },
  {
    id: 34,
    name: "Christian Louboutin So Kate Pumps",
    image: "https://us.christianlouboutin.com/media/catalog/product/3/1/3130694pk1a-3130694pk1a-main_image-ecommerce-christianlouboutin-sokate-3130694_pk1a_1_1200x1200.jpg",
    price: "₦350,000",
    isFeatured: true,
    brand: "Louboutin",
    color: ["beige", "black", "white"],
    details: [
      "Classic pointed-toe silhouette",
      "Signature red sole",
      "Glossy leather upper"
    ],
    productSpecs: {
      heelHeight: "4.7 inches",
      material: "Patent Leather",
      type: "Stiletto Pumps",
      sizes: ["36", "37", "38", "39", "40"]
    }
  },
  {
    id: 35,
    name: "Kitten Heels with Slingback Strap",
    image: "https://static.zara.net/assets/public/917d/f189/7e9445299ec8/8a1f57655223/11221510802-e1/11221510802-e1.jpg?ts=1739977524298",
    price: "₦28,000",
    isFeatured: false,
    brand: "Zara",
    color: ["white", "pink", "gold"],
    details: [
      "Low heel comfort",
      "Elegant pointed toe",
      "Minimalist design"
    ],
    productSpecs: {
      heelHeight: "1.5 inches",
      material: "Synthetic",
      type: "Kitten Heels",
      sizes: ["37", "38", "39", "40"]
    }
  },
  {
    id: 36,
    name: "Block Heel Cross Strap Sandals",
    image: "https://media3.newlookassets.com/i/newlook/859549870M1/womens/footwear/shoes/occasion-shoes/public-desire-pink-double-platform-block-heel-sandals.jpg?strip=true&qlt=50&w=720",
    price: "₦19,500",
    isFeatured: false,
    brand: "Public Desire",
    color: ["mint", "black", "tan"],
    details: [
      "Secure cross strap",
      "Chunky block heel",
      "Perfect for daily wear"
    ],
    productSpecs: {
      heelHeight: "3 inches",
      material: "Faux Leather",
      type: "Block Heels",
      sizes: ["36", "37", "38", "39", "40"]
    }
  },
  {
    id: 37,
    name: "Steve Madden Clear Strap Mules",
    image: "https://www.stevemadden.com/cdn/shop/files/STEVEMADDEN_SHOES_CLEARER_CLEAR_01.jpg?v=1690987301",
    price: "₦45,000",
    isFeatured: true,
    brand: "Steve Madden",
    color: ["clear", "nude"],
    details: [
      "Trendy see-through straps",
      "Slip-on style",
      "Great for both day & night"
    ],
    productSpecs: {
      heelHeight: "3.5 inches",
      material: "PVC and Leather",
      type: "Mules",
      sizes: ["37", "38", "39", "40", "41"]
    }
  },
  {
    id: 38,
    name: "Strappy Metallic Party Heels",
    image: "https://img.ltwebstatic.com/images3_pi/2024/04/25/e2/171401395863b7353a577220cb80c99fb900403e77_thumbnail_750x.webp",
    price: "₦32,000",
    isFeatured: false,
    brand: "Missguided",
    color: ["silver", "gold", "rose gold"],
    details: [
      "Bold party look",
      "Thin metallic straps",
      "Back zip for ease"
    ],
    productSpecs: {
      heelHeight: "4 inches",
      material: "Synthetic",
      type: "Strappy Heels",
      sizes: ["36", "37", "38", "39"]
    }
  },
  {
    id: 39,
    name: "Ankle Wrap Satin Sandals",
    image: "https://n.nordstrommedia.com/it/fcdce7de-2aac-470b-9dd9-e7737c63a637.jpeg?h=368&w=240&dpr=2",
    price: "₦27,500",
    isFeatured: false,
    brand: "ASOS",
    color: ["blue", "champagne", "purple"],
    details: [
      "Elegant satin fabric",
      "Long ankle wrap",
      "Perfect for wedding looks"
    ],
    productSpecs: {
      heelHeight: "3.5 inches",
      material: "Satin",
      type: "Wrap Heels",
      sizes: ["37", "38", "39", "40"]
    }
  },
  {
    id: 40,
    name: "Red Bow Peep-Toe Heels",
    image: "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/20725322_fpx.tif?$filterlrg$&wid=327",
    price: "₦22,000",
    isFeatured: false,
    brand: "Betsy Johnson",
    color: ["red", "black"],
    details: [
      "Charming front bow",
      "Peep-toe design",
      "Velvet-like finish"
    ],
    productSpecs: {
      heelHeight: "3 inches",
      material: "Velvet",
      type: "Peep-Toe Heels",
      sizes: ["36", "37", "38", "39"]
    }
  },
  {
    id: 41,
    name: "Square Toe Block Heels",
    image: "https://shop.mango.com/assets/rcs/pics/static/T5/fotos/S/57094772_99_B.jpg?imwidth=2048&imdensity=1&ts=1688646791450",
    price: "₦18,000",
    isFeatured: true,
    brand: "Mango",
    color: ["white", "tan"],
    details: [
      "Trendy square toe",
      "Thick supportive heel",
      "Daily wear favorite"
    ],
    productSpecs: {
      heelHeight: "2.5 inches",
      material: "PU Leather",
      type: "Block Heels",
      sizes: ["38", "39", "40", "41"]
    }
  },
  {
    id: 42,
    name: "Lucite Strap Heels",
    image: "https://i.ebayimg.com/images/g/YpwAAOSw8MBlCwNj/s-l1600.jpg",
    price: "₦29,500",
    isFeatured: false,
    brand: "Ego",
    color: ["clear", "silver"],
    details: [
      "Transparent PVC strap",
      "Illusion effect",
      "Minimalist party wear"
    ],
    productSpecs: {
      heelHeight: "4 inches",
      material: "PVC",
      type: "Stiletto",
      sizes: ["37", "38", "39"]
    }
  },
  {
    id: 43,
    name: "Embellished Heeled Sandals",
    image: "https://i.pinimg.com/736x/38/be/aa/38beaa59f9f106028eae37a82c895fd6.jpg",
    price: "₦31,000",
    isFeatured: false,
    brand: "River Island",
    color: ["gold", "black"],
    details: [
      "Stone embellishment on straps",
      "Luxury feel",
      "Adjustable buckle"
    ],
    productSpecs: {
      heelHeight: "3.5 inches",
      material: "Synthetic",
      type: "Embellished Heels",
      sizes: ["36", "37", "38", "39", "40"]
    }
  },
  {
    id: 44,
    name: "Braided Slide Mules",
    image: "https://di2ponv0v5otw.cloudfront.net/posts/2022/04/09/62522ac0e97e48746298a2e1/m_wp_62522ac0e97e48746298a2e2.webp",
    price: "₦24,000",
    isFeatured: false,
    brand: "Shein",
    color: ["brown", "white", "nude"],
    details: [
      "Braided strap style",
      "Open toe",
      "Slip-on comfort"
    ],
    productSpecs: {
      heelHeight: "2 inches",
      material: "Faux Leather",
      type: "Mules",
      sizes: ["37", "38", "39", "40"]
    }
  },
  {
    id: 45,
    name: "Luxury Pearl Strap Heels",
    image: "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/27932261_fpx.tif",
    price: "₦40,000",
    isFeatured: true,
    brand: "ALDO",
    color: ["white", "champagne"],
    details: [
      "Elegant pearl-embellished strap",
      "Satin finish",
      "Perfect for brides"
    ],
    productSpecs: {
      heelHeight: "3.5 inches",
      material: "Satin & Pearls",
      type: "Wedding Heels",
      sizes: ["37", "38", "39", "40", "41"]
    }
  },
  {
    id: 46,
    name: "Pointed Toe Lace-Up Pumps",
    image: "https://www.dunelondon.com.au/cdn/shop/files/CLARITY-0093503940050052_side.jpg?v=1705983751",
    price: "₦33,000",
    isFeatured: false,
    brand: "Dune London",
    color: ["black", "nude"],
    details: [
      "Lace-up ankle design",
      "Pointed front",
      "Chic office-to-evening look"
    ],
    productSpecs: {
      heelHeight: "3.5 inches",
      material: "Leather",
      type: "Pumps",
      sizes: ["37", "38", "39", "40"]
    }
  },
  {
    id: 47,
    name: "Sculpted Heel Sandals",
    image: "https://cultgaia.com/cdn/shop/files/CassidySandalIvoryMultiR_WEB.jpg?v=1731452139",
    price: "₦38,000",
    isFeatured: true,
    brand: "Cult Gaia",
    color: ["gold", "clear"],
    details: [
      "Unique sculpted heel design",
      "Modern and artsy",
      "Statement piece"
    ],
    productSpecs: {
      heelHeight: "4 inches",
      material: "Mixed",
      type: "Fashion Heels",
      sizes: ["38", "39", "40"]
    }
  },
  {
    id: 48,
    name: "Crisscross Strap Kitten Heels",
    image: "https://image.hm.com/assets/001/e7/8d/e78d3f76f516b546db4d3618a63551898017cee4.jpg?imwidth=2160",
    price: "₦20,500",
    isFeatured: false,
    brand: "H&M",
    color: ["lavender", "beige"],
    details: [
      "Low heel for daily wear",
      "Slingback comfort",
      "Soft color palette"
    ],
    productSpecs: {
      heelHeight: "1.5 inches",
      material: "PU",
      type: "Kitten Heels",
      sizes: ["37", "38", "39", "40"]
    }
  },
  {
    id: 49,
    name: "T-strap Rhinestone Evening Heels",
    image: "https://cdn11.bigcommerce.com/s-dviy1fvy0y/images/stencil/960w/products/4531/46364/O-BM87061M-PINK-1__53836.1743699949.jpg?c=2",
    price: "₦35,000",
    isFeatured: true,
    brand: "Badgley Mischka",
    color: ["silver", "champagne"],
    details: [
      "T-strap with rhinestones",
      "Special occasion design",
      "High elegance appeal"
    ],
    productSpecs: {
      heelHeight: "4 inches",
      material: "Satin & Rhinestone",
      type: "Evening Heels",
      sizes: ["36", "37", "38", "39"]
    }
  },
  {
    id: 50,
    name: "Gladiator Style Heel Sandals",
    image: "https://cdn-img.prettylittlething.com/a/0/0/5/a0054c9c9e98a3b3518fc58005e81872965d28da_CMZ9398_3_gold_metallic_strappy_gladiator_point_toe_heels.jpg",
    price: "₦26,000",
    isFeatured: false,
    brand: "PrettyLittleThing",
    color: ["black", "bronze"],
    details: [
      "Multi-strap gladiator design",
      "Zip-up back",
      "Fierce fashion look"
    ],
    productSpecs: {
      heelHeight: "3 inches",
      material: "Faux Leather",
      type: "Heeled Gladiators",
      sizes: ["37", "38", "39", "40", "41"]
    }
  }
]
const beautyProducts = [
 {
    id: 51,
    name: "Niacinamide Brightening Serum",
    image: "https://rhemabeautyshop.com/wp-content/uploads/2023/04/IMG_2649.webp",
    price: "₦12,000",
    isFeatured: true,
    brand: "The Ordinary",
    color: ["clear"],
    details: [
      "Reduces dark spots and uneven skin tone",
      "Formulated with 10% Niacinamide",
      "Ideal for oily or acne-prone skin"
    ],
    productSpecs: {
      size: "30ml",
      type: "Serum",
      skinType: "All",
      keyIngredient: "Niacinamide"
    }
  },
  {
    id: 52,
    name: "Ceramide Moisturizing Lotion",
    image: "https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/products-v3/daily-moisturizing-lotion/700x875/cerave_daily_moisturizing_lotion_12oz_front-700x875-v2.jpg?rev=c1f482b619984b46bd02512590f52dfc&w=900&hash=1CE688C6849CD2E3CA7FEFB78E0AE598",
    price: "₦15,500",
    isFeatured: false,
    brand: "CeraVe",
    color: ["white"],
    details: [
      "Restores skin barrier",
      "Non-comedogenic and fragrance-free",
      "Contains ceramides and hyaluronic acid"
    ],
    productSpecs: {
      size: "236ml",
      type: "Lotion",
      skinType: "Dry to Normal",
      keyIngredient: "Ceramides"
    }
  },
  {
    id: 53,
    name: "Vitamin C Glow Toner",
    image: "https://www.myskincaremall.com/wp-content/uploads/2022/01/PIXIVitamin-CTonic100ml.jpg",
    price: "₦10,000",
    isFeatured: true,
    brand: "Pixi",
    color: ["orange"],
    details: [
      "Brightens and energizes complexion",
      "Contains Vitamin C and Ferulic Acid",
      "Alcohol-free formula"
    ],
    productSpecs: {
      size: "100ml",
      type: "Toner",
      skinType: "Dull",
      keyIngredient: "Vitamin C"
    }
  },
  {
    id: 54,
    name: "Aloe Vera Soothing Gel",
    image: "https://nudieglow.com/cdn/shop/products/Nature-Republic-Aloe-Vera-92_-Soothing-Gel-Nudie-Glow-Australia_800x.jpg?v=1642568267",
    price: "₦6,800",
    isFeatured: false,
    brand: "Nature Republic",
    color: ["green"],
    details: [
      "Soothes irritated or sunburned skin",
      "Multi-use for face, body, and hair",
      "Cooling and moisturizing"
    ],
    productSpecs: {
      size: "300ml",
      type: "Gel",
      skinType: "All",
      keyIngredient: "Aloe Vera"
    }
  },
  {
    id: 55,
    name: "Snail Mucin Power Essence",
    image: "https://main.thgimages.com/?url=https://static.thcdn.com/productimg/original/11401174-1325238016812216.jpg&format=webp&width=1500&height=1500&fit=cover",
    price: "₦25,000",
    isFeatured: true,
    brand: "COSRX",
    color: ["clear"],
    details: [
      "Improves elasticity and texture",
      "92% snail secretion filtrate",
      "Repairs and hydrates skin"
    ],
    productSpecs: {
      size: "100ml",
      type: "Essence",
      skinType: "All",
      keyIngredient: "Snail Mucin"
    }
  },
  {
    id: 56,
    name: "Hydrating Hyaluronic Toner",
    image: "https://tosnigeria.com/wp-content/uploads/2024/03/isntree-toner-new.jpg",
    price: "₦9,500",
    isFeatured: false,
    brand: "Isntree",
    color: ["blue"],
    details: [
      "Deep hydration with 5 types of hyaluronic acid",
      "Non-sticky texture",
      "Balances skin moisture"
    ],
    productSpecs: {
      size: "200ml",
      type: "Toner",
      skinType: "Dry",
      keyIngredient: "Hyaluronic Acid"
    }
  },
  {
    id: 57,
    name: "Green Tea Fresh Emulsion",
    image: "https://peachesandcremeshop.com/cdn/shop/products/ISNTREE-25-01.jpg?v=1676578196&width=900",
    price: "₦13,000",
    isFeatured: true,
    brand: "Innisfree",
    color: ["light green"],
    details: [
      "Lightweight and calming",
      "Contains Jeju green tea",
      "Balances oil and moisture"
    ],
    productSpecs: {
      size: "160ml",
      type: "Emulsion",
      skinType: "Combination",
      keyIngredient: "Green Tea"
    }
  },
  {
    id: 58,
    name: "Tea Tree Relief Serum",
    image: "https://m.media-amazon.com/images/I/61VtMTn9asL._UF1000,1000_QL80_.jpg",
    price: "₦11,500",
    isFeatured: false,
    brand: "Some By Mi",
    color: ["green"],
    details: [
      "Targets acne and redness",
      "Blends tea tree with centella asiatica",
      "Soothes and repairs skin"
    ],
    productSpecs: {
      size: "50ml",
      type: "Serum",
      skinType: "Oily/Acne-prone",
      keyIngredient: "Tea Tree"
    }
  },
  {
    id: 59,
    name: "Collagen Firming Cream",
    image: "https://m.media-amazon.com/images/I/31I7B6j06AL._UF894,1000_QL80_.jpg",
    price: "₦16,000",
    isFeatured: true,
    brand: "Etude House",
    color: ["white"],
    details: [
      "Improves firmness and elasticity",
      "Enriched with collagen and peptides",
      "Rich, anti-aging formula"
    ],
    productSpecs: {
      size: "75ml",
      type: "Cream",
      skinType: "Mature",
      keyIngredient: "Collagen"
    }
  },
  {
    id: 60,
    name: "Rice Water Bright Cleansing Foam",
    image: "https://media.gopicky.com/products/images/THEFACESHOP-RiceWaterBrightCleansingFoam",
    price: "₦7,800",
    isFeatured: false,
    brand: "The Face Shop",
    color: ["white"],
    details: [
      "Removes impurities and makeup",
      "Brightens skin using rice water",
      "Gentle on sensitive skin"
    ],
    productSpecs: {
      size: "150ml",
      type: "Foam Cleanser",
      skinType: "All",
      keyIngredient: "Rice Water"
    }
  },
  {
    id: 61,
    name: "Rose Water Gel Cream",
    image: "https://viimart.com/cdn/shop/products/Rose-Water-Gel-Cream.jpg?v=1602129540",
    price: "₦10,500",
    isFeatured: true,
    brand: "Mamonde",
    color: ["pink"],
    details: [
      "Soothing and hydrating gel formula",
      "Infused with Damask rose",
      "Fast-absorbing"
    ],
    productSpecs: {
      size: "80ml",
      type: "Gel Cream",
      skinType: "All",
      keyIngredient: "Rose Water"
    }
  },
  {
    id: 62,
    name: "Brightening Peeling Gel",
    image: "https://m.media-amazon.com/images/I/51YxBjG51TL._UF1000,1000_QL80_.jpg",
    price: "₦12,000",
    isFeatured: false,
    brand: "Secret Key",
    color: ["white"],
    details: [
      "Exfoliates dead skin gently",
      "Boosts brightness and clarity",
      "Non-irritating formula"
    ],
    productSpecs: {
      size: "120ml",
      type: "Peeling Gel",
      skinType: "All",
      keyIngredient: "Cellulose"
    }
  },
  {
    id: 63,
    name: "Charcoal Clay Nose Pack",
    image: "https://m.beautykoreamall.com/FileData/product/1525762883/20220428_1C44492722C7480C.jpg",
    price: "₦4,200",
    isFeatured: true,
    brand: "Holika Holika",
    color: ["black"],
    details: [
      "Removes blackheads and sebum",
      "Charcoal and volcanic ash blend",
      "Tightens pores"
    ],
    productSpecs: {
      size: "7 strips",
      type: "Nose Pack",
      skinType: "Oily",
      keyIngredient: "Charcoal"
    }
  },
  {
    id: 64,
    name: "Propolis Ampoule",
    image: "https://carenclass.com/cdn/shop/files/Iunik_Propolis_Vitamin_Synergy_Serum_50ml_02.jpg?v=1717758101&width=1946",
    price: "₦13,500",
    isFeatured: false,
    brand: "iUNIK",
    color: ["yellow"],
    details: [
      "Nourishes and strengthens barrier",
      "70% propolis extract",
      "Great for stressed skin"
    ],
    productSpecs: {
      size: "50ml",
      type: "Ampoule",
      skinType: "Sensitive",
      keyIngredient: "Propolis"
    }
  },
  {
    id: 65,
    name: "Calming Bubble Cleanser",
    image: "https://moonglow.md/wp-content/uploads/2024/12/benton-ac-bha-foam-cleansing-120ml-1-min.jpg",
    price: "₦8,700",
    isFeatured: true,
    brand: "Benton",
    color: ["clear"],
    details: [
      "Mild foam cleanser for irritated skin",
      "Includes centella and tea tree",
      "Sulfate-free"
    ],
    productSpecs: {
      size: "150ml",
      type: "Foam Cleanser",
      skinType: "Sensitive",
      keyIngredient: "Centella Asiatica"
    }
  },
  {
    id: 66,
    name: "Licorice pH Balancing Essence Mist",
    image: "https://rok-it.in/wp-content/uploads/2021/08/pH-Balancing-Essence-Mist-100ml.jpg",
    price: "₦9,000",
    isFeatured: false,
    brand: "Acwell",
    color: ["clear"],
    details: [
      "Hydrating and soothing mist",
      "Reduces dullness and irritation",
      "Licorice root and green tea blend"
    ],
    productSpecs: {
      size: "100ml",
      type: "Mist",
      skinType: "All",
      keyIngredient: "Licorice"
    }
  },
  {
    id: 67,
    name: "Honey Glow Cream",
    image: "https://static.beautytocare.com/media/catalog/product/i/-/i-m-from-honey-glow-cream-50g.jpg",
    price: "₦11,900",
    isFeatured: true,
    brand: "I'm From",
    color: ["gold"],
    details: [
      "Brightens and hydrates skin",
      "Honey complex with royal jelly and bee venom",
      "Rich but non-greasy"
    ],
    productSpecs: {
      size: "50ml",
      type: "Cream",
      skinType: "Dry to Normal",
      keyIngredient: "Honey"
    }
  },
  {
    id: 68,
    name: "Whitening UV Sun Block SPF50",
    image: "https://i0.wp.com/shopstation.ng/wp-content/uploads/2023/05/IMG_1858.jpeg?fit=700%2C700&ssl=1",
    price: "₦9,800",
    isFeatured: false,
    brand: "Missha",
    color: ["white"],
    details: [
      "Broad spectrum SPF 50+ PA+++",
      "Prevents UV and sun damage",
      "Lightweight and non-sticky"
    ],
    productSpecs: {
      size: "50ml",
      type: "Sunscreen",
      skinType: "All",
      keyIngredient: "Titanium Dioxide"
    }
  },
  {
    id: 69,
    name: "Centella Green Level Eye Cream",
    image: "https://purito.com/wp-content/uploads/2024/02/centella_eyecream-benefit-x2.png",
    price: "₦10,400",
    isFeatured: true,
    brand: "Purito",
    color: ["white"],
    details: [
      "Reduces puffiness and fine lines",
      "50% centella extract",
      "Fragrance-free and gentle"
    ],
    productSpecs: {
      size: "30ml",
      type: "Eye Cream",
      skinType: "Sensitive",
      keyIngredient: "Centella"
    }
  },
  {
    id: 70,
    name: "Hydro Boost Sleeping Mask",
    image: "https://m.media-amazon.com/images/I/51+nkkdfRNL._UF1000,1000_QL80_.jpg",
    price: "₦12,200",
    isFeatured: false,
    brand: "Neutrogena",
    color: ["blue"],
    details: [
      "Overnight hydration boost",
      "Gel consistency absorbs quickly",
      "Non-comedogenic"
    ],
    productSpecs: {
      size: "80ml",
      type: "Sleeping Mask",
      skinType: "Dry",
      keyIngredient: "Hyaluronic Acid"
    }
  }
]
const clothes = [
  {
    id: 71,
    name: "Red satin midi dress",
    image: "https://static.zara.net/assets/public/4419/90c6/a14845528f19/c4460b8c16fc/03710731600-p/03710731600-p.jpg?ts=1736348259471&w=744&f=auto",
    details: [
      "Figure-hugging silhouette",
      "Adjustable spaghetti straps",
      "Soft satin finish",
      "Side slit for easy movement",
    ],
    price: "₦65,000",
    isFeatured: false,
    brand: "Zara",
    color: ["red", "burgundy", "maroon"],
    sizes: ["S", "M", "L", "XL"],
    productSpecs: {
      material: "satin",
      length: "midi",
      closure: "zip",
      neckline: "square",
    },
  },
  {
    id: 72,
    name: "White off-shoulder bodycon",
    image: "https://cdn-img.prettylittlething.com/b/a/a/d/baad598c3bb83ce4b0ff3009fcd537114baefa1a_cnb7983_1.jpg",
    details: [
      "Elegant off-shoulder neckline",
      "Stretchy and form-fitting",
      "Double-layered fabric",
    ],
    price: "₦59,000",
    isFeatured: true,
    brand: "PrettyLittleThing",
    color: ["white", "cream"],
    sizes: ["XS", "S", "M"],
    productSpecs: {
      material: "polyester blend",
      length: "mini",
      closure: "zip",
      neckline: "off-shoulder",
    },
  },
  {
    id: 73,
    name: "Sage green ruched mini dress",
    image: "https://images.asos-media.com/products/missguided-cowl-neck-mini-dress-with-ruched-side-in-green/200572636-1-green?$n_640w$&wid=513&fit=constrain",
    details: [
      "Ruching for flattering shape",
      "Adjustable side drawstrings",
      "Soft, breathable fabric",
    ],
    price: "₦45,000",
    isFeatured: false,
    brand: "Missguided",
    color: ["sage", "green", "mint"],
    sizes: ["S", "M", "L"],
    productSpecs: {
      material: "cotton blend",
      length: "mini",
      closure: "pull-on",
      neckline: "round",
    },
  },
  {
    id: 74,
    name: "Black corset gown",
    image: "https://dsh6y5eym1jrl.cloudfront.net/_next/image?url=https%3A%2F%2Fd166chel5lrjm5.cloudfront.net%2Fimages%2Fdetailed%2F100%2Fpersephone-3.jpg&w=3840&q=100",
    details: [
      "Built-in boning for structure",
      "Lace-up back detail",
      "Dramatic mermaid hem",
    ],
    price: "₦110,000",
    isFeatured: true,
    brand: "House of CB",
    color: ["black"],
    sizes: ["S", "M", "L"],
    productSpecs: {
      material: "crepe",
      length: "floor",
      closure: "lace-up",
      neckline: "sweetheart",
    },
  },
  {
    id: 75,
    name: "Floral print summer dress",
    image: "https://image.hm.com/assets/hm/e5/fe/e5feb66dbff3b60958f4eac004e0b4e6751fc121.jpg?imwidth=2160",
    details: [
      "Lightweight and airy",
      "Button front design",
      "Ruffled hemline",
    ],
    price: "₦38,500",
    isFeatured: false,
    brand: "H&M",
    color: ["pink", "blue", "white"],
    sizes: ["S", "M", "L", "XL"],
    productSpecs: {
      material: "cotton",
      length: "above-knee",
      closure: "buttons",
      neckline: "v-neck",
    },
  },
  {
    id: 76,
    name: "Cream linen wide-leg jumpsuit",
    image: "https://i.ebayimg.com/images/g/Dh0AAOSwGxtm69kF/s-l400.jpg",
    details: [
      "Relaxed fit",
      "Waist tie belt",
      "Breathable linen fabric",
    ],
    price: "₦72,000",
    isFeatured: true,
    brand: "Zara",
    color: ["cream", "ivory"],
    sizes: ["S", "M", "L"],
    productSpecs: {
      material: "linen",
      length: "full",
      closure: "zip",
      neckline: "square",
    },
  },
  {
    id: 77,
    name: "Denim bodycon mini dress",
    image: "https://media.boohoo.com/i/boohoo/gzz84462_blue_xl/female-blue-plus-fitted-denim-mini-dress/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
    details: [
      "Stretch denim fabric",
      "Front zip closure",
      "Strapless design",
    ],
    price: "₦48,000",
    isFeatured: false,
    brand: "Boohoo",
    color: ["denim blue", "indigo"],
    sizes: ["XS", "S", "M", "L"],
    productSpecs: {
      material: "denim",
      length: "mini",
      closure: "zip",
      neckline: "strapless",
    },
  },
  {
    id: 78,
    name: "Brown ribbed knit dress",
    image: "https://cdn.shopify.com/s/files/1/0293/9277/products/02-09-23Studio3_KS_RL_10-04-14_7_RD48506_DarkBrown_11744_JB.jpg?v=1676485537",
    details: [
      "Stretchy ribbed texture",
      "Long sleeves",
      "Body-skimming fit",
    ],
    price: "₦52,000",
    isFeatured: false,
    brand: "Fashion Nova",
    color: ["brown", "chocolate"],
    sizes: ["S", "M", "L"],
    productSpecs: {
      material: "knit",
      length: "midi",
      closure: "pull-on",
      neckline: "round",
    },
  },
  {
    id: 79,
    name: "Lilac cowl neck satin dress",
    image: "https://www.meshki.com.au/cdn/shop/files/250507_MESHKI_Viva5_39_1719.jpg?v=1748229179&width=1445",
    details: [
      "Cowl neckline for elegance",
      "Open back design",
      "Bias cut for fluid drape",
    ],
    price: "₦67,500",
    isFeatured: true,
    brand: "Meshki",
    color: ["lilac", "purple", "lavender"],
    sizes: ["S", "M", "L"],
    productSpecs: {
      material: "satin",
      length: "midi",
      closure: "zip",
      neckline: "cowl",
    },
  },
  {
    id: 80,
    name: "Neon green mesh bodycon",
    image: "https://img.ltwebstatic.com/images3_pi/2022/07/12/16576066039736c008d8e7ce84c84bf01ac453c8f0_thumbnail_720x.jpg",
    details: [
      "Mesh overlay design",
      "Ruched side seams",
      "Bold color statement",
    ],
    price: "₦42,000",
    isFeatured: false,
    brand: "Shein",
    color: ["neon green", "lime"],
    sizes: ["XS", "S", "M"],
    productSpecs: {
      material: "mesh blend",
      length: "mini",
      closure: "pull-on",
      neckline: "crew",
    },
  },
  {
    id: 81,
    name: "Gold shimmer one-shoulder dress",
    image: "https://images.asos-media.com/products/asos-design-one-shoulder-metallic-shirred-maxi-dress-in-gold/205126463-4?$n_640w$&wid=513&fit=constrain",
    details: [
      "One-shoulder design",
      "Subtle shimmer finish",
      "Asymmetric hem",
    ],
    price: "₦89,000",
    isFeatured: true,
    brand: "ASOS",
    color: ["gold", "champagne"],
    sizes: ["S", "M", "L"],
    productSpecs: {
      material: "metallic blend",
      length: "midi",
      closure: "zip",
      neckline: "one-shoulder",
    },
  },
  {
    id: 82,
    name: "Pink sequin party mini dress",
    image: "https://is4.revolveassets.com/images/p4/n/tv/SPDW-WD2026_V1.jpg",
    details: [
      "All-over sequins",
      "Strappy back",
      "Fitted silhouette",
    ],
    price: "₦95,000",
    isFeatured: false,
    brand: "Revolve",
    color: ["pink", "rose"],
    sizes: ["XS", "S", "M", "L"],
    productSpecs: {
      material: "sequin",
      length: "mini",
      closure: "zip",
      neckline: "v-neck",
    },
  },
  {
    id: 83,
    name: "Plaid shirt dress",
    image: "https://i.pinimg.com/originals/a2/ee/f6/a2eef698de8a22926780551b7f0faea2.png",
    details: [
      "Relaxed fit",
      "Button-up front",
      "Waist tie for shape",
    ],
    price: "₦38,000",
    isFeatured: false,
    brand: "Uniqlo",
    color: ["navy", "grey", "white"],
    sizes: ["S", "M", "L", "XL"],
    productSpecs: {
      material: "cotton flannel",
      length: "knee",
      closure: "buttons",
      neckline: "collar",
    },
  },
  {
    id: 84,
    name: "Yellow ruched side dress",
    image: "https://img.tobi.com/product_images/md/1/yellow-nonsense-side-ruched-asymmetrical-midi-dress.jpg",
    details: [
      "Stretchy fabric",
      "Drawstring sides",
      "Bodycon fit",
    ],
    price: "₦44,000",
    isFeatured: true,
    brand: "Naked Wardrobe",
    color: ["yellow", "mustard"],
    sizes: ["S", "M", "L"],
    productSpecs: {
      material: "poly-spandex",
      length: "mini",
      closure: "pull-on",
      neckline: "round",
    },
  },
  {
    id: 85,
    name: "Black velvet wrap dress",
    image: "https://www.ohpolly.com/cdn/shop/files/7863-JetBlack_Alejandra_6.jpg?v=1701257237",
    details: [
      "Wrap front design",
      "Soft velvet texture",
      "Tie waist belt",
    ],
    price: "₦82,000",
    isFeatured: false,
    brand: "Oh Polly",
    color: ["black"],
    sizes: ["S", "M", "L"],
    productSpecs: {
      material: "velvet",
      length: "midi",
      closure: "wrap",
      neckline: "v-neck",
    },
  },
  {
    id: 86,
    name: "Lime draped dress",
    image: "https://static.zara.net/assets/public/efc5/2bb5/5ef54c0ebe25/035122832f90/02513750500-p/02513750500-p.jpg",
    details: [
      "Draped front design",
      "Relaxed fit",
      "Sleek modern look",
    ],
    price: "₦66,000",
    isFeatured: false,
    brand: "Zara",
    color: ["lime", "pastel green"],
    sizes: ["S", "M", "L"],
    productSpecs: {
      material: "poly blend",
      length: "midi",
      closure: "zip",
      neckline: "asymmetric",
    },
  },
  {
    id: 87,
    name: "Tan shirt dress with belt",
    image: "https://i.pinimg.com/564x/bd/ed/3e/bded3e6a79fb8751337cc501b754cd8c.jpg",
    details: [
      "Tailored structure",
      "Button-front",
      "Matching waist belt",
    ],
    price: "₦55,000",
    isFeatured: false,
    brand: "Massimo Dutti",
    color: ["tan", "beige"],
    sizes: ["M", "L", "XL"],
    productSpecs: {
      material: "linen blend",
      length: "knee",
      closure: "buttons",
      neckline: "collar",
    },
  },
  {
    id: 88,
    name: "Blue one-shoulder ruffle dress",
    image: "https://images.asos-media.com/products/asos-design-one-shoulder-embellished-maxi-dress-in-blue-abstract-print/205964767-1-blueabstractprint?$n_640w$&wid=513&fit=constrain",
    details: [
      "Asymmetrical shoulder ruffle",
      "Soft pastel blue",
      "Fitted waistline",
    ],
    price: "₦78,500",
    isFeatured: true,
    brand: "ASOS",
    color: ["light blue", "sky blue"],
    sizes: ["S", "M", "L"],
    productSpecs: {
      material: "polyester",
      length: "midi",
      closure: "zip",
      neckline: "one-shoulder",
    },
  },
  {
    id: 89,
    name: "Champagne silk halter dress",
    image: "https://is4.revolveassets.com/images/p4/n/z/SPDW-WD1875_V1.jpg",
    details: [
      "Silky satin fabric",
      "Halter neck tie",
      "Open back design",
    ],
    price: "₦91,000",
    isFeatured: false,
    brand: "Revolve",
    color: ["champagne", "beige"],
    sizes: ["S", "M"],
    productSpecs: {
      material: "silk satin",
      length: "midi",
      closure: "tie",
      neckline: "halter",
    },
  },
  {
    id: 90,
    name: "Teal asymmetric slit dress",
    image: "https://cdn-img.prettylittlething.com/8/1/f/c/81fc23ff92d8c9b8a5f03a59c82a5856742e5520_CNM7781_1_plus_teal_soft_touch_ruched_asymmetric_cut_out_maxi_dress.jpg",
    details: [
      "High side slit",
      "Diagonal neckline",
      "Sleek stretch material",
    ],
    price: "₦85,000",
    isFeatured: true,
    brand: "PrettyLittleThing",
    color: ["teal", "blue-green"],
    sizes: ["S", "M", "L"],
    productSpecs: {
      material: "polyester blend",
      length: "midi",
      closure: "zip",
      neckline: "asymmetric",
    },
  },
]
const sports = [
  {
    id: 91,
    name: "Nike Pro Training Shorts",
    image: "https://tribesportstore.com.ng/wp-content/uploads/2022/04/Nike-Pro-Three-Inch-Shorts-Womens.webp",
    details: [
      "Lightweight and breathable",
      "Elastic waistband for secure fit",
      "Dri-FIT technology wicks sweat"
    ],
    price: "₦45,000",
    isFeatured: true,
    brand: "Nike",
    color: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    productSpecs: {
      material: "Polyester",
      origin: "Vietnam",
      gender: "Unisex"
    }
  },
  {
    id: 92,
    name: "Adidas Performance T-shirt",
    image: "https://img01.ztat.net/article/spp-media-p1/5f07d041296846cd9a68eff309dee925/250f81cdac59423cad915108454bf5f7.jpg?imwidth=1800",
    details: [
      "Quick-dry fabric for intense workouts",
      "Classic crew neck design",
      "Logo print on chest"
    ],
    price: "₦37,000",
    isFeatured: false,
    brand: "Adidas",
    color: ["Blue", "White", "Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    productSpecs: {
      material: "Climalite Cotton",
      origin: "Cambodia",
      gender: "Men"
    }
  },
  {
    id: 93,
    name: "Puma Active Training Leggings",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/523849/62/mod01/fnd/PHL/fmt/png/PUMA-FIT-Women's-High-Waist-Training-Leggings",
    details: [
      "Tight fit for support",
      "Sweat-wicking material",
      "Mesh paneling for ventilation"
    ],
    price: "₦55,000",
    isFeatured: false,
    brand: "Puma",
    color: ["Black", "Navy"],
    sizes: ["XS", "S", "M", "L"],
    productSpecs: {
      material: "Polyester/Elastane",
      origin: "Turkey",
      gender: "Women"
    }
  },
  {
    id: 94,
    name: "Under Armour Gym Bag",
    image: "https://underarmour.scene7.com/is/image/Underarmour/V5-1369221-001_FSF?rp=standard-0pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708",
    details: [
      "Water-resistant finish",
      "Spacious compartments",
      "Adjustable shoulder strap"
    ],
    price: "₦63,000",
    isFeatured: true,
    brand: "Under Armour",
    color: ["Black", "Olive"],
    sizes: ["One Size"],
    productSpecs: {
      material: "Nylon",
      origin: "Indonesia",
      gender: "Unisex"
    }
  },
  {
    id: 95,
    name: "Reebok Workout Hoodie",
    image: "https://www.tradeinn.com/f/13722/137227269_3/reebok-workout-ready-hoodie.webp",
    details: [
      "Soft cotton blend",
      "Kangaroo pockets",
      "Perfect for warmups"
    ],
    price: "₦72,000",
    isFeatured: false,
    brand: "Reebok",
    color: ["Grey", "White"],
    sizes: ["M", "L", "XL"],
    productSpecs: {
      material: "Cotton Blend",
      origin: "Bangladesh",
      gender: "Unisex"
    }
  },
  {
    id: 96,
    name: "Gymshark Vital Seamless Leggings",
    image: "https://cdn.shopify.com/s/files/1/1367/5207/files/VitalSeamlessXTallLeggingsGsHeavyBlueMarlB9A9I-UCW7-0481.jpg?v=1728639879",
    details: [
      "High-waist fit",
      "Supportive compression",
      "Body contouring design"
    ],
    price: "₦48,000",
    isFeatured: true,
    brand: "Gymshark",
    color: ["Pink", "Black"],
    sizes: ["XS", "S", "M", "L"],
    productSpecs: {
      material: "Nylon/Spandex",
      origin: "China",
      gender: "Women"
    }
  },
  {
    id: 97,
    name: "Lululemon Metal Vent Tech Shirt",
    image: "https://m.media-amazon.com/images/I/715SXV5YGyL._AC_SL1500_.jpg",
    details: [
      "No-chafe seams",
      "Odor-resistant fabric",
      "Lightweight feel"
    ],
    price: "₦88,000",
    isFeatured: false,
    brand: "Lululemon",
    color: ["Charcoal", "Blue"],
    sizes: ["M", "L", "XL"],
    productSpecs: {
      material: "Recycled Polyester",
      origin: "Vietnam",
      gender: "Men"
    }
  },
  {
    id: 98,
    name: "Nike Air Zoom Pegasus 39",
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8bb6250a-af23-4b73-bf8c-ded532982e12/NIKE+AIR+ZOOM+PEGASUS+39+4E.png",
    details: [
      "Responsive cushioning",
      "Breathable upper mesh",
      "Durable rubber sole"
    ],
    price: "₦135,000",
    isFeatured: true,
    brand: "Nike",
    color: ["Black", "Orange"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    productSpecs: {
      material: "Mesh & Foam",
      origin: "Indonesia",
      gender: "Unisex"
    }
  },
  {
    id: 99,
    name: "Adidas Ultraboost Light",
    image: "https://m.media-amazon.com/images/I/51DQs6+zxBL._UY900_.jpg",
    details: [
      "Super lightweight construction",
      "Boost midsole tech",
      "Secure fit"
    ],
    price: "₦149,000",
    isFeatured: false,
    brand: "Adidas",
    color: ["White", "Red"],
    sizes: ["38", "39", "40", "41", "42", "43"],
    productSpecs: {
      material: "Primeknit",
      origin: "Vietnam",
      gender: "Unisex"
    }
  },
  {
    id: 100,
    name: "Nike Sportswear Essential Cap",
    image: "https://m.media-amazon.com/images/I/61lR1kPlVML._UY1000_.jpg",
    details: [
      "Adjustable strap",
      "Breathable fabric",
      "Nike logo front detail"
    ],
    price: "₦22,000",
    isFeatured: false,
    brand: "Nike",
    color: ["Black", "White", "Navy"],
    sizes: ["One Size"],
    productSpecs: {
      material: "Cotton Twill",
      origin: "Bangladesh",
      gender: "Unisex"
    }
  }, {
    id: 101,
    name: "Puma Men’s Training Tank",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/518388/01/mod01/fnd/SEA/fmt/png/Power-Men's-Training-Tank-Top",
    details: [
      "Sleeveless athletic fit",
      "Moisture-wicking fabric",
      "Perfect for gym workouts"
    ],
    price: "₦39,000",
    isFeatured: true,
    brand: "Puma",
    color: ["Black", "Green"],
    sizes: ["S", "M", "L", "XL"],
    productSpecs: {
      material: "Polyester",
      origin: "India",
      gender: "Men"
    }
  },
  {
    id: 102,
    name: "Under Armour Sports Bra",
    image: "https://images-cdn.ubuy.co.in/64cd57a329c01c5b420dd047-under-armour-women-s-infinity-mid.jpg",
    details: [
      "Mid-impact support",
      "Crossover straps",
      "Soft removable cups"
    ],
    price: "₦42,000",
    isFeatured: false,
    brand: "Under Armour",
    color: ["Pink", "Grey"],
    sizes: ["XS", "S", "M", "L"],
    productSpecs: {
      material: "Nylon/Elastane",
      origin: "Vietnam",
      gender: "Women"
    }
  },
  {
    id: 103,
    name: "Nike Running Headband",
    image: "https://img01.ztat.net/article/spp-media-p1/9c3309f3163c30f38ffcf5f2942096ae/ae2d57f63dbf46b38d1a4747fe696130.jpg?imwidth=1800",
    details: [
      "Stretchy and secure fit",
      "Sweat-wicking technology",
      "Logo print detail"
    ],
    price: "₦12,000",
    isFeatured: false,
    brand: "Nike",
    color: ["Black", "Red"],
    sizes: ["One Size"],
    productSpecs: {
      material: "Spandex",
      origin: "Thailand",
      gender: "Unisex"
    }
  },
  {
    id: 104,
    name: "Adidas Sport Duffel Bag",
    image: "https://img01.ztat.net/article/spp-media-p1/55f8e1eb96be3a0dbf9b5e63fce84252/4672775f2cf3417e879e728bfac702fd.jpg?imwidth=1800&filter=packshot",
    details: [
      "Spacious main compartment",
      "Side mesh pockets",
      "Adjustable shoulder strap"
    ],
    price: "₦67,000",
    isFeatured: true,
    brand: "Adidas",
    color: ["Black", "Camo"],
    sizes: ["One Size"],
    productSpecs: {
      material: "Polyester",
      origin: "China",
      gender: "Unisex"
    }
  },
  {
    id: 105,
    name: "Reebok Training Joggers",
    image: "https://lh3.googleusercontent.com/proxy/VL04K04aIUeSyV28wN7ULctkOBRrlkAsbBm0O8sSz4f-1flm3dd7-BfHJAXQSMk0iufPJTSYygUi7nfR_eIlwQ551g_C4kNqKy6Ayv-dIDmi6AXNaYYNIMxz4DTxIJWFkKgYfHNL_lQ",
    details: [
      "Tapered fit",
      "Side zip pockets",
      "Elastic waistband"
    ],
    price: "₦61,000",
    isFeatured: false,
    brand: "Reebok",
    color: ["Grey", "Black"],
    sizes: ["M", "L", "XL"],
    productSpecs: {
      material: "Cotton/Poly Blend",
      origin: "Pakistan",
      gender: "Men"
    }
  },
  {
    id: 106,
    name: "Gymshark Studio Crop Top",
    image: "https://cdn.shopify.com/s/files/1/0098/8822/files/VitalSeamless2.0CropTop-PennyBrownMarl-B1A3D-NBBW-1282_d1ddd879-5d8e-43b6-a533-6dcfdb39ba05.jpg?v=1702281511",
    details: [
      "Cropped length",
      "Breathable mesh panel",
      "Stretchy comfort fit"
    ],
    price: "₦44,000",
    isFeatured: true,
    brand: "Gymshark",
    color: ["Beige", "Lilac"],
    sizes: ["XS", "S", "M"],
    productSpecs: {
      material: "Nylon/Elastane",
      origin: "China",
      gender: "Women"
    }
  },
  {
    id: 107,
    name: "Lululemon Training Socks (3-Pack)",
    image: "https://images.lululemon.com/is/image/lululemon/LM9AYRS_035500_1?size=1200,1200",
    details: [
      "Arch support",
      "Anti-blister design",
      "Breathable cotton"
    ],
    price: "₦18,000",
    isFeatured: false,
    brand: "Lululemon",
    color: ["White", "Grey", "Black"],
    sizes: ["M", "L"],
    productSpecs: {
      material: "Cotton/Nylon",
      origin: "USA",
      gender: "Unisex"
    }
  },
  {
    id: 108,
    name: "Nike Yoga Mat",
    image: "https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzYxaU55VFY3ZmVMLl9TUzQwMF8uanBn.jpg",
    details: [
      "Non-slip surface",
      "Cushioned support",
      "Lightweight and portable"
    ],
    price: "₦77,000",
    isFeatured: true,
    brand: "Nike",
    color: ["Purple", "Black"],
    sizes: ["One Size"],
    productSpecs: {
      material: "PVC",
      origin: "Taiwan",
      gender: "Unisex"
    }
  },
  {
    id: 109,
    name: "Adidas Compression Shorts",
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6e35ea71a8ea4c6ea7f77b730eb54bd5_9366/TECHFIT_Compression_Training_Short_Tights_Black_IN5591_21_model.jpg",
    details: [
      "High-performance compression",
      "Breathable mesh panels",
      "Supports muscle recovery"
    ],
    price: "₦49,000",
    isFeatured: false,
    brand: "Adidas",
    color: ["Navy", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    productSpecs: {
      material: "Spandex/Polyester",
      origin: "Cambodia",
      gender: "Men"
    }
  },
  {
    id: 110,
    name: "Under Armour Water Bottle",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBibzrNatKLmlqI5aX3l83ysow05PJk_dfg&s",
    details: [
      "Leak-proof cap",
      "Ergonomic grip",
      "BPA-free plastic"
    ],
    price: "₦14,000",
    isFeatured: true,
    brand: "Under Armour",
    color: ["Clear", "Black", "Blue"],
    sizes: ["One Size"],
    productSpecs: {
      material: "Plastic",
      origin: "USA",
      gender: "Unisex"
    }
  }
]
const products = [
  {
    "id": 111,
    "name": "Yves Saint Laurent Libre Intense Eau de Parfum ",
    "image": "https://dscentsation.ng/cdn/shop/products/YvesSaintLaurentLibreEDP90mlPerfumeForWomen.jpg?v=1647924108",
    "details": [
      "90ml",
      "Eau de Parfum",
      "Long-Lasting",
      "Floral Amber Scent",
      "For Her"
    ],
    "price": "\u20a693,500",
    "isFeatured": true,
    "brand": "YSL",
    "color": [
      "Gold",
      "Black"
    ],
    "sizes": [
      "Small",
      "Medium"
    ],
    "productSpecs": {
      "material": "Plastic",
      "origin": "USA",
      "gender": "Unisex"
    }
  },
  {
    "id": 112,
    "name": "Rechargeable 18 Inches Standing Fan with Solar ",
    "image": "https://apexsolar.com.ng/wp-content/uploads/2024/05/Apex-Rechargeable-Standing-Fan-18-Inches-with-Solar-Panel4.png",
    "details": [
      "Rechargeable",
      "Solar Powered",
      "18 Inches",
      "Remote Control"
    ],
    "price": "\u20a689,500",
    "isFeatured": false,
    "brand": "Apex",
    "color": [
      "White",
      "Blue"
    ],
    "sizes": [
      "One Size"
    ],
    "productSpecs": {
      "material": "Metal",
      "origin": "China",
      "gender": "Male"
    }
  },
  {
    "id": 113,
    "name": "Chunky Men Sneakers Black Rubber Sole",
    "image": "https://shopby.com.ng/wp-content/uploads/2022/07/Chunky-Men-Sneakers-Black-shopby-online-mall.jpg",
    "details": [
      "Men's Sneakers",
      "Chunky Sole",
      "Color: Black",
      "Sizes Available"
    ],
    "price": "\u20a6120,000",
    "isFeatured": true,
    "brand": "Generic",
    "color": [
      "Black",
      "Red"
    ],
    "sizes": [
      "Large"
    ],
    "productSpecs": {
      "material": "Stainless Steel",
      "origin": "Germany",
      "gender": "Female"
    }
  }, { 
    "id": 114,
    "isFeatured": false,
    "name": "BRUHM STANDING GAS COOKER 3G+1E INOX TOP",
    "details": [
      "3 Gas Burners + 1 Electric Plate",
      "Oven",
      "Inox Top",
      "Free Standing"
    ],
    "description": "A reliable BRUHM standing cooker with 3 gas burners and 1 electric hotplate, ideal for all types of home cooking.",
    "image": "https://electromart.com.ng/wp-content/uploads/2023/12/bgc-5540ib-1-1.jpg",
    "price": "₦189,990",
    "brand": "BRUHM",
    "color": ["Silver", "Black"],
    "sizes": [],
    "productSpecs": {
      "material": "Stainless Steel",
      "wattage": "Electric Plate",
      "capacity": "Standard Oven Size",
      "dimensions": "90cm Height x 60cm Width"
    }
  },
  {
    "id": 115,
    "isFeatured": true,
    "name": "YFL HOME BlendLab Pro 2.0 Mixer High ProBlender",
    "details": [
      "Mixer Grinder",
      "High Speed",
      "Stainless Steel Blades",
      "2 Jars"
    ],
    "description": "Powerful and versatile blender perfect for smoothies, soups, and dry grinding with multiple speed settings.",
    "image": "https://m.media-amazon.com/images/I/71e4sGjehrL._AC_SL1500_.jpg",
    "price": "₦55,500",
    "brand": "YFL HOME",
    "color": ["Black", "Silver"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic & Stainless Steel",
      "wattage": "High Power Motor",
      "capacity": "2 Jars",
      "dimensions": "40cm Height x 20cm Width"
    }
  },
  {
    "id": 116,
    "isFeatured": false,
    "name": "Ninja Detect Power Blender Pro 1200W Kitchen Blender",
    "details": [
      "1200W",
      "Smart Torque",
      "Auto-iQ",
      "BPA-Free Jars"
    ],
    "description": "A high-performance blender with smart features and powerful motor for professional-grade blending.",
    "image": "https://res.cloudinary.com/sharkninja/image/upload/f_auto,q_auto/v1733129866/Ninja/TB201UK/Gallery%20and%20Features/Ninja-TB201-InUse-Kitchen-Island-SalsaChop-LineUp.jpg",
    "price": "₦98,500",
    "brand": "Ninja",
    "color": ["Black", "Transparent"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic & Stainless Steel",
      "wattage": "1200W",
      "capacity": "Large Jar + Small Jar",
      "dimensions": "45cm Height x 23cm Width"
    }
  }, {
    "id": 117,
    "name": "LED 4K Ambilight Samsung TV Black DFRT332",
    "image": "https://m.media-amazon.com/images/I/61pIp1IC6TS.jpg",
    "details": [
      "55-inch",
      "4K Ultra HD",
      "Ambilight",
      "Smart TV"
    ],
    "price": "₦450,000",
    "isFeatured": true,
    "brand": "Samsung",
    "color": ["Black"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic & Metal",
      "origin": "South Korea",
      "gender": "Unisex"
    }
  },
  {
    "id": 118,
    "name": "SEPATU SNEAKERS KOREA WANITA CASUAL FASHION",
    "image": "https://down-id.img.susercontent.com/file/id-11134207-7r98q-m02tsroj0067a6",
    "details": [
      "Women's Sneakers",
      "Korean Fashion",
      "Casual",
      "Rubber Sole"
    ],
    "price": "₦25,500",
    "isFeatured": false,
    "brand": "Sepatu Korea",
    "color": ["White", "Beige"],
    "sizes": ["36", "37", "38", "39", "40"],
    "productSpecs": {
      "material": "Synthetic Leather & Rubber",
      "origin": "South Korea",
      "gender": "Female"
    }
  },
  {
    "id": 119,
    "name": "Oraimo FreePods 4 Wireless Earbuds",
    "image": "https://www.mobigyaan.com/wp-content/uploads/2023/06/oraimo-Freepods-4-Wireless-Earbuds-1024x1024.jpg",
    "details": [
      "Noise Cancellation",
      "36H Battery Life",
      "Bluetooth 5.2",
      "Touch Control"
    ],
    "price": "₦32,000",
    "isFeatured": true,
    "brand": "Oraimo",
    "color": ["Black"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 120,
    "name": "HP 15s Laptop – Intel Core i5, 8GB RAM, 512GB SSD",
    "image": "https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTErNllFQ25LM0wuX1NTNDAwXy5qcGc.jpg",
    "details": [
      "15.6-inch Display",
      "Windows 11",
      "Intel Core i5 11th Gen",
      "512GB SSD"
    ],
    "price": "₦450,000",
    "isFeatured": false,
    "brand": "HP",
    "color": ["Silver"],
    "sizes": [],
    "productSpecs": {
      "material": "Aluminum & Plastic",
      "origin": "USA",
      "gender": "Unisex"
    }
  },
  {
    "id": 121,
    "name": "Samsung Galaxy A14 4G – 4GB RAM + 128GB ROM",
    "image": "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/1743722/1.jpg?6147",
    "details": [
      "Android 13",
      "50MP Camera",
      "5000mAh Battery",
      "128GB Storage"
    ],
    "price": "₦139,000",
    "isFeatured": true,
    "brand": "Samsung",
    "color": ["Black", "Silver", "Green"],
    "sizes": [],
    "productSpecs": {
      "material": "Glass & Plastic",
      "origin": "South Korea",
      "gender": "Unisex"
    }
  },{
    "id": 122,
    "name": "Binatone Smooth Gliding Steam Iron SI-1755",
    "image": "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/53/863789/2.jpg?5001",
    "details": [
      "Non-stick soleplate",
      "1200W",
      "Steam Burst",
      "Vertical Ironing"
    ],
    "price": "₦14,500",
    "isFeatured": false,
    "brand": "Binatone",
    "color": ["White", "Blue"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic & Metal",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 123,
    "name": "Royal 6kg Top Load Washing Machine",
    "image": "https://whirlpoolindia.vtexassets.com/arquivos/ids/169616-800-auto?v=638726037717030000&width=800&height=auto&aspect=true",
    "details": [
      "Semi-Automatic",
      "Twin Tub",
      "Low Power Consumption"
    ],
    "price": "₦89,999",
    "isFeatured": true,
    "brand": "Royal",
    "color": ["White"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic & Metal",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 124,
    "name": "Smart Electric Toothbrush – Rechargeable with Timer",
    "image": "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/7205593/1.jpg?8137",
    "details": [
      "5 Brushing Modes",
      "USB Charging",
      "Waterproof"
    ],
    "price": "₦21,500",
    "isFeatured": false,
    "brand": "Philips",
    "color": ["White", "Blue"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 125,
    "name": "Bluetooth Wireless Gaming Controller for PS4/PC",
    "image": "https://www.icode.com/wp-content/uploads/P02.jpg",
    "details": [
      "DualShock",
      "Wireless",
      "Rechargeable",
      "Vibration Feedback"
    ],
    "price": "₦18,000",
    "isFeatured": true,
    "brand": "Sony",
    "color": ["Black", "Blue"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 126,
    "name": "Mini Projector YG300 Portable LED Projector",
    "image": "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/9518952/1.jpg?7697",
    "details": [
      "HD 1080P",
      "USB/HDMI/AV",
      "Home Theater"
    ],
    "price": "₦28,500",
    "isFeatured": false,
    "brand": "YG300",
    "color": ["Yellow", "White"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 127,
    "name": "Men's Analog Stainless Steel Wrist Watch",
    "image": "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/2005363/1.jpg?1435",
    "details": [
      "Water Resistant",
      "Quartz",
      "Luxury Look"
    ],
    "price": "₦13,000",
    "isFeatured": true,
    "brand": "Curren",
    "color": ["Silver", "Black"],
    "sizes": [],
    "productSpecs": {
      "material": "Stainless Steel",
      "origin": "China",
      "gender": "Male"
    }
  },
  {
    "id": 128,
    "name": "Adjustable Laptop Stand with Cooling Fans",
    "image": "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/3599501/1.jpg?4627",
    "details": [
      "Foldable",
      "Aluminum Alloy",
      "USB-Powered Fans"
    ],
    "price": "₦16,800",
    "isFeatured": false,
    "brand": "Baseus",
    "color": ["Silver", "Black"],
    "sizes": [],
    "productSpecs": {
      "material": "Aluminum Alloy",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 129,
    "name": "Electric Facial Cleansing Brush – Waterproof",
    "image": "https://m.media-amazon.com/images/I/71IKsxuFmkL.jpg",
    "details": [
      "3 Speeds",
      "USB Rechargeable",
      "Soft Bristles"
    ],
    "price": "₦11,900",
    "isFeatured": true,
    "brand": "Foreo",
    "color": ["Pink", "White"],
    "sizes": [],
    "productSpecs": {
      "material": "Silicone",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 130,
    "name": "Automatic Soap Dispenser – Touchless",
    "image": "https://images-na.ssl-images-amazon.com/images/I/61hC6PmZvFL._UL500_.jpg",
    "details": [
      "Infrared Sensor",
      "Battery Operated",
      "350ml Capacity"
    ],
    "price": "₦9,500",
    "isFeatured": false,
    "brand": "Simplehuman",
    "color": ["White", "Silver"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 131,
    "name": "Baby Diaper Backpack – Multi-functional Organizer",
    "image": "https://image.made-in-china.com/202f0j00rzPkWohdCmuR/High-Quality-Multi-Function-Infant-Mom-Large-Capacity-Diaper-Bag-Storage-Mommy-Bag-Backpack-Baby-Bag.webp",
    "details": [
      "Waterproof",
      "USB Charging Port",
      "12 Pockets"
    ],
    "price": "₦22,000",
    "isFeatured": true,
    "brand": "Pampers",
    "color": ["Grey", "Black"],
    "sizes": [],
    "productSpecs": {
      "material": "Polyester",
      "origin": "China",
      "gender": "Unisex"
    }
  }, {
    "id": 132,
    "name": "Electric Kettle – 2L Stainless Steel Boiler",
    "image": "https://m.media-amazon.com/images/I/71a-ogDPJQL.jpg",
    "details": [
      "1500W",
      "Auto Shut-Off",
      "Fast Boil"
    ],
    "price": "₦18,500",
    "isFeatured": false,
    "brand": "Binatone",
    "color": ["Silver", "Black"],
    "sizes": [],
    "productSpecs": {
      "material": "Stainless Steel",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 133,
    "name": "Non-Stick Cookware Set – 7pcs Stainless Steel",
    "image": "https://image.made-in-china.com/202f0j00mYokDCPnlbpK/7PCS-Stainless-Steel-Cookware-Set-Multisize-Pots-and-Pans-for-Kitchen-with-Tempered-Glass-Lid-and-Non-Stick-Coating-Interior-Selected-Induction-Compatible.webp",
    "details": [
      "Marble Coated",
      "Heat Resistant Handles",
      "Gas/Electric Compatible"
    ],
    "price": "₦65,000",
    "isFeatured": true,
    "brand": "MasterChef",
    "color": ["Silver", "Black"],
    "sizes": ["Small", "Medium", "Large"],
    "productSpecs": {
      "material": "Stainless Steel",
      "origin": "Turkey",
      "gender": "Unisex"
    }
  },
  {
    "id": 134,
    "name": "Essential Oil Diffuser – Aromatherapy Humidifier",
    "image": "https://i0.wp.com/chronos-stores.com/wp-content/uploads/2022/03/Essential-Oil-Diffuser-Humidifier-Various-Colors-1.jpg?fit=736%2C736&ssl=1",
    "details": [
      "7 LED Colors",
      "300ml Capacity",
      "Timer Settings"
    ],
    "price": "₦14,500",
    "isFeatured": false,
    "brand": "Aroma Bliss",
    "color": ["White", "Brown"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 135,
    "name": "Adjustable Dumbbell – 20kg Home Gym Equipment",
    "image": "https://image.made-in-china.com/2f0j00rszVwpDhHakq/Home-Gym-Equipment-Adjustable-20kg-Dumbbell-Set.webp",
    "details": [
      "Iron Weights",
      "Non-slip Grip",
      "For Strength Training"
    ],
    "price": "₦38,000",
    "isFeatured": true,
    "brand": "FitPro",
    "color": ["Black"],
    "sizes": [],
    "productSpecs": {
      "material": "Iron, Rubber",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 136,
    "name": "Digital Bathroom Scale – Body Weight Monitor",
    "image": "https://i5.walmartimages.com/seo/Digital-Bathroom-Scale-Body-Weight-Bluetooth-Smart-Weighing-Scale-Professional-BMI-Highly-Accurate-Digital-Weighing-Machine-Batteries-Included_d93c208f-cc6d-43eb-a802-5f4d38a798c6.e87920ff481f3d33489e7d6e8acac1bd.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    "details": [
      "Tempered Glass",
      "LCD Display",
      "Auto On/Off"
    ],
    "price": "₦13,200",
    "isFeatured": false,
    "brand": "HealthSense",
    "color": ["Black", "Clear"],
    "sizes": [],
    "productSpecs": {
      "material": "Tempered Glass, Plastic",
      "origin": "USA",
      "gender": "Unisex"
    }
  },
  {
    "id": 137,
    "name": "Makeup Organizer – 360° Rotating Storage Box",
    "image": "https://i5.walmartimages.com/seo/SDJMa-Makeup-Organizer-360-Degree-Rotating-Adjustable-Cosmetic-Storage-Display-Case-Accessories-Umbrella-Fits-Brushes-Lipsticks-Jewelry-More_3e48f530-05fd-47d3-96c9-aae05b0ae744.07cde78d163c2a7bdb6f1cefe8742079.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    "details": [
      "Adjustable Layers",
      "Large Capacity",
      "Easy to Clean"
    ],
    "price": "₦16,000",
    "isFeatured": true,
    "brand": "GlamSpace",
    "color": ["White", "Pink"],
    "sizes": [],
    "productSpecs": {
      "material": "Acrylic",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 138,
    "name": "Multi-Layer Shoe Rack Organizer – 4 Tiers",
    "image": "https://img.joomcdn.net/c4386b304684f10f44d0e6ae020fb6a116fef5d0_original.jpeg",
    "details": [
      "Sturdy Design",
      "Space-Saving",
      "Fits 12 Pairs"
    ],
    "price": "₦20,500",
    "isFeatured": false,
    "brand": "HomeEase",
    "color": ["Black", "Silver"],
    "sizes": [],
    "productSpecs": {
      "material": "Metal, Plastic",
      "origin": "China",
      "gender": "Unisex"
    }
  }]
const favorites = [
 {
  "id": 139,
  "name": "Rechargeable Hair Clipper – Professional Grooming Kit",
  "image": "https://images-cdn.ubuy.ae/6522ba7b30a7a879d31c8a87-hair-clippers-for-men-professional-hair.jpg",
  "details": [
    "Cordless",
    "USB Charging",
    "Stainless Steel Blades",
    "Adjustable Combs",
    "Ergonomic Design",
    "Quiet Motor"
  ],
  "price": "₦15,800",
  "isFeatured": true,
  "brand": "ProTrim",
  "color": ["Black", "Silver"],
  "sizes": [],
  "productSpecs": {
    "material": "ABS Plastic & Stainless Steel",
    "origin": "China",
    "gender": "Unisex"
  }
},
{
  "id": 140,
  "name": "Portable Blender – USB Rechargeable Smoothie Maker",
  "image": "https://m.media-amazon.com/images/I/716iF4+GMfL._AC_SL1500_.jpg",
  "details": [
    "6 Blades",
    "BPA-Free",
    "Travel-Friendly"
  ],
  "price": "₦14,200",
  "isFeatured": false,
  "brand": "BlendGo",
  "color": ["White", "Green"],
  "sizes": [],
  "productSpecs": {
    "material": "BPA-Free Plastic",
    "origin": "China",
    "gender": "Unisex",
    "capacity": "380ml",
    "power": "USB Rechargeable"
  }
},
{
  "id": 141,
  "name": "Rechargeable LED Camping Lantern – Multipurpose",
  "image": "https://images-cdn.ubuy.co.in/63b5ff8b7fadee6a52029ba0-beyondop-portable-night-lights.jpg",
  "details": [
    "Solar & USB Charging",
    "Waterproof",
    "3 Light Modes"
  ],
  "price": "₦11,500",
  "isFeatured": true,
  "brand": "EcoLite",
  "color": ["Black", "Yellow"],
  "sizes": [],
  "productSpecs": {
    "material": "ABS Plastic",
    "origin": "China",
    "gender": "Unisex",
    "batteryType": "Rechargeable Lithium-ion",
    "runtime": "8-12 hours"
  }
},
{
  "id": 142,
  "name": "Digital Kitchen Scale – High Precision",
  "image": "https://i5.walmartimages.com/seo/Mainstays-High-Precision-Digital-Kitchen-Scale-Black_ca416b78-1d49-4eb9-8991-48d30fc239cd.62bfe66f9809dd4cb7a8047d34151825.jpeg",
  "details": [
    "Up to 10kg",
    "LCD Display",
    "Tare Function"
  ],
  "price": "₦8,200",
  "isFeatured": false,
  "brand": "KitchenPro",
  "color": ["Silver", "Black"],
  "sizes": [],
  "productSpecs": {
    "material": "Stainless Steel",
    "origin": "China",
    "gender": "Unisex",
    "precision": "1g",
    "power": "2 x AAA batteries"
  }
},{
  "id": 143,
  "name": "Electric Hand Mixer – 7 Speed with Turbo Function",
  "image": "https://www-konga-com-res.cloudinary.com/f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/F/T/112841_1633082785.jpg",
  "details": [
    "7 Speeds",
    "Stainless Steel Beaters",
    "Turbo Function"
  ],
  "price": "₦16,000",
  "isFeatured": true,
  "brand": "BakeMaster",
  "color": ["White", "Grey"],
  "sizes": [],
  "productSpecs": {
    "material": "Plastic & Stainless Steel",
    "origin": "China",
    "gender": "Unisex"
  }
},
{
  "id": 144,
  "name": "Rechargeable Fabric Lint Remover – Portable",
  "image": "https://i5.walmartimages.com/seo/Fixdono-Fabric-Shaver-Lint-Remover-Rechargeable-Electric-Portable-Sweater-Defuzzer-with-2-Spare-Blades-Rose-Red_fdd1eb27-8907-42dc-b099-af92bc1b0788.df8e14e546728e01fc7b17a753c63a9b.jpeg",
  "details": [
    "USB Charging",
    "Stainless Steel Blades",
    "Safe for Clothes"
  ],
  "price": "₦9,500",
  "isFeatured": false,
  "brand": "ClothCare",
  "color": ["White", "Blue"],
  "sizes": [],
  "productSpecs": {
    "material": "ABS Plastic & Stainless Steel",
    "origin": "China",
    "gender": "Unisex"
  }
}]
const electronics = [
   {
    "id": 145,
    "name": "Rechargeable 18 Inches Standing Fan with Solar ",
    "image": "https://apexsolar.com.ng/wp-content/uploads/2024/05/Apex-Rechargeable-Standing-Fan-18-Inches-with-Solar-Panel4.png",
    "details": [
      "Rechargeable",
      "Solar Powered",
      "18 Inches",
      "Remote Control"
    ],
    "price": "\u20a689,500",
    "isFeatured": false,
    "brand": "Apex",
    "color": [
      "White",
      "Blue"
    ],
    "sizes": [
      "One Size"
    ],
    "productSpecs": {
      "material": "Metal",
      "origin": "China",
      "gender": "Male"
    }
  },{ 
    "id": 146,
    "name": "BRUHM STANDING GAS COOKER 3G+1E INOX TOP",
    "isFeatured": false,
    "details": [
      "3 Gas Burners + 1 Electric Plate",
      "Oven",
      "Inox Top",
      "Free Standing"
    ],
    "description": "A reliable BRUHM standing cooker with 3 gas burners and 1 electric hotplate, ideal for all types of home cooking.",
    "image": "https://electromart.com.ng/wp-content/uploads/2023/12/bgc-5540ib-1-1.jpg",
    "price": "₦189,990",
    "brand": "BRUHM",
    "color": ["Silver", "Black"],
    "sizes": [],
    "productSpecs": {
      "material": "Stainless Steel",
      "wattage": "Electric Plate",
      "capacity": "Standard Oven Size",
      "dimensions": "90cm Height x 60cm Width"
    }
  },{
    "id": 147,
    "name": "YFL HOME BlendLab Pro 2.0 Mixer High ProBlender",
    "isFeatured": true,
    "details": [
      "Mixer Grinder",
      "High Speed",
      "Stainless Steel Blades",
      "2 Jars"
    ],
    "description": "Powerful and versatile blender perfect for smoothies, soups, and dry grinding with multiple speed settings.",
    "image": "https://m.media-amazon.com/images/I/71e4sGjehrL._AC_SL1500_.jpg",
    "price": "₦55,500",
    "brand": "YFL HOME",
    "color": ["Black", "Silver"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic & Stainless Steel",
      "wattage": "High Power Motor",
      "capacity": "2 Jars",
      "dimensions": "40cm Height x 20cm Width"
    }
  },{
    "id": 148,
    "name": "Ninja Detect Power Blender Pro 1200W Kitchen Blender",
    "isFeatured": false,
    "details": [
      "1200W",
      "Smart Torque",
      "Auto-iQ",
      "BPA-Free Jars"
    ],
    "description": "A high-performance blender with smart features and powerful motor for professional-grade blending.",
    "image": "https://res.cloudinary.com/sharkninja/image/upload/f_auto,q_auto/v1733129866/Ninja/TB201UK/Gallery%20and%20Features/Ninja-TB201-InUse-Kitchen-Island-SalsaChop-LineUp.jpg",
    "price": "₦98,500",
    "brand": "Ninja",
    "color": ["Black", "Transparent"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic & Stainless Steel",
      "wattage": "1200W",
      "capacity": "Large Jar + Small Jar",
      "dimensions": "45cm Height x 23cm Width"
    }
  }, {
    "id": 149,
    "name": "LED 4K Ambilight Samsung TV Black DFRT332",
    "image": "https://m.media-amazon.com/images/I/61pIp1IC6TS.jpg",
    "details": [
      "55-inch",
      "4K Ultra HD",
      "Ambilight",
      "Smart TV"
    ],
    "price": "₦450,000",
    "isFeatured": true,
    "brand": "Samsung",
    "color": ["Black"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic & Metal",
      "origin": "South Korea",
      "gender": "Unisex"
    }
  },{
    "id": 150,
    "name": "Oraimo FreePods 4 Wireless Earbuds",
    "image": "https://www.mobigyaan.com/wp-content/uploads/2023/06/oraimo-Freepods-4-Wireless-Earbuds-1024x1024.jpg",
    "details": [
      "Noise Cancellation",
      "36H Battery Life",
      "Bluetooth 5.2",
      "Touch Control"
    ],
    "price": "₦32,000",
    "isFeatured": true,
    "brand": "Oraimo",
    "color": ["Black"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 151,
    "name": "HP 15s Laptop – Intel Core i5, 8GB RAM, 512GB SSD",
    "image": "https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTErNllFQ25LM0wuX1NTNDAwXy5qcGc.jpg",
    "details": [
      "15.6-inch Display",
      "Windows 11",
      "Intel Core i5 11th Gen",
      "512GB SSD"
    ],
    "price": "₦450,000",
    "isFeatured": false,
    "brand": "HP",
    "color": ["Silver"],
    "sizes": [],
    "productSpecs": {
      "material": "Aluminum & Plastic",
      "origin": "USA",
      "gender": "Unisex"
    }
  },
  {
    "id": 152,
    "name": "Samsung Galaxy A14 4G – 4GB RAM + 128GB ROM",
    "image": "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/1743722/1.jpg?6147",
    "details": [
      "Android 13",
      "50MP Camera",
      "5000mAh Battery",
      "128GB Storage"
    ],
    "price": "₦139,000",
    "isFeatured": true,
    "brand": "Samsung",
    "color": ["Black", "Silver", "Green"],
    "sizes": [],
    "productSpecs": {
      "material": "Glass & Plastic",
      "origin": "South Korea",
      "gender": "Unisex"
    }
  },{
    "id": 153,
    "name": "Binatone Smooth Gliding Steam Iron SI-1755",
    "image": "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/53/863789/2.jpg?5001",
    "details": [
      "Non-stick soleplate",
      "1200W",
      "Steam Burst",
      "Vertical Ironing"
    ],
    "price": "₦14,500",
    "isFeatured": false,
    "brand": "Binatone",
    "color": ["White", "Blue"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic & Metal",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 154,
    "name": "Royal 6kg Top Load Washing Machine",
    "image": "https://whirlpoolindia.vtexassets.com/arquivos/ids/169616-800-auto?v=638726037717030000&width=800&height=auto&aspect=true",
    "details": [
      "Semi-Automatic",
      "Twin Tub",
      "Low Power Consumption"
    ],
    "price": "₦89,999",
    "isFeatured": true,
    "brand": "Royal",
    "color": ["White"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic & Metal",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 155,
    "name": "Smart Electric Toothbrush – Rechargeable with Timer",
    "image": "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/7205593/1.jpg?8137",
    "details": [
      "5 Brushing Modes",
      "USB Charging",
      "Waterproof"
    ],
    "price": "₦21,500",
    "isFeatured": false,
    "brand": "Philips",
    "color": ["White", "Blue"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 156,
    "name": "Bluetooth Wireless Gaming Controller for PS4/PC",
    "image": "https://www.icode.com/wp-content/uploads/P02.jpg",
    "details": [
      "DualShock",
      "Wireless",
      "Rechargeable",
      "Vibration Feedback"
    ],
    "price": "₦18,000",
    "isFeatured": true,
    "brand": "Sony",
    "color": ["Black", "Blue"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 157,
    "name": "Mini Projector YG300 Portable LED Projector",
    "image": "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/9518952/1.jpg?7697",
    "details": [
      "HD 1080P",
      "USB/HDMI/AV",
      "Home Theater"
    ],
    "price": "₦28,500",
    "isFeatured": false,
    "brand": "YG300",
    "color": ["Yellow", "White"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 158,
    "name": "Men's Analog Stainless Steel Wrist Watch",
    "image": "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/2005363/1.jpg?1435",
    "details": [
      "Water Resistant",
      "Quartz",
      "Luxury Look"
    ],
    "price": "₦13,000",
    "isFeatured": true,
    "brand": "Curren",
    "color": ["Silver", "Black"],
    "sizes": [],
    "productSpecs": {
      "material": "Stainless Steel",
      "origin": "China",
      "gender": "Male"
    }
  },
  {
    "id": 159,
    "name": "Adjustable Laptop Stand with Cooling Fans",
    "image": "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/3599501/1.jpg?4627",
    "details": [
      "Foldable",
      "Aluminum Alloy",
      "USB-Powered Fans"
    ],
    "price": "₦16,800",
    "isFeatured": false,
    "brand": "Baseus",
    "color": ["Silver", "Black"],
    "sizes": [],
    "productSpecs": {
      "material": "Aluminum Alloy",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 160,
    "name": "Electric Facial Cleansing Brush – Waterproof",
    "image": "https://m.media-amazon.com/images/I/71IKsxuFmkL.jpg",
    "details": [
      "3 Speeds",
      "USB Rechargeable",
      "Soft Bristles"
    ],
    "price": "₦11,900",
    "isFeatured": true,
    "brand": "Foreo",
    "color": ["Pink", "White"],
    "sizes": [],
    "productSpecs": {
      "material": "Silicone",
      "origin": "China",
      "gender": "Unisex"
    }
  },
  {
    "id": 161,
    "name": "Automatic Soap Dispenser – Touchless",
    "image": "https://images-na.ssl-images-amazon.com/images/I/61hC6PmZvFL._UL500_.jpg",
    "details": [
      "Infrared Sensor",
      "Battery Operated",
      "350ml Capacity"
    ],
    "price": "₦9,500",
    "isFeatured": false,
    "brand": "Simplehuman",
    "color": ["White", "Silver"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic",
      "origin": "China",
      "gender": "Unisex"
    }
  },{
    "id": 162,
    "name": "Electric Kettle – 2L Stainless Steel Boiler",
    "image": "https://m.media-amazon.com/images/I/71a-ogDPJQL.jpg",
    "details": [
      "1500W",
      "Auto Shut-Off",
      "Fast Boil"
    ],
    "price": "₦18,500",
    "isFeatured": false,
    "brand": "Binatone",
    "color": ["Silver", "Black"],
    "sizes": [],
    "productSpecs": {
      "material": "Stainless Steel",
      "origin": "China",
      "gender": "Unisex"
    }
  },{
    "id": 163,
    "name": "Essential Oil Diffuser – Aromatherapy Humidifier",
    "image": "https://i0.wp.com/chronos-stores.com/wp-content/uploads/2022/03/Essential-Oil-Diffuser-Humidifier-Various-Colors-1.jpg?fit=736%2C736&ssl=1",
    "details": [
      "7 LED Colors",
      "300ml Capacity",
      "Timer Settings"
    ],
    "price": "₦14,500",
    "isFeatured": false,
    "brand": "Aroma Bliss",
    "color": ["White", "Brown"],
    "sizes": [],
    "productSpecs": {
      "material": "Plastic",
      "origin": "China",
      "gender": "Unisex"
    }
  },{
    "id": 164,
    "name": "Digital Bathroom Scale – Body Weight Monitor",
    "image": "https://i5.walmartimages.com/seo/Digital-Bathroom-Scale-Body-Weight-Bluetooth-Smart-Weighing-Scale-Professional-BMI-Highly-Accurate-Digital-Weighing-Machine-Batteries-Included_d93c208f-cc6d-43eb-a802-5f4d38a798c6.e87920ff481f3d33489e7d6e8acac1bd.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    "details": [
      "Tempered Glass",
      "LCD Display",
      "Auto On/Off"
    ],
    "price": "₦13,200",
    "isFeatured": false,
    "brand": "HealthSense",
    "color": ["Black", "Clear"],
    "sizes": [],
    "productSpecs": {
      "material": "Tempered Glass, Plastic",
      "origin": "USA",
      "gender": "Unisex"
    }
  }
]
const allProducts = [...products, ...bags, ...shoes, ...beautyProducts, ...clothes, ...sports, ...favorites]
// const featuredProducts = allProducts.filter((product)=> product.isFeatured)
const [users , setUsers]= useState([])
const [error , setError]= useState(null)

const DOMAIN = "https://backend-project-1-1qj9.onrender.com"
useEffect(()=>{
  const getUsers = async () => {
    try{
      const res = await fetch(`${DOMAIN}/api/users`)
      if (!res.ok) throw new Error("failed to get users")
      const data = await res.json()
      setUsers (data.users)
    }catch(error){
      setError (error.message)
    }
}
 getUsers()
},[])

  return (
    <div className=''>
      <Navbar/>
      <Header />
      {users.map((user)=>(
        <li key={user.id}>{user.name}</li>
      ))}
      <Routes>
        <Route path='/' element={<Homepage products={products} clothes={clothes} allProducts={allProducts}/>} />
        <Route path='/shop' element={<Shop allProducts={allProducts}/>} />
        <Route path='/bags' element={<Bags bags={bags} allProducts={allProducts}/>}/>
        <Route path='/beauty' element={<Beauty beautyProducts={beautyProducts} allProducts={allProducts}/>}/>
        <Route path='/clothes' element={<Clothes clothes={clothes} allProducts={allProducts}/>}/>
        <Route path='/shoes' element={<Shoes shoes={shoes} allProducts={allProducts}/>} />
        <Route path='/fitness' element={<Sports sports={sports} allProducts={allProducts}/>} />
        <Route path='/electronics' element={<Electronics electronics={electronics} allProducts={allProducts}/>} />
        <Route path='/sales' element={<Sales />}/>
        <Route path='/cart' element={<Cart allProducts={allProducts}/>} />
        <Route path='/product/:id' element={
          <CounterProvider>
            <ProductDetails allProducts={allProducts}/>
          </CounterProvider>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
