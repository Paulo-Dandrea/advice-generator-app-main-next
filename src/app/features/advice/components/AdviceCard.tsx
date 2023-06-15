"use client";

import { useEffect, useState } from "react";
import s from "./AdviceCard.module.scss";
import { getAdvice } from "../api/getAdvice";
import axios from "axios";

export const AdviceCard = () => {
  const [advice, setAdvice] = useState({ id: 0, text: "" });

  async function fetchAdvice() {
    const { id, advice } = await getAdvice();
    setAdvice({ id: id, text: advice });
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleClick = () => {
    fetchAdvice();
  };

  return (
    <div className={s["advice-card"]}>
      {/* TODO: There is a better way to handle Loading */}
      {advice.text ? (
        <>
          <h3>Advice #{advice.id}</h3>
          <p>{advice.text}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <div>
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
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
