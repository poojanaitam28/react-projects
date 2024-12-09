const data = [
  {
    id: 1,
    name: "Istanbul",
    info: "Product 1 is designed to meet your needs with exceptional quality and functionality. The sleek design and versatile features make it perfect for various uses, whether at home, in the office, or on the go. Crafted with high-quality materials, this product ensures durability and long-lasting performance. The user-friendly design allows for easy handling and operation, while its compact size makes it easy to carry around or store when not in use. Product 1 is a must-have for anyone looking for a blend of style, efficiency, and reliability. The elegant appearance complements any setting, whether modern or traditional, adding a touch of sophistication. With its advanced features, it stands out as a top choice in its category, offering great value for money. ",
    image:
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 29.99,
  },
  {
    id: 2,
    name: "Portugal",
    info: "Product 2 is designed to meet your needs with exceptional quality and functionality. The sleek design and versatile features make it perfect for various uses, whether at home, in the office, or on the go. Crafted with high-quality materials, this product ensures durability and long-lasting performance. The user-friendly design allows for easy handling and operation, while its compact size makes it easy to carry around or store when not in use. Product 1 is a must-have for anyone looking for a blend of style, efficiency, and reliability. The elegant appearance complements any setting, whether modern or traditional, adding a touch of sophistication. With its advanced features, it stands out as a top choice in its category, offering great value for money. ",
    image:
      "https://images.unsplash.com/photo-1505819244306-ef53954f9648?q=80&w=2656&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 39.99,
  },
  {
    id: 3,
    name: "Japan",
    info: "Product 3 is designed to meet your needs with exceptional quality and functionality. The sleek design and versatile features make it perfect for various uses, whether at home, in the office, or on the go. Crafted with high-quality materials, this product ensures durability and long-lasting performance. The user-friendly design allows for easy handling and operation, while its compact size makes it easy to carry around or store when not in use. Product 1 is a must-have for anyone looking for a blend of style, efficiency, and reliability. The elegant appearance complements any setting, whether modern or traditional, adding a touch of sophistication. With its advanced features, it stands out as a top choice in its category, offering great value for money. ",
    image:
      "https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 19.99,
  },
  {
    id: 4,
    name: "Lakshadweep",
    info: "Product 4 is designed to meet your needs with exceptional quality and functionality. The sleek design and versatile features make it perfect for various uses, whether at home, in the office, or on the go. Crafted with high-quality materials, this product ensures durability and long-lasting performance. The user-friendly design allows for easy handling and operation, while its compact size makes it easy to carry around or store when not in use. Product 1 is a must-have for anyone looking for a blend of style, efficiency, and reliability. The elegant appearance complements any setting, whether modern or traditional, adding a touch of sophistication. With its advanced features, it stands out as a top choice in its category, offering great value for money. ",
    image:
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 49.99,
  },
  {
    id: 5,
    name: "Italy",
    info: "Product 5 is designed to meet your needs with exceptional quality and functionality. The sleek design and versatile features make it perfect for various uses, whether at home, in the office, or on the go. Crafted with high-quality materials, this product ensures durability and long-lasting performance. The user-friendly design allows for easy handling and operation, while its compact size makes it easy to carry around or store when not in use. Product 1 is a must-have for anyone looking for a blend of style, efficiency, and reliability. The elegant appearance complements any setting, whether modern or traditional, adding a touch of sophistication. With its advanced features, it stands out as a top choice in its category, offering great value for money.",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 59.99,
  },
  {
    id: 6,
    name: "Kashmir",
    info: "Product 6 is designed to meet your needs with exceptional quality and functionality. The sleek design and versatile features make it perfect for various uses, whether at home, in the office, or on the go. Crafted with high-quality materials, this product ensures durability and long-lasting performance. The user-friendly design allows for easy handling and operation, while its compact size makes it easy to carry around or store when not in use. Product 1 is a must-have for anyone looking for a blend of style, efficiency, and reliability. The elegant appearance complements any setting, whether modern or traditional, adding a touch of sophistication. With its advanced features, it stands out as a top choice in its category, offering great value for money.",
    image:
      "https://plus.unsplash.com/premium_photo-1676398199619-a39f0dcafcca?q=80&w=3096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 59.99,
  },
  {
    id: 7,
    name: "Greece",
    info: "Product 7 is designed to meet your needs with exceptional quality and functionality. The sleek design and versatile features make it perfect for various uses, whether at home, in the office, or on the go. Crafted with high-quality materials, this product ensures durability and long-lasting performance. The user-friendly design allows for easy handling and operation, while its compact size makes it easy to carry around or store when not in use. Product 1 is a must-have for anyone looking for a blend of style, efficiency, and reliability. The elegant appearance complements any setting, whether modern or traditional, adding a touch of sophistication. With its advanced features, it stands out as a top choice in its category, offering great value for money. ",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 59.99,
  },
  {
    id: 8,
    name: "Barcelona",
    info: "Product 8ˀ is designed to meet your needs with exceptional quality and functionality. The sleek design and versatile features make it perfect for various uses, whether at home, in the office, or on the go. Crafted with high-quality materials, this product ensures durability and long-lasting performance. The user-friendly design allows for easy handling and operation, while its compact size makes it easy to carry around or store when not in use. Product 1 is a must-have for anyone looking for a blend of style, efficiency, and reliability. The elegant appearance complements any setting, whether modern or traditional, adding a touch of sophistication. With its advanced features, it stands out as a top choice in its category, offering great value for money. ",
    image:
      "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 59.99,
  },
];

export default data;
