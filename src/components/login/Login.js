import './Login.css';

import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'


export default function Login({onLoginClick}) {
    const [email, setEmail] = useState('Sincere@april.biz');


    function onSubmitClick() {
        onLoginClick(email);
    }

    return (
        <div className='login-page'>
            <div className='login'>
                <div>
                    <TextField 
                    id="outlined-basic" 
                    label="email" 
                    variant="outlined"
                    placeholder="write email"
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />  
                </div>
                <div>
                    <Button
                    style={{ "backgroundColor": "white" }}
                    variant="outlined" sx={{ mr: 2, ml: 2 }}
                    onClick={onSubmitClick}
                >Login</Button> 
                </div>
            </div>
        </div>
    )
}