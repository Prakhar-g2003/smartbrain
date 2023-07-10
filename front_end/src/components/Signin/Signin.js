import React, {Component} from "react";

class Signin extends Component{
    constructor(props){
        super(props)
        this.state={
            signinEmail: '',
            signinPassword: ''
        }
    }
    onEmailchange = (event) =>{
        this.setState({signinEmail: event.target.value})
    }
    onPasswordchange = (event) =>{
        this.setState({signinPassword: event.target.value})
    }
    onSubmitSignin = () =>{
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signinEmail,
                password: this.state.signinPassword
            })
        })
        .then(response => response.json())
        .then(user=>{
            if(user.email === this.state.signinEmail && user.password === this.state.signinPassword){
                this.props.loadUser(user);
                this.props.OnSignin('home');
            }
        })
    }
    render(){
        const { OnSignin } = this.props;
        return(
            <div>
                <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-100">
                    {/* <form className="measure"> */}
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent b--black hover-bg-black hover-white w-100" onChange={this.onEmailchange}
                            type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent b--black hover-bg-black hover-white w-100" onChange={this.onPasswordchange}
                            type="password" name="password"  id="password" />
                        </div>
                        <div>
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={ this.onSubmitSignin }/>
                        </div>
                        <div className="mt3">
                            <div className="link f6 dim black db pointer"  onClick={()=>OnSignin('register')}>Register</div>
                        </div>
                        </fieldset>
                    {/* </form> */}
                    </main>
                </article>
            </div>
        );
    }
    
}

export default Signin