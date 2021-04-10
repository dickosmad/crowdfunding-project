import React from "react";
import "./PledgeCard.scss";
import { data } from "../data";
console.log(data);
const PledgeCard = () => {
  return (
    <>
      {data &&
        data.map((d) => (
          <div
            className="card"
            style={
              d.number === 0
                ? { opacity: ".5", pointerEvents: "none" }
                : { opacity: "1" }
            }
            key={d.id}
          >
            <div className="card__title">
              <h3>{d.title}</h3>
              <p> {d.pledge}</p>
            </div>
            <p style={{ color: "gray", lineHeight: "2.2", margin: "0px 10px" }}>
              {d.description}
            </p>
            <div className="pledge">
              <div className="plegde__number">
                <div className="pledge__value">
                  {d.number} <span className="left">left</span>
                </div>
              </div>
              <div className="plegde__reward">
                <button disabled={d.number === 0 ? true : false}>
                  {d.buttonText}{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
export default PledgeCard;
