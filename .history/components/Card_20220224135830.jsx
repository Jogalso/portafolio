import Heading from "device-agnostic-ui/Heading.mjs";
import { Section } from "./Section";
import Picture from 'device-agnostic-ui/Picture.mjs'
export default function Card({habilidad}) {
    console.log(habilidad.imagen);
    return (
        <>
            <Section className="carta">
                <Heading size={2} >{habilidad.titulo}</Heading>
                <Picture width={1} height={1} style="">
                    <a target="_blank" href={habilidad.link}>
                        <img
                            className="imgagenHabilidad"
                            src={`../images/`+habilidad.imagen}
                            alt={habilidad.titulo}
                        />
                    </a>
                </Picture>
            </Section>
            <style>
                {`
                    .imgagenHabilidad{
                        width: 20%;
                    }
                `}
            </style>
        </>
    )
}