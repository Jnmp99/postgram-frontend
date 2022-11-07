import { fillViewBoxIconPropsIF } from "@app/interfaces";

const BackIcon = (props: fillViewBoxIconPropsIF) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={48} width={48} {...props}>
    <path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z" />
  </svg>
);

export default BackIcon;
