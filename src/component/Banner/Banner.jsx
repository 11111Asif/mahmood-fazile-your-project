import photo from '../../assets/Photo.png'
import frame52 from '../../assets/Frame 52.png'
import frame53 from '../../assets/Frame 53.png'
import frame54 from '../../assets/Frame 54.png'
import frame55 from '../../assets/Frame 55.png'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen lg:px-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={photo}
                        className=" rounded-lg lg:w-[618px] lg:h-[581px] w-[322px] h-[484px] " />
                    <div>
                        <h5>Hi I am</h5>
                        <h3 className='text-xl py-3'>Mahmood Fazile</h3>
                        <h1 className="lg:text-5xl text-[#CA5900] text-3xl lg:w-[534px] font-bold">UI/UX designer</h1>
                        <div className='flex gap-2 py-8'>
                            <img src={frame52} alt="" />
                            <img src={frame53} alt="" />
                            <img src={frame54} alt="" />
                            <img src={frame55} alt="" />
                        </div>
                        <button className="bg-[#E46400] w-[156px] h-[48px] rounded-md">Get Started</button>
                        <button className="border w-[209px] ml-5 h-[48px] rounded-md">Download CV </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;