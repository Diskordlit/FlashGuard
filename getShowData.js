var showId, showRisk, yesVotes, noVotes, riskDescription;

function getShowInfo(){
    setTimeout(() => {
        chrome.storage.sync.get("showTitle", ({ showTitle }) => {

            const urlShowId = 'https://www.doesthedogdie.com/dddsearch?q=' + showTitle;

            const fetchHeaders = {
            headers : {
                "Accept" : "application/json",
                "X-API-KEY" : "d670056d6eae327a1c60f652a2476a86"
            },
            method:"GET"
            };

            fetch(urlShowId, fetchHeaders)
            .then(data=>{return data.json()})
            .then(res=>{
            showId = res.items[0].id;
            console.log(showId);
            })
            .catch(error=>console.log(error))
            .then( () => {
                const urlShowData = 'https://www.doesthedogdie.com/media/' + showId;

                fetch(urlShowData, fetchHeaders)
                .then(data=>{return data.json()})
                .then(res=>{

                    var metricID = 0;
                    var current_TopicId;
                    const flashinglights_TopicId = 167; // Flashing Lights ID

                    while (metricID < res.topicItemStats.length){
                        current_TopicId = res.topicItemStats[metricID].TopicId;

                        if (current_TopicId == flashinglights_TopicId){         // if search criteria found,
                            
                            if (res.topicItemStats[metricID].voteSum == null){  // make unavailable if there are no votes
                                throw err
                            }

                            break;                                              // else, stop searching
                        }

                        metricID++;

                        if (metricID >= res.topicItemStats.length){ // if exceed length of JSON,
                            metricID == undefined;                  // remove value from metricID
                        }
                    }

                    document.getElementById('showTitle').innerHTML = showTitle;

                    showRisk = res.topicItemStats[metricID].isYes;  // 1 indicates risky

                    if (showRisk == 0) {
                        document.getElementById('showStatus').innerHTML = 'Safe!';
                        document.getElementById('showStatusImg').src = '\\images\\src\\check.png';
                    } else if (showRisk == 1) {
                        document.getElementById('showStatus').innerHTML = 'Unsafe!';
                        document.getElementById('showStatus').style.color = '#E04F5F';
                        document.getElementById('showStatusImg').src = '\\images\\src\\danger.png';
                    }

                    yesVotes = res.topicItemStats[metricID].yesSum;
                    noVotes = res.topicItemStats[metricID].noSum;

                    if (yesVotes > noVotes){
                        document.getElementById('showSum').innerHTML = `${yesVotes} / ${yesVotes + noVotes} votes`;
                    } else {
                        document.getElementById('showSum').innerHTML = `${noVotes} / ${yesVotes + noVotes} votes`;
                    }

                    riskDescription = res.topicItemStats[metricID].comment;
                    document.getElementById('showComment').innerHTML = riskDescription;
                            
                })
                .catch(() => {
                    document.getElementById('showStatus').innerHTML = 'Unavailable';
                    document.getElementById('showStatusImg').src = '\\images\\src\\not-found.png';
                    document.getElementById('showStatus').style.color = '#FDB62F';
                    document.getElementById('showSum').innerHTML = '';
                    document.getElementById('showComment').innerHTML = "We don't appear to have information on this show at the moment. \n If you have watched this, please leave a review on our site!";
                })
            })
        });
    }, 500);
}

getShowInfo();