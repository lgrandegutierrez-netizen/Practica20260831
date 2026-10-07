import { useState, useMemo } from 'react';

export default function SeccionMemo() {
    const [numero, setNumero] = useState(1);
    const [interruptor, setInterruptor] = useState(false);

    // Simulamos una función muy lenta (un filtro masivo o cálculo matemático)
    const operacionPesada = (num) => {
        console.log("Calculando algo muy difícil...");
        for (let i = 0; i < 500000000; i++) { } // Bucle que frena la PC por milisegundos
        return num * 10;
    };

    // Con useMemo: React RECUERDA el resultado.
    // Si cambia el 'interruptor', React NO vuelve a ejecutar la eperación pesada.
    const resultadoOptimizado = useMemo(() => {
        return operacionPesada(numero);
    }, [numero]); // Solo recalcula si el 'numero' cambia
    
    return (
        <div style={{ border: "2px solid green", padding: "10px", margin: "10px" }}>
            <h3>Ejemplo: useMemo</h3>

            <label>Número para calcular: </label>
            <input 
               type="number"
               value={numero}
               onChange={(e) => setNumero(Number(e.target.value))}
            />

            <p>Resultado: <strong>{resultadoOptimizado}</strong></p>

            <hr />
            
            <p>Estado del interruptor: {interruptor ? "ENCENDIDO" : "APAGADO"}</p>
            <button onClick={() => setInterruptor(!interruptor)}>
                Tocar Interruptor (¡Debería ser instantáneo!)
            </button>
        </div>
    );
}