import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditPost from './EditPost';


//Also want a fetch (get) to view the user
//persoanl account info.. but may e thats through login/auth, etc. 


function PersonalAccount() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetch('/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, []);

  const handlePostDeleted = (post) => {
    setPosts(prevPosts => prevPosts.filter(p => p.id !== post.id));
  };

  const handlePostUpdated = (updatedPost) => {
    setEditingPost(null);
    setPosts(prevPosts => prevPosts.map(p => p.id === updatedPost.id ? updatedPost : p));
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
  };

  return (
    <div className="my-account">
      <h2>My Account</h2>
      <h3>My Posts</h3>
      {posts.map(post => (
        <div key={post.id}>
          {editingPost && editingPost.id === post.id ? (
            <EditPost post={post} onPostUpdated={handlePostUpdated} onCancelEdit={handleCancelEdit} />
          ) : (
            <EditPost post={post} onPostDeleted={handlePostDeleted} onEditPost={handleEditPost} />
          )}
        </div>
      
      ))}
      </div>
  );
          }

export default PersonalAccount;


