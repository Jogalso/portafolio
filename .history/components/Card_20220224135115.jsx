import Heading from "device-agnostic-ui/Heading.mjs";
import { Section } from "./Section";
export default function Card({habilidad}) {
    console.log(habilidad.titulo);
    return (
        <Heading size={3}>{habilidad.titulo}</Heading>
    )
}