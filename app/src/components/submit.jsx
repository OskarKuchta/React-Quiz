import React from "react";
const Submit = React.forwardRef(({ onClick }, ref) => {
  return (
    <button className="btn submit" onClick={onClick} ref={ref}>
      Confirm
    </button>
  );
});
export default Submit;
