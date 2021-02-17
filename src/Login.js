import React from 'react';
import Particles from 'react-particles-js';
import "./Login.css";
function Login() {
    return (
        <div className="loginpage">
            <Particles className="particles"
                params={{
	            "particles": {
	            "number": {
	                "value": 100
	                },
	            "size": {
	                "value": 4
	                },
                "color":
                    {
                        "value":"#00FFFF"
                    },
                    "links":
                    {
                        "color":"#00FFFF"
                    }
	            },
	            "interactivity": {
	                "events": {
	                    "onhover": {
	                        "enable": true,
	                    "mode": "repulse"
	                    }
	                }
	            }
	            }} />
            <div className="logincard">
                <img className="logo"src="https://raw.githubusercontent.com/ArkaprabhaChakraborty/vennwedo2.0/main/assets/vennwedo.svg" alt=""/>
                <input className="email_input" placeholder="EMAIL"/>
                <br/>
                <input className="email_input" placeholder="PASSWORD"/>
                <br/>
                <button className="button">Login</button>
            </div>
        </div>
    )
}

export default Login
