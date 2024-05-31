import { Outlet } from 'react-router-dom';
import logo from '../imgs/logo.png';

const Nav = () => {

    return(
        <div className="nav" style={{
            width: "235px",
            height: "100%",
            position: "fixed",
            backgroundColor: "#000000",
            left : "0",
            borderRight : "1px solid red"
        }}>
            <img className="logo" style={{
                    width: "150px",
                    height: "100px",
                    position: "relative",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    backgroundSize: "cover",
            }} src={logo} alt="로고 이미지"/>

            <p style={{color : "white"}}>NETFLIX ORIGINALS</p>
            <p style={{color : "white"}}>TRENDING</p>
            <p style={{color : "white"}}>ACTION</p>
            <p style={{color : "white"}}>COMEDY</p>
            <p style={{color : "white"}}>ROMANCE</p>
            <p style={{color : "white"}}>HORROR</p>
        </div>
    )
};

export default Nav;