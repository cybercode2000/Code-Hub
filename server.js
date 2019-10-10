const path = require('path');
const server = require('./app');





const PORT = 5000







server.listen(PORT, () => {
    console.log('app Start @ port ' + PORT);
})