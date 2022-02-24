import React from "react"
import { Page } from "../components/Page"

import ListadoStack from "../components/ListadoStack"

export default function index() {
  return (
    <>
      <Page title="Stack que domino" description="Stack">
        <ListadoStack />
      </Page>
    </>
  )
}
