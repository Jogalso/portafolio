import React from "react"
import { Page } from "../components/Page"

import Header from "../components/Header"
import Contenedor from "../components/Contenedor"
import FormularioContacto from "../components/FormularioContacto"
import Footer from "../components/Footer"

export default function index() {
  return (
    <>
      <Page title="Presentación" description="Portafolio">
        <Header />
      </Page>
      <style>
        {`
          .presentacion{
            display:flex;
          }
        `}
      </style>
    </>
  )
}
