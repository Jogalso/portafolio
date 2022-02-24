import Heading from "device-agnostic-ui/Heading.mjs";
import { Section } from "./Section";
export default function Card({habilidad}) {
    return (
        <>
            <Section className="carta">
                <Heading size={2} >{habilidad.titulo}</Heading>
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