const https = require('https')
const fs = require('fs')

function getShortDescData({
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
            shortDescription: array[i]['topic']['smmwDescription']
        })
    }
    return shortDescArray
}

module.exports = getShortDescData