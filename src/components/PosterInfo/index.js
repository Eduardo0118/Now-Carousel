import React from "react";
import Logo from "../../assets/telecine.png";

//components
import PosterRating from "../PosterRating";

import "./style.scss";

export default function PosterInfo({ type, data }) {
  const headerContent = (type) => {
    const content = {
      portrait: <img className="logo-portrait" alt="Logo" src={Logo} />,
      landscape: (
        <PosterRating
          type="header"
          rating={["Claro vídeo", "Fox premium", "Fox"]}
        />
      ),
    };

    return content[type];
  };

  return (
    <div>
      {headerContent(type)}
      <h5
        className={
          type === "portrait" ? "info-title-portrait" : "info-title-landscape"
        }
      >
        {data.original_title}
      </h5>
      <PosterRating rating={["2010", "Ação", "Dublado"]} age="free" />
      <p>{data.overview}</p>
    </div>
  );
}
