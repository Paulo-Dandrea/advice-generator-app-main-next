import { useEffect, useState } from "react";
import s from "./AdviceCard.module.scss";

const SmallDivider = () => (
  <div className={s["svg-container"]}>
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
);

const BigDivider = () => (
  <div className={s["svg-container"]}>
    <svg
      viewBox="0 0 444 16"
      width="444"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
        <g transform="translate(212)" fill="#CEE3E9">
          <rect width="6" height="16" rx="3" />
          <rect x="14" width="6" height="16" rx="3" />
        </g>
      </g>
    </svg>
  </div>
);

export function AdviceCardDivider() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1400);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1400);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{isSmallScreen ? <SmallDivider /> : <BigDivider />}</div>;
}
