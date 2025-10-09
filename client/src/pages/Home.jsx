import BlogList from "../components/BlogList"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ImageSlider from "../components/ImageSlider"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Home = () => {
  return (
    <>
      <Navbar/>
      <ImageSlider />
      <Header/>
      <BlogList/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home