import { useEffect, useState } from "react";
import axios from "axios";

type TypeProdutos = {
    nome: string;
    descricao: string;
    valor: number;
}

export function Products(){
    const [ produto, setProduto] = useState<TypeProdutos[]>([]);
    /** Fetch Api
    useEffect( () => {
        fetch(`http://localhost:3000/produtos`)
        .then( res => res.json())
        .then( data => { setProduto(data)})
    }, [])
     */

    /*** Axios Api */
    useEffect( () => {
        axios.get(`http://localhost:3000/produtos`)
        .then(response => {
            setProduto(response.data)
        })
    }, [])
    return(
        <>
        <h1>Produtos</h1>
        <div>
            { produto.map( item => {
                return(
                    <p key={item.valor+1}>
                        <strong>{item.nome}</strong>
                        <strong>{item.descricao}</strong>
                        <strong>{item.valor}</strong>
                    </p>
                )
            })                
            }
        </div>
        </>
    )
}