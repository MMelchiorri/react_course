import React, { Component } from 'react';
import axios from 'axios';
export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = { post: [], errMsg: '' };
  }
  async componentDidMount() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      this.setState({ post: response.data });
      console.log(response.data);
    } catch (error) {
      this.setState({ errMsg: 'Error retrieving data' });
    }
  }
  render() {
    const { post, errMsg } = this.state;
    console.log(errMsg);
    return (
      <div>
        <p>List of posts</p>
        {post.length
          ? post.map((element) => <p key={element.id}>{element.title}</p>)
          : null}
        {errMsg ? <div>{errMsg}</div> : null}
      </div>
    );
  }
}
