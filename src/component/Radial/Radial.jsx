import vector from '../../assets/Vector.png'
import xd from '../../assets/iconoir_adobe-xd.png'
import ps from '../../assets/iconoir_adobe-photoshop.png'
import Ai from '../../assets/iconoir_adobe-illustrator.png'
import pr from '../../assets/basil_adobe-premiere-outline.png'
const Radial = () => {
    return (
        <div className="py-6 lg:py-12 lg:px-16 bg-base-200 grid grid-cols-2 lg:grid-cols-5 gap-5 ">
            <div className="card  w-auto ">
                <figure className="">
                    <div className="radial-progress text-[#FD6F00]" style={{ "--value": 100, "--size": "8rem" }} role="progressbar">
                        <img src={vector} alt="" className='w-[36px] h-[52px]' />
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl text-[#FD6F00]">100%</h2>
                    <p>Figma</p>
                    <div className="card-actions">
                        
                    </div>
                </div>
            </div>
            <div className="card  w-auto ">
                <figure className="">
                    <div className="radial-progress text-[#FD6F00]" style={{ "--value": 100, "--size": "8rem" }} role="progressbar">
                        <img src={xd} alt="" className='w-[36px] h-[52px]' />
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl text-[#FD6F00]">100%</h2>
                    <p>Adobe</p>
                    <div className="card-actions">
                        
                    </div>
                </div>
            </div>
            <div className="card  w-auto ">
                <figure className="">
                    <div className="radial-progress text-[#FD6F00]" style={{ "--value": 85, "--size": "8rem" }} role="progressbar">
                        <img src={ps} alt="" className='w-[36px] h-[52px]' />
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl text-[#FD6F00]">85%</h2>
                    <p>Adobe Photoshop</p>
                    <div className="card-actions">
                        
                    </div>
                </div>
            </div>
            <div className="card  w-auto ">
                <figure className="">
                    <div className="radial-progress text-[#FD6F00]" style={{ "--value": 60, "--size": "8rem" }} role="progressbar">
                        <img src={Ai} alt="" className='w-[36px] h-[52px]' />
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl text-[#FD6F00]">60%</h2>
                    <p>Adobe Illustrator</p>
                    <div className="card-actions">
                        
                    </div>
                </div>
            </div>
            <div className="card  w-auto ">
                <figure className="">
                    <div className="radial-progress text-[#FD6F00]" style={{ "--value": 70, "--size": "8rem" }} role="progressbar">
                        <img src={pr} alt="" className='w-[36px] h-[52px]' />
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl text-[#FD6F00]">70%</h2>
                    <p>Adobe Premiere</p>
                    <div className="card-actions">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Radial;