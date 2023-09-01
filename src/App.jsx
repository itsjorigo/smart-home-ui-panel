import "./App.css";
import Header from "./compornents/header/header";
import DeviceCard from "./compornents/device_card/device_card";
import LocationChip from "./compornents/location_chip/location_chip";
import { useState } from "react";

function App() {
  const devices = [
    {
      
      image:
        "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      location: "Living Room",
      name: "Main Light",
    },
    {
      image:
        "https://images.unsplash.com/photo-1589834128806-94cdcec1d2e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      location: "Living Room",
      name: "Ceiling Fan",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1668005190411-1042cd38522e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      location: "Bed Room",
      name: "Night Light",
    },
    {
      image:
        "https://images.unsplash.com/photo-1632678891426-6cbfdd71fa72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1880&q=80",
      location: "Living Room",
      name: "CCTV",
    },
  ];

  const locations = ["All", "Living Room", "Bed Room"];

  const [selectedLocation, setSelecteLoccation] = useState("All");

  const handleLocationSelect = (location) => {
    setSelecteLoccation(location);
  };

  const filteredDevices =
    selectedLocation === "All"
      ? devices
      : devices.filter((device) => {
          return device.location === selectedLocation;
        });

  return (
    <div className="App">
      <div className="sidebar"></div>
      <div className="widgets"></div>
      <div className="home">
        <Header />
        <div className="devices_section">
          <h1 className="devices_section_heading">Devices</h1>
          <div className="menu_bar">
            {locations.map((location, i) => {
              return (
                <LocationChip
                  key={i}
                  location={location}
                  selectedLocation={selectedLocation}
                  handleLocationSelect={handleLocationSelect}
                />
              );
            })}
          </div>
          <div className="devices_container">
            {filteredDevices.map((device, i) => {
              return (
                <DeviceCard key={i} image={device.image} name={device.name} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


// import "./App.css";
// import DeviceCard from "./components/device_card/device_card";
// import Header from "./components/header/header";

// function App() {
//   const devices = ["Main Light", "Celing Fan", "Night Light", "CCTV"];

//   return (
//     <div className="App">
//       <div className="sidebar"></div>
//       <div className="widgets"></div>

//       <div className="home">
//         <Header />

//         <div className="devices_section">
//           <h1 className="device_section_heading">Devices</h1>
//           <div className="devices_container">
//             <DeviceCard
//               image="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
//               name="Main Light"
//             />
//             <DeviceCard
//               image="https://images.unsplash.com/photo-1589834128806-94cdcec1d2e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
//               name="Ceiling Fan"
//             />
//             <DeviceCard
//               image="https://plus.unsplash.com/premium_photo-1668005190411-1042cd38522e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
//               name="Night Light"
//             />
//             <DeviceCard
//               image="https://images.unsplash.com/phoo-1643123182527-3bd30840e7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
//               name="CCTV"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;