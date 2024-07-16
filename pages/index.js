import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Topbar from '../components/Topbar';
import GridItem from '../components/GridItem';

export default function HomePage() {
  return (<div className="container mx-auto px-4 py-8">
      <Head>
        <title>Ateliê Bela Arte</title>
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" />
      </Head>

      <Topbar/>
      
        
      <hr className="my-8 border-gray-300" />

     
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      
        <GridItem id="1" src="https://images-offstore.map.azionedge.net/compressed/e8f02ab50a48a7f0d747bbdeda22cb88.webp" alt="imagem" title="Bolsa Transversal" description=""></GridItem>
        <GridItem id="2" src="https://images-offstore.map.azionedge.net/compressed/715205db67e53ce524c282cd348c6d99.webp" alt="imagem" title="Carteira Infantil" description="Descrição"></GridItem>
        <GridItem id="3" src="https://images-offstore.map.azionedge.net/compressed/ceab2038e5338d6ac714514dc46734fd.webp" alt="imagem" title="Bolsa Lousa" description="Descrição"></GridItem>
        
        
         </section>
     </div>)
}