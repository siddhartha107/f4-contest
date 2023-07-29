import React,{useEffect, useState} from "react"

const Profile=()=>{

    let [user,setUser]= useState({
        username:"",
        email:"",
        firstname:"",
        lastname:"",
        gender:"",
        age:"",
        height:"",
        weight:"",
        phone:"",
        birthDate:"",
        bloodGroup:"",
        university:"",
        address:"",
        city:"",
        state:"",
        pincode:"",
        image:""
    })
    let {username,email,firstname,lastname,gender,token,age,height,weight,phone,birthDate,bloodGroup,university,address,city,state,pincode,image}= user

    let id= localStorage.getItem("id");

    useEffect(()=>{

        // console.log(localStorage.getItem("id"))

        const response= fetch(`https://dummyjson.com/users/${id}`)
        response.then((data)=>{
            let result=data.json();
            result.then((finalData)=>{
                console.log(finalData);
                setUser({...user,username:finalData.username,email:finalData.email,firstname:finalData.firstName,lastname:finalData.lastName,gender:finalData.gender,image:finalData.image,age:finalData.age,height:finalData.height,weight:finalData.weight,phone:finalData.phone,birthDate:finalData.birthDate,bloodGroup:finalData.bloodGroup,university:finalData.university,address:finalData.address.address,city:finalData.address.city,state:finalData.address.state,pincode:finalData.address.postalCode})
                console.log(user)
            })
            result.catch((e)=>{
                alert("Something went wrong")
            })
        })
        response.catch((e)=>{
            alert("Something went wrong")
        })
    },[])
 
    return(
        <div>
             <h1>User Profile</h1>
        <div className="profile">
           
                <div className="left">
                    <ul className="first">
                        <li><b>Id:</b> {id}</li>
                        <li><b>First Name:</b> {firstname}</li>
                        <li><b>Last Name:</b> {lastname}</li>
                        <li><b>Email Id:</b> {email}</li>
                        <li><b>User Name:</b> {username}</li>
                        <li><b>Gender:</b> {gender}</li>
                        <li><b>Birth Date:</b> {birthDate}</li>
                        <li><b>Phone  No.:</b> {phone}</li>
                        <li><b>University:</b> {university}</li>
                        <li><b>Age:</b> {age}</li>
                        <li><b>Blood Group:</b> {bloodGroup}</li>
                        <li><b>Height:</b> {height}</li>
                        <li><b>Weight:</b> {weight}</li>
                        <li><b>Address:</b> {address} {city} {state} {pincode}</li>
                    </ul>
                    
                </div>
                
                <div className="right">
                    <img src={image} alt="userImage"/>
                    <p id="name">{firstname} {lastname}</p>
                </div>
            
        </div>
        </div>
    )
}

export default Profile ;