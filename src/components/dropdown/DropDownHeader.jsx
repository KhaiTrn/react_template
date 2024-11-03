import React, { useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const DropDownHeader = ({ buttonContent = "dropdown", items }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown
      menu={{
        items: [{ label: "avbc" }],
      }}
      trigger={["click"]}
      open={open}
    >
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {buttonContent}
        <span>
          <DownOutlined />
        </span>
      </button>
    </Dropdown>
  );
};

export default DropDownHeader;
