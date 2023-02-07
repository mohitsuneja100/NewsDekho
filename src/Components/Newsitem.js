import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, Url, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
              : imageUrl
          }
          className="card-img-top img-fluid img-thumbnail" 
          alt="..."
          
        />
        <div className="card-body rounded">
          <h5 className="card-title">{title.slice(0, 25)}.......</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={Url} className="btn btn-sm btn-primary">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
