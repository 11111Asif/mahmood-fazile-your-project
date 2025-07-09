

const Portfolio = () => {
    return (
        <div className="bg-base-200">
            <h1 className="text-4xl text-center font-bold">Portfolio</h1>
            <div className="text-center py-4 lg:flex justify-center ">
                <button className="lg:w-[100px] lg:h-[54px] w-[58px] h-[42px] rounded-md bg-[#E46400]">All</button>
                <button className="lg:w-[199px] ml-3 lg:ml-5 lg:h-[54px] w-[144px] h-[42px] rounded-md bg-[#FFFFFF14]">Website design</button>
                <button className="lg:w-[179px] ml-3 lg:ml-5 lg:h-[54px] w-[127px] h-[42px] rounded-md bg-[#FFFFFF14]">App desktop</button>
                <div className="flex lg:px-0 px-[53px] lg:mt-0 mt-3">
                    <button className="block lg:hidden text-center ml-3 lg:ml-5 w-[177px] h-[42px] rounded-md bg-[#FFFFFF14]">Landing page design</button>
                    <button className="lg:w-[224px] ml-3 lg:ml-5 lg:h-[54px] w-[166px] h-[42px] rounded-md bg-[#FFFFFF14]">App mobile design</button>
                </div>
                <button className="lg:w-[143px] lg:mt-0 lg mt-3 ml-3 lg:ml-5 lg:h-[54px] w-[95px] h-[42px] rounded-md bg-[#FFFFFF14]">Braiding</button>
            </div>
        </div>
    );
};

export default Portfolio;