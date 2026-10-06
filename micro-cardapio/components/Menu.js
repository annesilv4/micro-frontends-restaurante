import React from "react";

const pratos = [
  {
    id: 1,
    title: "X-Búrguer Artesanal",
    description: "Pão brioche, carne artesanal, mussarela e presunto",
    price: 16,
  },
  {
    id: 2,
    title: "X-Salada",
    description:
      "Pão de hambúrguer, carne, queijo, alface, tomate e maionese",
    price: 14,
  },
  {
    id: 3,
    title: "X-Bacon",
    description:
      "Pão brioche, carne, queijo, bacon crocante e molho barbecue",
    price: 18,
  },
  {
    id: 4,
    title: "X-Tudo",
    description:
      "Pão brioche, 2 carnes, 2 queijos, bacon, ovo, alface, tomate e maionese",
    price: 22,
  },
  {
    id: 5,
    title: "Batata Frita",
    description: "Porção de batata frita crocante (300g)",
    price: 12,
  },
  {
    id: 6,
    title: "Nuggets",
    description: "10 unidades de nuggets de frango com molho barbecue",
    price: 15,
  },
  {
    id: 7,
    title: "Refrigerante Lata",
    description: "Coca-Cola, Guaraná ou Fanta (350ml)",
    price: 6,
  },
  {
    id: 8,
    title: "Suco Natural",
    description: "Laranja, Maracujá ou Limonada (400ml)",
    price: 8,
  },
];

export default function Menu() {
  const addToOrder = (dish) => {
    window.dispatchEvent(
      new CustomEvent("addToOrder", {
        detail: dish,
      })
    );
  };

  return (
    <div>
      <h2>🍔 Cardápio</h2>

      <div className="menu-grid">
        {pratos.map((dish) => (
          <article className="menu-card" key={dish.id}>
            <h3>{dish.title}</h3>

            <p>{dish.description}</p>

            <strong>R$ {dish.price.toFixed(2)}</strong>

            <button
              type="button"
              onClick={() => addToOrder(dish)}
            >
              Adicionar ao pedido
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}