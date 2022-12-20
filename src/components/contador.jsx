import React, { useState } from 'react';

const Contador = () => {

    const [contador, setContador] = useState(0);

    function incrementar(){
        setContador(contador + 1);
    }

    function removerContador(){
        setContador(0)
    }

    return (
        <div className='card'>
            <h2 className='h2'>Contador de Clicks</h2>
            <h3> {contador} </h3>
            <button className='btn' onClick={ incrementar }>Click</button>
            <button className='btn' onClick={ removerContador }>Reiniciar</button>
        </div>
    );
}

export default Contador;
