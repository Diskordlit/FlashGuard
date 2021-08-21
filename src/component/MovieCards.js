import { Card } from "@material-ui/core";
import { Title } from "@material-ui/icons";

var showId, showData, showRisk, yesVotes, noVotes, riskDescription, showTitle;

const fetchHeaders = {
  headers: {
    Accept: "application/json",
    "X-API-KEY": "d670056d6eae327a1c60f652a2476a86",
  },
  method: "GET",
};

// function getShowId(showId) {
//   //var showTitle = document.querySelector("div[class=about-header] > h3 > strong").innerHTML; //get show name
//   const showTitle = "bojack";
//   console.log(showTitle); // get movie name

//   const urlShowId =
//     "https://chrome-extension-cors-anywhere.herokuapp.com/https://www.doesthedogdie.com/dddsearch?q=" +
//     showTitle;

//   fetch(urlShowId, fetchHeaders)
//     .then((data) => {
//       return data.json();
//     })
//     .then((res) => {
//       showId = res.items[0].id;
//       console.log(showId);
//     })
//     .catch((error) => console.log(error))
//     .then(() => {
//       getShowData(showId);
//     });
// }

const safeShows = [21125, 13823, 13954, 16891];

function getShowData(showId) {
  const urlShowData =
    "https://chrome-extension-cors-anywhere.herokuapp.com/https://www.doesthedogdie.com/media/" +
    showId;

  fetch(urlShowData, fetchHeaders)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
    //   showData = res.topicItemStats[52];
    showTitle = res.topicItemStats[52].itemName;

      showRisk = res.topicItemStats[52].isYes; // 1 indicates risky
    //   yesVotes = res.topicItemStats[52].yesSum;
    //   noVotes = res.topicItemStats[52].noSum;
    //   riskDescription = res.topicItemStats[52].comment;
    //   console.log(
    //     showRisk +
    //       " " +
    //       yesVotes +
    //       " " +
    //       noVotes +
    //       " " +
    //       riskDescription +
    //       " " +
    //       showData
    //   );
      console.log("Show Id is " + showId);
      console.log("Show Name is " + showTitle);

      <Card><p>Test  {showTitle} { showId } {showRisk}</p></Card>
      
    })
    .catch((error) => console.log(error));

    console.log(showTitle);

    return (
        <>
    <Card><p>Test { document.write(showTitle) } { showId } {showRisk}</p></Card>
    </>
    );
}

export default function MovieCards() {
  return (
    // <div>
    //     {safeShows && 
    //     safeShows.map((safeShow) => 
    //     getShowData(safeShow) 
    //     )}
    // </div>
//   );
<div>{getShowData(21125)}</div>
  )
}
