import { useState } from "react";
import './App.css';




function App() {
 
    const [email,setEmail] = useState('');
    const [emailError,setEmailError] = useState(false); 
    const [password,setPassword] = useState('');
    const [passwordError,setpasswordError] = useState(false); 
    const [products,setproducts] = useState([]);                

    

    


    const handleclick = (event)=> {
        let cemail = email;
        let cpassword =password;
        if(cemail) {
            setEmailError(false);
        }else {
            setEmailError(true);

        }
        
        if(cpassword) {
            setpasswordError(false);
        }else {
            setpasswordError(true);

        }
        
    }
    const handleInputChange=(event)=> {
        let id = event.target.id;
        let value = event.target.value;

        if(id == "email"){
            if(value.length>0) {
                setEmail(value); 
                setEmailError(false);
            }
            else {
                setEmailError(true);
            }
        }

        if(id == "password"){
            if(value.length>0) {
                setPassword(value); 
                setpasswordError(false);
            }
            else {
                setpasswordError(true);
            }
        }

        

    }






    return (
        <>
        <div className="regi-sum">
            <h1 className="regi-form">Registration Form</h1>
            <form>
            <div className="emailpass">
                <span>Email</span>
                <input type="text" id="email"  value={email} placeholder="Enter your email" className="input" onChange={handleInputChange}  />
                {emailError ? <label style={{color:"red"}}>Email is not required</label>:""}
            </div>
            <div className="emailpass">
                <span>Password</span>
                <input type="password" id="password" value={password} placeholder="Enter your password" className="input-2" onChange={handleInputChange} />
                {passwordError ? <label style={{color:"red"}}>password is not required</label>:""}
            </div>

            <input type="button" className="btns" onClick={handleclick} value="submit" />
            </form>
            
        </div>
       

        </>
        
       
    
    );
}


export default App;