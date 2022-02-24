import Card from "./Card"

export default function ListadoStack(){
    const stack = [
        {
            titulo: "React",
            imagen: "reactLogo.png",
            link: "https://es.reactjs.org/"
        },
        {
            titulo: "Next.js",
            imagen: "nextjsLogo.svg",
            link: "https://nextjs.org/"
        },
        {
            titulo: "GraphQl-react",
            imagen: "graphqlreactLogo.svg",
            link: "https://github.com/jaydenseric/graphql-react"
        },
        {
            titulo: "Graph Ql",
            imagen: "graphqlLogo.png",
            link: "https://graphql.org/"
        },
        {
            titulo: "Apollo",
            imagen: "apolloLogo.png",
            link: "https://www.apollographql.com/"
        },
        {
            titulo: "Socket.io",
            imagen: "socketioLogo.png",
            link: "https://socket.io/"
        },
        {
            titulo: "Aedes Mqtt",
            imagen: "mqttLogo.png",
            link: "https://github.com/moscajs/aedes"
        },
        {
            titulo: "Mongo DB",
            imagen: "mongodbLogo.png",
            link: "https://www.mongodb.com/es"
        },
        {
            titulo: "Node.js",
            imagen: "nodejsLogo.svg",
            link: "https://nodejs.org/es/"
        },
        {
            titulo: "Vercel",
            imagen: "vercelLogo.svg",
            link: "https://vercel.com/login?next=%2Fdashboard"
        },
        {
            titulo: "AWS",
            imagen: "awsLogo.png",
            link: "https://aws.amazon.com/es/"
        },
        {
            titulo: "Arduino",
            imagen: "arduinoLogo.svg",
            link: "https://www.arduino.cc/"
        },
        {
            titulo: "Industrial Shield",
            imagen: "industrialshieldsLogo.png",
            link: "https://www.industrialshields.com/es_ES/"
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
                .lista{
                    display: grid;
                    grid-gap: 2em;
                    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
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