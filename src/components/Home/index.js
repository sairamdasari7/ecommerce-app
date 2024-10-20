import Header from '../Header'
import Nursery from '../Nursery'
import Products from '../Products'
import './index.css'

const Home=()=>{
  return(
    <div className='bg-container'>
    <Header />
    <div className='home-contents'>
       <button type="button" className='plant-btn fill'>Plants</button>
       <button type="button" className='plant-btn outline'>Pots</button>
       <p className='home-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
       <Nursery/>
       <Products/>
    </div>
    </div>
  )
}
export default Home