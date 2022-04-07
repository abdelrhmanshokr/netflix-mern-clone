import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import './Watch.scss';

function Watch(props){
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  
    return(
        <div className='watch'>
            {/* a button to return to home page */}
            <div className='backToHomePage'>
                <ArrowBackOutlinedIcon />
                Home
            </div>
            {/* where ever this component is called pass it a video source as a prop */}
            <video className='video' src={trailer} autoPlay progress controls loop>

            </video>
        </div>
    );
}

export default Watch;