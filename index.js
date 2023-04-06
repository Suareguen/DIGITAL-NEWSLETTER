require('dotenv').config()
const {
    checkConnection,
    syncModels
} = require('./database/index')
const addRelationModels = require('./database/relations')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


async function checkAndSyncMysql() {
    await checkConnection()
    addRelationModels()
    await syncModels('force')
}

function initializeAndListenWithExpress() {
    const api = express()
    .use(cors())
    .use(morgan('dev'))
    .use(express.json())
    .use('/api', require('./api/routes'))
    .listen(process.env.PORT, () => {
        console.log(`> Listening on port: ${process.env.PORT}`)
    })
}


async function startAPI() {
    await checkAndSyncMysql()
    initializeAndListenWithExpress()
}

startAPI()