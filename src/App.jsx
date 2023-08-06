import "./App.css";
import Header from "./compornents/header/header";
import DeviceCard from "./compornents/header/device_card/device_card";

function App() {
  const devices = [
    {
      image:
        "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      name: "Main Light",
    },
    {
      image:
        "https://images.unsplash.com/photo-1589834128806-94cdcec1d2e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "Ceiling Fan",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1668005190411-1042cd38522e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "Night Light",
    },
    {
      image:
        "https://images.unsplash.com/photo-1643123182527-3bd30840e7ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      name: "CCTV",
    },
  ];

  return (
    <div className="App">
      <div className="sidebar"></div>
      <div className="widgets"></div>
      <div className="home">
        <Header />
        <div className="devices_section">
          <h1 className="devices_section_heading">Devices</h1>
          <div className="devices_container">
            {devices.map((device, i) => {
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
