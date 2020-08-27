import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./constants";

const INIT_STATE = {
  cartItems: [],
  modalIsOpen: false,
}

const CartReducer = (state=INIT_STATE, action)=>{
  switch (action.type){
    
    case ADD_ITEM_TO_CART:
      return {
        ...state, 
        cartItems: [
          ...state.cartItems, 
          action.payload
        ]};

    case REMOVE_ITEM_FROM_CART:
      const cartItems = [...state.cartItems];
      const index = cartItems.findIndex((item)=>item.slug===action.payload);
      if(index !== -1){
        cartItems.splice(index, 1);
        return {...state, cartItems};
      }
      
    default:
      return state;
  }
}

export default CartReducer;