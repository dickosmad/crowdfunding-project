import React, { useState } from "react";
import "./BackedModal.scss";
import { data } from "./modalData";

function BackedModal(props) {
  const [bambooPlegde, setBambooPlegde] = useState(25);
  const [blackPlegde, setBlackPlegde] = useState(75);
  const [selectPlegde, setSelectPlegde] = useState(false);
  return props.trigger ? (
    <section className="modal">
      <div className="modal__title">
        <h3>Back this project</h3>
        <div>
          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
              fill="#000000"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="modal__description">
        <p style={{ color: "gray", lineHeight: "2.2", margin: "10px 0px" }}>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the World ?
        </p>
      </div>
      {data &&
        data.map((d) => {
          return (
            <>
              <div
                className="modal__card"
                style={
                  d.number === 0
                    ? { opacity: ".5", pointerEvents: "none" }
                    : { opacity: "1" }
                }
                key={d.id}
              >
                <div className="modal__card__title">
                  <div className="modal__card__select__input">
                    <input type="checkbox" id="checkbox" className="checkbox" />
                    <label
                      for="checkbox"
                      className="checkmark"
                      onClick={() => setSelectPlegde(true)}
                    >
                      {d.title}
                    </label>
                    <p>{d.pledge && d.pledge} </p>
                  </div>
                  <div className="modal__card__pledge__left">
                    {d.number}{" "}
                    {d.number !== null ? <span className="">left</span> : ""}
                  </div>
                </div>
                <div className="modal__description">
                  <p
                    style={{
                      color: "gray",
                      lineHeight: "2.2",
                      margin: "10px 0px",
                    }}
                  >
                    {d.description}
                  </p>
                </div>
                {selectPlegde ? (
                  <>
                    <hr
                      style={{
                        border: 0,
                        borderTop: "1px solid #808080ad",
                        margin: "10px -15px",
                      }}
                    />
                    <div className="modal__card__pledge__value">
                      <p
                        style={{
                          color: "gray",
                          lineHeight: "2.2",
                          margin: "10px 0px",
                        }}
                      >
                        Enter your plegde :
                      </p>
                      <div className="modal__card__plegde__reward">
                        <span>
                          {" "}
                          <i>$ </i>
                          <input type="text" value={bambooPlegde} />
                        </span>
                        <button disabled={d.number === 0 ? true : false}>
                          {d.buttonText}{" "}
                        </button>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </>
          );
        })}
    </section>
  ) : (
    ""
  );
}

export default BackedModal;
