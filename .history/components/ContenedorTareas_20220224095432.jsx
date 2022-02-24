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
                <div className='selecionDiapositiva antes'>
                    <a
                        type='button'
                        onClick={() => {handlePosicion("anterior")}}
                    >
                        <Picture width={1} height={1} style={{ width: '5rem'}}>
                            <img
                                src="../images/back.png"
                                alt="react"
                            />
                        </Picture>
                    </a>
                </div>
                <div className='sopaTareas'>
                    <Picture width={1} height={1} style={{ width: '40vw'}}>
                        <img
                            src={`../images/`+tareas[posicion]}
                            alt="react"
                        />
                    </Picture>
                </div>
                <div className='selecionDiapositiva siguiente'>
                    <a
                        type='button'
                        onClick={() => {handlePosicion("siguiente")}}
                    >
                        <Picture width={1} height={1} style={{ width: '5rem'}}>
                            <img
                                src="../images/next.png"
                                alt="react"
                            />
                        </Picture>
                    </a>
                </div>
            </figure>
            <style>{`
                .figuraTareas{
                    width: 100%;
                    align-items: center;
                    position:relative;
                    margin: auto;
                }
                .sopaTareas{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                }
                .selecionDiapositiva{
                    width: 10%;
                    position: absolute;
                    top: 50%;
                }
                .selecionDiapositiva a{
                    border: none;
                    cursor: pointer;
                }
                .selecionDiapositiva img{
                    border-radius: 1em;
                }
                .sopaTareas img{
                    border-radius: 2em; 
                    width: 100%;
                }
            `}</style>
        </>
    )
}