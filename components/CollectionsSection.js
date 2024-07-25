import React from "react";
import GridItem from "./GridItem";

export default function CollectionsSection({ produtos }) {
  return (
    <>
      <br />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md-margin-lr-5 lg-margin-lr-20">
        {produtos.map((produto) => (
          <GridItem
            key={produto.id}
            id={produto.id}
            src={produto.urlimagem}
            alt="imagem"
            title={produto.nome}
            description={produto.descricao}
          />
        ))}
      </section>
    </>
  );
}
