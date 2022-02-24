import Card from "./Card"

export default function ListadoProyectos(){
    const proyectos = [
        {
            titulo: "Secaderos industriales automatizados",
            imagen: "",
            link: ""
        },
        {
            titulo: "Incubadoras de micelio IoT",
            imagen: "",
            link: ""
        },
        {
            titulo: "Pagina web Mediterranean Organic Foods",
            imagen: "MOF.png",
            link: "https://www.mediterraneanorganicfoods.com/"
        },
        {
            titulo: "Teslametro",
            imagen: "",
            link: ""
        },
    ]
    return(
        <>
            <Card  elemento = {proyecto}/>
        </>
    )
}