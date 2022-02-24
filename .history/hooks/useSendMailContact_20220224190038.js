import { useState } from "react"
export const useSendMailContact = ({ req, res }) => {
  const [resultado, setResultado] = useState()

  return { resultado }
}
