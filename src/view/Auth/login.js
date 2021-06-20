import React from "react";
import history from "../../history";
import axios from "axios";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    _getToken() {
        axios({
            method: 'post',
            url: `/api/tchat/v1/auth/login`,
            data: {
                email: this.state.email,
                password: this.state.password,
            }
        }).then((response) => {
            if (response.status === 200) {
                if (response.data.data.tchat_token === null) {
                    history.push('/login', {email: this.state.email});
                } else {
                    localStorage.setItem("token", response.data.data.tchat_token);
                    localStorage.setItem("user", response.data.data.user);
                    history.push('/home');
                }
            }
        })
    }

    render() {
        return (
            <div className="content-login">
                <div className="login-body">
                    <div className="col-md-12 mt-4">
                        <div className="form-group">
                            <input
                                onChange={(e) => this.setState({email: e.target.value})}
                                className="form-control" placeholder="ایمیل"
                                value={this.state.email}/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <input
                                onChange={(e) => this.setState({password: e.target.value})}
                                className="form-control" type="password" placeholder="پسورد"
                                value={this.state.password}/>
                        </div>
                    </div>
                    <button className="btn btn-info" type="submit"
                            onClick={(e) => this._getToken(e)}>ورود
                    </button>
                </div>
            </div>
        );
    }
}

export default Login;