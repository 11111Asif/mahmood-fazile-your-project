import frame52 from '../../assets/Frame 52.png'
import frame53 from '../../assets/Frame 53.png'
import frame54 from '../../assets/Frame 54.png'
import frame55 from '../../assets/Frame 55.png'
import { CgMail } from "react-icons/cg";
import { LuPhone } from "react-icons/lu";

const Footer = () => {
    return (
        <div className="bg-[#FFFFFF0A] py-5 px-3 lg:px-10">
            <h1 className="text-3xl text-center font-bold text-[#E60026]">LOGO</h1>
            <div className="mt-5">
                <ul className="list-none space-x-4 lg:space-x-10 flex justify-center">
                    <li><a>Home</a></li>
                    <li><a>Services</a></li>
                    <li><a>About me</a></li>
                    <li><a>Portfolio</a></li>
                    <li className='hidden lg:block'><a>Contact me</a></li>
                </ul>
                <div className='list-none text-center mt-2 block lg:hidden'>
                    <li><a>Contact me</a></li>
                </div>
            </div>
            <div className='flex justify-center mt-7 gap-5'>
                <img src={frame52} alt="" />
                <img src={frame53} alt="" />
                <img src={frame54} alt="" />
                <img src={frame55} alt="" />
            </div>
            <div className='lg:flex justify-center mt-7 space-x-12 lg:ml-0 ml-16'>
                <div className='flex items-center text-center space-x-3'>
                    <CgMail className='text-xl'></CgMail>
                    <p>Mahmood.fazile7005@gmail.com</p>
                </div>
                <div className='flex items-center space-x-3'>
                    <LuPhone className='text-xl'></LuPhone>
                    <p>+93 729 107 005</p>
                </div>
            </div>
            <div className='border mt-10 lg:w-[593px] w-[350px] lg:ml-[240px]'></div>
            <p className='text-center py-4'>Designed by @mahmood.fazile UI/UX designer</p>
        </div>
    );
};

export default Footer;