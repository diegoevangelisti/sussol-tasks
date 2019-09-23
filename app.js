//Load task1 and task3 modules
const task1 = require('./src/task1')
const task3 = require('./src/task3')

//Load HTTP module
const http = require("http");
const hostname = 'localhost';
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
});
server.listen(port, hostname)

//n and m values for task1
const n = 250,
    m = 5000;

executesAllTasks = async () => {
    //task1
    const keprekarResults = await task1.getKeprekarNumbers(n, m);
    await task1.showKaprekarResults(n, m, keprekarResults);
    //task3
    await task3.getNameOfDrugsAfterEachResponseProcessed()
    await task3.getNameOfDrugsAllTogether()
    await task3.getNameOfDrugsInParallel()
}

executesAllTasks();