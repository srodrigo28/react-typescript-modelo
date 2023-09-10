
interface IModal{
    isOpen: boolean;
}

export function Modal( { isOpen }: IModal ){
    if(isOpen){return(
            <div>
                <h2>Titulo</h2>
                <p>Descricao</p>
            </div>
        )
    }else{ return <> </> }
}