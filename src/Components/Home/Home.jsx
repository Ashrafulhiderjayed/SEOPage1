import yellowMan from '../../assets/images/yellowMan.jpg'
import manImg from '../../assets/images/manImg.jpg'
import womanImg from '../../assets/images/womanImg.jpg'
import pinkMan from '../../assets/images/pinkMan.jpg'
import { FaBuffer, FaCalendar, FaChalkboardTeacher, FaLink } from 'react-icons/fa';
import './Home.css'
import { useState } from 'react';


const Home = () => {
    const [fileCount, setFileCount] = useState(0);

    const [incomplete ,setIncomplete]=useState([{

        attachment:1,
        id:1
    
    },
    {
        attachment:2,
        id:2
    
    },
    {
        attachment:14,
        id:3
    
    }
    
    ])
    
    const handleFileUpload = (event,refId) => {
        // alert("hello world")
        const files = event.target.files;
        // setFileCount(files.length);
        console.log(refId)
        const rest = incomplete.filter(inc=>inc.id!==refId)
       
        if(refId){
        setIncomplete([...incomplete,{id:refId,attachment:files.length}])
    
    
        }
       
      };

    const Card = ({handleFileUpload,data})=>{
        return <>
            <section className='bg-slate-200'>
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
                            <h3 className='flex items-center'>  <input type="file" style={{display: 'none'}} multiple onChange={(e)=>handleFileUpload(e,data.id)}/> <FaLink /> {data?.attachment}</h3>
                            <h3 className='flex items-center'><FaCalendar /> 30-12-2022</h3>
                            </div>
                        </div>
                </div>
                        
            </section>
           
            </>
    }





    return (
        <div className="flex overflow-x-auto gap-2">
        {/* Column 1 */}
        <div className='flex-col'>
        <div className='flex justify-between bg-slate-200'><h3 className='p-4 font-bold'>incomplete</h3> <h3 className='p-4 font-bold'>0</h3></div>
            
    {
        incomplete.map((inc,index)=>{
            return  <Card key={index} handleFileUpload={handleFileUpload} data= {inc} />
        })
    }
      
        </div>
        {/* <div className="flex-shrink-0 w-auto p-4">Column 1</div> */}

        {/* 
        Column 2 =============================
        */}
        <div className='flex-col'>
        <h3 className='p-4 font-bold bg-slate-200'>To Do</h3>


        <Card handleFileUpload={handleFileUpload} />
        <Card handleFileUpload={handleFileUpload} />
        <Card handleFileUpload={handleFileUpload} />       
        </div>
        

        {/* Column 3 */}
        <div className='flex-col'>
        <section className='bg-slate-200'>
            <div className='flex justify-between'><h3 className='p-4 font-bold'>Under Review</h3> <h3 className='p-4 font-bold'>0</h3></div>
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
        <section className='bg-slate-200'>
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
        <section className='bg-slate-200'>
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
        <section className='bg-slate-200'>
            <div className='flex justify-between'><h3 className='p-4 font-bold'>Under Review</h3> <h3 className='p-4 font-bold'>0</h3></div>            <div className='p-4 flex-shrink-0 column-width'>
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
        <section className='bg-slate-200'>
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
        <section className='bg-slate-200'>
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
        <section className='bg-slate-200'>
            <div className='flex justify-between'><h3 className='p-4 font-bold'>Completed</h3> <h3 className='p-4 font-bold'>0</h3></div>
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
        <section className='bg-slate-200'>
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
        <section className='bg-slate-200'>
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