import {React,useState} from "react";
import Navbarcomp from "../components/Navbarcomp";

import FixedFooter from "../components/FixedFooter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleSubmit = event => {
        event.preventDefault();
        let isValid = true;

        if (!email) {
            setEmailError("Email is required");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!password) {
            setPasswordError("Password is required");
            isValid = false;
        } else {
            setPasswordError("");
        }

        if (isValid) {
            // triggerbackend
        }
    };
    return  (
        <div>
            <Navbarcomp/>

        <div style= {{paddingTop:'50px'}} className="d-flex justify-content-center">

        <form onSubmit={handleSubmit}>

            <h4 className="text-center">Login</h4>

            <div className="form-group" style = {{paddingTop:'10px'}}>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter email"
                       onChange={e => setEmail(e.target.value)}/>
                <small id="emailHelp" className="form-text text-danger">
                    {emailError}
                </small>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <div className="input-group">
                <input type={showPassword ? "text" : "password"} className="form-control border-right-0" id="exampleInputPassword1"
                       placeholder="Password"
                       onChange={e => setPassword(e.target.value)}/>
                    <div className="input-group-append">
            <span onClick={toggleShowPassword} className="input-group-text bg-transparent  border-left-0">
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </span>
                    </div>
                </div>
                <small id="passwordHelp" className="form-text text-danger">
                    {passwordError}
                </small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
         </div>
            <FixedFooter/>
        </div>


    )
}