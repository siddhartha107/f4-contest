import React,{useState} from "react"
import {NavLink, useNavigate} from "react-router-dom"


const Login=()=>{

    const [user, setUser]= useState({
        username:"",
        password:""
    })

    let {username,password}=user
    let navigate= useNavigate()

    let [error, setError]= useState("")



    function authenticateUser(e){
        e.preventDefault()

        if(!username || !password){
            setError("Please fill all the fields")
            return;
        }

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            username:`${username}`,
            password:`${password}`,
            })
            })
            .then(res => res.json())
            .then((res)=>{
                if(!res.message){
                    setError("")
                    console.log(res.id)
                    localStorage.setItem("id",res.id)
                    navigate("/profile")
                } else{
                setError(res.message)
                }
            }).catch((res)=>setError(res))
    }

    return(
        <div className="main">
        <div className="login">
            <form onSubmit={authenticateUser} className="form">
                <p>Welcome back! 👋</p>
                <p className="sign">Sign in to your account</p>
                <div>
                    <label>Your email</label>
                    <br></br>
                <input type="text" onChange={(e)=>setUser({...user,username:e.target.value})} value={username}/>
                </div>
                <div>
                    <label>Password</label>
                    <br></br>
                <input type="password"  onChange={(e)=>setUser({...user,password:e.target.value})} value={password}/>
                </div>
                <div>
                <button type="submit">CONTINUE</button>
                </div>
                <div className="forget">
                <NavLink to={"/"}>Forget your password?</NavLink>
                </div>  
                {error && <p className="error">{error}</p>}
            </form>      
        </div>
        <div className="down">
             <p>Don’t have an account? <NavLink>Sign up</NavLink></p>
                </div>
        </div>
    )
}

export default Login