import { IoChevronDown } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="py-5 lg:px-10 px-3 bg-base-200">
            <div className="text-center space-y-3">
                <h1 className="text-4xl font-bold">Contact me</h1>
                <p>Cultivating Connections: Reach Out and Connect with Me</p>
            </div>
            <div className="py-10">
                <div className="lg:flex justify-center gap-5">
                    <div>
                        <input type="text" placeholder="Name" className="lg:w-[491px] w-[350px] h-[54px] bg-[#FFFFFF0A] rounded-md px-3" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" className="lg:w-[491px] w-[350px] lg:mt-0 mt-4 h-[54px] bg-[#FFFFFF0A] rounded-md px-3" />
                    </div>
                </div>
                <div className="lg:flex justify-center mt-4 gap-5">
                    <div>
                        <input type="text" placeholder="Phone Number" className="lg:w-[491px] w-[350px] h-[54px] bg-[#FFFFFF0A]  rounded-md px-3" />
                    </div>
                    <div>
                        <input type="text" placeholder="Service of Interest" className="relative lg:w-[491px] lg:mt-0 mt-4 w-[350px] h-[54px] bg-[#FFFFFF0A]  rounded-md px-3" />
                        <IoChevronDown className="absolute -mt-8 ml-[310px] lg:ml-[450px]"></IoChevronDown>
                    </div>
                </div>
                <div className="lg:flex justify-center mt-4 gap-5">
                    <div>
                        <input type="text" placeholder="Timeline" className="lg:w-[491px] w-[350px] h-[54px] bg-[#FFFFFF0A]  rounded-md px-3" />
                    </div>
                    <div className="">
                        <input type="textarea" placeholder="Project Details..." className=" lg:w-[491px] lg:mt-0 mt-4 w-[350px] h-[162px] bg-[#FFFFFF0A]  rounded-md px-3" />  
                         
                    </div>
                    
                </div>
                <div className="lg:text-end lg:px-9 py-5">
                    <button className="w-[127px] h-[48px] rounded-md bg-[#FFFFFF0A]">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;