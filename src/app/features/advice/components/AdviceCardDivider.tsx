import s from "./AdviceCard.module.scss";
import { useScreenSize } from "../../hooks";

type Size = "small" | "big";

interface Prop {
  size: Size;
}

const sizes = {
  small: {
    width: "295",
    pathD: "M0 8h122v1H0zM173 8h122v1H173z",
    gTransform: "translate(138)",
  },
  big: {
    width: "444",
    pathD: "M0 8h196v1H0zM248 8h196v1H248z",
    gTransform: "translate(212)",
  },
};

const Divider = ({ size }: Prop) => {
  const width = sizes[size].width;

  return (
    <div className={s["svg-container"]}>
      <svg
        viewBox={`0 0 ${width} 16`}
        width={width}
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <path fill="#4F5D74" d={sizes[size].pathD} />
          <g transform={sizes[size].gTransform} fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>
    </div>
  );
};


export function AdviceCardDivider() {
  return useScreenSize() ? <Divider size="small" /> : <Divider size="big" />;
}
