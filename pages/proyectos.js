import React from "react"
import { Page } from "../components/Page"

import ListadoProyectos from "../components/ListadoProyectos"

export default function index() {
  return (
    <>
      <Page title="Presentación" description="Portafolio">
        <ListadoProyectos />
      </Page>
    </>
  )
}
