"use client";

import { useEffect, useState } from "react";
import { v4 } from "uuid";

interface Vehicle {
  id: string;
  license: string;
  brand: string;
}

const MAX_VEHICLES = 10;
const MIN_VEHICLES = 1;
const BRANDS = ["Scania", "Volvo", "DAF", "Renault", "Iveco", "MAN"];

const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  // Add random vehicle at first render
  useEffect(() => {
    addVehicle();
  }, []);

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
      <div className="flex flex-col justify-center">
        <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100 flex flex-row justify-between">
            <h2 className="font-semibold text-gray-800">Vehicles</h2>
            <div>
              <button
                className="px-4 py-2 text-xs font-semibold uppercase text-gray-400 bg-gray-50 hover:bg-gray-200 disabled:cursor-not-allowed transition mr-2"
                onClick={addVehicle}
                disabled={vehicles.length === MAX_VEHICLES}
              >
                Add
              </button>
              <button
                className="px-4 py-2 text-xs font-semibold uppercase text-gray-400 bg-gray-50 hover:bg-gray-200 disabled:cursor-not-allowed transition"
                onClick={removeVehicle}
                disabled={vehicles.length === MIN_VEHICLES}
              >
                Remove
              </button>
            </div>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">License</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Brand</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Value</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Driver</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {vehicles.map((v: Vehicle) => (
                    <tr key={v.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-gray-800">
                          {v.license}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{v.brand}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          &euro; 1.337,69
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">R. van Rees</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
