import React from "react"
import { Page } from "../components/Page"

import Header from "../components/Header"

import ListadoProyectos from "../components/ListadoProyectos"

export default function index() {
  return (
    <>
      <Page title="Presentación" description="Portafolio">
        <Header />
        <ListadoProyectos />
      </Page>
    </>
  )
}
