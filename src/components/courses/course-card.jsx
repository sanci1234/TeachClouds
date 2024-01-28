import Image from "next/image";
import React from "react";
import "./course-card.scss";
import { TfiBarChart, TfiMoney, TfiUser } from "react-icons/tfi";

const CourseCard = ({ title, rating, image, user, price }) => {
  return (
    <div className="card course-card ">
      <div className="card-body">
        <div className="image">
          <Image
            src={`/images/courses/${image}`}
            width={400}
            height={300}
            alt={title}
            className="rounded "
          />
        </div>

        <h5 className="card-title">{title} </h5>
      </div>
      <div className="card-footer">
        <div>
          <TfiUser />
          {user}
        </div>
        <div>
          <TfiBarChart />
          {rating}
        </div>
        <div>
          <TfiMoney />
          {price}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
