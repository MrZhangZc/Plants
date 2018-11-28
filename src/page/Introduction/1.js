handleEmailChange: function(e) {
    this.setState({ email: e.target.value });
},
handlePasswordChange: function(e) {
    this.setState({ password: e.target.value });
},
render: function() {
    return (
        <form>
            <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
            <button type="button" onClick={this.handleLogin}>Login</button>
        </form>);
},
handleLogin: function() {
    console.log("EMail: " + this.state.email);
    console.log("Password: " + this.state.password);
}