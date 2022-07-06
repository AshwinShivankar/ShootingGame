import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Player1() {
  let audio = new Audio("gunshot.mp3");

  // var maxNumber = 45;
  // var randomNumber = Math.floor(Math.random() * maxNumber + 1);
  // return <div>{randomNumber}</div>;
  let health = 0;
  let score;
  const damage = () => {
    audio.play();

    let randomNO = Math.random(3, 5) * 10;
    health += Math.floor(randomNO);
    if (health >= 100) {
      score += 1;
      alert("Player 1 Wins   Click on restart button to Restart the match");
    }
  };
  return (
    <>
      <h1 className="Score1">Player 1 </h1>
      {/* <h1 className="hp1">HP:{health}</h1> */}
      <div className="player1Img">
        <img src="player1.png" height={345} />
      </div>
      <div>
        <button onClick={damage} className="btn1 ">
          Fire🔥
        </button>
      </div>
    </>
  );
}
