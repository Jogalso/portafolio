import React from 'react'

import {useField} from '../hooks/useField'

const FormularioContacto = () => {

    //estado del nombre de usuario para login
    const {
        value: valueNombre,
        setValue: setValueNombre,
        errors: errorsNombre, //esta variable debe contener un String para mostrarlo como mensaje de validacion personalizado en los input text agnosticos
        addError: addErrorNombre, //metodo para añadir o concatener nuevos mensajes al String de errorsNombre
      } = useField({ initialValue: ' ' });

    const {
        value: valueEmail,
        setValue: setValueEmail,
        errors: errorsEmail, //esta variable debe contener un String para mostrarlo como mensaje de validacion personalizado en los input text agnosticos
        addError: addErrorEmail, //metodo para añadir o concatener nuevos mensajes al String de errorsNombre
      } = useField({ initialValue: ' ' });
      
    const {
        value: valueTelefono,
        setValue: setValueTelefono,
        errors: errorsTelefono, //esta variable debe contener un String para mostrarlo como mensaje de validacion personalizado en los input text agnosticos
        addError: addErrorTelefono, //metodo para añadir o concatener nuevos mensajes al String de errorsNombre
      } = useField({ initialValue: ' ' });

    const {
        value: valueMotivo,
        setValue: setValueMotivo,
        errors: errorsMotivo, //esta variable debe contener un String para mostrarlo como mensaje de validacion personalizado en los input text agnosticos
        addError: addErrorMotivo, //metodo para añadir o concatener nuevos mensajes al String de errorsNombre
      } = useField({ initialValue: ' ' });
    
    //metodo de adicion de errores
    const onFieldError = React.useCallback(
        ({ message, path }) => {
          switch (path[0]) {
            case "nombre":
                addErrorNombre(e.target.value)
                break;
            case "email":
                addErrorEmail(e.target.value)
                break;
             case "telefono":
                addErrorTelefono(e.target.value)
                break;
             case "motivo":
                addErrorMotivo(e.target.value)
                break;           
          }
        },
        [addErrorNombre, addErrorEmail, addErrorTelefono, addErrorMotivo]
      );
    //metodo para el manejo del cambio de datos en los campos
    const handleChange = (e) => {
        switch (e.target.name){
           case "nombre":
               setValueNombre(e.target.value)
               break;
           case "email":
               setValueEmail(e.target.value)
               break;
            case "telefono":
                setValuePais(e.target.value)
                break;
            case "motivo":
                setValueMotivo(e.target.value)
                break;
       }
   }

    const onSubmit = (e) => {
        e.preventDefault();
        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nombre: valueNombre, email: valueEmail, telefono: valueTelefono, motivo: valueMotivo })
        });
        alert("Contact email has been sent successfully")
        window.location.href= "/";
    }
    return (
        
            <React.Fragment>
                <div className="container">
                    <div className="banner" />
                    <div className="formulario">
                        <form
                            className="ContactForm"
                            onSubmit={onSubmit}
                        >
                            <div className="titulo">
                                <span className="Titulo">Contacto</span>
                            </div>                            
                            <div className="inputs">
                                <div className="contenedorInput">
                                    <span>Nombre</span>
                                    <input
                                        name="nombre"
                                        type="text"
                                        required="true"
                                        title="Tu nombre y apellidos, para saber como dirigirnos a ti"
                                        className="nombre"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="contenedorInput">
                                    <span>Correo Electronico</span>
                                    <input
                                        name="email"
                                        type="email"
                                        title="Un correo electronico que se de tu uso habitual"
                                        required="true"
                                        className="email"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="contenedorInput">
                                    <span>Telefono</span>
                                    <input
                                        name="nombre"
                                        type="tel"
                                        pattern="[ +][0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}"
                                        title="Un numero de telefono con la posibilidad de +000 de la procedencia, seguido de 9 digitos entre el 0 al 9"
                                        required="true"
                                        className="nombre"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="containerMotivo">
                                <span className="spanMotivo">Motivo</span>
                                <textarea
                                    name="motivo"
                                    type="text"
                                    title="Explicar brevemente el motivo de contacto"
                                    className="inputFormMotivo"
                                    onChange={handleChange}
                                />
                                </div>                     
                            <div className="boton">
                                <button 
                                    className="submitForm"
                                >
                                    Enviar
                                </button>
                            </div>                            
                        </form>
                    </div>
                    <div className="banner" />
                </div>
                
                <style jsx>
                    {`
                       .container{
                            border-bottom-right-radius: 1.5em;
                            border-bottom-left-radius: 1.5em;
                            display: flex;
                            background: linear-gradient(180deg, #FFB26B 0, #FF9524 60%, #E68620);
                            color: #007099;
                       }
                       .formulario{
                           display: flex;
                           justify-content: center;
                           text-align: center;
                           width: 70%;
                       }
                       .banner{
                         width: 25%;
                        }
                        .inputs{
                            display: flex;
                        }
                        .inputs div {
                            text-align: center;
                            margin: 10px;
                            padding: 20px;
                            font-size: 30px;
                        }
                        .inputs span{
                            font-family: 'RymanEco';
                        }
                        .contenedorInput{
                            display: grid;
                            jusfify-content: center;
                            margin: auto;
                        }
                       .Titulo{
                            font-family: 'RymanEco';
                            padding-top: 1rem;
                            display: flex;
                            justify-content: center;
                            font-size: 3em;
                       }
                       input{
                           padding: 0.8em;
                           text-rendering: optimizeLegibility;
                           border-radius: 0.5em;
                       }
                       .email{
                           width: 30em;
                           border-radius: 0.5em;
                       }
                       .containerMotivo{
                           display: grid;
                           max-width: 100%;
                           justify-content: center;
                       }
                       .containerMotivo span{
                            font-size: 30px;
                            font-family: 'RymanEco';
                       }
                       .inputFormMotivo{
                            max-width: 100%;
                            width: 60em;
                            height: 10em;
                            text-rendering: optimizeLegibility;
                            padding: 0.8em; 
                            resize: none;
                            border-radius: 4px;
                            border: 2px solid #ccc;
                            border-radius: 0.5em;
                       }
                       .submitForm{
                            box-sizing: border-box;
                            color: white;
                            cursor: pointer;
                            display: inline-block;
                            border: none;
                            display: block;
                            margin-left: auto;
                            margin-right: auto;
                            margin-bottom: 2em;
                            margin-top: 2em;
                            background-color: #20B1E6;
                            box-shadow: 0 2px 13px 0 rgba(4,116,186,0.5);
                            border-radius: 0 3px 3px 0;
                            flex-shrink: 0;
                            padding: 10px 1rem;
                            height: 50px;
                            margin-bottom: 25px;
                            font-size: 1.2rem;
                            border-radius: 0.5em;
                       }
                       @media only screen and (max-width: 1600px){
                            .email{
                                width: 20em;
                            }
                        }
                        @media only screen and (max-width: 1400px){
                            .banner{
                                width: 15%;
                            }
                        }
                        @media only screen and (max-width: 1200px){
                            .banner{
                                width: 5%;
                            }
                            .formulario{
                                width: 90%;
                            }
                        }
                        @media only screen and (max-width: 1000px){
                            .banner{
                                width: 0%;
                            }
                            .formulario{
                                width: 100%;
                            }
                        }
                        @media only screen and (max-width: 900px){
                            .formulario{
                                width: 100%;
                                justify-content: center;
                            }
                            .ContactForm{
                                max-width: 100%;
                            }
                            .inputs{
                                flex-direction: column;
                            }
                            .email{
                                width: 100%;
                                max-width: 100%;
                            }
                            .nombre{
                                width: 100%;
                                max-width: 100%;
                            }
                            .containerMotivo{
                                display; flex;
                                flex-direction: column;
                            }
                            .inputFormMotivo{
                                width: 30em;
                                max-width: 90%;
                                margin-left: 2em;
                            }
                        }
                        @media only screen and (max-width: 600px){
                            .inputFormMotivo{
                                width: 20rem;
                            }
                            .Titulo{
                                font-size: 10vw;
                           }
                           .inputs span{
                            font-size: 4vw;
                       }
                        }
                        @media only screen and (max-width: 420px){
                            .inputs{
                                max-width: 90%;
                                margin-right: auto;
                            }
                            .inputs div {
                                margin: 3vw;
                                padding: 4vw;
                                font-size: 5vw;
                            }
                            .inputFormMotivo{
                                width: 80vw;
                                max-width: 80%;
                                margin-left: 1em;
                            }
                            .Titulo{
                                font-size: 13vw;
                            }
                            .inputs span{
                                font-size: 5vw;
                            }
                            .containerMotivo span{
                                font-size: 5vw;
                            }
                        }
                    `}
                </style>
            </React.Fragment>         
    )
}

export default FormularioContacto