import style from './modal.module.css'

interface Imodal{
    titulo?: string
    isOpen: boolean
    descricao?: string
    isClose: (isOpen: boolean) => void
}

export function Modal({ isOpen, isClose, titulo, descricao}: Imodal) {
    
    if (isOpen) {
        return (
            <div className={style.background}>
                <div className={style.modal}>
                    
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>

                    <button onClick={ () => isClose(!isOpen) }> fechar </button>
                    
                </div>
            </div>
        )
    }
}