import Card from "./Card"

export default function ListadoProyectos(){
    const proyectos = [
        {
            titulo: "Secaderos industriales automatizados",
            imagen: "secadero.jpg",
            link: "https://secaderos.bio/",
            descripcion: "Investigacion y desarrollo de secaderos automatizados industriales."
        },
        {
            titulo: "Incubadoras de micelio IoT",
            imagen: "incubadoraMicelio.jpg",
            link: "https://github.com/Jogalso/incubadoraMicelio",
            descripcion: "Investigacion y desarrollo de incubadoras de micelio."
        },
        {
            titulo: "Pagina web Mediterranean Organic Foods",
            imagen: "MOF.png",
            link: "https://www.mediterraneanorganicfoods.com/",
            descripcion: "Pagina web para un distribuidor de productos alimenticios ecologicos."
        },
        {
            titulo: "Teslametro",
            imagen: "teslametro.png",
            link: "https://m.riunet.upv.es/bitstream/handle/10251/86992/GALBIS%20-%20DISE%C3%91O%2C%20CONSTRUCCI%C3%93N%20Y%20PUESTA%20A%20PUNTO%20DE%20UN%20TESL%C3%81METRO%20MEDIANTE%20EL%20SISTEMA%20ARDUINO.pdf?sequence=1&isAllowed=y",
            descripcion: "Investigacion y desarrollo de un dispositivo de medida de campos magneticos para los laboratorios de fisica de la ETSINF de la UPV"
        },
    ]
    return(
        <>
        {
            proyectos.map(proyecto => {
                console.log(proyecto);
                <Card  elemento = {proyecto}/>
            })
        } 
        </>
    )
}