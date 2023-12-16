import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const Layout = () => {
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
    <Header scrollToSection={scrollToSection} />
        <Outlet />
    <Footer />
    </>
  )
}

export default Layout