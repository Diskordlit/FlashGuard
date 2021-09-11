const https = require('https')
const fs = require('fs')
const {
    nanoid
} = require('nanoid')

function getMediaId({
    keyword
}) {
    const encodedKeyword = encodeURI(keyword)
    const option = {
        hostname: 'www.doesthedogdie.com',
        path: `/dddsearch?q=${encodedKeyword}`,
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
            if (!fs.existsSync('./mediaData')) {
                fs.mkdirSync('./mediaData');
            }
            const relevantInfo = {
                ...data['items'][0]
            }
            const title = `${data['items'][0]['name'].replace(/\s/g, '').toLowerCase()}_${data['items'][0]['id']}`
            fs.writeFileSync(`./mediaData/${title}.json`, JSON.stringify(relevantInfo))
        })

        response.on('error', error => {
            console.error(error)
            process.exit(1)
        })
    })

    String.concat

    request.end()
}

module.exports = getMediaId