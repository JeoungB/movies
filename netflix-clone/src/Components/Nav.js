import logo from '../imgs/logo.png';
import '../css/Nav.css';

const Nav = () => {
    return(
        <div className="nav">
            <img className="logo" src={logo} alt="로고 이미지"/>
        </div>
    )
};

export default Nav;