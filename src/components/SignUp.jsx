import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [input,setinput]=new useState({
        "name":"",
        "phoneno":"",
        "email":"",
        "password":"",
        "cnfpass":""
    })
    const inputHandler=(event)=>
    {
        setinput({...input,[event.target.name]:[event.target.value]})
    }
    const readValue=()=>
    {
        console.log(input)
        if (input.password==input.cnfpass) {
            console.log(input)
            let newinput={"name":input.name,
        "phoneno":input.phoneno,
        "email":input.email,
        "password":input.password}
        axios.post("http://localhost:3030/signup",newinput).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("registered successfully")
                    setinput(
                        {
                            "name":"",
                            "phoneno":"",
                            "email":"",
                            "password":"",
                            "cnfpass":""
                        
                    }
                )
                    
                } else {
                    alert("emailid already exist")
                    setinput(
                        {
                            "name":"",
                            "phoneno":"",
                            "email":"",
                            "password":"",
                            "cnfpass":""
                        
                    }
                )
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
        } 
        else {
            alert("password and confirm password doesn't match")
        }
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>  
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Phone no</label>  
                        <input type="text" className="form-control" name='phoneno' value={input.phoneno} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Email id</label>  
                        <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Password</label>  
                        <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Confirm Password</label>  
                        <input type="password" className="form-control" name='cnfpass' value={input.cnfpass} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>Register</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <a href="" className="btn btn-primary">Back to Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp