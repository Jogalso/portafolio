import React from "react"
import { Page } from "../components/Page"

import Header from "../components/Header"

import ListadoProyectos from "../components/ContenedorTareas"

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
