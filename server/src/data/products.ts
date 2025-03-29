import Product from "../../../shared/types/product";

const products: Product[] = [
  {
    id: "prod-1",
    qty: 0,
    name: "Comfy T-Shirt",
    description:
      "A high-quality, ethically sourced, and very comfy t-shirt. Soft, breathable, sustainably farmed cotton.",
    price: 999,
    currency: "usd",
    images: [
      "https://content.mycutegraphics.com/graphics/clothing/orange-tshirt.png",
    ],
  },
  {
    id: "prod-2",
    qty: 10,
    name: "Comfy Hoodie",
    description:
      "A high-quality, ethically sourced, and very comfy hoodie. Minimal, stylish, and perfect for layering.",
    price: 2999,
    currency: "usd",
    images: [
      "https://img.freepik.com/premium-vector/hoodie-clipart-cartoon-illustration-drawing_871209-9342.jpg",
    ],
  },
  {
    id: "prod-3",
    qty: 10,
    name: "Comfy Joggers",
    description:
      "A high-quality, ethically sourced, and very comfy pair of joggers. Warmer than sweatpants, great for winter lounging.",
    price: 1999,
    currency: "usd",
    images: [
      "https://media.istockphoto.com/id/1159540438/vector/dark-red-sport-trousers-for-sport-activities.jpg?s=612x612&w=0&k=20&c=PX0ddNvxsB0k6hKe2gSth2kJx2wpyLvxhrjLLu6aPp0=",
    ],
  },
  {
    id: "prod-4",
    qty: 10,
    name: "Comfy Canvas Tote Bag",
    description:
      "A stylish, utilitarian canvas tote bag. Ethically made, reusable—classic for sustainability.",
    price: 2499,
    currency: "usd",
    images: [
      "https://img.freepik.com/premium-vector/vector-cartoon-tote-bag-with-non-rigid-shape-fabric-tote-bag-with-handle_500021-385.jpg",
    ],
  },
];

export default products;
