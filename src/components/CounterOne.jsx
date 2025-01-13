import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const CounterOne = () => {
  return (
    <div className="bg-dark2">
      <div className="container ">
        <div className="counter-area-2 bg-smoke">
          <div className="row gy-40 justify-content-between">
            <div className="col-sm-6 col-lg-auto">
              <div className="counter-card style2">
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={100} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="counter-card_text">Projects Completed</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-auto">
              <div className="counter-card style2">
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={98} />%
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="counter-card_text">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-auto">
              <div className="counter-card style2">
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={99} />%
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="counter-card_text">Success Rate</p>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-6 col-lg-auto">
              <div className="counter-card style2">
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={900} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="counter-card_text">Client review</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterOne;
