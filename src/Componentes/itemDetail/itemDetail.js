
import ItemCount from '../itemCount/itemCount';
import { useState, useContext, useEffect } from 'react';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({ items }) => {
    const [stock, setStock] = useState(0); // Establece un valor por defecto para stock
    const { addItem } = useContext(CartContext);

    useEffect(() => {
        if (items) {
            setStock(items.stock);
        }
    }, [items]);

    const handleOnAdd = (count) => {
        addItem({ id: items.id, price: items.price, title: items.title, img: items.img, stock: items.stock }, count);
    };

    const handleStock = async () => {
        if (items) {
            const querydb = getFirestore();
            const itemDoc = doc(querydb, 'items', items.id);
            const stockNuevo = stock + 3;
            await updateDoc(itemDoc, { stock: stockNuevo });
            setStock(stockNuevo);
        }
    };

    if (!items) {
        return <div>Cargando...</div>; // Agrega un mensaje de carga mientras se obtienen los datos
    }

    return (
        <div className='container detailsStyle'>
            <h1 className='text-center titleStyle'>{items.title}</h1>
            <div className='row'>
                <div className='col'>
                    <img src={items.img} className='rounded mx-auto d-block img_med' alt={items.title} />
                </div>
                <div className='col'>
                    <h3>DESCRIPCION:</h3>
                    <p>{items.description}</p>
                    <br />

                    <h3>PRECIO: {items.price}</h3>
                    <hr />
                    <br />
                    <br />
                    <br />
                    <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;