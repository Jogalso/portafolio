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

function App({ Component, pageProps }) {
  return (
    <Html>
      <Component {...pageProps} />
    </Html>
  )
}

export default App
