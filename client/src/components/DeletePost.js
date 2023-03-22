import React, { useState } from 'react';

function DeletePost(props) {
    // console.log(props.post)
    const handleDelete = () => {
      fetch(`/posts/${props.post.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          props.onPostDeleted(props.post);
        });
    };
  // console.log(props.onEditPost)
    return (
      <div className="delete-post">
        <p>{props.post.text}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }

  export default DeletePost;