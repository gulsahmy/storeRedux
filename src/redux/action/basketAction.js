import { ADD, CLR,PLS,MNS,REMOVE } from "../type/basketType"


//Action types





// action creater Fonk
export const addBasket=(product)=>({
    type:ADD,// olmak zorunda type 
    payload:product,// normalde değil ama burada olmak zorunda
})

export const delBasket=()=>({// silme olduğundan payload a ihtiyaç yok
    type:CLR
})

export const plusBasket = (id) => ({
  type: PLS,
  payload:id
})
export const minusBasket = (id) => ({
  type: MNS,
  payload:id
})
export const removeProduct = (id) => ({
    type: REMOVE,
    payload:id
  })
  