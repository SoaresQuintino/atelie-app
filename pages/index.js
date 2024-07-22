import React from 'react';
import Head from 'next/head';
import Topbar from '../components/Topbar';
import GridItem from '../components/GridItem';

export default function HomePage({produtos}) {


  return (<div className="container mx-auto px-4 py-8">
   <Head>
        <title>Ateliê Bela Arte</title>
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" />
   </Head>
     
   <Topbar/>
      
   <hr className="my-8 border-gray-300" />
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
     
     {produtos.map((produto) => (
      
        // eslint-disable-next-line react/jsx-key
        <GridItem id={produto.id} src={produto.urlimagem} alt="imagem" title={produto.nome} description={produto.descricao}></GridItem>
     ))}

      </section>
     
   </div>)
}

export async function getServerSideProps() {
   const res = await fetch('http://localhost:8000/api/produtos');
   const data = await res.json();
  
   const produtos = data['hydra:member'] ;
 
 
   return {
     props: {
       produtos,
     },
   };
 }