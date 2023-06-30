import { useState } from "react"

import { Modal } from "./views/Modal"

function App() {
  const [open, setOpen] = useState<boolean>(false)
  console.log('Modal: ', open)

  return (
    <>
      <h2>Clique no botão para abrir o modal</h2>
      
      <button onClick={() => setOpen(!open)}> Clique Aqui </button>

      <Modal isOpen={open} titulo={'titulo'}  descricao={'descricao'} />
    </>
  )
}

export default App
