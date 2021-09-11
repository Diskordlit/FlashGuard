const https = require('https')
const fs = require('fs')

function getLatestCategoryData({
    showId
}) {
    const option = {
        hostname: 'www.doesthedogdie.com',
        path: `/media/${showId}`,
        headers: {
            'X-API-KEY': 'd670056d6eae327a1c60f652a2476a86',
            'Accept': 'application/json'
        }
    }

    let responseChunk = []

    const request = https.request(option, (response) => {
        response.on('data', data => {
            responseChunk.push(data)
        }).on('end', async () => {
            let data = JSON.parse(Buffer.concat(responseChunk).toString())
            fs.writeFileSync(`./categoryDictionary.json`, JSON.stringify(topicIdScrapper(data['topicItemStats'])))
        })

        response.on('error', error => {
            console.error(error)
            process.exit(1)
        })
    })

    request.end()
}

function topicIdScrapper(array) {
    let topicArray = []
    for (let i = 0; i < array.length; i++) {
        topicArray.push({
            topicID: array[i]['TopicId'],
            hasTopicName: array[i]['topic']['name'],
            doesNotHaveTopicName: array[i]['topic']['notName'],
            keywords: array[i]['topic']['keywords'],
            description: array[i]['topic']['description'],
            questionName: array[i]['topic']['doesName'],
            listName: array[i]['topic']['listName'],
            shortDescription: array[i]['topic']['smmwDescription']
        })
    }
    return topicArray
}

module.exports = getLatestCategoryData