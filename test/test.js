const logger = require('../index')

logger.log('log(): normal console.log().')
logger.success('success(): success, green color.')
logger.warn('warn(): warning, yellow color.')
logger.error('error(): error, red color.')