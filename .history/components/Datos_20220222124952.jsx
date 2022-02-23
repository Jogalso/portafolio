import React, {useState} from 'react'

import Mapa from '../components/Mapa'

export default function Terapias() {

    const [lugar, setLugar] = useState("Alcosser")
        
    const handleLugar = (e) => {
         e.preventDefault();
         setLugar(e.target.value)
    }

    return ( 
        <div>
            <div className="relleno"></div>
            <div className="datos">
                <div className="contenedor">
                    <div className="contacto">
                        <p className="titulo">
                            Datos de contacto
                        </p>
                        <a href="tel:+34657 36 36 39">
                            Llamar ahora
                        </a>
                        <p className="contenido">
                            Tel: 657 36 36 39
                        </p>
                    </div>
                    <div className="ubicacion">
                        <p className="titulo">
                            Dirección
                        </p>
                        <button
                            className={lugar == "Alcosser" ? ("botonesLugarActivo") : ("botonesLugar")}
                            name="lugar"
                            onClick={handleLugar}
                            value="Alcosser"
                        >
                            Alcosser
                        </button>
                        <button
                            className={lugar != "Alcosser" ? ("botonesLugarActivo") : ("botonesLugar")}
                            name="lugar"
                            onClick={handleLugar}
                            value="Valencia"
                        >
                            Valencia
                        </button>
                        
                            {lugar == "Alcosser" ? (
                                <div className="ubicacion">
                                    <a target="_blank" href="https://www.google.es/maps/place/Fundaci%C3%B3n+Herbes+del+Moli+Organic+%26+Cultural+World+Center/@38.7923056,-0.4040166,18z/data=!4m13!1m7!3m6!1s0xd618e46266746a5:0x58a76095aaa2f9de!2s03841+Alcocer+de+Planes,+Alicante!3b1!8m2!3d38.7953339!4d-0.4033885!3m4!1s0xd618e45eb9ff67d:0x83168ced36c04b7!8m2!3d38.7925626!4d-0.4021375?hl=es">
                                            Como llegar
                                        </a>
                                    <p className="contenido">
                                        <p>Cami Benamer, 1</p>
                                        <p>03841 Alcocer de Planes</p>
                                        <p>Alicante</p>
                                        <p>España</p>
                                    </p>
                                </div>
                            ): (
                                <div className="ubicacion">
                                    <a target="_blank" href="https://www.google.es/maps/place/Valencia/@39.4780628,-0.3951755,19.25z/data=!4m5!3m4!1s0xd604f4cf0efb06f:0xb4a351011f7f1d39!8m2!3d39.4699075!4d-0.3762881?hl=es">
                                        Como llegar
                                    </a>
                                    <p className="contenido">
                                        <p>Campanar 11</p>
                                        <p>03841 Valencia</p>
                                        <p>Valencia</p>
                                        <p>España</p>
                                    </p>
                                </div>
                            )}
                        
                    </div>
                </div> 
            </div>
            
            <Mapa lugar={lugar} />   
            <style>
                {`
                .relleno{
                    height: 10.5vw;
                }
                .datos{
                    background: linear-gradient(0deg, #FFB26B 0, #FF9524 60%, #E68620);
                    border-top: 0.3vw solid #007099;
                    border-top-right-radius: 0.8vw;
                    border-top-left-radius: 0.8vw;
                    align-items: center;
                    color: #007099;
                    font-family: 'RymanEco';
                }
                .contenedor{
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 80%;
                    display: flex;
                    justify-content: space-around;
                    padding: 2vw;
                    text-align: justify;
                }
                .titulo{
                    font-size: 2vw;
                }
                .datos a{
                    border-radius: 2px;
                    color: white;
                    background-color: #20B1E6;
                    display: inline-block;
                    text-transform: uppercase;
                    padding: 0.8vw 1vw;
                    text-decoration: none;
                    line-height: 1.5vw;
                }
                .botonesLugar{
                    border-radius: 2px;
                    color: white;
                    background-color: #20B1E6;
                    display: inline-block;
                    text-transform: uppercase;
                    padding: 0.5vw 0.5vw;
                    line-height: 1.5vw;
                    margin-bottom: 1vw;
                    margin-right: 0.2vw;
                }
                .botonesLugarActivo{
                    border-radius: 2px;
                    color: white;
                    background-color: #007099;
                    display: inline-block;
                    text-transform: uppercase;
                    padding: 0.5vw 0.5vw;
                    line-height: 1.5vw;
                    margin-bottom: 1vw;
                    margin-right: 0.2vw;
                }
                @media only screen and (max-width: 1500px){
                    .relleno{
                        height: 11.5vw;
                    }
                }
                @media only screen and (max-width: 1280px){
                    .relleno{
                        height: 12.4vw;
                    }
                }
                @media only screen and (max-width: 1150px){
                    .relleno{
                        height: 13vw;
                    }
                }
                @media only screen and (max-width: 1000px){
                    .relleno{
                        height: 14vw;
                    }
                }
                @media only screen and (max-width: 850px){
                    .relleno{
                        height: 15vw;
                    }
                }
                @media only screen and (max-width: 700px){
                    .titulo{
                        font-size: 5vw;
                    }
                    .datos a{
                        padding: 1.2vw 2vw;
                        line-height: 2vw;
                    }
                    .botonesLugar{
                        padding: 1vw 1vw;
                        line-height: 2Svw;
                        margin-bottom: 1vw;
                        margin-right: 0.5vw;
                    }
                    .botonesLugarActivo{
                        padding: 1.1vw 1.1vw;
                        line-height: 2Svw;
                        margin-bottom: 1vw;
                        margin-right: 0.5vw;
                    }
                }
                @media only screen and (max-width: 640px){
                    .relleno{
                        height: 15vw;
                    }
                }
                @media only screen and (max-width: 600px){
                    .relleno{
                        height: 18vw;
                    }
                }
                @media only screen and (max-width: 550px){
                    .relleno{
                        height: 21.5vw;
                    }
                }
                @media only screen and (max-width: 500px){
                    .relleno{
                        height: 23vw;
                    }
                }
                @media only screen and (max-width: 450px){
                    .relleno{
                        height: 24.5vw;
                    }
                    .titulo{
                        margin-bottom: 0.5em;
                    }
                    .contenedor{
                        max-width: 40%;
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .contacto{
                        margin-bottom: 2em;
                    }
                    .ubicacion{
                        margin-top: 1.5em;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .contenido p{
                        margin: 0.4em;
                    }
                    
                }
                @media only screen and (max-width: 400px){
                    .relleno{
                        height: 27vw;
                    }
                }
                @media only screen and (max-width: 350px){
                    .datos a{
                        font-size: 4vw;
                        padding: 2vw 3vw;
                        line-height: 1vw;
                    }
                }
                `}
            </style>
        </div>
    )
}
