const https = require('https')
const fs = require('fs')
const {
    nanoid
} = require('nanoid')
const keywordMatchAnalyzer = require('../utils/keywordMatchAnalyzer.js')

function getShowInfo({
    showId,
    categoryId,
    categoryString
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
            if (!fs.existsSync('./showData')) {
                fs.mkdirSync('./showData');
            }
            const title = `${data['item']['name'].replace(/\s/g, '').toLowerCase()}_${data['item']['id']}_${nanoid(10)}`

            if (categoryId) {
                fs.writeFileSync(`./showData/${title}.json`, JSON.stringify(categoryScrapper(data['topicItemStats'], categoryId)))
                return console.log('Using category ID by default')
            }

            fs.writeFileSync(`./showData/${title}.json`, JSON.stringify(categoryKeywordScrapper(data['topicItemStats'], categoryString)))

            return console.log('Action completed')
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
    let sortingArray = []
    let resultArray = []
    if (!categoryString) {
        categoryString = 'flash'
    }
    let closeMatch = []
    sortingArray.push(...keywordMatchAnalyzer(categoryString))

    for (let i = 0; i < sortingArray.length; i++) {
        if (sortingArray[i]['percentage'] > 0) {
            closeMatch.push(sortingArray[i])
        }
    }

    closeMatch = closeMatch.sort(compareForSorting)

    for (let i = 0; i < array.length; i++) {
        closeMatch.forEach(value => {
            if (array[i]['TopicId'] === value['topicID']) {
                resultArray.push({
                    ...array[i]
                })
                return
            }
        })
    }

    return resultArray.length === 0 ? {
        error: 'No Data'
    } : resultArray
}

function compareForSorting(a, b) {
    // Sorts the closest match to the top part of the array, descending order
    if (a['percentage'] < b['percentage']) return 1
    if (a['percentage'] > b['percentage']) return -1
    return 0
}

module.exports = getShowInfo