import React, { RefObject } from "react";

interface SubmitInterface {
  onClick: () => void;
  ref: RefObject<HTMLButtonElement>;
}

const Submit: React.FC<SubmitInterface> = ({ onClick }, ref) => {
  return (
    <button className="btn submit" onClick={onClick} ref={ref}>
      Confirm
    </button>
  );
};

export default Submit;
