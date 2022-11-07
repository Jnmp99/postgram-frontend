import { fillViewBoxIconPropsIF } from "@app/interfaces";

const CommentIcon = (props: fillViewBoxIconPropsIF) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={48} width={48} {...props}>
    <path d="m44 44-8-8H7q-1.15 0-2.075-.925Q4 34.15 4 33V7q0-1.15.925-2.075Q5.85 4 7 4h34q1.2 0 2.1.925Q44 5.85 44 7ZM7 7v26h30.25L41 36.75V7H7Zm0 0v29.75V7Z" />
  </svg>
);

export default CommentIcon;
