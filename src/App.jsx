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
import Description from './pages/Description'

const App = () => {
const bags = [{
  name: "Classic 3 Pieces Leather Female Shoulder Bags And Women Handbag",
  deatils: "",
  image: "https://www.cartrollers.com/wp-content/uploads/2024/08/Classic-3-Pieces-Leather-Female-Shoulder-Bags-And-Women-Hand-Bag-6.jpeg",
  price: "₦33,500"
},{
  name: "Classic 3 Pieces Leather Female Shoulder Bags And Women Handbag",
  deatils: "",
  image: "https://www.cartrollers.com/wp-content/uploads/2024/08/Classic-3-Pieces-Leather-Female-Shoulder-Bags-And-Women-Hand-Bag-6.jpeg",
  price: "₦33,500"
},{
  name: "Classic 3 Pieces Leather Female Shoulder Bags And Women Handbag",
  deatils: "",
  image: "https://www.cartrollers.com/wp-content/uploads/2024/08/Classic-3-Pieces-Leather-Female-Shoulder-Bags-And-Women-Hand-Bag-6.jpeg",
  price: "₦33,500"
},{
  name: "Classic 3 Pieces Leather Female Shoulder Bags And Women Handbag",
  deatils: "",
  image: "https://www.cartrollers.com/wp-content/uploads/2024/08/Classic-3-Pieces-Leather-Female-Shoulder-Bags-And-Women-Hand-Bag-6.jpeg",
  price: "₦33,500"
},{
  name: "Classic 3 Pieces Leather Female Shoulder Bags And Women Handbag",
  deatils: "",
  image: "https://www.cartrollers.com/wp-content/uploads/2024/08/Classic-3-Pieces-Leather-Female-Shoulder-Bags-And-Women-Hand-Bag-6.jpeg",
  price: "₦33,500"
},{
  name: "Classic 3 Pieces Leather Female Shoulder Bags And Women Handbag",
  deatils: "",
  image: "https://www.cartrollers.com/wp-content/uploads/2024/08/Classic-3-Pieces-Leather-Female-Shoulder-Bags-And-Women-Hand-Bag-6.jpeg",
  price: "₦33,500"
},{
  name: "Classic 3 Pieces Leather Female Shoulder Bags And Women Handbag",
  deatils: "",
  image: "https://www.cartrollers.com/wp-content/uploads/2024/08/Classic-3-Pieces-Leather-Female-Shoulder-Bags-And-Women-Hand-Bag-6.jpeg",
  price: "₦33,500"
},{
  name: "Classic 3 Pieces Leather Female Shoulder Bags And Women Handbag",
  deatils: "",
  image: "https://www.cartrollers.com/wp-content/uploads/2024/08/Classic-3-Pieces-Leather-Female-Shoulder-Bags-And-Women-Hand-Bag-6.jpeg",
  price: "₦33,500"
},{
  name: "Classic 3 Pieces Leather Female Shoulder Bags And Women Handbag",
  deatils: "",
  image: "https://www.cartrollers.com/wp-content/uploads/2024/08/Classic-3-Pieces-Leather-Female-Shoulder-Bags-And-Women-Hand-Bag-6.jpeg",
  price: "₦33,500"
},{
  name: "Classic 3 Pieces Leather Female Shoulder Bags And Women Handbag",
  deatils: "",
  image: "https://www.cartrollers.com/wp-content/uploads/2024/08/Classic-3-Pieces-Leather-Female-Shoulder-Bags-And-Women-Hand-Bag-6.jpeg",
  price: "₦33,500"
},{
  name: "Classic 3 Pieces Leather Female Shoulder Bags And Women Handbag",
  deatils: "",
  image: "https://www.cartrollers.com/wp-content/uploads/2024/08/Classic-3-Pieces-Leather-Female-Shoulder-Bags-And-Women-Hand-Bag-6.jpeg",
  price: "₦33,500"
},{
  name: "Classic 3 Pieces Leather Female Shoulder Bags And Women Handbag",
  deatils: "",
  image: "https://www.cartrollers.com/wp-content/uploads/2024/08/Classic-3-Pieces-Leather-Female-Shoulder-Bags-And-Women-Hand-Bag-6.jpeg",
  price: "₦33,500"
},]
const shoes = [{
  name: "Miss Z 100 Black Patent calf leather",
  image: "https://asia.christianlouboutin.com/media/catalog/product/cache/28/image/9df78eab33525d08d6e5fb8d27136e95/1/2/5/0/christianlouboutin-missz-1250939_B439_1_1200x1200_1744649775.jpg",
  price: "₦53,500",
  details: ''
},{
  name: "Miss Z 100 Black Patent calf leather",
  image: "https://asia.christianlouboutin.com/media/catalog/product/cache/28/image/9df78eab33525d08d6e5fb8d27136e95/1/2/5/0/christianlouboutin-missz-1250939_B439_1_1200x1200_1744649775.jpg",
  price: "₦53,500",
  details: ''
},{
  name: "Miss Z 100 Black Patent calf leather",
  image: "https://asia.christianlouboutin.com/media/catalog/product/cache/28/image/9df78eab33525d08d6e5fb8d27136e95/1/2/5/0/christianlouboutin-missz-1250939_B439_1_1200x1200_1744649775.jpg",
  price: "₦53,500",
  details: ''
},{
  name: "Miss Z 100 Black Patent calf leather",
  image: "https://asia.christianlouboutin.com/media/catalog/product/cache/28/image/9df78eab33525d08d6e5fb8d27136e95/1/2/5/0/christianlouboutin-missz-1250939_B439_1_1200x1200_1744649775.jpg",
  price: "₦53,500",
  details: ''
},{
  name: "Miss Z 100 Black Patent calf leather",
  image: "https://asia.christianlouboutin.com/media/catalog/product/cache/28/image/9df78eab33525d08d6e5fb8d27136e95/1/2/5/0/christianlouboutin-missz-1250939_B439_1_1200x1200_1744649775.jpg",
  price: "₦53,500",
  details: ''
},{
  name: "Miss Z 100 Black Patent calf leather",
  image: "https://asia.christianlouboutin.com/media/catalog/product/cache/28/image/9df78eab33525d08d6e5fb8d27136e95/1/2/5/0/christianlouboutin-missz-1250939_B439_1_1200x1200_1744649775.jpg",
  price: "₦53,500",
  details: ''
},{
  name: "Miss Z 100 Black Patent calf leather",
  image: "https://asia.christianlouboutin.com/media/catalog/product/cache/28/image/9df78eab33525d08d6e5fb8d27136e95/1/2/5/0/christianlouboutin-missz-1250939_B439_1_1200x1200_1744649775.jpg",
  price: "₦53,500",
  details: ''
},{
  name: "Miss Z 100 Black Patent calf leather",
  image: "https://asia.christianlouboutin.com/media/catalog/product/cache/28/image/9df78eab33525d08d6e5fb8d27136e95/1/2/5/0/christianlouboutin-missz-1250939_B439_1_1200x1200_1744649775.jpg",
  price: "₦53,500",
  details: ''
},{
  name: "Miss Z 100 Black Patent calf leather",
  image: "https://asia.christianlouboutin.com/media/catalog/product/cache/28/image/9df78eab33525d08d6e5fb8d27136e95/1/2/5/0/christianlouboutin-missz-1250939_B439_1_1200x1200_1744649775.jpg",
  price: "₦53,500",
  details: ''
},{
  name: "Miss Z 100 Black Patent calf leather",
  image: "https://asia.christianlouboutin.com/media/catalog/product/cache/28/image/9df78eab33525d08d6e5fb8d27136e95/1/2/5/0/christianlouboutin-missz-1250939_B439_1_1200x1200_1744649775.jpg",
  price: "₦53,500",
  details: ''
},{
  name: "Miss Z 100 Black Patent calf leather",
  image: "https://asia.christianlouboutin.com/media/catalog/product/cache/28/image/9df78eab33525d08d6e5fb8d27136e95/1/2/5/0/christianlouboutin-missz-1250939_B439_1_1200x1200_1744649775.jpg",
  price: "₦53,500",
  details: ''
},{
  name: "Miss Z 100 Black Patent calf leather",
  image: "https://asia.christianlouboutin.com/media/catalog/product/cache/28/image/9df78eab33525d08d6e5fb8d27136e95/1/2/5/0/christianlouboutin-missz-1250939_B439_1_1200x1200_1744649775.jpg",
  price: "₦53,500",
  details: ''
}]
const beautyProducts = [{
  name: " Heartleaf Quercetinol Pore Deep Cleansing Foam",
  image: "https://rhemabeautyshop.com/wp-content/uploads/2024/06/IMG_9978.webp",
  details: "",
  price: "₦53,500"
},{
  name: " Heartleaf Quercetinol Pore Deep Cleansing Foam",
  image: "https://rhemabeautyshop.com/wp-content/uploads/2024/06/IMG_9978.webp",
  details: "",
  price: "₦53,500"
},{
  name: " Heartleaf Quercetinol Pore Deep Cleansing Foam",
  image: "https://rhemabeautyshop.com/wp-content/uploads/2024/06/IMG_9978.webp",
  details: "",
  price: "₦53,500"
},{
  name: " Heartleaf Quercetinol Pore Deep Cleansing Foam",
  image: "https://rhemabeautyshop.com/wp-content/uploads/2024/06/IMG_9978.webp",
  details: "",
  price: "₦53,500"
},{
  name: " Heartleaf Quercetinol Pore Deep Cleansing Foam",
  image: "https://rhemabeautyshop.com/wp-content/uploads/2024/06/IMG_9978.webp",
  details: "",
  price: "₦53,500"
},{
  name: " Heartleaf Quercetinol Pore Deep Cleansing Foam",
  image: "https://rhemabeautyshop.com/wp-content/uploads/2024/06/IMG_9978.webp",
  details: "",
  price: "₦53,500"
},{
  name: " Heartleaf Quercetinol Pore Deep Cleansing Foam",
  image: "https://rhemabeautyshop.com/wp-content/uploads/2024/06/IMG_9978.webp",
  details: "",
  price: "₦53,500"
},{
  name: " Heartleaf Quercetinol Pore Deep Cleansing Foam",
  image: "https://rhemabeautyshop.com/wp-content/uploads/2024/06/IMG_9978.webp",
  details: "",
  price: "₦53,500"
},{
  name: " Heartleaf Quercetinol Pore Deep Cleansing Foam",
  image: "https://rhemabeautyshop.com/wp-content/uploads/2024/06/IMG_9978.webp",
  details: "",
  price: "₦53,500"
},{
  name: " Heartleaf Quercetinol Pore Deep Cleansing Foam",
  image: "https://rhemabeautyshop.com/wp-content/uploads/2024/06/IMG_9978.webp",
  details: "",
  price: "₦53,500"
},{
  name: " Heartleaf Quercetinol Pore Deep Cleansing Foam",
  image: "https://rhemabeautyshop.com/wp-content/uploads/2024/06/IMG_9978.webp",
  details: "",
  price: "₦53,500"
},{
  name: " Heartleaf Quercetinol Pore Deep Cleansing Foam",
  image: "https://rhemabeautyshop.com/wp-content/uploads/2024/06/IMG_9978.webp",
  details: "",
  price: "₦53,500"
},]
const clothes = [{
  name: 'Black short dress',
  image: "https://cdn-img.prettylittlething.com/3/a/c/f/3acfc17e14e3932ae8a5746081fd4e3c4df0dfa2_cnk8964_1.jpg?imwidth=600",
  details: "",
  price: "₦83,500"
},{
  name: 'Black short dress',
  image: "https://images.squarespace-cdn.com/content/v1/575ef1b97da24fd757acb056/1415c010-01bc-45a0-80c2-1d30e6dc86f1/61TrawddjLL._AC_SX569._SX._UX._SY._UY_.jpg",
  details: "",
  price: "₦83,500"
},{
  name: 'Black short dress',
  image: "https://cdn-1.azazie.com/upimg/s360/1c/46/64237af3c3b069a24d7cdf47752f1c46.jpg",
  details: "",
  price: "₦83,500"
},{
  name: 'Black short dress',
  image: "https://www.ladyblacktie.com/cdn/shop/files/LadyBlackTie_070186_Original__12149.1686452888.1280.1280.jpg?v=1744755026",
  details: "",
  price: "₦83,500"
},{
  name: 'Black short dress',
  image: "https://outcasts.in/cdn/shop/files/IMG_1767.jpg?v=1750855681&width=1080",
  details: "",
  price: "₦83,500"
},{
  name: 'Black short dress',
  image: "https://cdn-img.prettylittlething.com/3/a/c/f/3acfc17e14e3932ae8a5746081fd4e3c4df0dfa2_cnk8964_1.jpg?imwidth=600",
  details: "",
  price: "₦83,500"
},{
  name: 'Black short dress',
  image: "https://cdn-img.prettylittlething.com/3/a/c/f/3acfc17e14e3932ae8a5746081fd4e3c4df0dfa2_cnk8964_1.jpg?imwidth=600",
  details: "",
  price: "₦83,500"
},{
  name: 'Black short dress',
  image: "https://cdn-img.prettylittlething.com/3/a/c/f/3acfc17e14e3932ae8a5746081fd4e3c4df0dfa2_cnk8964_1.jpg?imwidth=600",
  details: "",
  price: "₦83,500"
},{
  name: 'Black short dress',
  image: "https://cdn-img.prettylittlething.com/3/a/c/f/3acfc17e14e3932ae8a5746081fd4e3c4df0dfa2_cnk8964_1.jpg?imwidth=600",
  details: "",
  price: "₦83,500"
},{
  name: 'Black short dress',
  image: "https://cdn-img.prettylittlething.com/3/a/c/f/3acfc17e14e3932ae8a5746081fd4e3c4df0dfa2_cnk8964_1.jpg?imwidth=600",
  details: "",
  price: "₦83,500"
},{
  name: 'Black short dress',
  image: "https://cdn-img.prettylittlething.com/3/a/c/f/3acfc17e14e3932ae8a5746081fd4e3c4df0dfa2_cnk8964_1.jpg?imwidth=600",
  details: "",
  price: "₦83,500"
},{
  name: 'Black short dress',
  image: "https://cdn-img.prettylittlething.com/3/a/c/f/3acfc17e14e3932ae8a5746081fd4e3c4df0dfa2_cnk8964_1.jpg?imwidth=600",
  details: "",
  price: "₦83,500"
}]
const sports = [{
  name: "Resistance Band Mini Loop Hip Perfect for Toning & Home Workout ",
  image: "https://jumbosportsng.com/cdn/shop/files/1_8_6067b057-7fa8-4598-8e6d-4cc84123479c_large.jpg?v=1727863174",
  details: "",
  price: "₦93,500"
},{
  name: "Resistance Band Mini Loop Hip Perfect for Toning & Home Workout ",
  image: "https://jumbosportsng.com/cdn/shop/files/1_8_6067b057-7fa8-4598-8e6d-4cc84123479c_large.jpg?v=1727863174",
  details: "",
  price: "₦93,500"
},{
  name: "Resistance Band Mini Loop Hip Perfect for Toning & Home Workout ",
  image: "https://jumbosportsng.com/cdn/shop/files/1_8_6067b057-7fa8-4598-8e6d-4cc84123479c_large.jpg?v=1727863174",
  details: "",
  price: "₦93,500"
},{
  name: "Resistance Band Mini Loop Hip Perfect for Toning & Home Workout ",
  image: "https://jumbosportsng.com/cdn/shop/files/1_8_6067b057-7fa8-4598-8e6d-4cc84123479c_large.jpg?v=1727863174",
  details: "",
  price: "₦93,500"
},{
  name: "Resistance Band Mini Loop Hip Perfect for Toning & Home Workout ",
  image: "https://jumbosportsng.com/cdn/shop/files/1_8_6067b057-7fa8-4598-8e6d-4cc84123479c_large.jpg?v=1727863174",
  details: "",
  price: "₦93,500"
},{
  name: "Resistance Band Mini Loop Hip Perfect for Toning & Home Workout ",
  image: "https://jumbosportsng.com/cdn/shop/files/1_8_6067b057-7fa8-4598-8e6d-4cc84123479c_large.jpg?v=1727863174",
  details: "",
  price: "₦93,500"
},{
  name: "Resistance Band Mini Loop Hip Perfect for Toning & Home Workout ",
  image: "https://jumbosportsng.com/cdn/shop/files/1_8_6067b057-7fa8-4598-8e6d-4cc84123479c_large.jpg?v=1727863174",
  details: "",
  price: "₦93,500"
},{
  name: "Resistance Band Mini Loop Hip Perfect for Toning & Home Workout ",
  image: "https://jumbosportsng.com/cdn/shop/files/1_8_6067b057-7fa8-4598-8e6d-4cc84123479c_large.jpg?v=1727863174",
  details: "",
  price: "₦93,500"
},{
  name: "Resistance Band Mini Loop Hip Perfect for Toning & Home Workout ",
  image: "https://jumbosportsng.com/cdn/shop/files/1_8_6067b057-7fa8-4598-8e6d-4cc84123479c_large.jpg?v=1727863174",
  details: "",
  price: "₦93,500"
},{
  name: "Resistance Band Mini Loop Hip Perfect for Toning & Home Workout ",
  image: "https://jumbosportsng.com/cdn/shop/files/1_8_6067b057-7fa8-4598-8e6d-4cc84123479c_large.jpg?v=1727863174",
  details: "",
  price: "₦93,500"
},{
  name: "Resistance Band Mini Loop Hip Perfect for Toning & Home Workout ",
  image: "https://jumbosportsng.com/cdn/shop/files/1_8_6067b057-7fa8-4598-8e6d-4cc84123479c_large.jpg?v=1727863174",
  details: "",
  price: "₦93,500"
},{
  name: "Resistance Band Mini Loop Hip Perfect for Toning & Home Workout ",
  image: "https://jumbosportsng.com/cdn/shop/files/1_8_6067b057-7fa8-4598-8e6d-4cc84123479c_large.jpg?v=1727863174",
  details: "",
  price: "₦93,500"
}]
const products = [{
    id: 1,
    name: "Yves Saint Laurent Libre Intense Eau de Parfum – 90ml for Women",
    details: "90ml | Eau de Parfum | Long-Lasting | Floral Amber Scent | For Her",
    description: "Yves Saint Laurent Libre Intense Eau de Parfum is a bold and sensual fragrance that redefines femininity with strength and warmth. This luxurious scent is a deeper, more intense version of the original Libre, capturing the essence of a fierce woman who breaks boundaries and lives life on her own terms. Crafted for the confident and empowered, Libre Intense blends floral elegance with a warm, spicy amber base. The perfume opens with a burst of tangerine and French lavender, layered with Moroccan orange blossom, creating a rich heart. It dries down to a smoldering base of Madagascan vanilla, vetiver, and tonka bean — giving it an addictive trail that lingers for hours. Encased in a couture-inspired bottle with gold accents and the iconic YSL logo, this perfume is both a fashion statement and an olfactory masterpiece. Perfect for evening wear, romantic occasions, or whenever you want to feel powerful and irresistible.",
    image: "https://dscentsation.ng/cdn/shop/products/YvesSaintLaurentLibreEDP90mlPerfumeForWomen.jpg?v=1647924108",
    price: "₦93,500",
  },
  {
    id: 2,
    name: "Rechargeable 18 Inches Standing Fan with Solar Panel",
    details: "Rechargeable | Solar Powered | 18 Inches | Remote Control",
    description: "Energy-efficient standing fan with built-in rechargeable battery and solar panel support for uninterrupted cooling.",
    image: "https://apexsolar.com.ng/wp-content/uploads/2024/05/Apex-Rechargeable-Standing-Fan-18-Inches-with-Solar-Panel4.png",
    price: "₦89,500",
  },
  {
    id: 3,
    name: "Chunky Men Sneakers Black Rubber Sole",
    details: "Men's Sneakers | Chunky Sole | Color: Black | Sizes Available",
    description: "Stylish and durable chunky sneakers designed for comfort, grip, and long-lasting wear.",
    image: "https://shopby.com.ng/wp-content/uploads/2022/07/Chunky-Men-Sneakers-Black-shopby-online-mall.jpg",
    price: "₦120,000",
  },
  {
    id: 4,
    name: "BRUHM STANDING GAS COOKER 3G+1E INOX TOP BLACK",
    details: "3 Gas Burners + 1 Electric Plate | Oven | Inox Top | Free Standing",
    description: "A reliable BRUHM standing cooker with 3 gas burners and 1 electric hotplate, ideal for all types of home cooking.",
    image: "https://electromart.com.ng/wp-content/uploads/2023/12/bgc-5540ib-1-1.jpg",
    price: "₦189,990",
  },
  {
    id: 5,
    name: "YFL HOME BlendLab Pro 2.0 Mixer Grinder High ProBlender",
    details: "Mixer Grinder | High Speed | Stainless Steel Blades | 2 Jars",
    description: "Powerful and versatile blender perfect for smoothies, soups, and dry grinding with multiple speed settings.",
    image: "https://m.media-amazon.com/images/I/71e4sGjehrL._AC_SL1500_.jpg",
    price: "₦55,500",
  },
  {
    id: 6,
    name: "Ninja Detect Power Blender Pro 1200W Kitchen Blender",
    details: "1200W | Smart Torque | Auto-iQ | BPA-Free Jars",
    description: "A high-performance blender with smart features and powerful motor for professional-grade blending.",
    image: "https://res.cloudinary.com/sharkninja/image/upload/f_auto,q_auto/v1733129866/Ninja/TB201UK/Gallery%20and%20Features/Ninja-TB201-InUse-Kitchen-Island-SalsaChop-LineUp.jpg",
    price: "₦98,500",
  },
  {
    id: 7,
    name: "LED 4K Ambilight Samsung TV Black DFRT332",
    details: "55-inch | 4K Ultra HD | Ambilight | Smart TV",
    description: "Experience immersive visuals and vibrant colors with this Samsung 4K Ambilight TV designed for home entertainment.",
    image: "https://m.media-amazon.com/images/I/61pIp1IC6TS.jpg",
    price: "₦450,000",
  },
  {
    id: 8,
    name: "SEPATU SNEAKERS KOREA WANITA CASUAL FASHION ",
    details: "Women's Sneakers | Korean Fashion | Casual | Rubber Sole",
    description: "Trendy Korean-style casual sneakers designed for everyday wear with a comfy fit and modern look.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-7r98q-m02tsroj0067a6",
    price: "₦25,500",
  }, {
    id: 9,
    name: "Oraimo FreePods 4 Wireless Earbuds",
    details: "Noise Cancellation | 36H Battery | Bluetooth 5.2",
    description: "High-quality wireless earbuds with deep bass, long-lasting battery life, and environmental noise cancellation.",
    image: "https://www.mobigyaan.com/wp-content/uploads/2023/06/oraimo-Freepods-4-Wireless-Earbuds-1024x1024.jpg",
    price: "₦32,000",
  },
  {
    id: 10,
    name: "HP 15s Laptop – Intel Core i5, 8GB RAM, 512GB SSD",
    details: "15.6-inch | Windows 11 | Intel Core i5 11th Gen",
    description: "Reliable HP laptop perfect for work and school with smooth multitasking and fast SSD performance.",
    image: "https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTErNllFQ25LM0wuX1NTNDAwXy5qcGc.jpg",
    price: "₦450,000",
  },
  {
    id: 11,
    name: "Samsung Galaxy A14 4G – 4GB RAM + 128GB ROM",
    details: "Android 13 | 50MP Camera | 5000mAh Battery",
    description: "A budget-friendly smartphone with impressive battery life, smooth display, and great camera for daily use.",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/1743722/1.jpg?6147",
    price: "₦139,000",
  },
  {
    id: 12,
    name: "Binatone Smooth Gliding Steam Iron SI-1755",
    details: "Non-stick soleplate | 1200W | Steam Burst | Vertical Ironing",
    description: "Compact and powerful steam iron designed to make ironing faster, smoother, and more efficient.",
    image: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/53/863789/2.jpg?5001",
    price: "₦14,500",
  },
  {
    id: 13,
    name: "Royal 6kg Top Load Washing Machine",
    details: "Semi-Automatic | Twin Tub | Low Power Consumption",
    description: "Efficient washing machine with large capacity and powerful motor, ideal for everyday laundry.",
    image: "https://whirlpoolindia.vtexassets.com/arquivos/ids/169616-800-auto?v=638726037717030000&width=800&height=auto&aspect=true",
    price: "₦89,999",
  },{
    id: 14,
    name: "Smart Electric Toothbrush – Rechargeable with Timer",
    details: "5 Brushing Modes | USB Charging | Waterproof",
    description: "Advanced electric toothbrush with powerful cleaning, built-in timer, and long battery life for healthier teeth.",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/7205593/1.jpg?8137",
    price: "₦21,500",
  },{
    id: 15,
    name: "Bluetooth Wireless Gaming Controller for PS4/PC",
    details: "DualShock | Wireless | Rechargeable | Vibration Feedback",
    description: "Ergonomic gaming controller for seamless gameplay on PlayStation and PC with built-in vibration support.",
    image: "https://www.icode.com/wp-content/uploads/P02.jpg",
    price: "₦18,000",
  },
  {
    id: 16,
    name: "Mini Projector YG300 Portable LED Projector",
    details: "HD 1080P | USB/HDMI/AV | Home Theater",
    description: "Portable mini projector ideal for movie nights, gaming, and presentations on the go.",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/9518952/1.jpg?7697",
    price: "₦28,500",
  },
  {
    id: 17,
    name: "Men's Analog Stainless Steel Wrist Watch",
    details: "Water Resistant | Quartz | Luxury Look",
    description: "Elegant and durable wristwatch for men featuring a classic design perfect for all occasions.",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/96/2005363/1.jpg?1435",
    price: "₦13,000",
  },
  {
    id: 18,
    name: "Adjustable Laptop Stand with Cooling Fans",
    details: "Foldable | Aluminum Alloy | USB-Powered Fans",
    description: "Multipurpose laptop stand with adjustable angles and built-in cooling system for ergonomic computing.",
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/3599501/1.jpg?4627",
    price: "₦16,800",
  },{
    id: 19,
    name: "Electric Facial Cleansing Brush – Waterproof",
    details: "3 Speeds | USB Rechargeable | Soft Bristles",
    description: "Deep-cleaning facial brush for all skin types. Removes dirt, makeup, and dead skin while improving circulation.",
    image: "https://m.media-amazon.com/images/I/71IKsxuFmkL.jpg",
    price: "₦11,900",
  },
  {
    id: 20,
    name: "Automatic Soap Dispenser – Touchless",
    details: "Infrared Sensor | Battery Operated | 350ml",
    description: "Touch-free soap dispenser ideal for bathrooms and kitchens. Promotes hygiene with smart motion sensor technology.",
    image: "https://images-na.ssl-images-amazon.com/images/I/61hC6PmZvFL._UL500_.jpg",
    price: "₦9,500",
  },
  {
    id: 21,
    name: "Baby Diaper Backpack – Multi-functional Organizer",
    details: "Waterproof | USB Charging Port | 12 Pockets",
    description: "Spacious diaper bag with insulated bottle holders, changing mat, and compartments for baby essentials.",
    image: "https://image.made-in-china.com/202f0j00rzPkWohdCmuR/High-Quality-Multi-Function-Infant-Mom-Large-Capacity-Diaper-Bag-Storage-Mommy-Bag-Backpack-Baby-Bag.webp",
    price: "₦22,000",
  },
  {
    id: 22,
    name: "Electric Kettle – 2L Stainless Steel Boiler",
    details: "1500W | Auto Shut-Off | Fast Boil",
    description: "Safe and durable electric kettle perfect for quick boiling with a sleek stainless design.",
    image: "https://m.media-amazon.com/images/I/71a-ogDPJQL.jpg",
    price: "₦18,500",
  },
  {
    id: 23,
    name: "Non-Stick Cookware Set – 7pcs Stainless Steel",
    details: "Marble Coated | Heat Resistant Handles | Gas/Electric Compatible",
    description: "Elegant and efficient non-stick pots and pans perfect for everyday cooking with even heat distribution.",
    image: "https://image.made-in-china.com/202f0j00mYokDCPnlbpK/7PCS-Stainless-Steel-Cookware-Set-Multisize-Pots-and-Pans-for-Kitchen-with-Tempered-Glass-Lid-and-Non-Stick-Coating-Interior-Selected-Induction-Compatible.webp",
    price: "₦65,000",
  },
  {
    id: 24,
    name: "Essential Oil Diffuser – Aromatherapy Humidifier",
    details: "7 LED Colors | 300ml | Timer Settings",
    description: "Relaxing aroma diffuser that fills your space with essential oils and humidity for improved air quality.",
    image: "https://i0.wp.com/chronos-stores.com/wp-content/uploads/2022/03/Essential-Oil-Diffuser-Humidifier-Various-Colors-1.jpg?fit=736%2C736&ssl=1",
    price: "₦14,500",
  },
  {
    id: 25,
    name: "Adjustable Dumbbell – 20kg Home Gym Equipment",
    details: "Iron Weights | Non-slip Grip | For Strength Training",
    description: "Space-saving dumbbell with adjustable weights ideal for home workouts and muscle building.",
    image: "https://image.made-in-china.com/2f0j00rszVwpDhHakq/Home-Gym-Equipment-Adjustable-20kg-Dumbbell-Set.webp",
    price: "₦38,000",
  },
  {
    id: 26,
    name: "Digital Bathroom Scale – Body Weight Monitor",
    details: "Tempered Glass | LCD Display | Auto On/Off",
    description: "Accurate and stylish digital scale for daily body weight tracking with clear screen and slip-resistant feet.",
    image: "https://i5.walmartimages.com/seo/Digital-Bathroom-Scale-Body-Weight-Bluetooth-Smart-Weighing-Scale-Professional-BMI-Highly-Accurate-Digital-Weighing-Machine-Batteries-Included_d93c208f-cc6d-43eb-a802-5f4d38a798c6.e87920ff481f3d33489e7d6e8acac1bd.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    price: "₦13,200",
  },
  {
    id: 27,
    name: "Makeup Organizer – 360° Rotating Storage Box",
    details: "Adjustable Layers | Large Capacity | Easy to Clean",
    description: "Elegant rotating makeup box with compartments for brushes, lipsticks, perfumes, and more.",
    image: "https://i5.walmartimages.com/seo/SDJMa-Makeup-Organizer-360-Degree-Rotating-Adjustable-Cosmetic-Storage-Display-Case-Accessories-Umbrella-Fits-Brushes-Lipsticks-Jewelry-More_3e48f530-05fd-47d3-96c9-aae05b0ae744.07cde78d163c2a7bdb6f1cefe8742079.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    price: "₦16,000",
  },
  {
    id: 28,
    name: "Multi-Layer Shoe Rack Organizer – 4 Tiers",
    details: "Sturdy Design | Space-Saving | Fits 12 Pairs",
    description: "Strong and compact shoe rack perfect for organizing your hallway, closet, or bedroom.",
    image: "https://img.joomcdn.net/c4386b304684f10f44d0e6ae020fb6a116fef5d0_original.jpeg",
    price: "₦20,500",
}]
const favorites = [
  {
    id: 1,
    name: "Rechargeable Hair Clipper – Professional Grooming Kit",
    details: "Cordless | USB Charging | Stainless Steel Blades",
    description: "High-performance hair clipper designed for precise trimming and grooming. Features a quiet motor, ergonomic design, and adjustable combs for versatile haircuts at home or on the go.",
    image: "https://images-cdn.ubuy.ae/6522ba7b30a7a879d31c8a87-hair-clippers-for-men-professional-hair.jpg",
    price: "₦15,800",
  },
  {
    id: 2,
    name: "Mini Sewing Machine – Portable Electric Stitcher",
    details: "Double Thread | Foot Pedal | AC/DC Power",
    description: "Compact and easy-to-use sewing machine suitable for beginners and home projects. Offers two-speed control, built-in light, and durable construction for everyday fabric repairs.",
    image: "https://m.media-amazon.com/images/I/81obWUykd2L._AC_SL1500_.jpg",
    price: "₦21,000",
  },
  {
    id: 3,
    name: "Wireless Charging Pad – Fast Charge Station",
    details: "10W | Qi-Compatible | LED Indicator",
    description: "Convenient wireless charging pad compatible with iPhones, Samsung, and other Qi-enabled devices. Sleek, non-slip surface with overcharge and temperature protection.",
    image: "https://www.mcsteve.com/wp-content/uploads/2019/10/pad-1.jpg",
    price: "₦8,500",
  },
  {
    id: 4,
    name: "Stainless Steel Lunch Box – 3-Layer Thermal Insulated",
    details: "Leakproof | BPA-Free | Heat Retention",
    description: "Durable and stylish lunch box ideal for school, work, or travel. Features multiple compartments for keeping meals warm and separated throughout the day.",
    image: "https://5.imimg.com/data5/ECOM/Default/2023/11/361287028/AN/KB/OI/9532353/2image-0a58d519-b97b-4f0b-961f-0e88efd90b6b.jpg",
    price: "₦12,000",
  },
  {
    id: 5,
    name: "Smart Watch – Fitness Tracker with Heart Rate Monitor",
    details: "Bluetooth | Waterproof | Notifications & Alarms",
    description: "Multifunctional smartwatch for tracking steps, calories, heart rate, and sleep. Connects to your smartphone to receive calls, messages, and app alerts in real-time.",
    image: "https://m.media-amazon.com/images/I/51I2hcbAeXL.jpg",
    price: "₦27,500",
  },
  {
    id: 6,
    name: "LED Desk Lamp – Adjustable Brightness with USB Port",
    details: "Touch Control | Foldable | Eye-Care Light",
    description: "Energy-efficient desk lamp with dimmable settings and built-in USB charging port. Perfect for reading, studying, or late-night work sessions with minimal eye strain.",
    image: "https://images-cdn.ubuy.co.id/633ae5668ef64c31c168f8f3-krx.jpg",
    price: "₦10,300",
  }]

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
        <Route path='/' element={<Homepage products={products} clothes={clothes} />} />
        <Route path='/bags' element={<Bags bags={bags}/>}/>
        <Route path='/shoes' element={<Shoes shoes={shoes}/>} />
        <Route path='/beauty' element={<Beauty beautyProducts={beautyProducts}/>}/>
        <Route path='/clothes' element={<Clothes clothes={clothes}/>}/>
        <Route path='/sports' element={<Sports sports={sports}/>} />
        <Route path='/sales' element={<Sales />}/>
        <Route path='/products/:id' element={
          <CounterProvider>
            <ProductDetails products={products} favorites={favorites}/>
          </CounterProvider>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
