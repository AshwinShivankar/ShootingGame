import React from "react";

export default function Player2() {
  let audio = new Audio("gunshot.mp3");

  let health2 = 0;
  const damage = () => {
    audio.play();
    let randomNO = Math.random(3, 5) * 10;
    health2 += Math.floor(randomNO);
    if (health2 >= 100) {
      alert("Player 2 Wins   Click on restart button to Restart the match");
    }
  };

  return (
    <>
      <h1 className="Score2">Player 2 </h1>
      {/* <h1 className="hp2">HP:{}</h1> */}
      <div className="player2Img">
        <img src="player2.png" height={345} />
      </div>
      <div>
        <button onClick={damage} className="btn2 ">
          Fire🔥
        </button>
      </div>
    </>
  );
}
