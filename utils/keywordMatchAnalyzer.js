function keywordMatchAnalyzer(keywordString) {
    let searchArray = shortDescExtractor()
    let keywordCount = keywordString.split(/\s/g).length
    console.log(keywordCount)
    let keywordPattern = keywordString.split(/\s/g).join('|')
    let keywordRegex = new RegExp(keywordPattern, 'g')
    let searchObject = {
        array: searchArray,
        regex: keywordRegex,
        count: keywordCount
    }
    return percentageCounter(searchObject)
}

function percentageCounter({
    array,
    regex,
    count
}) {
    let result = []
    array.forEach(value => {
        console.log(countFilter(value))
        let match = value.match(regex)
        console.log(value.match(regex))
        result.push({
            'searchWord': value,
            'percentage': match ? Math.round(((match.length / countFilter(value).length) + Number.EPSILON) * 100) : 0
        })
    })
    return result
}

function countFilter(value) {
    let newValue = value.split(/(?:\s|\(|\)|\/|")/g)
    return newValue.filter(value => value)
}

function shortDescExtractor() {
    let shortDescJSON = require('../shortDescDictionary.json')
    let shortDescArray = []
    shortDescJSON.forEach(value => {
        shortDescArray.push(
            value['shortDescription']
        )
    })
    return shortDescArray
}

// Unused
function articleRemover(array) {
    let replacedString = []
    let filteredString = []
    for (let i = 0; i < array.length; i++) {
        replacedString[i] = array[i].replace(/\b(?:(The|the|A|a|An|an))\b/g, '')
    }
    // Return only non-null strings
    filteredString = replacedString.filter((notNull) => notNull)
    // Remove whitespace with regex \s
    filteredString = filteredString.filter((string) => /\s/g.test(string) ? null : string)
    return filteredString
}

module.exports = keywordMatchAnalyzer