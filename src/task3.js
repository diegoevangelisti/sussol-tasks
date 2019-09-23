const fetch = require('node-fetch');

//
//Test 3 - Drugs API
//

const codes = ['369844bf', '64d064bf', '32d064bf', '372ce4bf', 'bbfcf518']
const url = `https://api.universalcodes.msupply.org.nz/v1/items?code=`;

//
//Task 3.1: Show results as each call is made and each response processed
//

var getNameOfDrugsAfterEachResponseProcessed = async () => {

    console.log(`\nTask 3.1: Show results as each call is made and each response processed:\n`)
    console.log(`------------------------------------------------------------------------\n`)
    for (code of codes) {
        try {
            let item = `${url}${code}`

            const response = await fetch(item)
            const drugData = await response.json()
            console.log(`Drog name: ${drugData[0].name}\nCode: ${code}\n\n`)
        } catch (err) {
            console.log(`ERROR: ${err}\nURL: ${url}${code}\n\n`)
        }
    }
}

//
//Task 3.2: Results shown when all have been processed
//

const getNameOfDrugsAllTogether = async () => {

    console.log(`\nTask 3.2: Results shown when all have been processed:\n`)
    console.log(`-----------------------------------------------------\n`)
    var promiseArray = []
    for (code of codes) {
        let item = `${url}${code}`
        promiseArray.push(await fetch(item)
            .then(response => response.json())
            .then(drugData => `Drog name: ${drugData[0].name}\nCode: ${drugData[0].code}\n\n`)
            .catch(err => `ERROR: ${err}\nURL: ${item}\n\n`)
        )
    }
    await Promise.all(promiseArray)
        .then(drugData => {
            for (data of drugData)
                console.log(data)
        })
}

//
//Task 3.3: Results obtained asynchronously, cheking all drugs in parallel
//

const getNameOfDrugsInParallel = () => {

    console.log(`\nTask 3.3: Results obtained asynchronously, cheking all drugs in parallel:\n`)
    console.log(`-------------------------------------------------------------------------\n`)
    for (code of codes) {
        let item = `${url}${code}`
        fetch(item)
            .then(response => response.json(code))
            .then(drugData => console.log(`Drog name: ${drugData[0].name}\nCode: ${drugData[0].code}\n\n`))
            .catch(err => console.log(`ERROR: ${err}\nURL: ${item}\n\n`))
    }
}

module.exports = {
    getNameOfDrugsAfterEachResponseProcessed,
    getNameOfDrugsAllTogether,
    getNameOfDrugsInParallel,
    codes,
    url
}