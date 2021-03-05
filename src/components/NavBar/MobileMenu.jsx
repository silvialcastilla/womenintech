import React, { useState, useEffect } from 'react';
import Theme from '../../styles/Theme'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
        fontSize: '100px',
        fontFamily: 'Inter'
    },
    fullList: {
        width: 'auto',
    },
    links: {
        fontSize: '120px'
    },
}));

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: props.open,
  });
  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
      let token = localStorage.getItem('token');
      if(token!==null) setLoggedIn(true);
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logout = ()=>{
    localStorage.removeItem('token')
    setLoggedIn(false)
  }
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={styles.div}
    >
      <List style={styles.list}>
        <CloseIcon style={styles.closeIcon} onClick={toggleDrawer('right', false)}/>
        {[
          {text:'Dashboard', url:'/Dashboard'}, 
          {text:'Nosotras', url:'/Nosotras'}, 
          {text: 'The Bridge', url:'https://thebridge.tech/'}
        ].map((item, index) => (
            <a href={item.url} style={styles.link} key={index} target={item.text === 'The Bridge' ? '_blank': ''}>
              <ListItem button key={item.text}>
                <ListItemText primary={item.text} style={styles.listItem}/>
              </ListItem>
            </a>
        ))}
      </List>
    </div>
  );
  const styles = {
    div: {
      background: '#FDFDFF'
    },
    list:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      backgroundColor: '#FDFDFF'
    },
    listItem:{
      textAlign: 'right',
      fontFamily: `${Theme.secondaryFont}`,
      fontSize: '12px',
      fontWeight: '200',
      color: '#10182B',
    },
    closeIcon:{
      display: 'flex', 
      alignSelf: 'flex-end', 
      margin: '15px 15px 20px 0px',
      color: 'rgba(140, 5, 130, 0.3)'
    },
    link: {
      textDecoration: 'none',
    }
  }

  const menuMobile = () =>{
      return ( 
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" 
        onClick={toggleDrawer('right', true)}
        >
            <MenuIcon style={{color: '#10182B', fontSize: '150%'}}/>
        </IconButton> 
        )
  }

  return (
        <React.Fragment key={'right'}>
          {menuMobile()}
          <Drawer 
          anchor={'right'} 
          open={state['right']} 
          // onClose={toggleDrawer('right', false)}
          variant= 'temporary'
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
  );
}