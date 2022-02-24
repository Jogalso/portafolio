import React from "react"
import { Page } from "../components/Page"

import Header from "../components/Header"

import ContenedorTareas from "./ContenedorTareas"
import FormularioContacto from "../components/FormularioContacto"
import Footer from "../components/Footer"

export default function index() {
  return (
    <>
      <Page title="Presentación" description="Portafolio">
        <Header />
        <ContenedorTareas />
      </Page>
    </>
  )
}
