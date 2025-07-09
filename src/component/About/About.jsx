import men from '../../assets/Man in black suit looking confident.png'
import { CiSaveDown2 } from "react-icons/ci";

const About = () => {
    return (
        <div className='lg:px-10 bg-base-200'>
            <div className='text-center space-y-3'>
                <h1 className="text-3xl font-bold">About me</h1>
                <p>User Interface and User Experience and Also video editing </p>
            </div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={men}
                        className=" rounded-lg lg:w-[566px] w-[395px] h-[564px] lg:h-[708px]" />
                    <div>

                        <p className="py-6 lg:ml-10">
                            A software engineer, the modern-day architect of digital
                            realms, navigates the ethereal landscapes of code,
                            sculpting intangible structures that shape our
                            technological world. With fingers poised over
                            keyboards like virtuoso pianists, they compose
                            symphonies of logic, their minds a labyrinth of
                            algorithms and solutions.Their canvas is a screen,
                            a vast expanse where lines of code dance in
                            intricate patterns, weaving the fabric of
                            programs and applications. Each keystroke is
                            a brushstroke, crafting intricate architectures
                            and breathing life into innovative designs.In this
                            digital atelier, they don the mantle of problem solvers,
                            confronting bugs and glitches like valiant knights in an
                            ever-evolving quest for perfection. Debugging becomes
                            a noble pursuit, unraveling the mysteries hidden within
                            the tangled webs of code. designs.In this digital atelier.
                        </p>
                        <button className="btn w-[224px] h-[48px] bg-[#FD6F00] lg:ml-10">
                            <CiSaveDown2 className='font-semibold text-xl'></CiSaveDown2>
                            Download CV
                        </button>

                    </div>
                </div>
               
            </div>
        </div>
        
    );
};

export default About;