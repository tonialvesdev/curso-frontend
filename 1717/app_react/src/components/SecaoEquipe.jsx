import { useEffect, useState } from 'react'
import CartaoPerfil from './CartaoPerfil'

function SecaoEquipe() {
  const [funcionarios, setFuncionarios] = useState([])
  const [busca, setBusca] = useState('')

  const equipeFormatada = funcionarios
    .filter((funcionario) =>
      funcionario.name.toLowerCase().includes(busca.toLowerCase()),
    )
    .map((funcionario) => ({
      id: funcionario.id,
      nome: funcionario.name,
      cargo: funcionario.company.name,
      email: funcionario.email,
      telefone: funcionario.phone,
      habilidades: ["habilidade 1, habilidade 2, habilidade 3"],
      imagem: `https://i.pravatar.cc/100?u=${funcionario.id}`,
    }))

  useEffect(() => {
    async function fetchFuncionarios() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const equipe = await response.json()
        setFuncionarios(equipe)
      } catch (error) {
        console.error('Erro ao carregar os funcionarios:', error)
      }
    }

    fetchFuncionarios()
  }, [])

  return (
    <>
      <div className="filtro">
        <label htmlFor="busca-funcionario">Filtrar por nome</label>
        <input
          id="busca-funcionario"
          type="text"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          placeholder="Digite um nome"
      />
      </div>

      <div className="grade">
        {equipeFormatada.map((funcionario) => (
          <CartaoPerfil key={funcionario.id} {...funcionario} />
        ))}
      </div>
    </>
  )
}

export default SecaoEquipe
