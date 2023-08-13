import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ItemDetail from '../itemDetail/itemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [load, setLoad] = useState(true); // Agrega esta línea para definir el estado load
  const { id } = useParams();

  const getSelected = async (idItem) => {
    try {
      const querydb = getFirestore();
      const document = doc(querydb, 'items', idItem);
      const response = await getDoc(document);
      if (response.exists()) {
        const result = { id: response.id, ...response.data() };
        setItem(result);
      } else {
        console.log('Documento no encontrado');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getSelected(id);
  }, [id]);

  return (
    <div>
      <Container fluid>
        <Row>
          <ItemDetail items={item}/> 
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetailContainer;