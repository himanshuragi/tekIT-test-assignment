import React, { useState } from 'react'

function Main() {
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [Data,setData]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://85.10.205.244:8082//login/tekit/tekit123").then(response => response.json()).then(data => setData(data))

        console.log(Data)
    }
    return (
        <div className='main'>
             <h1>Let's get started now!</h1>
     <h3>Or <a href='hyperlink'>create an account</a> if not registered yet.</h3>
     <div className='login_container'>
       <div className='icon_container'>
         <img src='https://i.pinimg.com/564x/8e/f8/55/8ef855f46702650f9c4f529d537d7d97.jpg' alt='logo'></img>
       </div>
       <form onSubmit={handleSubmit}>
       <label>Email: </label>   
            <input type="text" placeholder="Enter Email" name="Email" value={Email} onChange={ (e) => setEmail(e.target.value)} required/>  
            <label>Password: </label>   
            <input type="password" placeholder="Enter Password" name="password" value={Password} onChange={ (e) => setPassword(e.target.value)} required/>
            <button type="submit">Sign in</button>
            <a href="hyperlink">Forgot password? </a>
       </form>
     </div>
        </div>
    )
}

export default Main
