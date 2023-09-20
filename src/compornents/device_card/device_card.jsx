import { useState } from "react";
import s from "./device_card.module.css";
import PropTypes from "prop-types";
import { PowerIcon } from "@heroicons/react/24/solid";

function DeviceCard(props) {

  const handleClick = () => {
    props.handleDeviceUpdate(props.device._id);
  };

  return (
    <div className={s.device_card}>
      <img className={s.device_card_img} src={props.device.image} alt=""></img> 
      <div className={s.device_car_info}>
        <div className={s.device_card_info_container}>
          <h1 className={s.device_card_text}>{props.device.name}</h1>
          <button
            type="button"
            onClick={handleClick}
            className={props.device.state ? s.device_card_icon_on : s.device_card_icon_off}
          >
            <PowerIcon width={36} height={36} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeviceCard;


