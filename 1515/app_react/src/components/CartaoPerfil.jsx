import './Cartaoperfil.css'

function Cartaoperfil() {
    const nome = "Antonio Alves"
    const cargo = "Gestor de tráfego pago"
    const bio = "Trabalho focado em  atendimento de Doutoras"


    return (
        <div className="cartao">
            <img
                className='cartao-foto'
                src='https://placehold.co/100x100'
                alt={`Foto de ${nome}`} />
            <h2 className='cartao-nome'>{nome}</h2>
            <p className='cartao-cargo'>{cargo}</p>
            <p className='cartao-bio'>{bio}</p>
        </div>
    )
}

export default Cartaoperfil