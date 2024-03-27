import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import Menu from './components/Menu'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const Contact = () =>
{
    const geoData = ({lat:29.9773473 , lng:31.1309613})
    return(
        <>
        <Menu/>
        <div>
            <h1>Contato</h1>
            <div>
                <h2>Mapa</h2>
                <div>
                <MapContainer center={[geoData.lat, geoData.lng]} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "700px"}}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[geoData.lat, geoData.lng]}>
                    <Popup>
                        <a href="https://www.google.com.br/maps/place/Pir%C3%A2mides+de+Giz%C3%A9/@29.9773473,31.1309613,17z/data=!4m14!1m7!3m6!1s0x14584f7de239bbcd:0xca7474355a6e368b!2zUGlyw6JtaWRlcyBkZSBHaXrDqQ!8m2!3d29.9772962!4d31.1324955!16s%2Fm%2F07s6gb8!3m5!1s0x14584f7de239bbcd:0xca7474355a6e368b!8m2!3d29.9772962!4d31.1324955!16s%2Fm%2F07s6gb8?entry=ttu">Google Maps</a>
                    </Popup>
                    </Marker>
                </MapContainer>,
                </div>
            </div>
        </div>
        </>
    )
}