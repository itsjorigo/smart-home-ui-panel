import { useState } from "react";
import s from "./device_card.module.css";
import { PowerIcon } from "@heroicons/react/24/solid";

function DeviceCard(props) {
  const [isOn, setIsOn] = useState(false);
  const state = isOn ? "On" : "Off";
  //   const [count, setCount] = useState(0);

  const handleClick = () => {
    setIsOn(!isOn);
    // setCount((n) => {
    //     return n + 1;
    // });
  };

  return (
    <div className={s.device_card}>
      <img className={s.device_card_img} src={props.image} alt=""></img>
      <div className={s.device_car_info}>
        <div className={s.device_card_info_container}>
          <h1 className={s.device_card_text}>{props.name}</h1>
          <button
            type="button"
            onClick={handleClick}
            className={isOn ? s.device_card_icon_on : s.device_card_icon_off}
          >
            <PowerIcon width={36} height={36} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeviceCard;

// import s from "./device_card.module.css";

// function DeviceCard(props) {
//   return (
//     <div className={s.device_card}>
//       <img className={s.device_card_img} src={props.image} alt=""></img>
//       <div className={s.device_car_info}>
//         <div className={s.device_card_info_container}>
//           <h3 className={s.device_card_text}>{props.name}</h3>
//           <button
//           type="button"
//           //onClick={handleClick}
//           classname={s.device_card_icon}
//           >
//             <PowerIcon width={36} height={36}/>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DeviceCard;
