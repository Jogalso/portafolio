import Picture from 'device-agnostic-ui/Picture.mjs'
export default function ContenedorImagenes(){
    const stack = [
        "logo.png",
        "reactLogo.png",
        "nextjsLogo.svg",
        "graphqlreactLogo.svg",
        "graphqlLogo.png",
        "apolloLogo.png",
        "socketioLogo.png",
        "mqttLogo.png",
        "mongodbLogo.png",
        "nodejsLogo.svg",
        "vercelLogo.svg",
        "awsLogo.png",
        "arduinoLogo.svg",
        "industrialshieldsLogo.png",
    ]
    const descripcion = [
        "iot",
        "react",
        "nextjs",
        "graphqlreact",
        "graphql",
        "apollo",
        "socketio",
        "mqtt",
        "mongodb",
        "nodejs",
        "vercel",
        "aws",
        "arduino",
        "industrialshields",
    ]

    let posicion = -1
    return (
        <>
        <figure className='figuraSopa'>
            <div className='sopaImagenes'>
               {    
                   stack.forEach( (imagen) => {
                       console.log(imagen);
                       posicion++
                       console.log(descripcion[posicion]);
                        <Picture width={157} height={100} style={{ width: '157px' }}>
                            <img
                                src={`../images/`+imagen}
                                alt={descripcion[posicion]}
                            />
                        </Picture>
                       
                   })
               }
            </div>
        </figure>
        <style>
        {`
            .figuraSopa{
                position: relative;
                margin: 0;
                -webkit-mask-image: -webkit-linear-gradient(left,#000,transparent)
            }
            .sopaImagenes{
                position: relative;
                left:100%;
                display: grid;
                grid-auto-flow: column;
                grid-gap: 3rem;
                animation:sopa 20s ease-out infinite;
            }
            .sopaImagenes img{
                border-radius: 2em;
            }
            @keyframes sopa {
                0%{opacity: 0%;}
                60%{opacity: 100%;}
                100%{transform: translateX(-200%);}
              }
        `}
    </style>
        </>
            
    )
}