import { useState } from 'react'; 
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './Navbar.scss';

function Navbar(){
    // using this use state so when the user scroll to the top the navbar will semi transparent
    // but when they scroll down it's gonna be black just like the real netflix 
    const [isScrolled, setIsScrolled] = useState(false);
    // using window.onScroll so whenever the user scroll this will pick it up 
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => {window.onscroll = null};
    }

    return(
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className='container'>
                {/* dividing the navbar into left and right parts */}
                <div className='leftSideContainer'>
                    {/* contains the logo and navigation links  */}
                    <img 
                        src='https://pngimg.com/uploads/netflix/netflix_PNG6.png'
                        alt='Netflix logo'
                    />

                    {/* these spans will be links later on with react routes*/}
                    <span>home page</span>
                    <span>movies</span>
                    <span>series</span>
                    <span>new and popular</span>
                    <span>my list</span>
                </div>
                
                <div className='rightSideContainer'>
                    {/* contains some icons from materila ui */}
                    <SearchIcon className='rightSideIcons'/>
                    <span>    </span>
                    <NotificationsActiveIcon className='rightSideIcons'/>
                    <span>    </span>
                    <AccountCircleIcon className='rightSideIcons' />

                    {/* profile settings and logout buttons */}
                    <div className='profile'>
                        <ArrowDropDownIcon className=' ArrowDropDownIcon'/>
                        <div className='options'>
                            <span>Settins</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;