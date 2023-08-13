import React, {useState} from 'react'

export const CartContext = React.createContext([]);

const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    
    //Funcion para obtener cantidad de items en el carrito
    const getQuantity = () => {
        return cart.reduce((acum, unItem) => acum + unItem.quantity, 0)
    }
    //Funcion para agregar items al carrito
    const addItem = (item, quantity) => {
        //Si el item ya existe en mi carrito actualizo su cantidad
        if(isInCart(item.id)){
            setCart(cart.map(product=>{
                return product.id === item.id ? {...product, quantity : product.quantity+quantity} : product
            }));
        //Si no, agrego el item al carrito
        }else{
            setCart([...cart, { ...item, quantity }])
        }
    }

    //Funcion para remover items del carrito
    const removeItem = (id) => {
        setCart(cart.filter(product=>product.id !== id))
    }
    
    //Funcion para limpiar el carrito
    const clear = () => {
        setCart([])
    }

    //Funcion para detectar si un item ya esta en el carrito
    const isInCart = (id) => {
        return cart.find(product=>product.id===id)? true : false;
    }

    //Funcion para obtener el valor total de la compra
    const getTotal = () => {
        return cart.reduce((acum, unItem) => acum + unItem.quantity * unItem.price, 0)
    };

    return(
        <CartContext.Provider value={{cart,setCart,getQuantity,addItem,removeItem,clear,isInCart,getTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider