import React from "react";
import axios from 'axios';
import UserProfile from "../screens/UserProfile";
import Feedback from "./Feedback";
import FeedbackFromMentor from "./FeedbackFromMentor";
import { useNaviagte } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";

export default function ModalTracker({ setShowModal }) {
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();
  const [track, setTrack] = useState({
    h_body: "",
    trackers: 1
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setTrack({
      ...track,
      [name]: value
    })
  }

  const [toggle, setToggle] = useState(false);

  const modalButtonRef = useRef();

  const closeModal = (e) => {
    if (e.target === modalButtonRef.current) {
      setShowModal(false);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    let postOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      credentials: "include",
      body: JSON.stringify({
        h_body: track.h_body,
        trackers: user.id,
      }),
    };
    fetch("", postOptions)
      .then((res) => res.json())
      .then((data) => {
        if (!data["error"]) {
          setToggle((prev) => !prev);
        }
      });
    setShowModal(false)
    window.Location.reload();
  }

  return (
    <div className="track-modal-text-box">
      <div className='track-profile-textbox'>
        <span className='track-forms-home'>Home</span>
        <div className='track-profile-pic'>
          <img src={``} alt="profile"></img>
        </div>
      </div>
      <div className="tracks-form">
        <form className="tracks-form-box" onSubmit={handleSubmit}>
        <input
            onChange={handleChange}
            className="tracks-form-text"
            id="trackFormText"
            placeholder="Your Progress'"
            name="h_body"
            value={track.h_body}
            maxLength="140"
            type="text"
          />
          <input
            className="tracks-modal-button-up"
            type="submit"
            value="Track"
          />
        </form>
      </div>
    </div>
  )
}