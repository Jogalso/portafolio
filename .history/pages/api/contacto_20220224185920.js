import { useSendMailContact } from "../../hooks/useSendMailContact"

export default function (req, res) {
  const { resultado } = useSendMailContact({ req, res })
  res = resultado
}
