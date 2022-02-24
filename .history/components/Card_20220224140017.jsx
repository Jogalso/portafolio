import Heading from "device-agnostic-ui/Heading.mjs";
import { Section } from "./Section";
import Picture from 'device-agnostic-ui/Picture.mjs'
export default function Card({habilidad}) {
    console.log(habilidad.imagen);
    return (
        <>
            <Section className="carta">
                <Picture width={1} height={1} style="">
                    <a target="_blank" href={habilidad.link}>
                        <img
                            className="imgagenHabilidad"
                            src={`../images/`+habilidad.imagen}
                            alt={habilidad.titulo}
                        />
                    </a>
                </Picture>
                <Heading size={2} >{habilidad.titulo}</Heading>
            </Section>
            <style>
                {`
                    .imgagenHabilidad{
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 0.5em;
                        width: 14em;
                        font-size: 1.1rem;
                    }
                `}
            </style>
        </>
    )
}