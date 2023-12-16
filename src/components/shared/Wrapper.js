import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const Wrapper = () => {
    const location = useLocation()
    useEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname])
  return null
}

export default Wrapper
