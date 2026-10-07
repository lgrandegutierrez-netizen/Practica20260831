import { useRef, useState } from 'react';

export default function SeccionRef() {
    const [renderCount, setRenderCount] = useState(0);

    //Caso 1: Acceso al DOM
    const cajaTextoRef = useRef(null);

    // Caso 2: Variable que no altera la pantalla
    const clicsSilenciosos = useRef(0);

    const ponerFoco = () => {
        cajaTextoRef.current.focus(); // Accede directamente al input HTML
    };

    const contarSinRender = () => {
        clicsSilenciosos.current += 1;
        console.log("Clics guardados en useRef:", clicsSilenciosos.current);
        // Nota que el número en pantalla NO cambia hasta que presiones el otro botón.
    };

    return (
        <div style={{ border: "2px solid red", padding: "10px", margin: "10px "}}>
            <h3>Ejemplo: useRef</h3>

            {/* Caso 1 */}
            <input ref={cajaTextoRef} type="text" placeholder="Escribe aquí..." />
            <button onClick={ponerFoco}>Forzar Foco en Input</button>

            <hr />

            {/* Caso 2 */}
            <p>Veces que la pantalla se redibujó (Estado): {renderCount}</p>
            <button onClick={() => setRenderCount(renderCount + 1)}>
                Redibujar Pantalla (useState)
            </button>

            <p>Valor en useRef (Mira la consola): {clicsSilenciosos.current}</p>
            <button onClick={contarSinRender}>
                Sumar a useRef (No redibuja)
            </button>
        </div>
    );
}