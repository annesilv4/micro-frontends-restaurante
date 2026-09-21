import React, { useEffect, useState } from 'react';

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
            <h2>Meu Pedido</h2>

            {order.length === 0 ? (
                <p>Nenhum item adicionado.</p>
            ):(
                order.map((item, index) => (
                    <article key={index}>
                        <h3>{item.name}</h3>
                        <p>Quantidade: {item.quantity}</p>
                        <p>Preço: {item.price}</p>
                    </article>
                ))
            )}
        </section>
    )
}