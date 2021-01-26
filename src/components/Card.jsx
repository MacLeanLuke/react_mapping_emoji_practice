import React from "react";
import Detail from "./Detail";

function Card(props) {
  return (
    <div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img">
              {props.img}
            </span>
            <span>
              <Detail detailInfo={props.name} />
            </span>
          </dt>
          <dd>
            <Detail detailInfo={props.meaning} />
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default Card;
