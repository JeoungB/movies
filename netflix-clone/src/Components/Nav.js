import logo from '../imgs/logo.png';

const Nav = () => {

    return(
        <div className="nav" style={{
            width: "235px",
            height: "100vh",
            position: "fixed",
            backgroundColor: "#000000",
        }}>
            <img className="logo" style={{
                    width: "150px",
                    height: "100px",
                    position: "relative",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                    backgroundSize: "cover",
            }} src={logo} alt="로고 이미지"/>
        </div>
    )
};

export default Nav;