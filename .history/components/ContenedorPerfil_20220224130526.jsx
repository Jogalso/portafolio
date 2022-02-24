import Para from 'device-agnostic-ui/Para.mjs'
import { PageHeader } from "../components/PageHeader"

export default function ContenedorPerfil() {

    return (
        <div className="infoContenedor">
            <div className="Info infoText">
                <div className="fotoPerfil">
                    <img className="perfil__img" src="../images/galbis2.png" />
                </div>
                <div className="descripcionPerfil">
                    <PageHeader heading="Jose Galbis Soler" >
                        <Para>
                            - Ingeniero de computadores, sistemas empotrados, redes de comunicacion y sistemas distribuidos
                        </Para>    
                        <Para>
                            - Desarrollador Fullstack
                        </Para>                           
                    </PageHeader>
                </div>
            </div>        
        <style>
            {`      .Info{
                        padding-top: 2vw;
                        display:flex;
                    } 
                    .infoContenedor{
                        width: 57%;
                        margin-left: auto;
                        margin-right: auto;
                    }   
                    .InfoContenido{
                        margin-left: 1em;
                        -webkit-mask-image: -webkit-radial-gradient(closest-side,#000,transparent)
                        overflow: hidden;
                        width: 55%;
                    }  
                    .imagenes{
                        width: 100%;
                    }                     
                      .fotoPerfil{
                        text-align: center;
                      }
                      .perfil__img{
                        height: auto;
                        width: 50%;
                        filter: drop-shadow(0.5em 6em 3em hsla(0,0%,0%,calc(var(--daui-shadow-opacity) * 2)));   
                      }
                      .descripcionPerfil{
                        width: 60%;
                        padding-right: 2em;
                        font-size: 1.3em;
                      }
                    
                    @media only screen and (max-width: 1000px){
                        .perfil__img{
                            height: 8vw;
                            margin-right: 1em;
                        }
                    }
                    @media only screen and (max-width: 850px){
                        .perfil__img{
                            height: 8vw;
                            margin-right: 1em;
                        }
                    }
                    @media only screen and (max-width: 640px){
                        .perfil__img{
                            height: 10vw;
                        }
                    }
                    @media only screen and (max-width: 450px){
                        .perfil__img{
                            height: 15vw;
                        }
                    }
                    @media only screen and (max-width: 400px){
                        .perfil__img{
                            margin-right: 0.1em;
                            height: 18vw;
                        }
                    }
                `}
            </style>
        </div> 
    )
}