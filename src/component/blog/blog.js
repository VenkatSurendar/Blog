import React from "react";
import Navbar from "../navbar/NavBar";
import { Container } from "@mui/material";
import "./blog.css";

function blog() {
  return (
    <div className="blog">
      <Navbar />
      <Container>
        Nunc egestas velit at nibh vehicula convallis. Phasellus efficitur nibh
        quis metus consequat, iaculis convallis justo mollis. Nulla sit amet
        quam accumsan, pulvinar nunc nec, convallis magna. Sed mattis sem quis
        tellus pulvinar, nec suscipit enim vulputate. Vivamus placerat est quis
        auctor elementum. Cras nec sapien lacinia orci faucibus efficitur eu sed
        ante. Donec feugiat aliquam ex eu pharetra. Nullam maximus felis a felis
        egestas, non placerat diam congue. Etiam id varius augue. Vivamus
        iaculis ligula sollicitudin tristique ullamcorper. Vivamus viverra, erat
        vitae convallis vehicula, magna erat efficitur elit, imperdiet tempus
        turpis magna cursus quam. Ut augue felis, commodo a vehicula eu,
        ultrices eget augue.
      </Container>
    </div>
  );
}

export default blog;
