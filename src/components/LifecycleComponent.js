import React, { Component } from "react";
import axios from "axios";

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.loadUser();
  }
  loadUser = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      this.setState({
        data: response.data,
        loading: false,
      });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { data, loading } = this.state;

    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : data ? (
          <p>Data loaded: {JSON.stringify(data)}</p>
        ) : (
          <p>Data not loaded</p>
        )}
      </div>
    );
  }
}

export default LifecycleComponent;
