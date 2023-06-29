import React, { Ref } from "react";

interface SubmitInterface {
  onClick: () => void;
  ref: Ref<HTMLButtonElement>;
  className: string;
}

const Submit: React.FC<SubmitInterface> = React.forwardRef(
  ({ onClick, className }, ref) => {
    return (
      <button className={className} onClick={onClick} ref={ref}>
        Confirm
      </button>
    );
  }
);

export default Submit;
