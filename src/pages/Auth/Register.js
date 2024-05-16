import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import {toast} from 'react-toastify'
const Register = () => {
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const[address,setAddress]=useState("");
    const[number,setNumber]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name,email,password,number,address);
        toast.success('Regsiter successfully')
    }
  return (
    <Layout title={"registration"}>
    <div className='register'>
        <h1>Registration Page</h1>
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <input type="text"
                 className="form-control" 
                 id="exampleInputName"
                  placeholder='Enter your name' 
                  value={name} 
                  onChange={(e)=>setName(e.target.value)}
                  required
                  />
                </div>
                <div class="mb-3">
                    <input type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder='Enter your password' 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    />
                    </div>


                    <div class="mb-3">
                <input type="Email" 
                className="form-control" 
                id="exampleInputEmail1"
                 placeholder='Enter your Email' 
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                 
                 required/>
                </div>


                <div class="mb-3">
                <input type="text" 
                className="form-control"
                 id="exampleInputNumber"
                  placeholder='Enter number'
                   value={number}
                   onChange={(e)=>setNumber(e.target.value)}
                   required
                   />
                </div>


                <div class="mb-3">
                <input type="text" 
                className="form-control"
                 id="exampleInputAddress" 
                 placeholder='Enter your address'
                  value={address}
                  onChange={(e)=>setAddress(e.target.value)}
                  required
                  />
                </div>


                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
    </Layout>
  )
}

export default Register
