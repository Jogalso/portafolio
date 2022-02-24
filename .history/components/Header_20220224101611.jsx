import ContenedorImagenes from './ContenedorImagenes';
import ContenedorTareas from './ContenedorTareas';
import ContenedorPerfil from './ContenedorPerfil';

export default function Header() {
   
    return ( 
        <>
            <div className="Header">
                <div className="infoContenedor">
                    <div className="Info infoText">
                    <ContenedorPerfil /> 
                    </div>
                </div>     
                <div className="imagenes">
                    <ContenedorImagenes />  
                </div>           
            </div>
            <style>
                {`
                    .Header{
                        margin-top: 1vw;
                        overflow: hidden;
                        position: relative;
                        background-color: hsl(var(--daui-background-hue),var(--daui-background-saturation),var(--daui-background-lightness));
                        background-image: linear-gradient(90deg,var(--daui-Scroll-background-opaque),var(--daui-Scroll-background-transparent) var(--daui-Scroll-fade-width),var(--daui-Scroll-background-transparent) calc(100% - var(--daui-Scroll-fade-width)),var(--daui-Scroll-background-opaque)),radial-gradient(var(--daui-Scroll-shadow-width) 50% at left center,hsla(0,0%,0%,var(--daui-shadow-opacity)),transparent),radial-gradient(var(--daui-Scroll-shadow-width) 50% at right center,hsla(0,0%,0%,var(--daui-shadow-opacity)),transparent);
                    }  
                    .Info{
                        padding-top: 2vw;
                        display:flex;
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
                    @media only screen and (max-width: 1000px){
                        .Header{
                            height: 13.5vw;
                        }
                    }
                    @media only screen and (max-width: 850px){
                        .Header{
                            height: 14vw;
                        }
                    }
                    @media only screen and (max-width: 600px){
                        .Header{
                            height: 18.5vw;
                        }
                    }
                    @media only screen and (max-width: 500px){
                        .Header{
                            height: 22vw;
                        }
                    }
                    @media only screen and (max-width: 450px){
                        .Header{
                            height: 24vw;
                        }
                    }
                    @media only screen and (max-width: 400px){
                        .Header{
                            height: 26vw;
                        }
                    }
                `}
            </style>
        </>
    )
}
