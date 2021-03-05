import React, { useState, useEffect } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import LogoTheBridge from '../../assets/logo-cuadrado.svg'
import './styles.css'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        boxShadow: 'none',
    },
    toolBar: {
        backgroundColor: '#FDFDFF',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 0,
        minHeight: '72px',
        maxHeight: '72px'
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        width: '130px',
        margin: '10px 0px 10px 142px',
        [theme.breakpoints.up('lg')]: {
            width: '130px',
            margin: '10px 0px 10px 142px'
        },
        [theme.breakpoints.up('md')]: {
            width: '130px',
            margin: '10px 0px 10px 119px'
        }
    }

}));

export default function NavBar(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        let token = localStorage.getItem('token');
        if(token!==null) setLoggedIn(true);
    }, []);
    const classes = useStyles();

    const preventDefault = (event) => event.preventDefault();
    const logout = ()=>{
        localStorage.removeItem('token')
        setLoggedIn(false)
    }
    return (
        <div>
            <AppBar className={classes.appBar} position="fixed" elevation={1}>
                <Toolbar className={classes.toolBar}>
                    <div className="logo-the-bridge">
                        <img src={LogoTheBridge} alt="logo-the-bridge" />
                    </div>
                    <div className="nav-desktop">
                        <Link to="/Dashboard" className="menu-link"><span className="menu-highlight">Dashboard</span></Link>
                        <Link to="/Nosotras" className="menu-link"><span className="menu-highlight">Nosotras</span></Link>
                        <Link to="/The Bridge" className="menu-link"><span className="menu-highlight">The Bridge</span></Link>
                    </div>
                    <div className="nav-tablet">
                        <MobileMenu />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}