
/*
verify if new item already exist in cart
Increment quantity if already exists
else quantity is set to 1 if new item
*/
export const addItemToCart = (cartItems,cartItemToAdd)=>{
  const existingCartItem = cartItems.find(
    cartItem=> cartItem.id===cartItemToAdd.id
  )

  if(existingCartItem){
   return cartItems.map(cartItem=>
      cartItem.id=== cartItemToAdd.id ?
        {...cartItem,quantity:cartItem.quantity+1} : cartItem
      )
  }
  return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const clearItemFromCart = (cartItems,cartItemToRemove)=>{
  
}