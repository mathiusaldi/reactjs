const defaultState = {
  category: [
    {
      id: 11,
      name: "New Arrivals",
      products: [
        {
          id: "111",
          name: "Eve One",
          price: 450000,
          img: "/images/product1.jpg",
        },
        {
          id: "222",
          name: "Tube Force",
          price: 675000,
          img: "/images/product2.jpg",
        },
        {
          id: "333",
          name: "Vanci",
          price: 775000,
          img: "/images/product3.jpg",
        },
        {
          id: "444",
          name: "Torso",
          price: 875000,
          img: "/images/product4.jpg",
        },
        {
          id: "555",
          name: "Ferach",
          price: 350000,
          img: "/images/product1.jpg",
        },
        {
          id: "666",
          name: "Yatch",
          price: 575000,
          img: "/images/product2.jpg",
        },
        {
          id: "777",
          name: "Hatch",
          price: 999000,
          img: "/images/product3.jpg",
        },
        {
          id: "888",
          name: "Tessa",
          price: 575000,
          img: "/images/product4.jpg",
        },
        {
          id: "999",
          name: "Vortex",
          price: 300000,
          img: "/images/product1.jpg",
        },
        { id: "112", name: "Next", price: 430000, img: "/images/product2.jpg" },
        {
          id: "113",
          name: "Pablo",
          price: 960000,
          img: "/images/product3.jpg",
        },
        {
          id: "114",
          name: "Corts",
          price: 500000,
          img: "/images/product4.jpg",
        },
      ],
    },
    {
      id: 12,
      name: "Best Seller",
      products: [
        {
          id: "1111",
          name: "Eve One",
          price: 450000,
          img: "/images/product1.jpg",
        },
        {
          id: "2222",
          name: "Tube Force",
          price: 675000,
          img: "/images/product2.jpg",
        },
        {
          id: "3333",
          name: "Vanci",
          price: 775000,
          img: "/images/product3.jpg",
        },
        {
          id: "4444",
          name: "Torso",
          price: 875000,
          img: "/images/product4.jpg",
        },
        {
          id: "5555",
          name: "Ferach",
          price: 350000,
          img: "/images/product1.jpg",
        },
        {
          id: "6666",
          name: "Yatch",
          price: 575000,
          img: "/images/product2.jpg",
        },
        {
          id: "7777",
          name: "Hatch",
          price: 999000,
          img: "/images/product3.jpg",
        },
        {
          id: "8888",
          name: "Tessa",
          price: 575000,
          img: "/images/product4.jpg",
        },
        {
          id: "9999",
          name: "Vortex",
          price: 300000,
          img: "/images/product1.jpg",
        },
        {
          id: "1122",
          name: "Next",
          price: 430000,
          img: "/images/product2.jpg",
        },
        {
          id: "1133",
          name: "Pablo",
          price: 960000,
          img: "/images/product3.jpg",
        },
        {
          id: "1144",
          name: "Corts",
          price: 500000,
          img: "/images/product4.jpg",
        },
      ],
    },
  ],
  cart: [],
};

const categorylist = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_CATEGORY_PRODUCTS":
      return state.category;
    case "ADD_PRODUCT":
      const existingProduct = state.cart.filter(
        (product) => product.id === payload.id
      );

      if (existingProduct.length > 0) {
        const withoutExistingProduct = state.cart.filter(
          (product) => product.id !== payload.id
        );
        const updatedUnitsProduct = {
          ...existingProduct[0],
          qty: existingProduct[0].qty + payload.qty,
        };

        return {
          ...state,
          cart: [...withoutExistingProduct, updatedUnitsProduct],
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, payload],
        };
      }
    case "REMOVE_PRODUCT":
      const withoutDeletedProduct = state.cart.filter(
        (product) => product.id !== payload.id
      );    
      return {
        ...state,
        cart: withoutDeletedProduct,
      };
    default:
      return state;
  }
};

export default categorylist;
