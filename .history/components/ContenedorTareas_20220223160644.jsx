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
                <div className='selecionDiapositiva'>
                    <button
                        type='button'
                        onClick={() => {handlePosicion("anterior")}}
                    >
                        <Picture width={1} height={1} style={{ width: '5rem'}}>
                            <img
                                src="../images/back.png"
                                alt="react"
                            />
                        </Picture>
                    </button>
                </div>
                <div className='sopaTareas'>
                        <img
                            src={`../images/`+tareas[posicion]}
                            alt="react"
                        />
                </div>
                <div className='selecionDiapositiva'>
                    <button
                        type='button'
                        onClick={() => {handlePosicion("siguiente")}}
                    >
                        <Picture width={1} height={1} style={{ width: '5rem'}}>
                            <img
                                src="../images/next.png"
                                alt="react"
                            />
                        </Picture>
                    </button>
                </div>
            </figure>
            <style>{`
                .figuraTareas{
                    width: 100%;
                    display: flex;
                }
                .sopaTareas{
                   margin-left: auto;
                   margin-right: auto;
                }
                .botones{
                    
                }
                .selecionDiapositiva button{
                    border: none;
                    cursor: pointer;
                }
                .sopaTareas img{
                    border-radius: 2em; 
                    width: 90%;
                }
            `}</style>
        </>
    )
}