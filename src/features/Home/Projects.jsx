import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { TailSpin } from "react-loader-spinner";

const Projects = () => {

  //  const api_url = process.env.REACT_APP_API_URL;

    const[projects,setProjects] = useState([])
   
    useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await axios.get('http://localhost:3000/projects');
              setProjects(res.data);
              console.log(res)
          } catch (error) {
            
          }
      };
  
      fetchData();
  }, []);
  
  




  return (
    <div>  {/* container for project section */}
    <div className=''>Projects File 'in src/features/home/projects.jsx'</div> {/* project section headingg  */}
      
  
    {
      projects.length === 0 ? (
      <TailSpin
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    ) :
    <div className='grid grid-cols-3 gap-4'>  {/*project card container this container has grid layout made using tailwind css*/}
       
    {projects.map((project)=>(
       
        <div>    {/* card for each project  */}
          <div>{project.name}</div>
          <div>{project.description}</div>
          <div className='flex'>{project.skills.map((skill)=>(<div>{skill}</div>))}</div>  {/* All skills used in z project */}
        </div>
    ))}
    </div>
    }
    </div>
  )
}

export default Projects