import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MainBoard({ MainBoard }) {
  
  return (
    <nav>
      <div className='mainB'>
        <NavLink to="/searchB">Search Bar</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/chat">Chat</NavLink>
        <NavLink to="/users">User</NavLink>
      </div>
    </nav>
  )
}