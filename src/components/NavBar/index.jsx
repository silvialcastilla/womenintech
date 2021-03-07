import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    const classes = useStyles();
    const [activeOne, setActiveOne] = useState(true)
    const [activeTwo, setActiveTwo] = useState(false)

    useEffect(() => {
  
    }, [])

    const handleClick = (num) => {
        if(num === 1){
            setActiveOne(true)
            setActiveTwo(false)
        }
        if(num === 2){
            setActiveTwo(true)
            setActiveOne(false)
        }
    }
    return (
        <div>
            <AppBar className={classes.appBar} position="fixed" elevation={1}>
                <Toolbar className={classes.toolBar}>
                    <div className="logo-the-bridge">
                        <img src={LogoTheBridge} alt="logo-the-bridge" />
                    </div>
                    <div className="nav-desktop">
                        <Link to="/" className={`menu-link ${activeOne && 'active'}`} onClick={()=> handleClick(1)}><span className="menu-highlight">Dashboard</span></Link>
                        <Link to="/nosotras" className={`menu-link ${activeTwo && 'active'}`} onClick={()=> handleClick(2)}><span className="menu-highlight">Nosotras</span></Link>
                        <a href="https://thebridge.tech/" target="_blank" className="menu-link"><span className="menu-highlight">The Bridge</span></a>
                    </div>
                    <div className="nav-tablet">
                        <MobileMenu />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}