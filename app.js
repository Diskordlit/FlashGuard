const getLatestCategoryData = require('./utils/getLatestCategoryData')
const getMediaId = require('./utils/getMediaId.js')
const getShowInfo = require('./utils/getShowInfo.js')
const getShortDescData = require('./utils/getShortDescData.js')
const keywordMatchAnalyzer = require('./utils/keywordMatchAnalyzer.js')

let keyword, showId, categoryId, categoryString = 'cheese'

const searchObject = {
    keyword: keyword || 'The Good Doctor',
    showId: showId || 13397,
    categoryId: categoryId,
    categoryString: categoryString
}

// getMediaId(searchObject)

// getLatestCategoryData(searchObject)

// getShowInfo(searchObject)

// getShortDescData(searchObject)

// keywordMatchAnalyzer('dogs dying')
