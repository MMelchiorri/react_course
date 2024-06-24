import React, { useEffect, useState } from 'react';
import axios from 'axios';

//https://jsonplaceholder.typicode.com/posts

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdButtonClick] = useState(1);

  /*useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);*/

  /*useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);*/

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          e.preventDefault();
          setId(e.target.value);
        }}
        value={id}
      />
      <ul>
        {/*posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))*/}
      </ul>
      {post.title}
      <button
        type="button"
        onClick={() => {
          setIdButtonClick(id);
        }}
      >
        fetch button
      </button>
    </div>
  );
}

export default DataFetching;
