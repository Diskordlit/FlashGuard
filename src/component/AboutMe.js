import React from "react";
import { useStyles } from "../styling/useStyles";
import { Card, Paper, Grid, Button } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import NavBar from "./NavBar";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import lighthouse from "../assets/lighthouse.svg";
import plans from "../assets/plans.svg";
import scum from "../assets/scum.svg";


export default function AboutMe() {
  const classes = useStyles();
  const TypoStyle = { textAlign: "justify", color: "white", marginTop: 40, marginLeft: 100 };
  const liMarginBottom = "40px";
  document.body.style = "background: #0B3E82;";
  return (
    <div>
      <Grid justifyContent="center" container spacing={3}>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <h1>About Us</h1>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <CardContent>
            <Accordion style={{ backgroundColor: "#0D5E60" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ backgroundColor: "#353349" }}
              >
                <Typography className={classes.heading}>
                  <b>Who are we?</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#5B587C"}}>
                <Typography style={{ color: "white", justifyContent: "center", textAlign: "center", marginTop: 60, marginLeft: 90 }}>
                  A small group of students that plans to Prevent seizure caused
                  by photosensitivity using:
                  <ul style={{ textAlign: "left" }}>
                    <li>
                      Preexisting API that have data on flashing lights
                      Crowd-sourcing data
                    </li>
                    <li>Crowd-sourcing data Help those who have seizures</li>
                  </ul>
                </Typography>
                <img
                  src={scum}
                  alt="scrum"
                  height="240px"
                  width="240px"
                  position="absolute"
                  right="0"
                  style={{marginLeft: 500}}
                ></img>
              </AccordionDetails >
            </Accordion>
            <Accordion style={{ backgroundColor: "#353349" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  <b>What is epilepsy</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#5B587C" }}>
                <img
                  src={lighthouse}
                  alt="lighthouse"
                  height="240px"
                  width="240px"
                ></img>
                <Typography style={TypoStyle}>
                  Epilepsy is a chronic neurological disorder of the brain that
                  affects around 50 million people worldwide. The early
                  detection of epileptic seizures using electroencephalogram
                  (EEG) signals is a useful tool for several applications in
                  epilepsy diagnosis. Many techniques have been developed for
                  unscrambling the underlying features of seizures present in
                  EEGs. This article reviews the seizure detection algorithms
                  developed in the last decade. In general terms, techniques
                  based on the wavelet transform, entropy, tensors, empirical
                  mode decomposition, chaos theory, and dynamic analysis are
                  surveyed in the field of epilepsy detection. A performance
                  comparison of the reviewed algorithms is also conducted. The
                  needs for a reliable practical implementation are highlighted
                  and some future prospectives in the area are given. Epilepsy
                  detection research is oriented to develop non-invasive and
                  precise methods to allow precise and quick diagnoses. Finally,
                  the lack of standardization of the methods in the epileptic
                  seizure detection field is an emerging problem that has to be
                  solved to allow homogenous comparisons of detector
                  performance.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ backgroundColor: "#353349" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                
              >
                <Typography className={classes.heading}>
                  <b>Future plans</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ backgroundColor: "#5B587C" }}>
                <Typography style={TypoStyle}>
                  <ul>
                    <li style={{ marginBottom: liMarginBottom }}>
                      Gaze tracking
                    </li>
                    <li style={{ marginBottom: liMarginBottom }}>
                      General video algorithm that checks for epilepsy-inducing
                      frames
                    </li>
                    <li style={{ marginBottom: liMarginBottom }}>
                      Community based forums to serve as support groups for
                      people who suffer from epilepsy
                    </li>
                  </ul>
                </Typography>
                <img
                  src={plans}
                  alt="teaching"
                  height="240px"
                  width="240px"
                  style={{marginLeft: 500}}
                ></img>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
