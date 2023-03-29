import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Phân tích nghiệp vụ",
          "Phân tích dữ liệu",
          "Phát triển dự án",
          "Hỗ trợ doanh nghiệp đưa ra quyết định dựa trên dữ liệu",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
