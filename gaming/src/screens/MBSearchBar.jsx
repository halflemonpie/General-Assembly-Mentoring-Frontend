import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMainBoardSearchBar } from "../services/createMainBoardSearchBar";
import { getBar } from "../services/bar";

export default function createMainBoardSearchBar({ setHeader }) {
  const [bar, setBar] = useState([]);

  useEffect(() => {
    const fetchBar = async () => {
      const allBar = await getBar();
      setBar(allBar);
    };
    setHeader("GA Mentor Search")
    fetchBar();
  }, []);

  return (
    <div>
      
    <div className="bar-screen">
      {bar.map((barData) => (
        <div className="each-top10-div">
          <MainBoard key={barData._id} bar={barData} />
        </div>
      ))}

    

    </div>
    </div>
  );
}