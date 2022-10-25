import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import Feedback from "./Feedback";
import FeedbackFromMentor from "./FeedbackFromMentor";
import MentorProfile from "./MentorProfile";
import MentorBackground from "./MentorBackground";
import { useState } from "react";
import { useEffect } from "react";
export default function Feedback() {
  let { feedbackid } = useParams();
  const user = useSelector((state) => state.user);
  const [feedpost, setFeedpost] = useState({});
  const [feeds, setFeeds] = useState(null);
  const [togglestate, setTogglestate] = useState(true);
  const [show, setShow] = useState({ display: "flex" });
  const closeBox = () => {
    setShow({ display: "none" });
  };
  const handleClick = () => {
    setShow({ display: "flex" });
  };
  let fetchFeeds = () => {
    fetch('')
      .then((res) => res.json())
      .then((data) => setFeedpost(data))
      .then(() => {
        fetch('')
          .then((res) => res.json())
          .then((data) => {
            if (data.length) setFeeds(data);
          });
      });
  };
  useEffect(() => {
    fetchFeeds();
  }, [togglestate]);
  useEffect(() => {
    console.log(feeds);
  }, [feeds]);
  return (
    <div className="feed-main-container">
      <Profilebutton click={handleClick} />
      <Profiletab
        name={user.name}
        click={closeBox}
        show={show}
        picture={``}
      />
      <div className="feed-section-main-container">
        <HatePost hate={hatepost}></HatePost>
        <div className="comment-feed">
          {!comments ? (
            <h3 className="comment-no-one">No one is here ¯\_( ツ )_/¯</h3>
          ) : (
            comments.map((comment, i) => (
              <MiniComments key={i} hater={comment}></MiniComments>
            ))
          )}
        </div>
        <PostComment
          setTogglestate={setTogglestate}
          post_id={hateid}
        ></PostComment>
      </div>
    </div>
  );
}