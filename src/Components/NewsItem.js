//import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, Description, ImgUrl, NewsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !ImgUrl
                ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/iit-madras-115931747-16x9_0.jpg?VersionId=0H3lUYO8kap924ytboW49mVCfp45dFbU"
                : ImgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
            </span>
            </h5>
           
            <p className="card-text">{Description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a
              rel="noreferrer"
              href={NewsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
