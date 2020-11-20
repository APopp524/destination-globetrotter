import React from "react";
import TripItems from "./TripItems";
import TripDashboard from "./TripDashboard";

function Trips(props) {
  if (props.id) return TripDashboard(props.id);  
  else return TripItems();
}

export default Trips;
