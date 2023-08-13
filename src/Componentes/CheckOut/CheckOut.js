import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'


export const CheckOut = () => {

    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({

        Nombre: "",
        Email: "",
        Celular: ""

    })
    const { Nombre, Email, Celular } = buyer

    const { cart } = useContext(CartContext)

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const total = cart.reduce((acum, unItem) => acum + (unItem.price * unItem.cant), 0)
        const dia = new Date()
        const data = { buyer, cart, total, dia }
        generateOrder(data)
    }

    const generateOrder = async (data) => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "Orders")
        const order = await addDoc(queryCollection, data)
        setOrderId(order.id)
    }

    return (
        <>
            <h1>Formulario</h1>
            <hr />
            {!orderId && <form onSubmit={handleSubmit}>
                <input type="text"
                    name="Nombre"
                    placeholder='Nombre'
                    value={Nombre}
                    onChange={handleInputChange}
                    required
                />
                <br /><br />
                <input type="email"
                    name="Email"
                    placeholder='Email'
                    value={Email}
                    onChange={handleInputChange}
                />
                <br /><br />
                <input type="number"
                    name="Celular"
                    placeholder='Celular'
                    value={Celular}
                    onChange={handleInputChange}
                />
                <br /><br />
                <input type="submit" value="Confirmar Compra" />
            </form>
            }
            {orderId && <>
                <h1>¡Su compra se realizo exitosamente! ¡Gracias por contar con nosotros!
                </h1>
                <h3>Su ID de Compra es: {orderId}</h3>
            </>}
        </>
    )
}

export default CheckOut