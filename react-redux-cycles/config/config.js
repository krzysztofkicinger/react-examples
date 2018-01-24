const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const fromRootPath = subPath => path.join(__dirname, '..', subPath ? subPath : '');

module.exports = {

    port: process.env.PORT || 3000,

    paths: {
        public: fromRootPath('public'),
        target: fromRootPath('target'),
        main: fromRootPath('src/main'),
        app: fromRootPath('src/main/app'),
        test: fromRootPath('src/test'),
        fromRootPath: fromRootPath
    }

};