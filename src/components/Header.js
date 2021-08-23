import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';

function Header(){
    return(
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="Large" className="header__icon"/>
            </IconButton>
            <img className="header__logo" src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png" alt="Tinder logo"></img>
            <IconButton>
                <ForumIcon fontSize="Large" className="header__icon"/>
            </IconButton>
        </div>
    );
}

export default Header;