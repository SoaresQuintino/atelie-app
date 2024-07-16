import React from "react";
import { useRouter } from "next/router";

export default function IdProduto(){

    const router = useRouter();
    const { id } = router.query;
    return (<h1>Descrição {id}</h1>);
}