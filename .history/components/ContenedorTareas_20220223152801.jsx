import { useState, useCallback } from 'react'
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

    const handlePosicion = useCallback(
        (e) => {
            if(e === "anterior"){
                posicion === 0 ? null : setPosicion(posicion-1)
            }
            if(e === "siguiente"){
                posicion === tareas.length-1 ? null : setPosicion(posicion+1)
            }
        },
      [posicion],
    )

    return (
        <>
            <figure className='figuraTareas'>
                <div className='botones'>
                    <button
                        type='button'
                        onClick={() => {handlePosicion("anterior")}}
                    >Anterior</button>
                    <button
                        type='button'
                        onClick={() => {handlePosicion("siguiente")}}
                    >Siguiente</button>
                </div>
                <div className='sopaTareas'>
                    <Picture width={2} height={1} style={{ width: '40vw'}}>
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
                    position: relative;
                }
                .botones{
                    position:
                }
                .sopaTareas img{
                    border-radius: 2em;
                }
            `}</style>
        </>
    )
}