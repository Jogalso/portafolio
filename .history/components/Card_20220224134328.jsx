
export default function Card({habilidad}) {
    console.log(habilidad);
    return (
        <>
            <section className="carta">
                <Heading size={3}>{habilidad.titulo}</Heading>
            </section>
            <style>
                {`
                    .carta{

                    }
                `}
            </style>
        </>
    )
}