"use client";

import React from "react";
import Aos from "aos";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import axios from "axios";
import { Button, Card, Col, Grid, Loading, Row, Text } from "@nextui-org/react";
import { NextUIProvider, Table, styled, Modal } from "@nextui-org/react";
import GoogleMapReact from "google-map-react";

const defaultProps = {
  center: {
    lat: 6.465422,
    lng: 3.406448,
  },
  zoom: 11,
};
const App = () => {
  return (
    <NextUIProvider>
      <div>
        <Header activePage={"Dashboard"} />
        <main classNameg ={`bg-[#fff] text-[black] mb-0 m-0 md:w-[80%] w-[90%] flex-1`}>
          <p className="ml-3">Table View</p>
          <div className="m-2">
            <Table>
              <Table.Header>
                <Table.Column>Name</Table.Column>
                <Table.Column>Phone Number</Table.Column>
                <Table.Column>Email</Table.Column>
                <Table.Column>Address</Table.Column>
                <Table.Column>Longitude</Table.Column>
                <Table.Column>Latitude</Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Agu Christopher</Table.Cell>
                  <Table.Cell>08025219762 </Table.Cell>
                  <Table.Cell>aguchris740@gmail.com</Table.Cell>
                  <Table.Cell>20 Jesus Street</Table.Cell>
                  <Table.Cell>1.235555</Table.Cell>
                  <Table.Cell>3.9999</Table.Cell>
                  {/* <Table.Cell>Active</Table.Cell> */}
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Agu Christopher</Table.Cell>
                  <Table.Cell>08025219762 </Table.Cell>
                  <Table.Cell>aguchris740@gmail.com</Table.Cell>
                  <Table.Cell>20 Jesus Street</Table.Cell>
                  <Table.Cell>1.235555</Table.Cell>
                  <Table.Cell>3.9999</Table.Cell>
                  {/* <Table.Cell>Active</Table.Cell> */}
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Agu Christopher</Table.Cell>
                  <Table.Cell>08025219762 </Table.Cell>
                  <Table.Cell>aguchris740@gmail.com</Table.Cell>
                  <Table.Cell>20 Jesus Street</Table.Cell>
                  <Table.Cell>1.235555</Table.Cell>
                  <Table.Cell>3.9999</Table.Cell>
                  {/* <Table.Cell>Active</Table.Cell> */}
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
          <p className="ml-3 m-2">Map View</p>
          <div className="w-full h-[300px] m-2">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              {/* <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            /> */}
            </GoogleMapReact>
          </div>
        </main>
      </div>
    </NextUIProvider>
  );
};

export default App;
