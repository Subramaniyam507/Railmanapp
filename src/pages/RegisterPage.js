import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Navbarcomp from "../components/Navbarcomp";
import FixedFooter from "../components/FixedFooter";



export default function RegisterPage(){
    const [name, setName] = useState('');
    const[nameError,setNameError] = useState('');
    const [role, setRole] = useState('');
    const[roleError,setRoleError] = useState('');
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [rePasswordError, setRePasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const toggleShowRePassword = () => {
        setShowRePassword(!showRePassword);
    }

    let number  = 0
    function handleSubmit(event) {

        event.preventDefault();
        let isValid = true;
        if (!name) {


            setNameError("Name is required ");
            isValid = false;
         } else if(!validateName(name)){
            isValid =false;
        }

        if (!role) {
            setRoleError("Role is required");
            isValid = false;
        }

        if (!email) {
            setEmailError("Email is required");
            isValid = false;
        } else if (!validateEmail(email)) {
            isValid = false;
        }

        if (!password) {
            number = number + 1
            setPasswordError("Password is required");
            isValid = false;
        } else if (!validatePassword(password)) {
            isValid = false;
        }

        if (!rePassword) {
            setRePasswordError("Re-enter password is required");
            isValid = false;
        } else if (!validateRePassword(rePassword)) {
            isValid = false;
        }

        if (isValid) {
            // triggerbackend
        }
    }


    function validateName(name){
        if (name.length === 0) {
            number = number + 1
            setNameError("Name is required validate ")
            return false

        }
        setNameError("")
        return true
    }
    function validateRole(role){
        const arr = ['Customer','Restaurant Personnel']
        if (arr.indexOf(role)=== -1){
             setRoleError("Role is empty")
            return false
        }
        setRoleError("")
        return true
    }
    function validateRePassword(rePassword) {
        if (rePassword !== password) {
            setRePasswordError("Passwords do not match");
            return false;
        }
        setRePasswordError("");
        return true;
    }

    function validatePassword(password) {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-+])[a-zA-Z\d!@#$%^&*()-+]{6,}$/;
        if (!pattern.test(password)) {
            setPasswordError("Password must contain at least 6 characters, one uppercase character, one lowercase character, one digit, and one special character (!@#$%^&*()-+)");
            return false;
        }
        setPasswordError("");
        return true;
    }

    function validateEmail(email) {
        const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!pattern.test(email)) {
            setEmailError("Invalid email address");
            return false;
        }
        setEmailError("");
        return true;
    }

    return(
        <div>
            <Navbarcomp/>
        <div style= {{height: "80vh" ,overflow: "auto"}} className="d-flex flex-column justify-content-center ">
            <div className="d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit}>

                <h4 className="text-center">Register</h4>
                <div className="form-group" style = {{paddingTop:'10px'}}>
                    <label htmlFor="exampleName">Name</label>

                    <input type="text" className="form-control" id="exampleName" placeholder="Name"  aria-describedby="nameHelp"
                           value={name}
                    onChange={(event)=>{
                        setName(event.target.value);
                        validateName(event.target.value);
                    }
                    }
                    />
                    {nameError && <small id="namHelp" className="form-text text-danger">
                        {nameError}
                    </small>}
                </div>

                <div className="form-group" >
                    <label htmlFor="InputRole">Role</label>
                    <select
                        class="form-control"
                        id="role"
                        value={role}
                        aria-describedby="roleHelp"
                        onChange={(event)=>{
                            setRole(event.target.value)
                            validateRole(event.target.value)
                        }} >
                        <option value="">Select a role</option>
                        <option value="Customer">Customer</option>
                        <option value="Restaurant Personnel">Restaurant Personnel</option>
                    </select>
                    {roleError && <small id="roleHelp" className="form-text text-danger">
                        {roleError}
                    </small>}
                </div>



                <div className="form-group">
                    <label htmlFor="InputEmail1">Email address</label>
                    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"
                           value={email}
                           onChange={(event) => {
                               setEmail(event.target.value);
                               validateEmail(event.target.value);
                           }}/>
                    {emailError && (
                        <small id="emailHelp" className="form-text text-danger">
                            {emailError}
                        </small>
                    )}
                </div>


                <div className="form-group">
                    <label htmlFor="InputPassword1">Password</label>
                    <div className="input-group">
                    <input type={showPassword ? "text" : "password"} className="form-control  border-right-0" id="InputPassword1" placeholder="Password"
                           value={password}
                           onChange={(event) => {
                               setPassword(event.target.value);
                               validatePassword(event.target.value);
                           }}/>
                        <div className="input-group-append">
            <span onClick={toggleShowPassword} className="input-group-text bg-transparent  border-left-0">
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </span>
                        </div>
                    </div>
                    <small id="passwordHelp" className="form-text text-muted">



                        {passwordError && (
                            <small id="passwordHelp" className="form-text text-danger">
                                {passwordError}
                            </small>
                        )}
                        Password must contain at least 6 characters, one uppercase character, one lowercase character, one digit, and one special character (!@#$%^&*()-+).
                        </small>

                </div>

                <div className="form-group">
                    <label htmlFor="ReInputPassword1">Re-enter Password</label>
                    <div className="input-group">
                    <input  type={showRePassword ? "text" : "password"} className="form-control  border-right-0" id="ReInputPassword1" placeholder="Re-enter Password"
                           value={rePassword}
                           onChange={(event) => {
                               setRePassword(event.target.value);
                               validateRePassword(event.target.value);
                           }} />
                        <div className="input-group-append">
            <span onClick={toggleShowRePassword} className="input-group-text bg-transparent  border-left-0">
                <FontAwesomeIcon icon={showRePassword ? faEye : faEyeSlash} />
            </span>
                        </div>
                    </div>

                    {rePasswordError && (
                        <small id="rePasswordHelp" className="form-text text-danger">
                            {rePasswordError}
                        </small>
                    )}
                </div>

                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
            </div>
            <FixedFooter/>
        </div>

    )
}