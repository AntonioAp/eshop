import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Popup(product){
    const [isOpen, setIsOpen] = useState(false);
    
    function toggleModal() {
        setIsOpen(!isOpen);
      }
      return (
        <div className="popup">
          <button onClick={toggleModal}>Más detalles</button>
    
          <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="My dialog">
            <div className="media">
            <img src={product.url} alt={product.name} />
            </div>
          <div className="card-content">
            <div>
              <h3>{product.name}</h3>
              <p>{product.price} €</p>
              <p>{product.description}</p>
              <p>{product.maker.name}</p>
              <p>{product.maker.cif}</p>
          </div>
          </div>
            
            </Modal>

        </div>
      );
}