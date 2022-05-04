import React from "react";
import { Paper, Button } from "@material-ui/core";

function Project(props) {
  return (
    <Paper
      className="Project"
      style={{
        // backgroundColor: props.item.color
        backgroundImage: `url("${props.item.image}")`,
        backgroundRepeat: "no-repeat"
      }}
      elevation={10}
    >
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Project;
