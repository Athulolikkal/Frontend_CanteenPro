import  { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { canteenLogout } from '../../../redux/canteen/canteenTokensReducers';
import { canteenInfoClear } from '../../../redux/canteen/canteenInfoReducers';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(null);
  const dispatch=useDispatch()
  const navigate= useNavigate()
  
const homeclicks=()=>{
  toggleMenu()
  navigate('/canteen')
};



 const toggleMenu = () => {
   setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = (event:any) => {
    setIsProfileOpen(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setIsProfileOpen(null);
  };
  
  const logOut = ()=>{
     dispatch(canteenLogout())
     dispatch(canteenInfoClear())
     console.log('logOut clicked');
     navigate('/canteen/login')
  }

  return (
    <div>
      <AppBar position="static" sx={{background:'#4B6190'}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }}></div>
          <Avatar alt="Profile Image" src="" onClick={toggleProfile} />
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
        <List style={{ padding: '16px' }}>
          <ListItem button onClick={homeclicks}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleMenu}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" onClick={()=>console.log('profile clicked')} />
          </ListItem>
          <ListItem button onClick={toggleMenu}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button onClick={toggleMenu}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
        </List>
      </Drawer>
      <Menu
        anchorEl={isProfileOpen}
        open={Boolean(isProfileOpen)}
        onClose={handleCloseProfile}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
        <MenuItem onClick={logOut}>Log out</MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
