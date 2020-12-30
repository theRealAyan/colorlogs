## Colorlogs

A colorful logger for your console.

Installation:
```bash
$ git clone https://github.com/theRealAyan/colorlogs.git
$ cd colorlogs
$ npm i  #install dependencies
```
Usage: 
```js
const logger = require('path/to/colorlogs')

logger.log('log(): normal console.log().')
logger.success('success(): success, green color.')
logger.warn('warn(): warning, yellow color.')
logger.error('error(): error, red color.')
```

> Output: 
<img src="test/test.PNG" />