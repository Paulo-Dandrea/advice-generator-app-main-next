"use client";

import { useEffect, useState } from "react";
import s from "./AdviceCard.module.scss";
import { getAdvice } from "../api/getAdvice";
import { AdviceCardDivider } from "./AdviceCardDivider";


export const AdviceCard = () => {
  const [advice, setAdvice] = useState({
    id: 0,
    text: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });

  // async function fetchAdvice() {
  //   const { id, advice } = await getAdvice();
  //   setAdvice({ id: id, text: advice });
  // }

  // useEffect(() => {
  //   fetchAdvice();
  // }, []);

  const handleClick = () => {
    // fetchAdvice();
  };

  return (
    <div className={s["advice-card"]}>
      {/* TODO: There is a better way to handle Loading */}
      {advice.text ? (
        <>
          <h3>Advice #{advice.id}</h3>
          {/* <p className={s.quote}>{`"${advice.text}"`}</p> */}
          <div className={s.quote}>
            <p>{`${advice.text}`}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <AdviceCardDivider />

      <div>
        <button className={s.btn} onClick={handleClick}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
