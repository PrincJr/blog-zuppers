import React from "react";
import Post from "../../components/Post";

function Home() {
  const posts = [
    {
      titulo: "Mais um post",
      descricao: "esta descricao é importante para o post",
    },
    {
      titulo: "Mais um post",
      descricao: "esta descricao é importante para o post",
    },
    {
      titulo: "Mais um post",
      descricao: "esta descricao é importante para o post",
    },
    {
      titulo: "Mais um post",
      descricao: "esta descricao é importante para o post",
    },
    {
      titulo: "Mais um post",
      descricao: "esta descricao é importante para o post",
    },
    {
      titulo: "Mais um post",
      descricao: "esta descricao é importante para o post",
    },
  ];

  return (
    <div className="container mt-40">
      {posts.map((post) => (
        <Post />
      ))}
    </div>
  );
}

export default Home;
