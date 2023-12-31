import destinations from '@/lib/destinations.json';
import { FC } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import Image from 'next/image';
import Link from 'next/link';

const Map: FC = () => {
  return (
    <MapContainer
      center={[21.500353252696783, 35.067585836584584]}
      zoom={2}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />

      {destinations.map((d) => (
        <Marker position={[d.latitude, d.longitude]} key={d.id}>
          <Popup>
            <Image
              src={d.image}
              alt={d.name}
              width={200}
              height={200}
              className="rounded-lg min-w-[180px] w-full h-[100px] object-cover"
            />
            <div className="flex justify-between items-center">
              <h1 className="text-md sm:text-lg font-bold mt-1">{d.name}</h1>
              <Link href={`/destinations/${d.id}`}>
                <span className="text-blue-500 underline">View</span>
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
