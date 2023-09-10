import { useEffect, useState } from "react";

type TypeProdutos = {
    nome: string;
    descricao: string;
    valor: number;
}

export function Produtos(){
    const [ produto, setProduto] = useState<TypeProdutos[]>([]);

    useEffect( () => {
        fetch(`http://localhost:3000/produtos`)
        .then( res => res.json())
        .then( data => { setProduto(data)})

        // console.log(produto);
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