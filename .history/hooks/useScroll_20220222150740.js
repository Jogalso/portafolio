import { useEffect, useState } from "react"

export const useScroll = () => {
  const [arriba, setArriba] = useState(true)

  const handleScroll = (e) => {
    let element = e.target
    if (element.scrollingElement.scrollTop < 100) {
      setArriba(true)
    } else {
      setArriba(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [arriba])

  return { handleScroll }
}
