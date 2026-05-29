import { useState } from 'react';


function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>Valor: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>+</button>
            <button onClick={() => setContador(contador - 1)}>-</button>
            <button onClick={() => setContador(0)}>Resetar</button>
        </div>
    );
}

export default Contador;
