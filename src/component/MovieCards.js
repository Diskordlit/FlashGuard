import { Card, CardMedia, Typography , Grid} from "@material-ui/core";
import { Title } from "@material-ui/icons";

var showRisk, showTitle, releaseYear, genre, showComments;

const fetchHeaders = {
  headers: {
    Accept: "application/json",
    "X-API-KEY": "d670056d6eae327a1c60f652a2476a86",
  },
  method: "GET",
};

//const safeShows = [21125, 13823, 13954, 16891, 16645, 18704, 19408, 201240, 14113, 9903, 31911, ];
const riskShows = [700663, 17596,21573,16361,20449,13163,16927,15890,14919,20457,15214,12847,22205,14300,16443,11398]
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
      showComments = res.topicItemStats[52]?.comment || "Movie contains flashing lights or rapidly changing or alternating images (e.g. lightning, flickering lights, ambulance lights, gunfire, fast cuts, club scenes, etc.)";

      showRisk = res.topicItemStats[52].isYes; // 1 indicates risky

      console.log("Show Id is " + showId);
      console.log("Show Name is " + showTitle);

      document.getElementById(index).innerHTML = showTitle;
      document.getElementById(id2).innerHTML = releaseYear;
      document.getElementById(id3).innerHTML = genre;
      document.getElementById(id4).innerHTML = showComments;
    })
    .catch((error) => console.log(error));

  console.log(showTitle);

  // #19A9AD turqoise
  // #0B3E82 dark blue
  // #AC4298 purple
  
  return (
    <>
      <Card style={{ height: 350, width: 350 , margin: 10, backgroundColor: '#19A9AD'}}>
        <div>
          <Typography style={{ display: "inline-block", textAlign: "left" }}>
            {index + 1}.)  
          </Typography>
          <Typography
            id={index}
            style={{ display: "inline-block", margin: 2 }}
          />
          <Typography style={{ display: "inline-block" }}>(</Typography>
          <Typography id={id2} style={{ display: "inline-block", margin: 2 }} />
          <Typography style={{ display: "inline-block" }}>)</Typography>
          <Typography id={id3}></Typography>
          <hr style={{backgroundColor: "black", height: '2px', border: 0}}></hr>
          <Typography id={id4}></Typography>
        </div>
      </Card>
    </>
  );
}



export default function MovieCards() {
  return (
    <div>
      <Grid container spacing={2} style={{marginTop: 40}}>
        {riskShows &&
          riskShows.map((safeShow, index) => getShowData(safeShow, index))}
      </Grid>
    </div>
  );
}