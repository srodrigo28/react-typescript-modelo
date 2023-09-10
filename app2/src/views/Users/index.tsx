import { useEffect, useState } from "react";

type TypeUsers = {
    id: number;
    nome: string;
    senha: string;
}

export function Users(){
    const [ users, setUsers] = useState<TypeUsers[]>([]);
    const baseUrl = "http://localhost:3000";

    useEffect( () => {
        fetch(`${baseUrl}/users`)
        .then( res => res.json())
        .then( data => { setUsers(data)})

    }, [])
    
    return(
        <>
        <h1>Produtos</h1>
        <div>
            { users.map( item => {
                return(
                    <p key={item.id}>
                        <strong>Nome: {item.nome}</strong> - 
                        <strong>Senha: {item.senha}</strong>
                    </p>
                )
            })                
            }
        </div>
        </>
    )
}