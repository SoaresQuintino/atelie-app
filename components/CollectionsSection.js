import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./Settes";

// Configurações do carousel
const carouselSettings = {
  dots: true, // Indicadores de navegação
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Exibir 3 produtos ao mesmo tempo
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2, // Ajusta para 2 produtos em telas menores
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1, // Ajusta para 1 produto em telas ainda menores
        slidesToScroll: 1,
      },
    },
  ],
};

export default function CollectionsSection({ produtos }) {
  return (
    <>
      <br />
      <section className="mx-5 lg-margin-lr-10">
        <Slider {...carouselSettings}>
          {produtos.map((produto) => (
            <GridItem
              key={produto.id}
              id={produto.id}
              src={produto.urlimagem}
              alt="imagem"
              title={produto.nome}
              description={produto.descricao}
              price={produto.preco}
            />
          ))}
        </Slider>
      </section>
    </>
  );
}
