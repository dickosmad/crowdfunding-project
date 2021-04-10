import React from "react";
import PledgeCard from "../PledgeCard/PledgeCard";
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
      {/* About Section  */}
      <section className="about">
        <div className="title">
          <h2 style={{ textAlign: "left", marginLeft: "52px" }}>
            About this project
          </h2>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand .
          </p>
          <p>
            {" "}
            Featuring artisan craftmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads,pens, and USB
            sticks to be stored under the stand.
          </p>
        </div>
        <PledgeCard />
      </section>
    </div>
  );
}
