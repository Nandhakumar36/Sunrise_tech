import profile from './images/image/logo.png'
import logout from './images/image/logout.png'
import './Home.css'
import {useState, useEffect} from 'react'
import { addFile } from './services/auth'
import {fetchPosts} from './services/auth/index'
import { forEach } from 'lodash'
import {Button} from "@mui/material"
import {Link} from "react-router-dom"
import {clear} from './services/local-storage/index'
import mern from './images/image/mern.png'
import mern_2 from './images/image/mern_2.png'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

// import {imageFolder} from '../server/images'
function Home() {
    const user =  localStorage.getItem('user');

    const [uploadFiles, setUploadFiles] = useState([]);

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setUploadFiles(e.target.files)
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const submitForm = async (event) => {
        console.log(event)
        event.preventDefault();

        const dataArray = new FormData();
        Array.from(uploadFiles).map(uploadFile=>    
        dataArray.append("images", uploadFile)
        )
       await  addFile(dataArray)
        // history.push("/candidates")
    };

    // const [images, setImages]= useState([])
    // console.log(images)
    // useEffect(async () => {
    //     // const img = await  imageFiles()
    //     setImages(await getJobs())  
    //     // console.log(img)
    // }, [])
    const [clients, setClients] = useState([]);
    useEffect(async () => {
      setClients(await fetchPosts());
    }, []);
    console.log(forEach(clients.data))

  
    return (
        <div className="home">
            
            <header>
                <div className='home_header'>
                    <img src={profile} alt="Logo"/>
                    <h1 className='home_title'>MERN - Assessment</h1>
                    <Button > <img src={logout} alt="Logo"  onClick={() => clear("user")} ></img></Button>
                </div>
            </header>
            
            <main>
                <div className='home_main'>
                    <img src={mern} alt="Logo"/>
                    <img src={mern_2} alt="Logo"/>
                </div>
            </main>

            <footer>
                    <div className='home_footer'>
                        {/* <DriveFolderUploadOutlinedIcon onClick={() => handleFile}/> */}
                        <form onSubmit={submitForm}> 
                                <div className='input'>
                                {/* <img src={logout} alt="profile" className="image"/> */}
                                <img src={file} className="selectedimage" />
                                {/* <DriveFolderUploadOutlinedIcon /> */}
                                <input type="file"  id='file' className='file' onChange={handleChange}></input>
                                
                                <button type='submit'>Upload</button>
                                </div>
                        </form>
                        <h3>Choose a image to upload</h3>
                    </div>
            </footer>    
                
                
        </div>
    )
}

export default Home


// function Home() {
//     const [file, setFile] = useState();
//     function handleChange(e) {
//         console.log(e.target.files);
//         setFile(URL.createObjectURL(e.target.files[0]));
//     }
  
//     return (
        
            
//         <div className="header">


//         <div className ="header_logo header_flex">
//             <Button  className="btn"><Link className="login" to="/signin">
//             <img src={logout} alt="profile"/>
//             </Link></Button>
//             <div className="header_logo header_flex">
//                 <img src={profile} alt="profile" className="profile"/>
//             </div>
//         </div>
//             <input type="file" onChange={handleChange} />
//             <img src={file} className="selectedimage" />
            
            
        
//         </div>
//     );
// }
