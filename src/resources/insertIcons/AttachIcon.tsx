import { fillViewBoxIconPropsIF } from "@app/interfaces";

const SvgComponent = (props: fillViewBoxIconPropsIF) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={48} width={48} {...props}>
      <path d="M14.9 35h21.4v-2H14.85q-3.7 0-6.275-2.625T6 24q0-3.7 2.525-6.35Q11.05 15 14.7 15h21.6q2.4 0 4.05 1.675T42 20.75q0 2.4-1.65 4.075Q38.7 26.5 36.3 26.5H16.55q-1.05 0-1.8-.725T14 24q0-1.05.775-1.775.775-.725 1.825-.725h19.7v-2H16.65q-1.9 0-3.275 1.3T12 24q0 1.9 1.325 3.2 1.325 1.3 3.225 1.3H36.3q3.2 0 5.45-2.275T44 20.75q0-3.2-2.25-5.475Q39.5 13 36.3 13H14.8q-4.55 0-7.675 3.225T4 24q0 4.55 3.175 7.775Q10.35 35 14.9 35Z" />
    </svg>
  );
};

export default SvgComponent;
