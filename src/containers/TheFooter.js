import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          RAVTEL
        </a>
        <span className="ml-1">&copy; 2021 ebab246</span>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
