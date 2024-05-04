import { ListItem } from "@mui/material";
import { ADD, CLR, PLS, MNS, REMOVE } from "../type/basketType";

const initialState = {
  // başlangıçta olması gereken durum
  basket: [], //=> basket datamızın inişial statei boş data
};


export const basketReducer = (state = initialState, { type, payload }) => {
  // type,payload kısmı action un destruc edilmiş hali
  switch (type) {
    case ADD:
      return {
        ...state,
        basket: [...state.basket, { ...payload, quantity: 1 }],
      }; // önce ana statimi getir sonra sepet kısmına eklediğim kısmı getir sonrada payload kısmını ekle // adedi attırıken en başta adet gelmediği için default olarak verildi.
    case CLR:
      return initialState; // sepeti temizleyeceğinden bşataki hale geri gel demek
    case PLS:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id == payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case MNS:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id == payload ? { ...item, quantity:item.quantity - 1 } : item
        ),
      };
    case REMOVE:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== payload),
      };

    default:
      return state; // bunların dışında ne gelirse başlangıç statimi getir.
  }
};