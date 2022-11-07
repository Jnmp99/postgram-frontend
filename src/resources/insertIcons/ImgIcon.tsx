import { fillViewBoxIconPropsIF } from "@app/interfaces";

const ImgIcon = (props: fillViewBoxIconPropsIF) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={48} width={48} {...props}>
    <path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h30q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V9H9v30Zm2.8-4.85h24.45l-7.35-9.8-6.6 8.55-4.65-6.35ZM9 39V9v30Z" />
  </svg>
);

export default ImgIcon;
