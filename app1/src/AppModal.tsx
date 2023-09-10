import { useState } from "react"

import { Modal } from "./views/Modal"

function App() {
  
  const [abrirModal, setModal] = useState<boolean>(false)

  return (
    <>
      <h2>Clique no botão para abrir o modal</h2>
      
      <button onClick={() => setModal(!abrirModal)}> Clique Aqui </button>

      <Modal isOpen={abrirModal} isClose={setModal} titulo={"Rodrigo"} descricao={"Descricação Modal"} />
    </>
  )
}

export default App
