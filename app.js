const getLatestCategoryData = require('./utils/getShortDescData.js')
const getMediaId = require('./utils/getMediaId.js')
const getShowInfo = require('./utils/getShowInfo.js')
const getShortDescData = require('./utils/getShortDescData.js')
const keywordMatchAnalyzer = require('./utils/keywordMatchAnalyzer.js')

let keyword = 'Stranger Things', showId = 700663, category = [232, 188], categoryString

const searchObject = {
    keyword: keyword || 'The Good Doctor',
    showId: showId || 13397,
    category: category,
    categoryString: categoryString
}

// getMediaId(searchObject)

// getLatestCategoryData(searchObject)

getShowInfo(searchObject)

// getShortDescData(searchObject)

// keywordMatchAnalyzer('dog dies')
