import React from "react"
import Layout from "../components/Layout"

import Header from "../components/Header"
import Terapias from "../components/Terapias"
import FormularioContacto from "../components/FormularioContacto"
import Footer from "../components/Footer"

export default function index() {
  return (
    <div>
      <Layout>
        <Header />
        <Terapias />
        <FormularioContacto />
        <Footer />
      </Layout>
    </div>
  )
}
