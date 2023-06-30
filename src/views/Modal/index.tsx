
interface Imodal{
    isOpen: boolean
    titulo: string
    descricao: string
}

export function Modal( { isOpen, titulo, descricao }: Imodal ) {
    if (isOpen) {
        return (
            <div>
                <h2>{titulo}</h2>
                <p>{ descricao }</p>
            </div>
        )
    }
}