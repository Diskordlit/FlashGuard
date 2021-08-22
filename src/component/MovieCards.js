import { Card, Typography, Grid } from "@material-ui/core";
import React from 'react';

var showTitle, releaseYear, genre, showComments;

const fetchHeaders = {
  headers: {
    Accept: "application/json",
    "X-API-KEY": "d670056d6eae327a1c60f652a2476a86",
  },
  method: "GET",
};

//const safeShows = [21125, 13823, 13954, 16891, 16645, 18704, 19408, 201240, 14113, 9903, 31911, ];
const riskShows = [700663, 17596, 21573, 16361, 20449, 16927, 15890, 14919, 20457, 15214, 12847, 22205, 11398]
function getShowData(showId, index) {
  const urlShowData =
    "https://chrome-extension-cors-anywhere.herokuapp.com/https://www.doesthedogdie.com/media/" +
    showId;
  const id2 = "A" + index;
  const id3 = "B" + index;
  const id4 = "C" + index;


  fetch(urlShowData, fetchHeaders)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      showTitle = res.topicItemStats[52].itemName;
      releaseYear = res.topicItemStats[52].releaseYear || "NA";
      genre = res.item.genre;
      showComments = res.topicItemStats[52].comment || "Movie contains flashing lights or rapidly changing or alternating images (e.g. lightning, flickering lights, ambulance lights, gunfire, fast cuts, club scenes, etc.)";


      console.log("Show Id is " + showId);
      console.log("Show Name is " + showTitle);

      document.getElementById(index).innerHTML = showTitle;
      document.getElementById(id2).innerHTML = releaseYear;
      document.getElementById(id3).innerHTML = genre;
      document.getElementById(id4).innerHTML = showComments;
    })
    .catch((error) => console.log(error));

  console.log(index);

  // #19A9AD turqoise
  // #0B3E82 dark blue
  // #AC4298 purple

  return (
        <Grid item xs={12} sm={3} >
          <Card style={{ padding: 10, color: 'white', height: 'auto', minHeight: 350, maxHeight: 350, overflowY:'auto', width: 350, margin: 10, backgroundColor: '#564FCC' }}>
              <hr style={{ backgroundColor: "black", height: '2px', border: 0 }}></hr>
              <Typography
                id={index}
                variant="h5"
                style={{ display: "inline-block", margin: 2 }}
              />
              <Typography style={{ display: "inline-block" }}>(</Typography>
              <Typography id={id2} variant="h7" style={{ display: "inline-block", margin: 2 }} />
              <Typography style={{ display: "inline-block" }}>)</Typography>
              <Typography id={id3} style={{ fontWeight: "bold" }}></Typography>
              <hr style={{ backgroundColor: "black", height: '2px', border: 0 }}></hr>
              <Typography id={id4}></Typography>
          </Card>
        </Grid>
  );
}



export default function MovieCards() {
  return (
    <div>
      <Grid container spacing={2} style={{ marginTop: 40 }}>
        {riskShows &&
          riskShows.map((safeShow, index) => getShowData(safeShow, index))}
      </Grid>
    </div>
  );
}
