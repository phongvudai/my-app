import { useEffect, useState } from "react";
import LocationDataService from "../services/location.service";

export interface ILocation {
  id: string;
  name: string;
  notation: string;
  address: string;
}

export default function Location() {
  const [locations, setLocations] = useState<ILocation[]>([]);

  const initLocation = async () => {
    const locationData = await LocationDataService.getAll();
    setLocations(locationData);
  };

  useEffect(() => {
    initLocation();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Notation</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {locations.map((location) => (
            <tr key={location.id}>
              <td>{location.notation}</td>
              <td>{location.name}</td>
              <td>{location.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
