import React, {useEffect, useState} from "react";
import Post from "../../components/Post";
import api from '../../service/api'

function Home() {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetch() {
        await  api.get('posts').then(posts => setPosts(posts))
    }
    fetch()
  },[])

  return (
    <>
      {posts.map((post) => (
        <Post />
      ))}
    </>
  );
}

export default Home;
