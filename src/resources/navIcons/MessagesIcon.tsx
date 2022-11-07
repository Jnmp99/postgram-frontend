import { fillViewBoxIconPropsIF } from "@app/interfaces";

const MessagesIcon = (props: fillViewBoxIconPropsIF) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={48} width={48} {...props}>
    <path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm17-15.1L7 13.75V37h34V13.75Zm0-3L40.8 11H7.25ZM7 13.75V11v26Z" />
  </svg>
);

export default MessagesIcon;
