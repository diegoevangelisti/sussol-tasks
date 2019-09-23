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

//minNumber(n) and maxNumber(m) for task1
const minNumber = 250,
    maxNumber = 5000;

executesAllTasks = async () => {
    //task1
    const keprekarResults = await task1.getKeprekarNumbers(minNumber, maxNumber);
    await task1.showKaprekarResults(minNumber, maxNumber, keprekarResults);
    //task3
    await task3.getNameOfDrugsAfterEachResponseProcessed()
    await task3.getNameOfDrugsAllTogether()
    await task3.getNameOfDrugsInParallel()
}

executesAllTasks();
