import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List'
import './Home.scss';

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