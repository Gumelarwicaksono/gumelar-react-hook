import React from 'react';
import * as Validator from 'validatorjs';
import Err from './eroros';
import './style.css';
export default class form extends React.Component {
  state = {
    username: '',
    email: '',
    jeniskelamin: '',
    password: '',

    errors: [],
  };

  handelSubmit = (event) => {
    event.preventDefault();
    const { username, email, jeniskelamin, password } = this.state;

    let data = { username, email, jeniskelamin, password };

    let rules = {
      username: 'required',
      email: 'required|email',
      jeniskelamin: 'required',
      password: 'min:8|required',
    };
    let validation = new Validator(data, rules);
    validation.passes();
    console.log(validation);
    if (validation.errorCount > 0) {
      this.setState({
        errors: [...validation.errors.get('username'), ...validation.errors.get('password'), ...validation.errors.get('email'), ...validation.errors.get('jeniskelamin')],
      });
    } else {
      this.setState({
        errors: [],
      });

      alert(`
        username : ${username}
        email : ${email}
        jeniskelamin : ${jeniskelamin}
        password : ${password}
    `);
      window.location.href = '';
    }
  };

  render() {
    return (
      <div className="main">
        <div className="container">
          <h1>Register</h1>
          {this.state.errors && <Err errors={this.state.errors} />}
          <form onSubmit={this.handelSubmit}>
            <label>
              <span>Username</span>
              <br />
              <input type="text" placeholder="Username" name="username" onChange={(e) => this.setState({ username: e.target.value })} />
            </label>
            <label>
              <span>Email</span>
              <br />
              <input type="text" placeholder="Email" name="email" onChange={(e) => this.setState({ email: e.target.value })} />
            </label>
            <label style={{ fontSize: '14px' }}>
              <span>jeniskelamin</span>
              <br />
              <input type="radio" name="jeniskelamin" value="laki laki" onChange={(e) => this.setState({ jeniskelamin: e.target.value })} />
              laki laki
              <input type="radio" name="jeniskelamin" value="perempuan" onChange={(e) => this.setState({ jeniskelamin: e.target.value })} />
              perempuan
            </label>
            <label>
              <span>password</span>
              <br />
              <input type="password" placeholder="Password" name="" onChange={(e) => this.setState({ password: e.target.value })} />
            </label>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    );
  }
}
