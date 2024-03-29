import Image from "next/image";
import React from "react";
import "./event-card.scss";
import { TfiAlarmClock,  TfiLocationPin } from "react-icons/tfi";

const EventCard = ({ title, time, location, image }) => {
  return (
    <div className="card event-card ">
      <div className="card-body">
        <div className="image">
          <Image
            src={`/images/events/${image}`}
            width={400}
            height={300}
            alt={title}
            className="rounded "
          />
        </div>
        <div className="card-subtitle">
          <div>
            <TfiAlarmClock />
            {time}
          </div>
          <div>
            <TfiLocationPin />
            {location}
          </div>
        </div>

        <h5 className="card-title">{title} </h5>
      </div>
    </div>
  );
};

export default EventCard;
