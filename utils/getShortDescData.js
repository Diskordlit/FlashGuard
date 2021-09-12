const https = require('https')
const fs = require('fs')

function getShortDescData({
    showId
}) {
    const option = {
        hostname: 'www.doesthedogdie.com',
        path: `/media/${showId}`,
        headers: {
            'X-API-KEY': process.env.X_API_KEY,
            'Accept': 'application/json'
        }
    }

    let responseChunk = []

    const request = https.request(option, (response) => {
        response.on('data', data => {
            responseChunk.push(data)
        }).on('end', async () => {
            let data = JSON.parse(Buffer.concat(responseChunk).toString())
            fs.writeFileSync(`./shortDescDictionary.json`, JSON.stringify(shortDescScrapper(data['topicItemStats'])))
        })

        response.on('error', error => {
            console.error(error)
            process.exit(1)
        })
    })

    request.end()
}

function shortDescScrapper(array) {
    let shortDescArray = []
    for (let i = 0; i < array.length; i++) {
        shortDescArray.push({
            topicID: array[i]['TopicId'],
            shortDescription: array[i]['topic']['smmwDescription']
        })
    }
    return shortDescArray
}

module.exports = getShortDescData