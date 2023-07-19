import React from "react";
import { useEffect } from "react";
import "./navbar.css";
import logo from "./logo.ico";
import Searchbar from "./Search_bar/searchbar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { gapi } from "gapi-script";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import  {login}  from "../../Actions/auth";
import Auth from "../../pages/Auth/Auth";
// import { render } from "react-dom";

function Navbar({ toggleDrawer }) {
  // const CurrentUser = null;

  //   const CurrentUser = {
  //     result: {
  //     email: "abzxy50312@gmail.com",
  //     joinedOn: "2222-07-15T09:57:23.489Z",
  //   }
  // }; 

  const CurrentUser=useSelector(state=>state.currentUserReducer);
  console.log(CurrentUser);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "136757974709-r4k613ssjaknj7vnuncvfg67lh42ja58.apps.googleusercontent.com",
        scope:null
      });
    }
    gapi.load("client:auth2", start);
  });
  const dispatch = useDispatch()

    const onSuccess = (res) => {
      var userobject = jwt_decode(res.credential);
      const Email = userobject.email;
      console.log(Email);
      dispatch(login({email:Email}));
    };
    const onFailure = (res) => {
      console.log("Failed", res);
    };

  return (
    <>
    <div className="conatianer_Navbar">
      <div className="burger_logo_navbar">
        <div className="burger" on onClick={() => toggleDrawer()}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <Link to={"/"} className="logo_image">
          <img src={logo} alt="youtube image" />
          <p className="logo_main_text">YouTube</p>
        </Link>
      </div>
      <Searchbar />
      <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
      <div className="apps_Box">
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
        <p className="appbox"></p>
      </div>
      <IoMdNotificationsOutline size={22} className={"vid_bell_Navbar"} />
      <div className="Auth_cont_Navbar">
        {CurrentUser ? (
          <>
            <div className="channel_logo_App">
              <p className="fstChar_logo_App">
                {CurrentUser?.result.name ? (
                  <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                ) : (
                  <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                )}
              </p>
            </div>
          </>
        ) : (
          <>
            <GoogleOAuthProvider clientId="136757974709-r4k613ssjaknj7vnuncvfg67lh42ja58.apps.googleusercontent.com">
              <GoogleLogin onSuccess={onSuccess} onFailure={onFailure} 
              render={(renderProps)=>(
                <p onClick={renderProps.onClick} className="Auth_Btn">
                <BiUserCircle  size={22} />
                <b>Sign In</b>
                </p>
              )}
              />
            </GoogleOAuthProvider>
          </>
        )}
      </div>
    </div>
    {/* {
      <Auth User = {CurrentUser} />
    } */}
    </>
  );
}

export default Navbar;
