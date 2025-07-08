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
                    <div className='lg:text-start text-center'>
                        <h5>Hi I am</h5>
                        <h3 className='text-xl py-3'>Mahmood Fazile</h3>
                        <h1 className="lg:text-5xl text-[#CA5900] text-3xl lg:w-[528px] font-bold">UI/UX designer</h1>
                        <div className='flex gap-2 py-8 justify-center lg:justify-start'>
                            <img src={frame52} alt="" />
                            <img src={frame53} alt="" />
                            <img src={frame54} alt="" />
                            <img src={frame55} alt="" />
                        </div>
                        <button className="bg-[#E46400] w-[120px] h-[33px] lg:w-[156px] lg:h-[48px] rounded-md">Get Started</button>
                        <button className="border w-[150px] lg:w-[209px] ml-5 h-[33px] lg:h-[48px] rounded-md">Download CV </button>
                        <div className='lg:w-[534px] w-[340px] lg:h-[125px] h-[99px] grid grid-cols-3 py-8 rounded-md mt-12 bg-[#FFFFFF0A]'>
                            <div className='border-r px-1 lg:px-5 text-start'>
                                <h4 className='text-[#FD6F00] font-bold'>5+</h4>
                                <p>Experiences</p>
                            </div>
                            <div className='border-r px-1 lg:px-5 text-start'>
                                <h4 className='text-[#FD6F00] font-bold'>20+</h4>
                                <p>Project done</p>
                            </div>
                            <div className='lg:px-5 px-1 text-start'>
                                <h4 className='text-[#FD6F00] font-bold'>80+</h4>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;