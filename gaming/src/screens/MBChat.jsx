import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateMainBoardChat, getMainBoardChat } from '../services/mainBoardChat';

export default function mainBoardChat() {
  const [chat, setChat] = useState({

    message: "",
  })

  let navigate = useNavigate()
  const { id } = useParams()
}