import React from "react";
import history from "../../history";
import axios from "axios";
import ParticlesBg from 'particles-bg'
import {AiOutlineInstagram} from "react-icons/ai";
import {AiOutlineShop} from "react-icons/ai";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {FiLogIn} from "react-icons/fi";
import {Card, Divider} from "@material-ui/core";
import logo from "./295.png";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedB: true,
        }
    }

    handleChange = (event) => {
        this.setState({checkedB: event.target.checked})
    };

    _getToken() {
        axios({
            method: 'post',
            url: `/api/v2/auth/login`,
            data: {
                email: this.state.email,
                password: this.state.password,
            }
        }).then((response) => {
            if (response.status === 200) {
                if (response.data.data.panel_token === null) {
                    history.push('/login', {email: this.state.email});
                } else {
                    localStorage.setItem("token", response.data.data.panel_token);
                    console.log(response.data.data.panel_token)
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
                    <img src={logo} width="200" className="my-2"/>
                    <div className="login-title">
                        <h1>به پنل کاربری فروشگاه‌های زنجیره‌ای تونل خوش آمدید.</h1>
                    </div>
                    <Grid className="text-center" container>
                        <Grid item xs={12} lg={10} className="my-2 mx-auto">
                            <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                       id="outlined-textarea"
                                       label="نام کاربری"
                                       value={this.state.email}
                                       onChange={(e) => this.setState({email: e.target.value})}
                                       placeholder="نام کاربری" variant="outlined"/>
                        </Grid>
                        <Grid className="my-2 mx-auto" item xs={12} lg={10}>
                            <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                       id="outlined-textarea"
                                       label="رمز عبور"
                                       value={this.state.password}
                                       onChange={(e) => this.setState({password: e.target.value})}

                                       placeholder="رمز عبور" variant="outlined"/>
                        </Grid>
                    </Grid>
                    <Grid className="my-2 text-right" item xs={12} lg={10}>
                        <p className="text-right mb-0">
                            <FormControlLabel
                                className="m-0"
                                control={
                                    <Checkbox
                                        checked={this.state.checkedB}
                                        onChange={this.handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                // label=""
                            />
                            مرا به خاطر بسپار
                        </p>
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="mb-3"
                        onClick={(e) => this._getToken(e)}
                        endIcon={<FiLogIn/>}
                    >
                        ورود
                    </Button>
                    <div className="icons-login">
                        <div>
                            <a>
                                رمز عبور خود را فراموش کرده‌اید؟
                            </a>
                        </div>

                        <ul>
                            <li><a><AiOutlineInstagram/></a></li>
                            <li><a><AiOutlineShop/></a></li>
                        </ul>
                    </div>
                </div>
                <ParticlesBg num={300} type="circle" bg={true}/>
            </div>
        );
    }
}

export default Login;