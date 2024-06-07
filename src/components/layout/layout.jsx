import About from "../about/about";
import HeroSection from "../heroSection/heroSection";
import Products from "../products/products";
import Services from "../services/services";
import Testimonial from "../testimonial/testimonial";



const Layout = () => {
    return (
        <div className="container grid grid-cols-12 py-14 lg:py-0">
            <HeroSection/>
            <About/>
            <Services/>
            {/* <Products/> */}
            <Testimonial/>
        </div>
    )
};

export default Layout;