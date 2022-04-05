import './Home.scss';
import Navbar from '../components/navbar/Navbar.js';
import Featured from '../components/featured/Featured.js';

function Home(){
    return (
        <div className="home">
            {/* navbar */}
            <Navbar />
            {/* featured movie */}
            <Featured type="movie"/>
            {/* list of movies */}            
        </div>
    );
}

export default Home;