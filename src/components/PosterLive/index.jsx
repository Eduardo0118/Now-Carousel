import React from "react";
import "./styles.scss";

//components
import Poster from "../Poster";
import ProviderTicket from "../ProviderTicket";

//icons
import PlayIcon from "../../assets/open-player-absolute.svg";

const PosterLiveInfo = ({
  data,
  provider,
  title,
  schedule,
  progress,
  progressColor,
  link,
}) => {
  return (
    <a className="poster-live-container" href={link}>
      <Poster hover={false} type="live" data={data}>
        {provider && <ProviderTicket>{provider}</ProviderTicket>}

        <div className="poster-live-wrapper">
          <div className="poster-live-icon">
            <img
              src={PlayIcon}
              style={{ color: "#FFF", height: 50 }}
              alt="Icon de play"
            />
          </div>
          <div className="poster-live-progress">
            <div
              style={{
                width: `${progress}%`,
                height: 3,
                background: progressColor,
              }}
            />
          </div>
        </div>

        <div className="poster-live-info">
          <h4>{title}</h4>
          <p>{schedule}</p>
        </div>
      </Poster>
    </a>
  );
};

export default PosterLiveInfo;
