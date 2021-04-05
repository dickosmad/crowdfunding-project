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
      <div className="donation_board">
        <div className="monitor_riser_progress">
          <div className="amount">
            <h1>$89,914</h1>
            <p>of $100,000 backed</p>
          </div>
          <div className="amount">
            <h1>5,007</h1>
            <p>total backers</p>
          </div>
          <div className="amount">
            <h1>56</h1>
            <p>days left</p>
          </div>
        </div>
        <div className="progress_container">
          <div className="progress_bar">
            <div className="progress_gauge"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
