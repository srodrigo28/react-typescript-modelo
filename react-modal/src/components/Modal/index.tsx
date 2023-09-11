
import style from './styles.module.css'

interface IModal{
    isOpen: boolean;
    title: string;
    body: string
    setOpen: (isOpen: boolean) => void;
}

export function Modal( { isOpen, setOpen, title, body }: IModal ){
    if(isOpen){return(
            <div className={style.container}>
                <div className={style.modal}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    
                    <button 
                        className={style.button}
                        onClick={ ()=> setOpen(!isOpen) }
                        
                    >Fechar</button>
                </div>
            </div>
        )
    }
    //else{ return <> </> }
}