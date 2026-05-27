import './App.css'
// import Exemplo from './components/Exemplo'
import Cartaoperfil from './components/CartaoPerfil'
import Coragem from '../coragem.png'
import funcionarios from './data/funcionarios'
//import Contador from './components/ExemploUseState.jsx'
import FormContato from './components/FormContato'

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
        {funcionarios.map(funcionarios => (
          <Cartaoperfil
            key={funcionarios.nome}
            imagem={funcionarios.imagem}
            nome={funcionarios.nome}
            cargo={funcionarios.cargo}
            bio={funcionarios.bio}
            habilidades={funcionarios.habilidades}
          />
        ))}
      </div>
      {/* <Contador/> */}
      <h1>Contato</h1>
      <FormContato />
    </div>
  )
}

export default App
