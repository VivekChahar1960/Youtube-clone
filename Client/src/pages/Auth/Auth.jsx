import React from 'react';
import './Auth.css';
import { GoogleLogout } from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
function Auth(User) {
  return (
    <div className="Auth_container">
        <div className="Auth_container2">
            <p className="User_Details">
                <div className="channel_logo_App">
                    <p className="fstChar_logo_App">
                         {/* {User?.result.name ? (
                            <>{User?.result.name.charAt(0).toUpperCase()} </>
                        ) : (
                            <>{User?.result.email.charAt(0).toUpperCase()} </>
                        )} */}
                    </p> 
                </div>
                <div className="email_Auth">
                    {/* {User?.result.email} */}
                </div>
            </p>
            <div className="btns_Auth">
                <input type="button" className='btn_Auth' value="Craete Your Channel" />
            </div>
            <div>
                {/* <GoogleOAuthProvider clientId="136757974709-r4k613ssjaknj7vnuncvfg67lh42ja58.apps.googleusercontent.com">
                    <GoogleLogout/>
                </GoogleOAuthProvider> */}
            </div>
        </div>
    </div>
  )
}

export default Auth