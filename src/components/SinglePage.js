import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Img from './Img';
import Name from './Name';
import Email from './Email';
import Description from './Description';
import "./SinglePage.css"

const SinglePage = ({
  data,
  
}) => {
  

  let handleClose=()=>{
    window.reload();
  }


  console.log(data)
  return (
    <BrowserRouter>
      <div className='wrapper'>

        <div className='sidebar'>

          <ul >
          
            <li  className='close'>
          <a className="nav-link active" aria-current="page" href="#">User ID {data.id}</a>
            </li>
            <li className='items'>

            <Link to="/name">  <a className="nav-link active" aria-current="page" href="#">
                <i class="fa-solid fa-user mr-3 text-primary fas"> </i>Name</a>
                </Link>
            </li>
            <li className='items'>
            <Link to="/img">   <a className="nav-link" href="#"><i class="fa-solid fa-user fas">   </i>Photo</a></Link>
            </li>
            <li className='items'>
             <Link to="/email"> <a className="nav-link" href="#"><i class="fa-solid fa-envelope fas">   </i>E-mail</a></Link>
            </li>
            <li className='items'>
            <Link to="/description"> <a className="nav-link" href="#"><i class="fa-solid fa-user fas"></i> About</a></Link>
            </li>

            <li className='close' >
            <Link to="/" onClick={handleClose} ><a className="nav-link active" aria-current="page" href="/">
            <i class="fa-solid fa-xmark fas"></i>Close</a></Link>
            </li>
          </ul>
        </div>


        <div className='main_content'>
            <div className='header'>
                <div className='info'>
        <Routes>
            <Route path='/img' element={<Img data={data}/>} />
            <Route path='/name' element={<Name data={data}/>} />
            <Route path='/email' element={<Email data={data}/>} />
            <Route path='/description' element={<Description/>} />

        </Routes>
          </div>

        </div>


        
      </div>
      </div>
    </BrowserRouter>

  )
}

export default SinglePage;