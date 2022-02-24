import { useState, useEffect } from "react"

const useSube = () => {
  const [offset, setOffset] = useState(0)
  const [arriba, setArriba] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset)
    }
    window.removeEventListener("scroll", onScroll)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (offset > 0) {
      setArriba(false)
    } else {
      setArriba(true)
    }
    // console.log(offset, offset > 100, arriba)
  }, [offset, arriba])

  const handleSube = () => {
    window.scrollTo(0, 0)
    setArriba(false)
  }
  return { arriba, handleSube }
}

export { useSube }
