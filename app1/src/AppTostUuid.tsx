import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuid } from 'uuid';

import { User } from "./views/User"

function App() {
  const msn = () => toast(`Cadastrado com sucesso!`);
  
  const msn1 = () => toast(` ${id} ` );
  const id: string = uuid();

  return (
    <>
        <User
            idade={37}
            nome="Sebastião"
            cidade="Goiânia Goiás"
        />
        
      <button onClick={msn1}>ID</button>
      <button onClick={msn}>Cadastrar</button>
        <ToastContainer autoClose={2000} />
    </>
  )
}

export default App
