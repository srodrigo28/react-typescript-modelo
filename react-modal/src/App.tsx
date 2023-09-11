import './styles.css';
import { ModalCadastrar } from './components/ModalCadastrar';
import { Navbar } from './components/Navbar';

function App() {
  // const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="container">
      <Navbar />
      {/* <button onClick={ () => setOpen(!open) } > Clique aqui </button> */}

      <ModalCadastrar />


      {/* <Modal 
        isOpen={open}
        setOpen={setOpen}
        title="Games 2023"
        body="Sua Loja de Games 2023, Goiânia Goiás"
      /> */}
    </div>
  )
}

export default App
