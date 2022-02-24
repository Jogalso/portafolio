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
        "iot.jpg",
        "iot1.png",
        "iiot.webp",
        "sensors.webp",
        "automata1.jpg",
        "automata2.jpg",
        "automata3.jpg"        
    ]
    const links = [
        "https://ed.team/comunidad/que-es-backend-y-frotend",
        "https://blog.back4app.com/es/los-10-lenguajes-de-backend-principales-que-debe-conocer/",
        "https://carlospinar.com/ui-ux/ui-vs-ux-cual-es-la-diferencia/",
        "https://blog.rootnite.com/design/la-importancia-del-diseno-ui-y-ux-en-productos-digitales/",
        "https://jonmircha.com/diseno-ux-ui",
        "https://haibusolutions.cl/hbs/diseno-ux-ui/",
        "https://celesttechnologies.com/blog/ux-ui-design.php",
        "https://geekflare.com/es/backend-solutions-for-web-and-mobile-apps/",
        "https://thestartupstimes.com/las-20-mejores-startups-de-iot-para-ver-en-2020/",
        "https://twitter.com/veronicapascboe/status/1377152443503407104",
        "https://www.innovacion-tecnologia.com/iot/iiot-industrial-internet-of-things/",
        "https://universoabierto.org/2018/12/12/medicion-y-aplicaciones-de-la-internet-de-las-cosas-iot/",
        "https://postgradoindustrial.com/automatismos-industriales-tipos/",
        "https://www.lacorformacion.com/funcionamiento-y-tipos-automatismos-electricos",
        "https://www.plcmadrid.es/cursos-de-electricidad/automatismos-electricos/"  
        
    ]

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
                        <a target="_blank" href={links[posicion]}>
                            <img
                                src={`../images/`+tareas[posicion]}
                                alt={`Diapositiva -`+posicion}
                            />
                        </a>
                    </Picture>
                </div>
                <div className='selecionDiapositiva antes'>
                    <a
                        onClick={() => {handlePosicion("anterior")}}
                    >
                        <Picture width={1} height={1} style={{ width: '5rem'}}>
                            <img
                                className='imagenBoton'
                                src="../images/back.png"
                                alt="anterior"
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
                                className='imagenBoton'
                                onPointerOver={}
                                src="../images/next.png"
                                alt="siguiente"
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
                    max-width: 60%;
                    margin-left:auto;
                    margin-right: auto;
                    margin-bottom: 2vw;
                    padding-left: 15em;
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
                .selecionDiapositiva a:over{
                    cursor: pointer;
                    opacity: 100%;
                }
                .selecionDiapositiva img{
                    border-radius: 1em;
                    opacity: 0.5;
                }
                .selecionDiapositiva:over img:over{
                    border-radius: 1em;
                    opacity: 100%;
                }
                .antes{
                    left: 4.5%;
                }
                .siguiente{
                    right: -15%;
                    touch-action: pan-right;
                }
                .sopaTareas img{
                    border-radius: 2em; 
                    width: 100%;
                }
            `}</style>
        </div>
    )
}