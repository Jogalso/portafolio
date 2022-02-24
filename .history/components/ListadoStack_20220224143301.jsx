import Card from "./Card"

export default function ListadoStack(){
    const stack = [
        {
            titulo: "React",
            imagen: "reactLogo.png",
            link: "https://es.reactjs.org/",
            descripcion: "Libreria para renderizar interfaces."
        },
        {
            titulo: "Next.js",
            imagen: "nextjsLogo.svg",
            link: "https://nextjs.org/",
            descripcion: "Framework de renderizado en el servidor, basado en React."
        },
        {
            titulo: "GraphQl-react",
            imagen: "graphqlreactLogo.svg",
            link: "https://github.com/jaydenseric/graphql-react",
            descripcion: "Libreria ligera de graphql para react, de Jayden Seric."
        },
        {
            titulo: "Graph Ql",
            imagen: "graphqlLogo.png",
            link: "https://graphql.org/",
            descripcion: "Lenguaje de consulta API basada en grafos."
        },
        {
            titulo: "Apollo",
            imagen: "apolloLogo.png",
            link: "https://www.apollographql.com/",
            descripcion: "Familia de tecnologías de servidor y cliente para aplicaciones basadas en GraphQL."
        },
        {
            titulo: "Socket.io",
            imagen: "socketioLogo.png",
            link: "https://socket.io/",
            descripcion: "Framework de web sockets para Javascript"
        },
        {
            titulo: "Aedes Mqtt",
            imagen: "mqttLogo.png",
            link: "https://github.com/moscajs/aedes",
            descripcion: "Servidor Mqtt para Javascript"
        },
        {
            titulo: "Mongo DB",
            imagen: "mongodbLogo.png",
            link: "https://www.mongodb.com/es",
            descripcion: "Base de datos de documentos NoSQL, alojada en la nube con MongoDB Atlas."
        },
        {
            titulo: "Node.js",
            imagen: "nodejsLogo.svg",
            link: "https://nodejs.org/es/",
            descripcion: "Plataforma de ejecucion de Javascript multiplataforma"
        },
        {
            titulo: "Vercel",
            imagen: "vercelLogo.svg",
            link: "https://vercel.com/login?next=%2Fdashboard",
            descripcion: "Plataforma en la nube para gestion de dominios y despliegues serverless"
        },
        {
            titulo: "AWS",
            imagen: "awsLogo.png",
            link: "https://aws.amazon.com/es/",
            descripcion: "Plataforma en la nube de multiservicios web"
        },
        {
            titulo: "Arduino",
            imagen: "arduinoLogo.svg",
            link: "https://www.arduino.cc/",
            descripcion: "Arduino es una plataforma electrónica de código abierto basada en hardware y software fáciles de usar."
        },
        {
            titulo: "Industrial Shield",
            imagen: "industrialshieldsLogo.png",
            link: "https://www.industrialshields.com/es_ES/",
            descripcion: "Plataforma electrónica de PLC industriales basados en Arduino, Raspberry Pi y ESP32"
        }
    ]

    return (
        <>
            <div className="listado">
                {stack.map(habilidad => {
                    return <Card habilidad={habilidad} />
                })}
            </div>
            <style>{`
                .listado{
                    width: 80%;
                    display: grid;
                    grid-gap: 4em;
                    grid-template-columns: repeat(auto-fill, minmax(10vw, 1fr));
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 2vw;
                  }
                .flex-container > div {
                    background-color: #f1f1f1;
                    width: 100px;
                    margin: 10px;
                    text-align: center;
                    line-height: 75px;
                    font-size: 30px;
                }
            `}</style>
        </>
    )
}