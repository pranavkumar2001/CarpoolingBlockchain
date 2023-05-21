/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function Notifications() {
  const classes = useStyles();
  const [ tl, setTL ] = React.useState(false);
  const [ tc, setTC ] = React.useState(false);
  const [ tr, setTR ] = React.useState(false);
  const [ bl, setBL ] = React.useState(false);
  const [ bc, setBC ] = React.useState(false);
  const [ br, setBR ] = React.useState(false);
  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
 
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Notifications</h4>
        <p className={classes.cardCategoryWhite}>
          <a
            target="_blank"
            href="https://material-ui-next.com/?ref=creativetime"
          >
          </a>{" "}
          <a
            target="_blank"
            href="https://www.creative-tim.com/?ref=mdr-notifications-page"
          >
          </a>
          <a href="#pablo" target="_blank">
          </a>
          .
        </p>
      </CardHeader>
      <CardBody>
        <GridContainer>
          {/* <GridItem xs={12} sm={12} md={6}>
            <h5></h5>
            <br />
            <SnackbarContent message={""} />
            <SnackbarContent
              message={""}
              close
            />
            <SnackbarContent
              message={""}
              close
              icon={AddAlert}
            />
            <SnackbarContent
              message={
                ""
              }
              close
              icon={AddAlert}
            />
          </GridItem> */}
          {/* <GridItem xs={12} sm={12} md={6}>
            <h5>Notifications States</h5>
            <br />
            <SnackbarContent
              message={
                ''
              }
              close
              color="info"
            />
            <SnackbarContent
              message={
                  ""
              }
              close
              color="success"
            />
            <SnackbarContent
              message={
                ''
              }
              close
              color="warning"
            />
            <SnackbarContent
              message={
                ''
              }
              close
              color="danger"
            />
            <SnackbarContent
              message={
                ''
              }
              close
              color="primary"
            />
          </GridItem> */}
        </GridContainer>
        <br />
        <br />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
            <h5>
              
              <br />
              <small></small>
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                {/* <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("tl")}
                >
                  Top Left
                </Button> */}
                <Snackbar
                  place="tl"
                  color="info"
                  icon={AddAlert}
                  message="No new notifications"
                  open={tl}
                  closeNotification={() => setTL(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                {/* <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("tc")}
                >
                  Top Center
                </Button> */}
                <Snackbar
                  place="tc"
                  color="info"
                  icon={AddAlert}
                  message=""
                  closeNotification={() => setTC(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                {/* <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("tr")}
                >
                  Top Right
                </Button> */}
                <Snackbar
                  place="tr"
                  color="info"
                  icon={AddAlert}
                  message=""
                  open={tr}
                  closeNotification={() => setTR(false)}
                  close
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer justify={"center"}>
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                {/* <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("bl")}
                >
                  Bottom Left
                </Button> */}
                <Snackbar
                  place="bl"
                  color="info"
                  icon={AddAlert}
                  message=""
                  open={bl}
                  closeNotification={() => setBL(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                {/* <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("bc")}
                >
                  Bottom Center
                </Button> */}
                <Snackbar
                  place="bc"
                  color="info"
                  icon={AddAlert}
                  message=""
                  open={bc}
                  closeNotification={() => setBC(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                {/* <Button
                  fullWidth
                  color="primary"
                  onClick={() => showNotification("br")}
                >
                  Bottom Right
                </Button> */}
                <Snackbar
                  place="br"
                  color="info"
                  icon={AddAlert}
                  message=""
                  open={br}
                  closeNotification={() => setBR(false)}
                  close
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  );
}
