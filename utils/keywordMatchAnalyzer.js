
const dummyKeywordA = ['dog', 'live']
const dummyKeywordB = ['dog', 'die']
const dummyKeywordC = ['cat', 'live']
const dummyKeywordD = ['cat', 'die']


function keywordMatchAnalyzer(keywordString) {
    let splitString = keywordString.split(/\s/g)
    // let removedArticle = articleRemover(splitString)
    console.log(removedArticle)
    // let scoreArray = []
}

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
