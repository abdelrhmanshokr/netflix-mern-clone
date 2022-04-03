import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './Navbar.scss';

function Navbar(){
    return(
        <div className='navbar'>
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
                </div>
            </div>
        </div>
    );
}

export default Navbar;