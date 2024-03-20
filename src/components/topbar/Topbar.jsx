import './Topbar.scss';
import  PersonIcon  from '@mui/icons-material/Person';
import Mail from '@mui/icons-material/Mail';


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>developer-rak.</a>
          <div className="itemContainer">
            <PersonIcon className='icon'/>
            <span>+92 311 0349090</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span>dummy@dummy.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}
