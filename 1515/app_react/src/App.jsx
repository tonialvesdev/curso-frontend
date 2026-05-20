import './App.css'
// import Exemplo from './components/Exemplo'
import Cartaoperfil from './components/CartaoPerfil'
import Coragem from '../coragem.png'

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
      <div className="grade">
    <Cartaoperfil/>
    <Cartaoperfil/>
    <Cartaoperfil/>
    <Cartaoperfil/>
      </div>
    </div>
  )
}

export default App
