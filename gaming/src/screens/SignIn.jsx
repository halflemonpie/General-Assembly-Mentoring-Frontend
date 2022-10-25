import React from 'react';
import LogIn from "../components/LogIn";
import { useState, useEffect } from 'react';

export default function HomeScreen({ setHeader }) {
  setHeader("Ga App")

  return (
    <div>

      <LogIn />
    </div>
  )
}