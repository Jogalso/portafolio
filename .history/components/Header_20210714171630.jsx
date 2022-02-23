import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function Header() {

    const [arriba, setArriba] = useState(true)

    const handleScroll = (e) => {
            let element = e.target
            if (element.scrollingElement.scrollTop < 100) {
                setArriba(true)
            }else{
                setArriba(false)
            }
            }
            
        
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [arriba])

    return ( 
        <div onScroll={handleScroll}>
            <div className={arriba ? "Header" : "HeaderScrolled" }>
                <div className="InfoTerapetua">
                    <img className="InfoTerapetua__img" src="../imagenes/principal.png" />
                    <h2>Feli Scott</h2>
                </div>
                <div className="botones">
                    <Link href="/">
                        <a>
                            Inicio
                        </a>
                    </Link>
                    <Link href="/contacto">
                        <a>
                            Contacto
                        </a>
                    </Link>
                </div>
            </div>
            
            <style>
                {`
                    .Header{
                        background: linear-gradient(70deg,#E68620 0, #FF9524 60%, #FFB26B);
                        border-bottom: 0.3vw solid #007099;
                        border-bottom-right-radius: 0.8vw;
                        border-bottom-left-radius: 0.8vw;
                        display: flex;
                        position: fixed;
                        width: 100%;
                        justify-content: space-between;
                    }
                    .HeaderScrolled{
                        display: flex;
                        justify-content: space-between;
                        background-image: linear-gradient(70deg,rgba(230,134,32,.6) 0, rgba(255,149,36,.6) 60%, rgba(255,178,107,.6));
                        border-bottom: 0.3vw solid rgba(0,112,153,.6);
                        border-bottom-right-radius: 0.8vw;
                        border-bottom-left-radius: 0.8vw;
                        position: fixed;
                        width: 100%;
                        z-index: 1000;
                    }
                    .InfoTerapetua{
                        color: #007099;
                        padding-top: 0.5vw;
                        margin-left: 8vw;
                        text-align: center;
                    }
                    .InfoTerapetua__img{
                        height: 6vw;
                        width: auto;
                    }
                    .botones{
                        margin-top: 0.5vw;
                        display: flex;
                        align-items: end;
                        margin-right: 8vw;
                    }
                    .botones a{
                        color: white;
                        font-size: 1.2vw;
                        border-color: #007099;
                        background-color: #20B1E6;
                        text-transform: uppercase;
                        padding: 0.8vw 1vw;
                        margin-left: 0.1vw;
                        margin-bottom: 0.15vw;
                        text-decoration: none;
                        line-height: 1.5vw;
                    }
                    @media only screen and (max-width: 1000px){
                        .Header{
                            height: 13.5vw;
                        }
                        .HeaderScrolled{
                            height: 13.5vw;
                        }
                        .InfoTerapetua{
                            margin-top: 2em;
                            display: flex;
                        }
                        .InfoTerapetua__img{
                            height: 8vw;
                            margin-right: 1em;
                        }
                        .botones{
                            margin-right: 8vw;
                        }
                        .botones a{
                            font-size: 2vw;
                            padding: 1.2vw 2vw;
                            line-height: 2vw;
                            margin-bottom: 0.5vw;
                            margin-left: 0.3vw;
                        }
                    }
                    @media only screen and (max-width: 850px){
                        .Header{
                            height: 14vw;
                        }
                        .HeaderScrolled{
                            height: 14vw;
                        }
                        .InfoTerapetua{
                            margin-top: 2em;
                            display: flex;
                        }
                        .InfoTerapetua__img{
                            height: 8vw;
                            margin-right: 1em;
                        }
                        .botones{
                            margin-right: 8vw;
                        }
                        .botones a{
                            font-size: 2vw;
                            padding: 1.2vw 2vw;
                            line-height: 2vw;
                            margin-bottom: 0.5vw;
                            margin-left: 0.3vw;
                        }
                    }
                    @media only screen and (max-width: 640px){
                        .InfoTerapetua{
                            margin-top: 1em;
                        }
                        .InfoTerapetua__img{
                            height: 10vw;
                        }
                        .botones{
                            margin-right: 8vw;
                        }
                        .botones a{
                            font-size: 2.5vw;
                            padding: 1.8vw 2.5vw;
                            line-height: 2.3vw;
                        }
                    }
                    @media only screen and (max-width: 600px){
                        .Header{
                            height: 18.5vw;
                        }
                        .HeaderScrolled{
                            height: 18.5vw;
                        }
                    }
                    @media only screen and (max-width: 500px){
                        .Header{
                            height: 22vw;
                        }
                        .HeaderScrolled{
                            height: 22vw;
                        }
                    }
                    @media only screen and (max-width: 450px){
                        .Header{
                            height: 24vw;
                        }
                        .HeaderScrolled{
                            height: 24vw;
                        }
                        .InfoTerapetua__img{
                            height: 15vw;
                        }
                        .botones{
                            margin-right: 5vw;
                        }
                        .botones a{
                            font-size: 3vw;
                            padding: 2vw 3vw;
                        }
                    }
                    @media only screen and (max-width: 400px){
                        .Header{
                            height: 26vw;
                        }
                        .HeaderScrolled{
                            height: 26vw;
                        }
                        .InfoTerapetua{
                            margin-top: 0.8em;
                            margin-left: 3vw;
                            align-items: center;
                        }
                        .InfoTerapetua__img{
                            margin-right: 0.1em;
                            height: 18vw;
                        }
                        InfoTerapetua h2{
                            font-size: 6px;
                        }
                        .botones{
                            margin-right: 2vw;
                        }
                        .botones a{
                            font-size: 4vw;
                            padding: 2.5vw 3.5vw;
                        }
                    }
                `}
            </style>
        </div>
    )
}
