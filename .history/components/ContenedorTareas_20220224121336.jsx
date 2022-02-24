import { useState, useCallback } from 'react'
import Picture from 'device-agnostic-ui/Picture.mjs'
import Heading from 'device-agnostic-ui/Heading.mjs'

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
        <div className='seccionTareas'>
            <div className="tituloTareas">
                <Heading size={2} style={{ 'max-width': '100%'}}>Un poco de informacion sobre desarrollo:</Heading>
            </div>
            <figure className='figuraTareas'>                
                <div className='sopaTareas'>
                    <Picture width={1} height={1} style="">
                        <img
                            src={`../images/`+tareas[posicion]}
                            alt="react"
                        />
                    </Picture>
                </div>
                <div className='selecionDiapositiva antes'>
                    <a
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
                <div className='selecionDiapositiva siguiente'>
                    <a
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
                .seccionTareas{
                    margin-top: 2vw;
                    width: 90%;
                    margin-right: auto;
                }
                .tituloTareas{
                    max-width: 50%;
                    margin-left:auto;
                    margin-right: auto;
                    margin-bottom: 2vw;
                }
                .figuraTareas{
                    align-items: center;
                    position:relative;
                    margin:0;
                    max-width: 45%;
                    margin-left:auto;
                    margin-right: auto;
                }
                .sopaTareas{
                    width: 120%;
                }
                .selecionDiapositiva{
                    position: absolute;
                    top: 50%;
                }
                .selecionDiapositiva a{
                    cursor: pointer;
                }
                .selecionDiapositiva img{
                    border-radius: 1em;
                    opacity: 0.5;
                }
                .antes{
                    left: 4.5%;
                }
                .siguiente{
                    right: -15%;
                }
                .sopaTareas img{
                    border-radius: 2em; 
                    width: 100%;
                }
            `}</style>
        </div>
    )
}