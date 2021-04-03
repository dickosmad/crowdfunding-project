import React from "react";
import "./ContentInfo.scss";
export default function ContentInfo() {
  return (
    <div className="container">
      <div className="monitor_riser">
        <img className="logo" src="/images/logo-mastercraft.svg" alt="logo" />
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stant to reduce neck and eye strain
          .
        </p>
        <div className="monitor_select">
          <div>
            <button>Back this project</button>
          </div>

          <div className="bookmark">
            <span>
              {" "}
              <img src="/images/icon-bookmark.svg" alt="bookmark" />
            </span>
            <p>Bookmark</p>
          </div>
        </div>
      </div>
      <div className="monitor_riser_progress">
        <div className="amount">
          <p>$89,914</p>
          <p>of $100,000 backed</p>
        </div>
        <div className="amount">
          <p>$5,007</p>
          <p>total backers</p>
        </div>
        <div className="amount">
          <p>56</p>
          <p>days left</p>
        </div>
      </div>
    </div>
  );
}
