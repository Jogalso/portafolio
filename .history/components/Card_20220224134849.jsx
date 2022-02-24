import Heading from "device-agnostic-ui/Heading.mjs";
export default function Card(habilidad) {
    console.log(habilidad);
    return (
        <>
            <Section className="carta">
                <Heading size={3}>{habilidad.titulo}</Heading>
            </Section>
            <style>
                {`
                    .carta{

                    }
                `}
            </style>
        </>
    )
}