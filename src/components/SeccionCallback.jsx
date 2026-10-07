import { useState, useCallback } from 'react';
import BotonOptimizado from './BotonOptimizado';

export default function SeccionCallback() {
    const [contador, setContador] = useState(0);
    const [textoLibre, setTextoLibre] = useState("");

    //Usamos useCallback para que la función mantenga siempre la misma "identidad"
    const incrementar = useCallback(() => {
        setContador((prev) => prev + 1);
    }, []); //Dependencias vacías = la función no cambia nunca

    return (
        <div style={{ border: "2px solid blue", padding: "10px", margin: "10px"}}>
            <h3>Ejemplo: useCallback</h3>

            <p>Contador actual: {contador}</p>
            {/* Pasa la función memorizada del hijo */}
            <BotonOptimizado alHacerClic={incrementar} texto="Sumar 1" />

            <hr />

            <p>Escribe algo aquí para forzar renders en el padre:</p>
            <input 
                type="text"
                value={textoLibre}
                onChange={(e) => setTextoLibre(e.target.value)}
                placeholder="Escriba y mira la consola..."
            />
            <p>Texto: {textoLibre}</p>
        </div>
    );
}