import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


const createUser = (e) => {
    e.preventDefault();

    const newUser = { firstName, lastName, email, password };
    console.log("Welcome", newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setHasBeenSubmitted( true );
};

return(
    <div>

    <form onSubmit = { createUser }>
        <div>
            <label>First Name:</label>
            <input type = "text" value = {firstName} onChange ={(e) => setFirstName(e.target.value)}/>
        </div>
        {
            firstName && firstName.length < 3 ?
            <h3>first name must be greater than 2 characters!</h3> :
            <h3></h3> 
        }
        <div>
            <label>Last Name:</label>
            <input type = "text" value = {lastName} onChange ={(e) => setLastName(e.target.value)}/>
        </div>
        {
            lastName && lastName.length < 3 ?
            <h3>last name must be greater than 2 characters!</h3> :
            <h3></h3> 
        }
        <div>
            <label>Email:</label>
            <input type = "text" value = {email} onChange ={(e) => setEmail(e.target.value)}/>
        </div>
        {
            email && email.length < 6 ?
            <h3>email must be greater than 5 characters!</h3> :
            <h3></h3> 
        }
        <div>
            <label>Password:</label>
            <input type = "password" value = {password} onChange ={(e) => setPassword(e.target.value)}/>
        </div>
        {
            password && password.length < 9 ?
            <h3>Password must be greater than 8 characters!</h3> :
            <h3></h3> 
        }
        <div>
            <label>Confirm Password:</label>
            <input type = "password" value = {confirmPassword} onChange ={(e) => setConfirmPassword(e.target.value)}/>
        </div>
        {
            password != confirmPassword ?
            <h3>Passwords must match</h3> :
            <h3></h3> 
        }
        <input type="submit" value = "Create User"/>
    </form>
    <div>
        <h1>Your Form Data!</h1>
        <p>
            <label>First Name: </label>{ firstName }
        </p>
        <p>
            <label>Last Name: </label>{ lastName }
        </p>
        <p>
            <label>Email: </label>{ email }
        </p>
        <p>
            <label>Password: </label>{ password }
        </p>
        <p>
            <label>Confirm Password: </label>{ confirmPassword }
        </p>
    </div>
    </div>
    
    
);
};

export default Form;