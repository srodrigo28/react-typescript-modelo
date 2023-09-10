interface UsersProps{
    nome: string
    idade: number
    cidade: string
}
export function User( {nome, idade, cidade} : UsersProps) {
    return (
        <div>
            <p>{nome} - {idade} - {cidade} </p>
        </div>
    )
}