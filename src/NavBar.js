import {useState, useEffect} from 'react'
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)
    
    return () => {
      window.removeEventListener('resize', changeWidth)
  }

  }, [])

  return (
    <div className="header">
      <h1 className="heading">Srm Hub</h1>
      {(toggleMenu || screenWidth > 800) && (
      <div className="links">
        <a href="/" className="link">Home</a>
        <a href="/notes" className="link">Notes</a>
        <a href="/restaurant" className="link">Restaurants</a>
        <a href="/contact" className="link">Contact Us</a>
      </div>)}
      <button className="menu" onClick={toggleNav}>
        <MenuIcon/>  
      </button>
    </div>
  );
};

export default NavBar;
