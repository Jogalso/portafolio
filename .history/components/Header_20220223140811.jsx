import Heading from 'device-agnostic-ui/Heading.mjs';
import Para from 'device-agnostic-ui/Para.mjs'
import { PageHeader } from "../components/PageHeader"
import ContenedorImagenes from './ContenedorImagenes';

export default function Header() {
   
    return ( 
        <>
            <div className="Header">
                <div className="Info infoText">
                    <div className="fotoPerfil">
                        <img className="Info__img" src="../images/galbis2.png" />
                    </div>
                    <div className="descripcionPerfil">
                        <PageHeader heading="Jose Galbis Soler" >
                            <Para>
                                Ingeniero técnico en informática 
                            </Para>
                            <Para>
                                Ingeniero de computadores, sistemas empotrados, redes de comunicacion y sistemas distribuidos
                            </Para>                            
                        </PageHeader>
                    </div>
                </div>
                <div className='InfoContenido'>
                    <ContenedorImagenes />
                </div>
            </div>
            <style>
                {`
                    .Header{
                        display: flex;
                        flex-wrap: wrap;
                        margin-top: 1vw;
                        overflow: hidden;
                        position: relative;
                        background-color: hsl(var(--daui-background-hue),var(--daui-background-saturation),var(--daui-background-lightness));
                        background-image: linear-gradient(90deg,var(--daui-Scroll-background-opaque),var(--daui-Scroll-background-transparent) var(--daui-Scroll-fade-width),var(--daui-Scroll-background-transparent) calc(100% - var(--daui-Scroll-fade-width)),var(--daui-Scroll-background-opaque)),radial-gradient(var(--daui-Scroll-shadow-width) 50% at left center,hsla(0,0%,0%,var(--daui-shadow-opacity)),transparent),radial-gradient(var(--daui-Scroll-shadow-width) 50% at right center,hsla(0,0%,0%,var(--daui-shadow-opacity)),transparent);
                      }
                      .Info{
                        padding-top: 2vw;
                        padding-bottom: 2vw;
                        border-top: 1vw;
                        border-color: rgba(0, 0, 0, 0.6) ;
                        margin-left: 2vw;
                        width: 50%;
                        border-radius: 0.2em;
                      }
                      .Info__img{
                        height: auto;
                        width: 50%;
                        filter: drop-shadow(0.5em 6em 3em hsla(0,0%,0%,calc(var(--daui-shadow-opacity) * 2)));   
                      }
                      .InfoContenido{
                        display: flex;
                        margin: 0;
                        -webkit-mask-image: -webkit-radial-gradient(closest-side,#000,transparent)
                        overflow: hidden;
                      }
                      .fotoPerfil{
                        text-align: center;
                      }
                      .descripcionPerfil{
                        width: 60%;
                        padding-right: 2em;
                        font-size: 1.3em;
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
        </>
    )
}
