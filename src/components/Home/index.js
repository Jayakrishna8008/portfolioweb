import './index.css';  
import Header from '../Header';  
import{Link} from 'react-router-dom'
const Home = () => (
  <div className='bg-card'>
        <Header /> 
       <div className='intro'>
        <div className='home-information'>
        <h3 className="greeting">Hello, I am</h3>
        <h1 className="name">Jayakrishna <span className='span'>Pujari</span></h1>
        <p className="description">
          I am fully interested to work as a web developer. I'm learning
          technologies to improve my skills in web development.
        </p>
        <Link to="#" className='button'>Download Resume</Link>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png"
        alt="Home-Image"
        className="home-image"
      />
      </div>
  </div>
);

export default Home;
