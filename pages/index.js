/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";
import Topbar from "../components/Topbar";
import Cover from "../components/Cover";
import CollectionsSection from "../components/CollectionsSection";

export default function HomePage({ produtos }) {
  return (
    <div className="">
      <Head>
        <title>Ateliê Bela Arte</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>

      <Topbar />
      <Cover />
      <CollectionsSection produtos={produtos} />

      <hr className="my-8 border-transparent" />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8000/api/produtos");
  const data = await res.json();

  const produtos = data["hydra:member"];

  return {
    props: {
      produtos,
    },
  };
}
