import React, { Component } from "react";

const UserInfo = ({ user }) => {
  const { name, email, picture } = user;

  const avatar = picture.large;
  const displayName = `${name.title} ${name.first} ${name.last}`;
  return (
    <div>
      <img src={avatar} alt="avatar" />
      <div>Name: {displayName}</div>
      <div>Email: {email}</div>
    </div>
  );
};

const DATA_STATE = {
  LOADING: "loading",
  LOADED: "loaded",
  ERROR: "error"
};

class App extends Component {
  state = {
    user: null,
    status: DATA_STATE.LOADING
  };

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    try {
      this.setState({ status: DATA_STATE.LOADING });
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const [user] = data.results;
      this.setState({ user, status: DATA_STATE.LOADED });
    } catch (e) {
      console.error(e.message);
      this.setState({ user: null, status: DATA_STATE.ERROR });
    }
  }

  reload = async () => {
    await this.fetchData();
  };

  render() {
    const { user, status } = this.state;

    if (status === DATA_STATE.ERROR) {
      return <h4>Something went wrong while data loading...</h4>;
    }

    if (status === DATA_STATE.LOADING) {
      return <h4>Data loading....</h4>;
    }

    return (
      <div>
        <UserInfo user={user} />
        <p>
          <button onClick={this.reload}>Reload</button>
        </p>
      </div>
    );
  }
}

export default App;
