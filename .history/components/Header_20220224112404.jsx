import ContenedorImagenes from './ContenedorImagenes';
import ContenedorPerfil from './ContenedorPerfil';

export default function Header() {
   
    return ( 
        <>
            <div className="Header">
                <ContenedorPerfil /> 
                <ContenedorImagenes />          
            </div>
            <style>
                {`
                    .Header{
                        margin-top: 1vw;
                        overflow: hidden;
                        position: relative;
                        height:70vw;
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
