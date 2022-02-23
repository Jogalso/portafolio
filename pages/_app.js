import React from "react"
import "../styles/theme.css"
import "device-agnostic-ui/ButtonSubmit.css"
import "device-agnostic-ui/Code.css"
import "device-agnostic-ui/Fieldset.css"
import "device-agnostic-ui/Heading.css"
import "device-agnostic-ui/LinkText.css"
import "device-agnostic-ui/Loading.css"
import "device-agnostic-ui/Margin.css"
import "device-agnostic-ui/Para.css"
import "device-agnostic-ui/Picture.css"
import "device-agnostic-ui/Table.css"
import "device-agnostic-ui/Textbox.css"

import Head from "next/head"
import Html from "device-agnostic-ui/Html.mjs"
import Menu from "../components/Menu"

function App({ Component, pageProps }) {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="white" />
        <link rel="icon" sizes="192x192" href="../images/logo.png" />
      </Head>
      <Menu />
      <Component {...pageProps} />
    </Html>
  )
}

export default App
