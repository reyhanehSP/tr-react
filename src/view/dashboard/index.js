import * as React from "react";
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import {Icon} from 'leaflet';
import { FcAssistant } from "@react-icons/all-files/fc/FcAssistant";
import { FcInTransit } from "@react-icons/all-files/fc/FcInTransit";
import { FcPaid } from "@react-icons/all-files/fc/FcPaid";
import { FcNook } from "@react-icons/all-files/fc/FcNook";
import { FcShop } from "@react-icons/all-files/fc/FcShop";
import { FcPortraitMode } from "@react-icons/all-files/fc/FcPortraitMode";
import BasicTable from '../material/table';
class Dashboard extends React.Component {

    render() {
        function createData(name, calories, fat, carbs, protein) {
            return { name, calories, fat, carbs, protein };
        }
        const rowsHeader = ['Dessert (100g serving)','Calories','Fat (g)' , 'Carbs (g)','Protein (g)']
        const rows = [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
        ];
        // const icon = icon({ iconUrl: Marker });
        return (
            <div>
                <div className="row mt-3 mb-1 mx-0">
                    <div className="col-xl-2">
                        <div className="card card-box mb-5">
                            <div className="card-body">
                                <div className="align-box-row align-items-start">
                                    <div className="font-weight-bold max-width-70">
                                        <label className="font-base text-black-50 ellipsis d-block mb-1">فروشگاه</label>
                                        <span className="mt-1">586,356</span></div>
                                    <div className="mr-auto">
                                        <div
                                            className="text-center font-large d-50 rounded-circle">
                                            <FcShop icon={FcShop}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="card card-box mb-5">
                            <div className="card-body">
                                <div className="align-box-row align-items-start">
                                    <div className="font-weight-bold max-width-70">
                                        <label className="font-base text-black-50 ellipsis d-block mb-1">کالاها</label>
                                        <span className="mt-1">586,356</span></div>
                                    <div className="mr-auto">
                                        <div
                                            className="text-center font-large d-50 rounded-circle">
                                            <FcPaid icon={FcPaid}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="card card-box mb-5">
                            <div className="card-body">
                                <div className="align-box-row align-items-start">
                                    <div className="font-weight-bold max-width-70">
                                        <label className="font-base  text-black-50 ellipsis d-block mb-1">تامین کنندگان
                                            بررسی نشده</label>
                                        <span className="mt-1">586,356</span></div>
                                    <div className="mr-auto">
                                        <div
                                            className="text-center font-large d-50 rounded-circle">
                                            <FcInTransit icon={FcInTransit}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="card card-box mb-5">
                            <div className="card-body">
                                <div className="align-box-row align-items-start">
                                    <div className="font-weight-bold max-width-70">
                                        <label className="font-base text-black-50 ellipsis d-block mb-1">درخواست های
                                            باز</label>
                                        <span className="mt-1">586,356</span></div>
                                    <div className="mr-auto">
                                        <div
                                            className="text-center font-large d-50 rounded-circle">
                                            <FcAssistant icon={FcAssistant}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="card card-box mb-5">
                            <div className="card-body">
                                <div className="align-box-row align-items-start">
                                    <div className="font-weight-bold max-width-70">
                                        <label className="font-base text-black-50 ellipsis d-block mb-1">فاکتورهای
                                            باز</label>
                                        <span className="mt-1">586,356</span></div>
                                    <div className="mr-auto">
                                        <div
                                            className="text-center font-large d-50 rounded-circle">
                                            <FcNook icon={FcNook}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="card card-box mb-5">
                            <div className="card-body">
                                <div className="align-box-row align-items-start">
                                    <div className="font-weight-bold max-width-70">
                                        <label className="font-base text-black-50 ellipsis d-block mb-1">افراد
                                            آنلاین</label>
                                        <span className="mt-1">586,356</span></div>
                                    <div className="mr-auto">
                                        <div
                                            className="text-center font-large d-50 rounded-circle">
                                            <FcPortraitMode icon={FcPortraitMode}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <BasicTable rows={rows} rowsHeader={rowsHeader}/>
                </div>
                <div className="row mx-0">
                    <div className="mb-2">
                        <Map className="map" center={[31.996043, 51.9509980]} zoom={4.9} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[31.996043, 51.9509980]}
                                    icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                                <Popup>
                                    A pretty CSS3 popup. <br/> Easily customizable.
                                </Popup>
                            </Marker>
                        </Map>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard