import React from "react";
import { Link } from "react-router-dom";

function Post() {
  return (
    <>
      <div class="card mb-2 mt-2">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">
                <Link
                  to="post/adckamsdk"
                  className="has-text-black"
                  params={{ post: "felipeisa" }}
                >
                  Felipe Sia
                </Link>
              </p>
              <p class="subtitle is-6">
                <Link className="has-text-black">@felipelindao</Link>
              </p>
            </div>
          </div>

          <div class="content">
            <Link
              to="post/adkamcsk"
              className="has-text-black"
              params={{ post: "felipeisa" }}
            >
              Sou rico e bonito o que voces querem mais ? sim faço minha propria
              cerveja e treino até mesmo ensinei ao mundo oque é ufc.{" "}
              <a>@bulmaio</a>.<a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
