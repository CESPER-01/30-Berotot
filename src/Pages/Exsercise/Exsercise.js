import style from './Exsercise.module.css'
import React, { useEffect } from "react";
import { FaBed, FaUtensils, FaTint } from "react-icons/fa";

function Exercise() {

  useEffect(() => {
    const cards = document.querySelectorAll(`.${style.card}`);
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add(style.show);
      }, i * 200);
    });
  }, []);

  const handleClick = (name) => {
    alert("Menu: " + name + " (nanti bisa diarahkan ke halaman)");
  };

  return (
    <div className={style.wrapper}>

      {/* HEADER */}
      <div className={style.headerBox}>
        <h1>Exercise</h1>
        <p>Home / Exercise</p>
      </div>

      {/* THEME SWITCH */}
      <label className={style.switch}>
        <input type="checkbox" onChange={() => document.body.classList.toggle(style.dark)} />
        <span className={style.slider}></span>
      </label>

      {/* CARD LIST */}
      <div className={style.cardContainer}>

        <button className={style.card} onClick={() => handleClick("Sleep")}>
          <FaBed className={style.icon} />
          <h2>Sleep</h2>
          <p>Latih otot dada untuk postur tegap dan kuat</p>
        </button>

        <button className={style.card} onClick={() => handleClick("Meal Plan")}>
          <FaUtensils className={style.icon} />
          <h2>Meal Plan</h2>
          <p>Otot tangan penting untuk kekuatan tubuh atas</p>
        </button>

        <button className={style.card} onClick={() => handleClick("Water Tracker")}>
          <FaTint className={style.icon} />
          <h2>Water Tracker</h2>
          <p>Latihan otot kaki menjaga keseimbangan tubuh</p>
        </button>

      </div>

    </div>
  );
}

export default Exercise;