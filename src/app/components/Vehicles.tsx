"use client";

import { useState } from "react";
import { v4 } from "uuid";

interface Vehicle {
  id: string;
  license: string;
  brand: string;
}

const MAX_VEHICLES = 10;
const BRANDS = ["Scania", "Volvo", "DAF", "Renault", "Iveco", "MAN"];

const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const addVehicle = () => {
    setVehicles([
      ...vehicles,
      {
        id: v4(),
        license: randomLicense(),
        brand: BRANDS[Math.floor(Math.random() * BRANDS.length)],
      },
    ]);
  };

  const removeVehicle = () => {
    setVehicles(vehicles.slice(0, -1));
  };

  const randomLicense = (): string => {
    // Dutch example: 91-BSR-3
    return `${Math.floor(Math.random() * 100)}-${randomCharacterString(
      3
    )}-${Math.floor(Math.random() * 10)}`;
  };

  // Source: https://codepal.ai/code-generator/query/D5rDijgo/javascript-generate-random-3-letter-string
  const randomCharacterString = (length: number): string => {
    const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      result += alphabet[randomIndex];
    }

    return result;
  };

  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl px-4 sm:px-6 lg:px-8 py-4">
      <button
        className="px-4 py-1 bg-black/10 hover:bg-black/20 disabled:text-black/50 transition mr-2 mb-2"
        onClick={addVehicle}
        disabled={vehicles.length === MAX_VEHICLES}
      >
        Add
      </button>
      <button
        className="px-4 py-1 bg-black/10 hover:bg-black/20 disabled:text-black/50 transition"
        onClick={removeVehicle}
        disabled={vehicles.length === 0}
      >
        Remove
      </button>
      {vehicles.map((v: Vehicle) => (
        <p key={v.id}>{`${v.license} | ${v.brand}`}</p>
      ))}
    </div>
  );
};

export default Vehicles;
