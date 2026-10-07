import React from 'react';

//React.memo evita que este botón se redibuje si sus propiedades son idénticas
const BotonOptimizado = React.memo(({ alHacerClic, texto }) => {
    console.log(`Renderizando en botón: ${texto}`);
    return <button onClick={alHacerClic}>{texto}</button>;
});

export default BotonOptimizado;