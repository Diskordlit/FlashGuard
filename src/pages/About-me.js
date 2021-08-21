import React from "react";
import { useStyles } from "../styling/useStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import NavBar from "../component/NavBar";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import lighthouse from "../assets/lighthouse.svg";
import plans from "../assets/plans.svg";

export default function AboutMe() {
  const classes = useStyles();
  const TypoStyle = { textAlign: "justify" };
  const liMarginBottom = "40px";
  document.body.style = "background: #0B3E82;";
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "100px" }}>
        <Card variant="outlined" style={{ backgroundColor: "#0B3E82" }}>
          <CardContent>
            <h1>About Us</h1>
            <Accordion style={{ backgroundColor: "#19A9AD" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ backgroundColor: "#19A9AD" }}
              >
                <Typography className={classes.heading}>
                  <b>Who are we?</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A small group of students that plans to Prevent seizure caused
                  by photosensitivity using:
                  <ul style={{textAlign: "left"}}>
                    <li>
                      Preexisting API that have data on flashing lights
                      Crowd-sourcing data
                    </li>
                    <li>Crowd-sourcing data Help those who have seizures</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion style={{ backgroundColor: "#19A9AD" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  <b>What is epilepsy</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
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
            <Accordion style={{ backgroundColor: "#19A9AD" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className={classes.heading}>
                  <b>Future plans</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <img
                  src={plans}
                  alt="teaching"
                  height="240px"
                  width="240px"
                ></img>
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
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
