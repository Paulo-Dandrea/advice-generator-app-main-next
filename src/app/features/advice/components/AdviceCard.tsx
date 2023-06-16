"use client";

import { useCallback, useEffect, useState } from "react";
import s from "./AdviceCard.module.scss";
import { getAdvice } from "../api/getAdvice";
import { AdviceCardDivider } from "./AdviceCardDivider";

export const AdviceCard = () => {
  const [advice, setAdvice] = useState({
    id: 0,
    text: "",
  });
  const [loading, setLoading] = useState(false);

  async function fetchAdvice() {
    const { id, advice } = await getAdvice();
    setAdvice({ id: id, text: advice });
    setLoading(false);
  }

  const fetchAndLoad = useCallback(() => {
    setLoading(true);
    fetchAdvice();
  }, []);

  const handleClick = () => {
    fetchAndLoad();
  };

  useEffect(() => {
    fetchAndLoad();
  }, [fetchAndLoad]);

  return (
    <div className={s["advice-card"]}>
      {/* TODO: There is a better way to handle Loading */}
      {!loading ? (
        <>
          <h3>Advice #{advice.id}</h3>
          <div className={s.quote}>
            <p>{`${advice.text}`}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <AdviceCardDivider />

      <div>
        <button className={s.btn} onClick={() => handleClick()}>
          {/* TODO: There is a better way to organize svg as function in files */}
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
