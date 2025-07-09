import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Portfolio from "../Portfolio/Portfolio";
import Radial from "../Radial/Radial";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Radial></Radial>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;