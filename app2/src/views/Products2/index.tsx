import { useFetch } from "../../hooks/useFetch";

type TypeProdutos = {
    nome: string;
    descricao: string;
    valor: number;
}

export function Products2(){
    const baseUrl = "/produtos";
    const { 
        data: produtos, isFetching
    } = useFetch<TypeProdutos[]>(baseUrl)
    return(
        <>
        <h1>Produtos</h1>
        <div>
            { isFetching && <p> Carregando... </p>}
            { produtos?.map( item => {
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