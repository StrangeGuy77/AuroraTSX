import * as React from "react";
import { Link } from "react-router-dom";

const Schedule: React.FC<IProps> = ({ date, day, tab }) => {
  return (
    <div>
      <li className="nav-item">
        <Link
          className="nav-link active"
          data-toggle="tab"
          to={`#${tab}`}
          role="tab"
        >
          <h5>{day}</h5>
          <p>{date}</p>
        </Link>
      </li>
    </div>
  );
};

interface IProps {
  day: string;
  date: string;
  tab: string;
}

export default Schedule;
