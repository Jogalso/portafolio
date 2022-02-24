import { useState } from 'react'

export default function ContenedorTareas() {
    const tareas = [
        "FrontBack.jpg",
        "FrontBack2.webp",
        "UIUX1.jpg",
        "UIUX2.png",
        "UIUX3.png",
        "UIUX4.jpg",
        "UIUX5.png",
        "backend.webp",
        "automata1.jpg",
        "automata2.jpg",
        "automata3.jpg"]

    const [posicion, setPosicion] = useState(0)
    return (
        <>
            <figure className='figuraTareas'>
                <div className='sopaTareas'>
                    <img
                        src={`../images/`+tareas[posicion]}
                        alt="tarea"
                    />
                </div>
            </figure>
            <style>{`
                .figuraTareas{

                }
                .sopaTareas{

                }
            `}</style>
        </>
    )
}