import { useState } from 'react';
import { Modal } from './components/Modal';
import './styles.css';

function App() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="container">
      <h1>React Modal</h1>
      <h3>Clique no botão para abrir o modal</h3>

      <button onClick={ 
          () => setOpen(!open) }
      > Clique aqui </button>

      <Modal 
        isOpen={open}
      />
    </div>
  )
}

export default App
