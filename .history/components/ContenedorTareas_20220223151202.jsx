import { useState } from 'react'
import Picture from 'device-agnostic-ui/Picture.mjs'

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
                    <Picture width={1} height={1} style={{ width: '157px'}}>
                        <img
                            src={`../images/`+tareas[posicion]}
                            alt="react"
                        />
                    </Picture>
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