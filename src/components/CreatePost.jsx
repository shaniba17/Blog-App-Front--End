import axios from 'axios'
import React, { useState } from 'react'

const CreatePost = () => {
    const [token,settoken]=useState(sessionStorage.getItem("token"))
    const [input,setinput]=useState(
        {
            "Message":"",
            "userId":sessionStorage.getItem("userId")
        }
    )
    const inputHandler=(event)=>{
        setinput({...input,[event.target.name]:[event.target.value]})
    }
    const readValue=()=>{
        console.log(input)
        console.log(token)
        axios.post("http://localhost:3030create",{
            input,headers:{"token":token,"Content-Type":"application/json"}}).then(
                (response)=>{
                    if (response.data.status=="success") {
                        alert("Posted Successfully")
                    } else {
                        alert("Something went wrong!!!")
                    }
                }
            ).catch(
                (error)=>
                {
                    console.log(error)
                }
            )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Post a Message</label>
                            <textarea name="Message" value={input.Message} onChange={inputHandler} id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost