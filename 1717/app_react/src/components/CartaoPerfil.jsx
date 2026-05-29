import './Cartaoperfil.css'

function CartaoPerfil({ imagem, nome, cargo, email, telefone, habilidades = [] }) {
  return (
    <div className="cartao">
      <img
        className='cartao-foto'
        src={imagem}
        alt={`Foto de ${nome}`}
      />
      <h2 className='cartao-nome'>{nome}</h2>
      <p className='cartao-cargo'>{cargo}</p>
      <p className='cartao-bio'>{email}</p>
      <p className='cartao-bio'>{telefone}</p>
      <div className='cartao-habilidades-section' aria-label={`Habilidades de ${nome}`}>
        <div className='cartao-habilidades-topo'>
          <h3 className='cartao-habilidades-titulo'>Habilidades</h3>
          <span className='cartao-habilidades-total'>{habilidades.length} skills</span>
        </div>

        <div className='cartao-habilidades'>
          {habilidades.map((habilidade) => (
            <span key={habilidade} className='cartao-habilidade'>
              <span className='cartao-habilidade-marcador' />
              {habilidade}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CartaoPerfil
