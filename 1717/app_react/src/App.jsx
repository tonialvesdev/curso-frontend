import './App.css'
// import Exemplo from './components/Exemplo'
//port Cartaoperfil from './components/CartaoPerfil'
import Coragem from '../coragem.png'
//port funcionarios from './data/funcionarios'
//import Contador from './components/ExemploUseState.jsx'
import FormContato from './components/FormContato'
import SecaoEquipe from './components/SecaoEquipe'

function App() {
  return (
    <div className="app">
      <header>
        <img
          src={Coragem}
          alt="Coragem"
          width="150"
          height="150"
          style={{ objectFit: 'contain' }}
        />
      </header>
      <h1>Nossa Equipe</h1>
      <SecaoEquipe />
      
      {/* <Contador/> */}
      <h1>Contato</h1>
      <FormContato />
    </div>
  )
}

export default App
