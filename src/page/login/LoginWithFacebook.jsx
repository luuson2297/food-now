import { FacebookLogin, FacebookLogout } from "react-facebook-login";
import { useState } from "react";

const initialState = {
    isSignIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
}

const LoginWithFacebook = () => {

    const [state, setState] = useState(initialState)

    const responseFacebook = (response) => {
        console.log(response);
    }

    return (

        <>
        <FacebookLogin
            appId="420711972992474"
            autoLoad={false}
            fields="email,public_profile"
            callback={responseFacebook}
            cssClass="my-facebook-button-class-blue"
            icon="fa-facebook"
          />
        </>

    );
}

export default LoginWithFacebook;