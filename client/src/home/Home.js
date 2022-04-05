import './Home.scss';
import Navbar from '../components/navbar/Navbar.js';
import Featured from '../components/featured/Featured.js';
import List from '../components/list/List.js'

function Home(){
    return (
        <div className="home">
            {/* navbar */}
            <Navbar />
            {/* featured movie */}
            <Featured type="movie"/>
            {/* list of movies */}          
            <List />  
            <List />  
            <List />  
            <List />  
        </div>
    );
}

export default Home;