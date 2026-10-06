import React, { lazy, Suspense } from "react";

const Menu = lazy(() => import("cardapio/Menu"));
const Order = lazy(() => import("pedido/Order"));

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <h1>🍔 Restaurante</h1>
        <p>Escolha seus pratos e monte seu pedido.</p>
      </header>

      <div className="content">
        <section className="section">
          <Suspense fallback={<p>Carregando cardápio...</p>}>
            <Menu />
          </Suspense>
        </section>

        <section className="section">
          <Suspense fallback={<p>Carregando pedido...</p>}>
            <Order />
          </Suspense>
        </section>
      </div>
    </main>
  );
}