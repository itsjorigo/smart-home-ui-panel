import Header from "../compornents/header/header";
import LocationChip from "../compornents/location_chip/location_chip";
import SearchBar from "../compornents/search-bar/search-bar";
import DeviceCard from "../compornents/device_card/device_card";
import { useState, useEffect } from "react";

function Home() {

    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const [selectedLocation, setSelecteLoccation] = useState("All");
    const [searchValue, setSearchValue] = useState("");
  
    const handleSearchTyping = (value) => {
      setSearchValue(value);
      console.log(value);
    };
  
    useEffect(() => {
      const getDevices = async () => {
        const response = await fetch(
          "https://smart-home-ui-api-production.up.railway.app/api/devices",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        console.log(data.data);
        setDevices(data.data);
      };
      getDevices();
      setLoading(false);
    }, []);
  
    const locations = ["All", "Living Room", "Bed Room"];
  
    const handleLocationSelect = (location) => {
      setSelecteLoccation(location);
    };
  
    const handleDeviceUpdate = (_id) => {
      setDevices((currentDevices) => {
        const updatedDevices = currentDevices.map((currentDevice) => {
          if (currentDevice._id === _id) {
            return {
              _id: currentDevice._id,
              name: currentDevice.name,
              image: currentDevice.image,
              location: currentDevice.location,
              state: !currentDevice.state,
            };
          }
          return currentDevice;``
        });
        return updatedDevices;
      });
    };
  
    const filteredDevices =
      selectedLocation === "All"
        ? devices.filter((device) => {
            return device.name
              .replace(" ", "")
              .toLowerCase()
              .includes(searchValue);
          })
        : devices.filter((device) => {
            return (
              device.location === selectedLocation &&
              device.name.replace(" ", "").toLowerCase().includes(searchValue)
            );
          });

    return(
        <div className="home">
        <Header />
        <div className="devices_section">
          <h1 className="devices_section_heading">Devices</h1>
          <div className="menu_bar">
            <div className="menubar_item_container">
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
            <SearchBar handleSearchTyping={handleSearchTyping} searchValue={searchValue} />
          </div>
          <div className="devices_container">
            {!loading ? (
              filteredDevices.map((device) => {
                return (
                  <DeviceCard
                    key={device._id}
                    device={device}
                    handleDeviceUpdate={handleDeviceUpdate}
                  />
                );
              })
            ) : (
              <h1>Loading.....</h1>
            )}
          </div>
        </div>
      </div>
    )
}

export default Home;