
import Link from 'next/link';
import Heading from 'device-agnostic-ui/Heading.mjs';

import { useScroll } from '../hooks/useScroll';

export default function Header() {

    const {arriba, handleScroll} = useScroll()

    return ( 
        <div onScroll={handleScroll}>
            <div className={arriba ? "Header" : "HeaderScrolled" }>
                <div className="Info">
                    <div className="fotoPerfil">
                        <img className="Info__img" src="../images/galbis2.png" />
                    </div>
                    <div className="descripcionPerfil">
                        <Heading size={3}>Jose Galbis</Heading>
                    </div>
                </div>
            </div>
            
            <style>
                {`
                    .Info{
                        color: #007099;
                        padding-top: 0.5vw;
                        margin-left: 8vw;
                        text-align: center;
                        background-image: linear-gradient(70deg,rgba(230,134,32,.6) 0, rgba(255,149,36,.6) 60%, rgba(255,178,107,.6));
                        border-radius: 0.2em;
                    }
                    .Info__img{
                        height: auto;
                        width: 40%;
                        filter: drop-shadow(0.5em 6em 3em hsla(0,0%,0%,calc(var(--daui-shadow-opacity) * 2)));
                        
                    }
                    @media only screen and (max-width: 1000px){
                        .Header{
                            height: 13.5vw;
                        }
                        .HeaderScrolled{
                            height: 13.5vw;
                        }
                        .Info{
                            margin-top: 2em;
                            display: flex;
                        }
                        .Info__img{
                            height: 8vw;
                            margin-right: 1em;
                        }
                    }
                    @media only screen and (max-width: 850px){
                        .Header{
                            height: 14vw;
                        }
                        .HeaderScrolled{
                            height: 14vw;
                        }
                        .Info{
                            margin-top: 2em;
                            display: flex;
                        }
                        .Info__img{
                            height: 8vw;
                            margin-right: 1em;
                        }
                    }
                    @media only screen and (max-width: 640px){
                        .Info{
                            margin-top: 1em;
                        }
                        .Info__img{
                            height: 10vw;
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
                        .Info__img{
                            height: 15vw;
                        }
                    }
                    @media only screen and (max-width: 400px){
                        .Header{
                            height: 26vw;
                        }
                        .HeaderScrolled{
                            height: 26vw;
                        }
                        .Info{
                            margin-top: 0.8em;
                            margin-left: 3vw;
                            align-items: center;
                        }
                        .Info__img{
                            margin-right: 0.1em;
                            height: 18vw;
                        }
                        Info h2{
                            font-size: 6px;
                        }
                    }
                `}
            </style>
        </div>
    )
}
