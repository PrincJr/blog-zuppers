import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <>
      <div className="card mb-2 mt-4">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  style={{ borderRadius: "50%", width: 48, height: 48}}
                  src="https://source.unsplash.com/random"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">
                <Link
                  to="post/adckamsdk"
                  className="has-text-black"
                  params={{ post: "felipeisa" }}
                >
                  {post.name}
                </Link>
              </p>
              <p className="subtitle is-6">
                <Link className="has-text-black">{post.nickname}</Link>
              </p>
            </div>
          </div>

          <div className="content">
            <Link
              to="post/adkamcsk"
              className="has-text-black"
              params={{ post: "felipeisa" }}
            >
              {post.description}
              <br />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
