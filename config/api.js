let api = process.env.API_ROOT
export default {
  addStrategy: api + '/addStrategy',
  getStrategy: api + '/getStrategy',
  getStrategyById: api + '/getStrategyById',
  editStrategy: api + '/editStrategy',
  deleteStrategy: api + '/deleteStrategy',
  getSelectPath: process.env.API_ROOT + '/getSelectPath',
  getInfo: process.env.API_ROOT + '/getInfo',
  getBannerList: process.env.API_ROOT + '/getBannerList',
  getRandomPath: process.env.API_ROOT + '/getRandomPath',
}