import React, { useState } from 'react';

function DeletePost(props) {
    console.log(props.post)
    const handleDelete = () => {
      fetch(`/posts/${props.post.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          props.onPostDeleted(props.post);
        });
    };
  
    return (
      <div className="delete-post">
        <p>{props.post.text}</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={props.onEditPost}>Edit</button>
      </div>
    );
  }

  export default DeletePost;