import React from "react";
import { Link } from "react-router-dom";
import './Login.scss';
import firebase from "../../fisebase";
import LoginWithGoogle from "./LoginWithGoogle";
import LoginWithFacebook from "./LoginWithFacebook"



class Login extends React.Component {
    state = {
        email: '',
        password: '',
        loading: false,
        errors: [],
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    isFormValid = () => {
        const { errors } = this.state;
        if (!(this.state.email && this.state.password)) {
            const error = { message: 'Maybe you forgot something' }
            this.setState({ errors: [error] })
            return false;
        }
        return true;
    }

    displayErrors = (errors) => {
        errors.map((error, i) => <p key={i}>{error.message}</p>)
    }
    handleInputError = (errors, inputName) => {
        return errors.some(error => error.message.toLowerCase().includes(inputName)) ? 'error' : '';
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.isFormValid()) {
            this.setState({ errors: [], loading: true })
            const { email, password, errors } = this.state;

            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((signedUser) => {
                    console.log(signedUser);
                    this.setState({ loading: false });
                    this.props.history.push('/');
                })
                .catch((err) => {
                    console.log(err);
                    this.setState({ errors: [...errors, err], loading: false })
                })
        }
    }

    render() {

        const { email, password, loading, errors } = this.state;
        return (
            <div className="SignUp">
                <div className="row">
                    <div className="col-6 offset-5">
                        <h2>Đăng nhập</h2>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row SignUp-Item">
                        <div className="col-6 offset-3">
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email" onChange={this.handleChange}
                                    id="email"
                                    name="email"
                                    className={`form-control ${this.handleInputError(errors, 'email')}`}
                                    placeholder="Email..."
                                    value={email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password"
                                    onChange={this.handleChange}
                                    name="password"
                                    id="password"
                                    className={`form-control ${this.handleInputError(errors, 'password')}`}
                                    placeholder="Password..."
                                    value={password} />
                            </div>
                            <div className="form-group-item">
                                <span className="item_signIn">
                                    <span>Bạn chưa có tài khoản?   </span>
                                    <Link to="/Register"> Đăng kí</Link>
                                </span>
                                <div className="item-Social-network">
                                <LoginWithGoogle/>
                                {/* <LoginWithFacebook/> */}
                                </div>

                            </div>

                            <button type="submit" className={`btn btn-success ${loading ? 'loading' : ''}`}>Submit</button>
                        </div>
                    </div>

                </form>

                {errors.length > 0 && (<div class="alert alert-danger" role="alert" errors>
                    You forget input something! Try again...
                    {this.handleInputError(errors)}
                </div>)}
            </div>
        );
    }
};
export default Login;