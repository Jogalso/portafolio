

export default function ContenedorPerfil() {

    return (
        <>
        <div className="fotoPerfil">
            <img className="Info__img" src="../images/galbis2.png" />
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
        <style>
                {`
                      .Info{
                        padding-top: 2vw;
                        padding-bottom: 2vw;
                        border-top: 1vw;
                        border-color: rgba(0, 0, 0, 0.6) ;
                        margin-left: 2vw;
                        width: 50%;
                        border-radius: 0.2em;
                        display:flex;
                        overflow: hidden;
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
                    @media only screen and (max-width: 450px){
                        .Info__img{
                            height: 15vw;
                        }
                    }
                    @media only screen and (max-width: 400px){
                        .Info{
                            margin-top: 0.8em;
                            margin-left: 3vw;
                            align-items: center;
                        }
                        .Info__img{
                            margin-right: 0.1em;
                            height: 18vw;
                        }
                    }
                `}
            </style>
        </>
    )
}