import React from "react";
import { Link } from "react-router-dom";
import Icons from "../../../components/Icons";
import DropDownHeader from "../../../components/dropdown/DropDownHeader";
const HeaderTemplate = () => {
  return (
    <header>
      <div className="container">
        <div className="header_content">
          <Link>
            <Icons.logo />
          </Link>
          {/* search Input */}
          <div className="header_action">
            <DropDownHeader />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTemplate;
