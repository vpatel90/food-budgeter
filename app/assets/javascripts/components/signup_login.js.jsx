var SignupLogin = React.createClass({

  getInitialState: function () {
    return {
      display: 'login',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
    }
  },

  onChangeEmail: function (e) {
    this.setState({ email: e.target.value })
  },

  onChangePassword: function (e) {
    this.setState({ password: e.target.value })
  },

  onChangePasswordConfirmation: function (e) {
    this.setState({ password_confirmation: e.target.value })
  },

  renderEmailPassword: function () {
    return (
      <div>
        <div className="errors">{this.state.errors}
        </div>
        <div className='input-field'>
          <input onChange={this.onChangeEmail} type="email" name="email" />
          <label htmlFor="email">Email</label>
        </div>

        <div className='input-field'>
          <input onChange={this.onChangePassword} type="password" name="password" />
          <label htmlFor="password">Password</label>
        </div>
      </div>
    );
  },

  ajaxRequest: function () {
    if (this.state.display === 'login')
      url = '/users/sign_in';
    else if (this.state.display === 'signup')
      url = '/users';

    $.ajax({
      url: url,
      data: {
        user: {
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation
        }
      },
      type: 'POST',
      success: function (data) {
        location.reload();
      },
      error: function (e) {
        this.setState({
          errors: e.responseText
        });
      }.bind(this)
    });
  },

  displaySignup: function (){
    return (
      <div>
        <h4> Sign Up </h4>

        {this.renderEmailPassword()}
        <div className='input-field'>
          <input onChange={this.onChangePasswordConfirmation} type="password" name="password_confirmation" />
          <label htmlFor="password_confirmation">Password Confirmation</label>
        </div>
        <div onClick={this.ajaxRequest} className='btn green'> Sign Up </div>
        <br />
        <div className='link light-blue-text' onClick={this.updateState.bind(this, 'login')}> Login </div>

      </div>

    );
  },

  displayLogin: function (){
    return (
      <div>
        <h4> Log in </h4>
        {this.renderEmailPassword()}

        <div onClick={this.ajaxRequest} className='btn green'> Login </div> 
        <br />
        <div className='link light-blue-text' onClick={this.updateState.bind(this, 'signup')}> Sign Up </div>

      </div>
    );
  },

  updateState: function ( state ){
    this.setState({
      display: state,
      errors: ''
    });
  },

  render: function() {
    if (this.state.display === 'signup')
      return ( 
       <div>
          {this.displaySignup()}
        </div>
      );
    else if (this.state.display === 'login')
      return ( 
       <div>
          {this.displayLogin()}
        </div>
      );
  }
});
