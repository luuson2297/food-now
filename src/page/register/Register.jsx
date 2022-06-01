import React, { Component } from "react";
import firebase from "../../fisebase";
import md5 from "md5";


class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        loading: false,
        errors: [],
        userRef: firebase.database().ref('users')
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.isFormValid()) {
            const { username, email, password, errors } = this.state
            this.setState({ errors: [], loading: true });
            firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then((createUser) => {
                    console.log(createUser);
                    createUser.user.updateProfile({
                        displayName: username,
                        photoURL: `http://gravatar.com/avatar/${md5(createUser.user.email)}?d=identicon`

                    })
                        .then(() => {
                            this.saveUser(createUser)
                                .then(() => {
                                    console.log('userr saved');
                                    this.setState({ loading: false })
                                    this.props.history.push('/Login');
                                })
                        })
                }).catch(err => {
                    console.log(err);
                    this.setState({ errors: [...errors, err], loading: false })
                })
        }
    }

    saveUser = (createUser) => {
        return this.state.userRef.child(createUser.user.uid).set({
            name: createUser.user.displayName,
            avatar: createUser.user.photoURL
        });
    }
    isFormValid = () => {
        let errors = []
        let error;
        const { username, email, password, confirmPassword } = this.state;

        if (!username.length || !email.length || !password.length || !confirmPassword) {
            error = { message: 'Please make sure  you filled all  required fields' };
            this.setState({ errors: errors.concat(error) });
            return false;

        } else if (password.length < 6 || confirmPassword.length < 6 | password !== confirmPassword) {
            error = { message: 'Please make sure your password have to be at least 6 character' };
            this.setState({ errors: errors.concat(error) });
            return false;
        }
        return true;
    }

    displayErrors = (errors) => errors.map((error, i) => (
        <p key={i} >{error.message}</p>
    ));
    handleInputError = (errors, inputName) => {
        return errors.some(error => error.message.toLowerCase().includes(inputName)) ? 'error' : '';
    }

    render() {
        const { username, password, email, confirmPassword, loading } = this.state;
        return (
            <div className="SingIn-page">
                <div className="row">
                    <div className="col-6 offset-5">
                        <h3>Đăng kí</h3>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-6 offset-3">
                        <form onSubmit={this.handleSubmit} >
                            <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    className={`form-control ${this.handleInputError(this.state.errors, 'username')}`}
                                    onChange={this.handleChange}
                                    value={username} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email"
                                    onChange={this.handleChange}
                                    id="email"
                                    name="email"
                                    className={`form-control ${this.handleInputError(this.state.errors, 'email')}`}
                                    placeholder="Email"
                                    value={email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password"
                                    id="password"
                                    name="password"
                                    onChange={this.handleChange}
                                    className={`form-control ${this.handleInputError(this.state.errors, 'password')}`}
                                    placeholder="Password"
                                    value={password} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Confirm Password</label>
                                <input type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    onChange={this.handleChange}
                                    className={`form-control ${this.handleInputError(this.state.errors, 'confirmPassword')}`}
                                    placeholder="Confirm Password" value={confirmPassword} />
                            </div>
                            <button type="submit" className="btn btn-success">
                                <span className={loading ? 'loading' : ''}>Submit</span>
                            </button>

                        </form>
                    </div>
                </div>
                {this.state.errors.length > 0 && (<div class="alert alert-danger" role="alert" errors>
                    You forget input something! Try again...
                    {this.displayErrors(this.state.errors)}
                </div>)}
            </div>
        )
    }
}

export default Register;