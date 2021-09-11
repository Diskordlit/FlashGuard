const https = require('https')
const fs = require('fs')
const {
    nanoid
} = require('nanoid')

function getShowInfo({
    showId,
    category
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
            if (!fs.existsSync('./showData')) {
                fs.mkdirSync('./showData');
            }
            const title = `${data['item']['name'].replace(/\s/g, '').toLowerCase()}_${data['item']['id']}_${nanoid(10)}`
            fs.writeFileSync(`./showData/${title}.json`, JSON.stringify(categoryScrapper(data['topicItemStats'], category)))
        })

        response.on('error', error => {
            console.error(error)
            process.exit(1)
        })
    })

    request.end()
}

function categoryScrapper(array, category) {
    let resultArray = []
    if (!category) {
        category = [167] // Flashing lights as of 11/09/2021
    }
    if (category.length === 0) {
        category = [167] // Flashing lights as of 11/09/2021
    }
    for (let i = 0; i < array.length; i++) {
        if (category.includes(array[i]['TopicId'])) {
            resultArray.push({
                ...array[i]
            })
        }
    }
    return resultArray
}

function categoryKeywordScrapper(array, categoryString) {
    let resultArray = []
    if (!categoryString) {
        categoryString = 'flashing light'
    }
    for (let i = 0; i < array.length; i++) {
        if (categoryString.includes(array[i]['TopicId'])) {
            resultArray.push({
                ...array[i]
            })
        }
    }
    return resultArray
}

module.exports = getShowInfo