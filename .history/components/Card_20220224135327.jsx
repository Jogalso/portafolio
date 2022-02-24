import Heading from "device-agnostic-ui/Heading.mjs";
import { Section } from "./Section";
import Picture from 'device-agnostic-ui/Picture.mjs'
export default function Card({habilidad}) {
    return (
        <>
            <Section className="carta">
                <Heading size={2} >{habilidad.titulo}</Heading>
                <Picture>
                    
                </Picture>
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