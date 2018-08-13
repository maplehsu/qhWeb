let api = process.env.API_ROOT
export default {
  addStrategy: api + '/addStrategy',
  getStrategy: api + '/getStrategy',
  getStrategyById: api + '/getStrategyById',
  editStrategy: api + '/editStrategy',
  deleteStrategy: api + '/deleteStrategy',
  getSelectPath: api + '/getSelectPath',
  getInfo: api + '/getInfo',
  getBannerList: api + '/getBannerList',
  getRandomPath: api + '/getRandomPath',
  getSelectStrategy: api + '/getSelectStrategy',
  getRandomStrategy: api + '/getRandomStrategy',
  getSelectLoop: api + '/getSelectLoop',
  getLoop: api + '/getLoop',
  getRandomLoop: api + '/getRandomLoop',
}