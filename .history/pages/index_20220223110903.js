import React from "react"
import Layout from "../components/Layout"
import { Page } from "../components/Page"

import Header from "../components/Header"
import FormularioContacto from "../components/FormularioContacto"
import Footer from "../components/Footer"

export default function index() {
  return (
    <div>
      <Page title="Presentación" description="Portafolio">
        <Header />
      </Page>
    </div>
  )
}