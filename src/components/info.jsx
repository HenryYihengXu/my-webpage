import React from "react";
import Typography from "@material-ui/core/Typography";

const address = " 1402 Regent St, Apt 219A, Madison, WI 53711";
const title =
  "Senior Computer Science Student at University of Wisconsin-Madison";
const emailAddress = " xu443@wisc.edu ";
const phoneNumber = " 608-504-0524";

const Info = () => {
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <h4>
          <b>Yiheng Xu</b>
        </h4>
        <h6>{title}</h6>
        <h6>
          <i class="fas fa-map-marker-alt"></i>
          {address}
        </h6>
        <h6>
          <i class="far fa-envelope"></i>
          {emailAddress}&nbsp;&nbsp;&nbsp;&nbsp;
          <i class="fas fa-mobile-alt"></i>
          {phoneNumber}
        </h6>
        <br />
      </div>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt.
        <a id="education" /> Ornare suspendisse sed nisi lacus sed viverra
        tellus. Purus sit amet volutpat consequat
      </Typography>{" "}
    </React.Fragment>
  );
};

export default Info;
