import React from "react";
import "./Card.css";

function Card({ post }) {
  let newdetails = "";
  if (post.details.length > 25) {
    newdetails = post.details.split(" ").splice(0, 25).join(" ") + "...";
  } else {
    newdetails = post.details;
  }
  return (
    <div className="card-container">
      <div className="card-title">
        <h2>{post.title}</h2>
      </div>
      <div className="card-details">{newdetails}</div>
      <div className="btn">
        <button>
          {post.links.reddit && (
            <a href={post.links.reddit} target="_blank">
              Reddit
            </a>
          )}
        </button>
        <button>
          {post.links.article && (
            <a href={post.links.article} target="_blank">
              Article
            </a>
          )}
        </button>
        <button>
          {post.links.wikipedia && (
            <a href={post.links.wikipedia} target="_blank">
              Wikipedia
            </a>
          )}
        </button>
      </div>
    </div>
  );
}

export default Card;
