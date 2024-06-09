import About from "../about/about";
import Contact from "../contact/contact";
import Gallery from "../gallery/gallery";
import HeroSection from "../heroSection/heroSection";
import Products from "../products/products";
import Services from "../services/services";
import Testimonial from "../testimonial/testimonial";



const Layout = () => {
    return (
        <div className="container grid grid-cols-12 py-14 lg:py-0">
            <HeroSection/>
            <About/>
            <Gallery/>
            <Services/>
            {/* <Products/> */}
            <Testimonial/>
            <Contact/>
        </div>
    )
};

export default Layout;