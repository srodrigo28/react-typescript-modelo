import { Container, Form } from './styles'

export function ModalCadastrar(){
    return(
        <Container>
            <Form>
                <h1>Cadastro Produtos</h1>
                <div className="input-group">
                    <input type="text" placeholder="nome produto" />
                    <input type="text" placeholder="valor" className='input-small'/>
                </div>
                
                <div className="button-group">
                    <button onClick={ () => { alert('Cadastrando') }}>Cadastrar</button>
                    <button onClick={ () => { alert('Cancelar') }} >Cancelar</button>
                </div>
            </Form>
        </Container>
    )
}