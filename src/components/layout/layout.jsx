import HeroSection from "../heroSection/heroSection";
import Services from "../services/services";
import Testimonial from "../testimonial/testimonial";



const Layout = () => {
    return (
        <div className="container grid grid-cols-12 py-14 lg:py-0">
            <HeroSection/>
            <Services/>
            <Testimonial/>
        </div>
    )
};

export default Layout;