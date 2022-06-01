import * as actionTypes from "../types/product.types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      CategoryId: "1",
      title: "món lẻ",
      name: "pizza",
     description: "Pizza hải sản",
      img: "https://img.dominos.vn/Pizzaminsea.jpg",
      prices: "80000"
    },
    {
      id: 2,
      CategoryId: "1",
      title: "món lẻ",
      name: "pizza",
     description: "Pizza thập cẩm",
      img: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/huyen/pizzahanoi/top-nhung-nha-hang-pizza-ngon-noi-tieng-tai-ha-noi-2.jpg",
      prices: "70000"
    },
    {
      id: 3,
      CategoryId: "1",
      title: "món lẻ",
      name: "Pizza",
     description: "Pizza bò",
      img: "https://inhat.vn/ha-noi/wp-content/uploads/2019/08/quan-pizza-ngon-ha-noi-1.jpg",
      prices: "60000"
    },
    {
      id: 4,
      CategoryId: "1",
      title: "món lẻ",
      name: "pizza",
     description: "Pizza nấm",
      img: "https://img.dominos.vn/Veggie-mania.jpg",
      prices: "70000"
    },
    {
      id: 5,
      CategoryId: "2",
      title: "món lẻ",
      name: "Spaghetti",
     description: "Spaghetti nấm",
      img: "https://mcspiedoboston.com/wp-content/uploads/2018/06/a1-8.jpg",
      prices: "90000"
    },
    {
      id: 6,
      CategoryId: "2",
      title: "món lẻ",
      name: "Spaghetti",
     description: "Spaghetti bò",
      img: "http://www.monngon.tv/uploads/images/2017/04/04/997270c002a63cef9ea480330979d9dc-cach-lam-mi-spaghetti-bo-bam-sl.jpg",
      prices: "100000"
    },
    {
      id: 7,
      CategoryId: "3",
      title: "món lẻ",
      name: "Gà rán",
     description: "Đùi gà",
      img: "https://cf.shopee.vn/file/1ae4bad285d6696a1c810bd62f05d07b",
      prices: "35000"
    },
    {
      id: 8,
      CategoryId: "3",
      title: "món lẻ",
      name: "Gà rán",
     description: "Cánh gà",
      img: "https://shipdoandemff.com/wp-content/uploads/2018/05/C%C3%A1nh-G%C3%A0-Gi%C3%B2n-Cay-3-Mi%E1%BA%BFng-1.jpg",
      prices: "35000"
    },
    {
      id: 9,
      CategoryId: "3",
      title: "món lẻ",
      name: "Gà rán",
     description: "Gà không xương",
      img: "https://popeyes.vn/media/catalog/category/menu_TENDERS_3pc.png",
      prices: "30000"
    },
    {
      id: 10,
      CategoryId: "3",
      title: "món lẻ",
      name: "Gà rán",
     description: "Đùi gà sốt nấm",
      img: "https://shipdoandemff.com/wp-content/uploads/2018/05/G%C3%A0-Quay-Ti%C3%AAu.jpg",
      prices: "30000"
    },
    {
      id: 11,
      CategoryId: "3",
      title: "Combo",
      name: "Gà rán",
     description: "Combo 3 miếng gà",
      img: "https://popeyes.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/a/gakocay_combo3mieng.jpg",
      prices: "90000"
    },
    {
      id: 12,
      CategoryId: "3",
      title: "Combo",
      name: "Gà rán",
     description: "Combo 6 miếng gà ",
      img: "https://shipdoandemff.com/wp-content/uploads/2018/05/G%C3%A0-Gi%C3%B2n-Cay-6-Mi%E1%BA%BFng.jpg",
      prices: "170000"
    },
    {
      id: 13,
      CategoryId: "3",
      title: "Combo",
      name: "Gà rán",
     description: "Combo 9 miếng gà ",
      img: "https://shipdoandemff.com/wp-content/uploads/2018/05/G%C3%A0-Gi%C3%B2n-Cay-6-Mi%E1%BA%BFng.jpg",
      prices: "250000"
    },
    {
      id: 14,
      CategoryId: "4",
      title: "Đồ uống",
      name: "Coca Cola",
     description: "Coca Cola",
      img: "https://popeyes.vn/media/catalog/product/cache/1/image/300x300/9df78eab33525d08d6e5fb8d27136e95/c/o/coca.png",
      prices: "15000"
    },
    {
      id: 15,
      CategoryId: "4",
      title: "Đồ uống",
      name: "Pepsi",
     description: "Pepsi",
      img: "https://minhcaumart.vn/media/com_eshop/products/8934588012228%201.jpg",
      prices: "15000"
    },
    {
      id: 16,
      CategoryId: "4",
      title: "Đồ uống",
      name: "Twister",
     description: "twister",
      img: "https://vn-live-01.slatic.net/p/70b0337d98a286af26e172b0ff6ede84.jpg",
      prices: "15000"
    },
    {
      id: 17,
      CategoryId: "4",
      title: "Đồ uống",
      name: "7UP",
     description: "7UP",
      img: "http://iwater.vn/Image/Picture/Nuoc_ngot/Nuoc_ngot_7up.jpg",
      prices: "15000"
    },
    {
      id: 18,
      CategoryId: "4",
      title: "Đồ uống",
      name: "Milo",
     description: "Milo",
      img: "https://www.kfc.com.sg/Content/OnlineOrderingStaticPages/images/imgDrinks-Milo.png",
      prices: "15000"
    }
  ],
  cart: [],
  currentItem: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
     
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: + action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
