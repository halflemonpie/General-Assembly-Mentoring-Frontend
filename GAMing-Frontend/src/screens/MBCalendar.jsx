import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateCalendar, getCalendar } from "../services/calendar.js.js";

export default function mainBoardCalendar({ setToggle, toggle }) {
  const [calendar, setCalendar] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchCalendar = async () => {
      let oneCalendar = await getCalendar(id);
      setCalendar(oneCalendar);
    };

    fetchCalendar();
  }, [id]);
}