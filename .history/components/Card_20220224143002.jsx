import Heading from "device-agnostic-ui/Heading.mjs";
import { Section } from "./Section";
import Picture from 'device-agnostic-ui/Picture.mjs'
import Para from "device-agnostic-ui/Para.mjs";
export default function Card({habilidad}) {
    console.log(habilidad.imagen);
    return (
        <>
        <a className="cartaLink" target="_blank" href={habilidad.link}>
            <article className="carta">
                <Picture width={1} height={1} style="">
                        <img
                            className="imgagenHabilidad"
                            src={`../images/`+habilidad.imagen}
                            alt={habilidad.titulo}
                        />
                </Picture>
                <div className="cartaInfo">
                    <Heading size={2} >{habilidad.titulo}</Heading>
                    <Para>
                        {habilidad.descripcion}
                    </Para>
                </div>
            </article>
            </a>
            <style>
                {`
                    .cartaLink{
                        display: flex!important;
                        position: relative;
                        border: 2px solid transparent;
                        max-width: 100%;
                        text-decoration: none;
                        color: hsl(var(--daui-foreground-hue),var(--daui-foreground-saturation),var(--daui-foreground-lightness));
                        background-color: hsl(var(--daui-background-hue),var(--daui-background-saturation),var(--daui-background-lightness));
                        -webkit-box-shadow: 0 2px 16px hsla(0,0%,0%,var(--daui-shadow-opacity));
                        box-shadow: 0 2px 16px hsla(0,0%,0%,var(--daui-shadow-opacity));
                        overflow: hidden;
                        border-radius: 1rem;
                        padding: 1em;
                    }
                    .carta{
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 0.5em;
                        width: 14em;
                        font-size: 1.1rem;
                        cursor: pointer;
                        position: relative;
                        display: block;
                        border: 2px solid transparent;
                        border-radius: 3px;
                        width: fit-content;
                        max-width: 100%;
                        text-decoration: none;
                        color: hsl(var(--daui-foreground-hue),var(--daui-foreground-saturation),var(--daui-foreground-lightness));
                        background-color: hsl(var(--daui-background-hue),var(--daui-background-saturation),var(--daui-background-lightness));
                        box-shadow: 0 2px 16px hsla(0,0%,0%,var(--daui-shadow-opacity));
                        overflow: hidden;
                        border-radius: 2em;
                        margin: 1em;
                    }
                    .imgagenHabilidad{
                        box-sizing: border-box;
                        padding: 15%;
                        object-fit: contain;
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                    }
                `}
            </style>
        </>
    )
}