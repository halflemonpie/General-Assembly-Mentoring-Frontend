import React from "react";
import FeedbackFromMentor from "./FeedbackFromMentor";
import Feedback from "./Feedback";
export default function FeedbackFromMentor() {
  let { feedbackmentorid } = useParams();
  const user = useSelector((state) => state.user);
  const [feedmentor, setFeedmentor] = useState({});
  const [Mentorfeeds, setMentorFeeds] = useState(null);
  const [togglestate, setTogglestate] = useState(true);
  const [show, setShow] = useState({ display: "flex" });
  const closeBox = () => {
    setShow({ display: "none" });
  };
  const handleClick = () => {
    setShow({ display: "flex" });
  };
  let fetchMentorFeeds = () => {
    fetch('')
      .then((res) => res.json())
      .then((data) => setFeedmentor(data))
      .then(() => {
        fetch('')
          .then((res) => res.json())
          .then((data) => {
            if (data.length) setMentorFeeds(data);
          });
      });
  };
  useEffect(() => {
    fetchMentorFeeds();
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
        <MentorPost mentor={mentorpost}></MentorPost>
        <div className="comment-feed">
          {!comments ? (
            <h3 className="comment-no-one">Hi! How may I help you?</h3>
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