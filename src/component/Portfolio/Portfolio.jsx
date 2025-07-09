import rectangle21 from '../../assets/Rectangle 21.png'
import rectangle22 from '../../assets/Rectangle 22.png'
import rectangle26 from '../../assets/Rectangle 26.png'

const Portfolio = () => {
    return (
        <div className="bg-base-200">
            <h1 className="text-4xl text-center font-bold">Portfolio</h1>
            <div className="text-center py-4 lg:flex justify-center ">
                <button className="lg:w-[100px] lg:h-[54px] w-[58px] h-[42px] rounded-md bg-[#E46400]">All</button>
                <button className="lg:w-[199px] ml-3 lg:ml-5 lg:h-[54px] w-[144px] h-[42px] rounded-md bg-[#FFFFFF14]">Website design</button>
                <button className="lg:w-[179px] ml-3 lg:ml-5 lg:h-[54px] w-[127px] h-[42px] rounded-md bg-[#FFFFFF14]">App desktop</button>
                <div className="flex lg:px-0 sm:px-[53px] lg:mt-0 mt-3">
                    <button className="block lg:hidden text-center ml-3 lg:ml-5 w-[177px] h-[42px] rounded-md bg-[#FFFFFF14]">Landing page design</button>
                    <button className="lg:w-[224px] ml-3 lg:ml-5 lg:h-[54px] w-[166px] h-[42px] rounded-md bg-[#FFFFFF14]">App mobile design</button>
                </div>
                <button className="lg:w-[143px] lg:mt-0 lg mt-3 ml-3 lg:ml-5 lg:h-[54px] w-[95px] h-[42px] rounded-md bg-[#FFFFFF14]">Braiding</button>
            </div>
            <div className="px-8 py-10 grid lg:grid-cols-3 gap-5">
                <div className="card bg-[#FFFFFF14] w-auto hidden lg:block">
                    <figure>
                        <img
                            src={rectangle21}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <div className='flex'>
                            <p>Name Project</p>
                            <p className='text-end'>Categories</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#FFFFFF14] w-auto hidden lg:block">
                    <figure>
                        <img
                            src={rectangle26}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <div className='flex'>
                            <p>Name Project</p>
                            <p className='text-end'>Categories</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#FFFFFF14] w-auto">
                    <figure>
                        <img
                            src={rectangle22}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <div className='flex'>
                            <p>Name Project</p>
                            <p className='text-end'>Categories</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#FFFFFF14] w-auto hidden lg:block">
                    <figure>
                        <img
                            src={rectangle26}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <div className='flex'>
                            <p>Name Project</p>
                            <p className='text-end'>Categories</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#FFFFFF14] w-auto hidden lg:block">
                    <figure>
                        <img
                            src={rectangle21}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <div className='flex'>
                            <p>Name Project</p>
                            <p className='text-end'>Categories</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#FFFFFF14] w-auto hidden lg:block">
                    <figure>
                        <img
                            src={rectangle22}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <div className='flex'>
                            <p>Name Project</p>
                            <p className='text-end'>Categories</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#FFFFFF14] w-auto hidden lg:block">
                    <figure>
                        <img
                            src={rectangle21}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <div className='flex'>
                            <p>Name Project</p>
                            <p className='text-end'>Categories</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#FFFFFF14] w-auto hidden lg:block">
                    <figure>
                        <img
                            src={rectangle22}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <div className='flex'>
                            <p>Name Project</p>
                            <p className='text-end'>Categories</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#FFFFFF14] w-auto hidden lg:block">
                    <figure>
                        <img
                            src={rectangle26}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <div className='flex'>
                            <p>Name Project</p>
                            <p className='text-end'>Categories</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;