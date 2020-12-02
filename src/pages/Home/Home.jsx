import React, {useEffect, useState} from "react";
import Post from "../../components/Post";
import api from '../../service/api'

function Home() {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetch() {
        await  api.get('blogs').then(post => {
          setPosts(post.data)
        })
    }
    fetch()
  },[])

  return (
    <div className="container">
      {posts.map((post) => (
        <Post post={post}/>
      ))}
    </div>
  );
}

export default Home;
