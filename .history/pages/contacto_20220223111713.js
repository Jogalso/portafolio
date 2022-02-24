import React, { useEffect } from "react"
import Page from "../components/Page"

import Header from "../components/Header"
import Datos from "../components/Datos"
import FormularioContacto from "../components/FormularioContacto"
import Footer from "../components/Footer"

export default function contacto() {
  return (
    <div>
      <Page title="Presentación" description="Portafolio">
        <Header />
        <FormularioContacto />
      </Page>
    </div>
  )
}
