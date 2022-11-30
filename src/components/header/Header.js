import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import {useState} from "react";

export default function Header({onLoginClick, userData, isLoggedIn }) {
    const [email, setEmail] = useState('Sincere@april.biz');


    function onSubmitClick() {
        onLoginClick(email);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Welcom to our blog
                    </Typography>

                    {!isLoggedIn && (<div>
                        <input style={{"backgroundColor": "white"}} className="input" placeholder="write email"
                               value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Button style={{"backgroundColor": "white"}} variant="outlined" sx={{mr: 2, ml: 2}}
                                onClick={onSubmitClick}>Outlined</Button>
                    </div>)}

                    {isLoggedIn && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle />
                                {userData.name}
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}