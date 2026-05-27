import {useState} from 'react'

function FormContato() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [servico, setServico] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [enviado, setEnviado] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        
        if(!nome || !email || !servico || !mensagem) {
            alert('Por favor, preencha todos os campos.')
            return
        }

        setEnviado(true)

        }

        if(enviado) {
            return(
                <div className="contato-sucesso">
                    <h2>Obrigado por entrar em contato, {nome}!</h2>
                    <p>Em breve responderemos sua mensagem sobre {servico}, {nome}.</p>
                    <button onClick={() => {
                        setEnviado(false);
                        setNome('');
                        setEmail('');
                        setServico('');
                        setMensagem('');
                    }}>Enviar nova mensagem</button>                                                 
                </div>
            )
        }
    

    return (
        <form className="form-contato" onSubmit={handleSubmit}>
            <label>
                Nome:
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                />
            </label>
            <label>
                Serviço:
                <select
                    value={servico}
                    onChange={(e) => setServico(e.target.value)}
                >
                    <option value="">Selecione um serviço</option>
                    <option value="landing page">Landing page</option>
                    <option value="site institucional">Site institucional</option>
                    <option value="ecommerce">Ecommerce</option>
                </select>
            </label>
            <label>
                Mensagem:
                <textarea
                    value={mensagem}
                    maxLength={200}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Digite sua mensagem"
                />

                <p>{mensagem.length}/200</p>
            </label>
                <button type="submit">Enviar</button>
                <button type="button" onClick={() => {
                    setNome('');
                    setEmail('');
                    setServico('');
                    setMensagem('');
                }}>Limpar</button>
        </form>
    )
}


export default FormContato
