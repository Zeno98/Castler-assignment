import axios from 'axios';
import React from 'react'
import SinglePage from "./SinglePage";
import "./User.css";
const User = ({
    
}) => {

    let[data,setData]=React.useState();
    let [input,setInput]=React.useState();
    let[click,setClick]=React.useState(false);

    let fetchApi= async()=>{
        let{data}=await axios.get(`https://reqres.in/api/users/${input}`);
        setData(data.data)
       
    }

    let handleChange=(e)=>{
        setInput(e.target.value);
        if(input===""){
            setClick(false);
        }
       
    }

    let handleClick=()=>{
         if(input==NaN){
            console.log("enter only number")
        }
        
        setClick(true);
       
    }

    React.useEffect(()=>{fetchApi()},[click,input])
  return (
    <div>
        <input 
        className='search'
         type="number"
         min={1}
         max={12}
         value={input} 
         placeholder="Search User Id"
         onChange={handleChange}
          />
        <button
        className="btn"
         onClick={handleClick}
         disabled={input ? false : true}
         >submit
            </button>
    
        {
            input<0 || input>12 ?(  <div className='alert'>**Please enter valid Id</div>):( click && input>=1 && input<=12 ?  (<div><br/><h1>Profile Details</h1><SinglePage data={data}/></div>): (
                <div className='alert'><p>**Only Numeric values Enter id between 1 and 12</p>
                <p>E.g, 1 </p></div>))
           
        }
       
    </div>
  )
}

export default User;