import React, { useEffect, useState } from "react";

export default function Order() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const handleAddToOrder = (event) => {
      setOrder((currentOrder) => [
        ...currentOrder,
        event.detail,
      ]);
    };

    window.addEventListener("addToOrder", handleAddToOrder);

    return () => {
      window.removeEventListener("addToOrder", handleAddToOrder);
    };
  }, []);

  return (
    <section>
      <h2>🛒 Meu Pedido</h2>

      {order.length === 0 ? (
        <p className="empty-order">
          Nenhum item adicionado.
        </p>
      ) : (
        <div className="order">
          {order.map((item, index) => (
            <article
              className="order-item"
              key={`${item.id}-${index}`}
            >
              <h3>{item.title}</h3>
              <p>R$ {item.price.toFixed(2)}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}