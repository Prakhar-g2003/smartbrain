import React from "react";

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            email: '',
            password: ''
        }
    }
    onNamechange = (event) =>{
        this.setState({name: event.target.value})
    }
    onEmailchange = (event) =>{
        this.setState({email: event.target.value})
    }
    onPasswordchange = (event) =>{
        this.setState({password: event.target.value})
    }
    onSubmitRegister = () =>{
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user=>{
            if(user){
                this.props.loadUser(user)
                this.props.OnSignin('home');
            }
        })
    }
    render() {
        return(
            <div>
                <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-100">
                    {/* <form className="measure"> */}
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent b--black hover-bg-black hover-white w-100" onChange={this.onNamechange}
                            type="text" name="name"  id="name" />
                        </div>
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
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={this.onSubmitRegister} type="submit" value="Register "/>
                        </div>
                        </fieldset>
                    {/* </form> */}
                    </main>
                </article>
            </div>
        );  
    }
}

export default Register