import React from "react";
import Feedback from "./Feedback";
import FeedbackFromMentor from "./FeedbackFromMentor";
import { useState, useEffect } from "react";
import Categories from "./Categories";
import "./Notification.css";

export default function Notification() {
  const [notify, setNotify] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchNotify = async () => {
      const response = await getNotify();
      setNotify(response);
    };
    fetchNotify();
  }, [toggle]);

  return (
    <div className="mentors-box">
      <div className="mentors-form-container">
        <GamesForm toggle={toggle} setToggle={setToggle} />
      </div>
      <div className="mentors-feed">
        <GamesFeed mentors={mentors} setToggle={setToggle} />
      </div>
    </div>
  );
}