import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


import './Featured.scss';

function Featured({type}){
    return (
        <div className='featured'>
            {/* checking if there is a type and checking its value */}
            {type && (
                <div className='category'>
                    <span>{type === "movie" ? "Movies" : "TV series"}</span>
                    <select className='genre' id='genre'>
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}

            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-Nxx4P_TsMGIun8KACcsupZL0O0-9VlzLg&usqp=CAU'
                alt='movie image' 
            />

            <div className='info'>
                <img />
                <span className='description'>
                    this is some random description for this movie
                </span>
                <div className='buttons'>
                    <button className='play'>
                        <PlayCircleOutlineIcon />
                        <span>Play !</span>                        
                    </button>
                    <button className='more_info'>
                        <InfoOutlinedIcon />
                        <span>More info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Featured;