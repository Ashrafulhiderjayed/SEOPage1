import yellowMan from '../../assets/images/yellowMan.jpg'
import manImg from '../../assets/images/manImg.jpg'
import womanImg from '../../assets/images/womanImg.jpg'
import pinkMan from '../../assets/images/pinkMan.jpg'
import { FaBuffer, FaCalendar, FaChalkboardTeacher, FaLink } from 'react-icons/fa';
import './Home.css'

const Home = () => {
    return (
        <div className="flex overflow-x-auto bg-slate-200 gap-2">
        {/* Column 1 */}
        <div className='flex-col'>
        <section>
            <h3 className='p-4 font-bold'>col 1</h3>
            <div className='p-4 flex-shrink-0 column-width'>
            <div className="flex-col p-2 bg-white items-center">
                        <div className="flex justify-between">
                            <div className="flex">
                                <img className='rounded-full h-6 w-6 inline-block' src={yellowMan} alt="Client-img" />
                                <h5 className='ms-1'>Client Name</h5>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full h-6 w-6 inline-block' src={manImg} alt="" />
                                <h5 className='ms-1'>Sadik Istiak</h5>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-2'>
                            <div className='flex items-center'>
                            <FaBuffer /> <p>Lorem ipsum dolor sit amet curn...</p>
                            </div>
                            <div className='flex'>
                            <FaBuffer /> <p className='bg-slate-200'> 1/2</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                        <img className='rounded-full h-6 w-6 inline-block' src={womanImg} alt="" /> 
                        <img className='rounded-full h-6 w-6 inline-block' src={pinkMan} alt="" />
                        <h3 className='bg-slate-200'>12+</h3>
                        <h3 className='flex items-center'><FaChalkboardTeacher /> 15</h3>
                        <h3 className='flex items-center'><FaLink /> 25</h3>
                        <h3 className='flex items-center'><FaCalendar /> 30-12-2022</h3>
                        </div>
                    </div>
            </div>
                    
        </section>
        <section>
            <div className='p-4 flex-shrink-0 column-width'>
            <div className="flex-col p-2 bg-white items-center">
                        <div className="flex justify-between">
                            <div className="flex">
                                <img className='rounded-full h-6 w-6 inline-block' src={yellowMan} alt="Client-img" />
                                <h5 className='ms-1'>Client Name</h5>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full h-6 w-6 inline-block' src={manImg} alt="" />
                                <h5 className='ms-1'>Sadik Istiak</h5>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-2'>
                            <div className='flex items-center'>
                            <FaBuffer /> <p>Lorem ipsum dolor sit amet curn...</p>
                            </div>
                            <div className='flex items-center'>
                            <FaBuffer /> <p className='bg-slate-200'> 1/2</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                        <img className='rounded-full h-6 w-6 inline-block' src={womanImg} alt="" /> 
                        <img className='rounded-full h-6 w-6 inline-block' src={pinkMan} alt="" />
                        <h3 className='bg-slate-200'>12+</h3>
                        <h3 className='flex items-center'><FaChalkboardTeacher /> 15</h3>
                        <h3 className='flex items-center'><FaLink /> 25</h3>
                        <h3 className='flex items-center'><FaCalendar /> 30-12-2022</h3>
                        </div>
                    </div>
            </div>
                    
        </section>
        </div>
        {/* <div className="flex-shrink-0 w-auto p-4">Column 1</div> */}

        {/* Column 2 */}
        <div className='flex-col'>
        <section>
            <h3 className='p-4 font-bold'>col 2</h3>
            <div className='p-4 flex-shrink-0 column-width'>
            <div className="flex-col p-2 bg-white items-center">
                        <div className="flex justify-between">
                            <div className="flex">
                                <img className='rounded-full h-6 w-6 inline-block' src={yellowMan} alt="Client-img" />
                                <h5 className='ms-1'>Client Name</h5>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full h-6 w-6 inline-block' src={manImg} alt="" />
                                <h5 className='ms-1'>Sadik Istiak</h5>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-2'>
                            <div className='flex items-center'>
                            <FaBuffer /> <p>Lorem ipsum dolor sit amet curn...</p>
                            </div>
                            <div className='flex items-center'>
                            <FaBuffer /> <p className='bg-slate-200'> 1/2</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                        <img className='rounded-full h-6 w-6 inline-block' src={womanImg} alt="" /> 
                        <img className='rounded-full h-6 w-6 inline-block' src={pinkMan} alt="" />
                        <h3 className='bg-slate-200'>12+</h3>
                        <h3 className='flex items-center'><FaChalkboardTeacher /> 15</h3>
                        <h3 className='flex items-center'><FaLink /> 25</h3>
                        <h3 className='flex items-center'><FaCalendar /> 30-12-2022</h3>
                        </div>
                    </div>
            </div>
                    
        </section>
        <section>
            <div className='p-4 flex-shrink-0 column-width'>
            <div className="flex-col p-2 bg-white items-center">
                        <div className="flex justify-between">
                            <div className="flex">
                                <img className='rounded-full h-6 w-6 inline-block' src={yellowMan} alt="Client-img" />
                                <h5 className='ms-1'>Client Name</h5>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full h-6 w-6 inline-block' src={manImg} alt="" />
                                <h5 className='ms-1'>Sadik Istiak</h5>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-2'>
                            <div className='flex items-center'>
                            <FaBuffer /> <p>Lorem ipsum dolor sit amet curn...</p>
                            </div>
                            <div className='flex items-center'>
                            <FaBuffer /> <p className='bg-slate-200'> 1/2</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                        <img className='rounded-full h-6 w-6 inline-block' src={womanImg} alt="" /> 
                        <img className='rounded-full h-6 w-6 inline-block' src={pinkMan} alt="" />
                        <h3 className='bg-slate-200'>12+</h3>
                        <h3 className='flex items-center'><FaChalkboardTeacher /> 15</h3>
                        <h3 className='flex items-center'><FaLink /> 25</h3>
                        <h3 className='flex items-center'><FaCalendar /> 30-12-2022</h3>
                        </div>
                    </div>
            </div>
                    
        </section>
        </div>
        

        {/* Column 3 */}
        <div className='flex-col'>
        <section>
            <h3 className='p-4 font-bold'>col 3</h3>
            <div className='p-4 flex-shrink-0 column-width'>
            <div className="flex-col p-2 bg-white items-center">
                        <div className="flex justify-between">
                            <div className="flex">
                                <img className='rounded-full h-6 w-6 inline-block' src={yellowMan} alt="Client-img" />
                                <h5 className='ms-1'>Client Name</h5>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full h-6 w-6 inline-block' src={manImg} alt="" />
                                <h5 className='ms-1'>Sadik Istiak</h5>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-2'>
                            <div className='flex items-center'>
                            <FaBuffer /> <p>Lorem ipsum dolor sit amet curn...</p>
                            </div>
                            <div className='flex'>
                            <FaBuffer /> <p className='bg-slate-200'> 1/2</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                        <img className='rounded-full h-6 w-6 inline-block' src={womanImg} alt="" /> 
                        <img className='rounded-full h-6 w-6 inline-block' src={pinkMan} alt="" />
                        <h3 className='bg-slate-200'>12+</h3>
                        <h3 className='flex items-center'><FaChalkboardTeacher /> 15</h3>
                        <h3 className='flex items-center'><FaLink /> 25</h3>
                        <h3 className='flex items-center'><FaCalendar /> 30-12-2022</h3>
                        </div>
                    </div>
            </div>
                    
        </section>
        <section>
            <div className='p-4 flex-shrink-0 column-width'>
            <div className="flex-col p-2 bg-white items-center">
                        <div className="flex justify-between">
                            <div className="flex">
                                <img className='rounded-full h-6 w-6 inline-block' src={yellowMan} alt="Client-img" />
                                <h5 className='ms-1'>Client Name</h5>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full h-6 w-6 inline-block' src={manImg} alt="" />
                                <h5 className='ms-1'>Sadik Istiak</h5>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-2'>
                            <div className='flex items-center'>
                            <FaBuffer /> <p>Lorem ipsum dolor sit amet curn...</p>
                            </div>
                            <div className='flex'>
                            <FaBuffer /> <p className='bg-slate-200'> 1/2</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                        <img className='rounded-full h-6 w-6 inline-block' src={womanImg} alt="" /> 
                        <img className='rounded-full h-6 w-6 inline-block' src={pinkMan} alt="" />
                        <h3 className='bg-slate-200'>12+</h3>
                        <h3 className='flex items-center'><FaChalkboardTeacher /> 15</h3>
                        <h3 className='flex items-center'><FaLink /> 25</h3>
                        <h3 className='flex items-center'><FaCalendar /> 30-12-2022</h3>
                        </div>
                    </div>
            </div>
                    
        </section>
        </div>
        

        {/* Column 4 */}
        <div>
        <section>
            <h3 className='p-4 font-bold'>col 4</h3>
            <div className='p-4 flex-shrink-0 column-width'>
            <div className="flex-col p-2 bg-white items-center">
                        <div className="flex justify-between">
                            <div className="flex">
                                <img className='rounded-full h-6 w-6 inline-block' src={yellowMan} alt="Client-img" />
                                <h5 className='ms-1'>Client Name</h5>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full h-6 w-6 inline-block' src={manImg} alt="" />
                                <h5 className='ms-1'>Sadik Istiak</h5>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-2'>
                            <div className='flex items-center'>
                            <FaBuffer /> <p>Lorem ipsum dolor sit amet curn...</p>
                            </div>
                            <div className='flex items-center'>
                            <FaBuffer /> <p className='bg-slate-200'> 1/2</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                        <img className='rounded-full h-6 w-6 inline-block' src={womanImg} alt="" /> 
                        <img className='rounded-full h-6 w-6 inline-block' src={pinkMan} alt="" />
                        <h3 className='bg-slate-200'>12+</h3>
                        <h3 className='flex items-center'><FaChalkboardTeacher /> 15</h3>
                        <h3 className='flex items-center'><FaLink /> 25</h3>
                        <h3 className='flex items-center'><FaCalendar /> 30-12-2022</h3>
                        </div>
                    </div>
            </div>
                    
        </section>
        <section>
            <div className='p-4 flex-shrink-0 column-width'>
            <div className="flex-col p-2 bg-white items-center">
                        <div className="flex justify-between">
                            <div className="flex">
                                <img className='rounded-full h-6 w-6 inline-block' src={yellowMan} alt="Client-img" />
                                <h5 className='ms-1'>Client Name</h5>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full h-6 w-6 inline-block' src={manImg} alt="" />
                                <h5 className='ms-1'>Sadik Istiak</h5>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-2'>
                            <div className='flex items-center'>
                            <FaBuffer /> <p>Lorem ipsum dolor sit amet curn...</p>
                            </div>
                            <div className='flex items-center'>
                            <FaBuffer /> <p className='bg-slate-200'> 1/2</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                        <img className='rounded-full h-6 w-6 inline-block' src={womanImg} alt="" /> 
                        <img className='rounded-full h-6 w-6 inline-block' src={pinkMan} alt="" />
                        <h3 className='bg-slate-200'>12+</h3>
                        <h3 className='flex items-center'><FaChalkboardTeacher /> 15</h3>
                        <h3 className='flex items-center'><FaLink /> 25</h3>
                        <h3 className='flex items-center'><FaCalendar /> 30-12-2022</h3>
                        </div>
                    </div>
            </div>
                    
        </section>
        </div>
        

        {/* Column 5 */}
        <div>
        <section>
            <h3 className='p-4 font-bold'>col 5</h3>
            <div className='p-4 flex-shrink-0 column-width'>
            <div className="flex-col p-2 bg-white items-center">
                        <div className="flex justify-between">
                            <div className="flex">
                                <img className='rounded-full h-6 w-6 inline-block' src={yellowMan} alt="Client-img" />
                                <h5 className='ms-1'>Client Name</h5>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full h-6 w-6 inline-block' src={manImg} alt="" />
                                <h5 className='ms-1'>Sadik Istiak</h5>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-2'>
                            <div className='flex items-center'>
                            <FaBuffer /> <p>Lorem ipsum dolor sit amet curn...</p>
                            </div>
                            <div className='flex items-center'>
                            <FaBuffer /> <p className='bg-slate-200'> 1/2</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                        <img className='rounded-full h-6 w-6 inline-block' src={womanImg} alt="" /> 
                        <img className='rounded-full h-6 w-6 inline-block' src={pinkMan} alt="" />
                        <h3 className='bg-slate-200'>12+</h3>
                        <h3 className='flex items-center'><FaChalkboardTeacher /> 15</h3>
                        <h3 className='flex items-center'><FaLink /> 25</h3>
                        <h3 className='flex items-center'><FaCalendar /> 30-12-2022</h3>
                        </div>
                    </div>
            </div>
                    
        </section>
        <section>
            <div className='p-4 flex-shrink-0 column-width'>
            <div className="flex-col p-2 bg-white items-center">
                        <div className="flex justify-between">
                            <div className="flex">
                                <img className='rounded-full h-6 w-6 inline-block' src={yellowMan} alt="Client-img" />
                                <h5 className='ms-1'>Client Name</h5>
                            </div>
                            <div className='flex'>
                                <img className='rounded-full h-6 w-6 inline-block' src={manImg} alt="" />
                                <h5 className='ms-1'>Sadik Istiak</h5>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-2'>
                            <div className='flex items-center'>
                            <FaBuffer /> <p>Lorem ipsum dolor sit amet curn...</p>
                            </div>
                            <div className='flex items-center'>
                                <FaBuffer /> <p className='bg-slate-200'> 1/2</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                        <img className='rounded-full h-6 w-6 inline-block' src={womanImg} alt="" /> 
                        <img className='rounded-full h-6 w-6 inline-block' src={pinkMan} alt="" />
                        <h3 className='bg-slate-200'>12+</h3>
                        <h3 className='flex items-center'><FaChalkboardTeacher /> 15</h3>
                        <h3 className='flex items-center'><FaLink /> 25</h3>
                        <h3 className='flex items-center'><FaCalendar /> 30-12-2022</h3>
                        </div>
                    </div>
            </div>
                    
        </section>
        </div>
        {/* <FileCard /> */}
        
        </div>
    );
};

export default Home;