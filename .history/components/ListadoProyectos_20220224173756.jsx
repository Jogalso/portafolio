import Card from "./Card"

export default function ListadoProyectos(){
    const proyectos = [
        {
            titulo: "Secaderos industriales IoT",
            imagen: "secadero.jpg",
            link: "https://secaderos.bio/",
            descripcion: "Investigacion y desarrollo de secaderos automatizados industriales, para una empresa agroalimentaria."
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
        <div className="listado">
        {
            proyectos.map(proyecto => {
               return <Card  elemento={proyecto}/>
            })
        } 
        </div>
        <style>{`
                .listado{
                    width: 80%;
                    display: grid;
                    grid-gap: 4em;
                    grid-template-columns: repeat(auto-fill, minmax(12vw, 1fr));
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 4vw;
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