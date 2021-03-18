'use strict'
const snoowrap = require('snoowrap')
const fs = require('fs')
const dotenv = require('dotenv')


if (fs.existsSync('.env')) {
    console.log('Using .env file to supply config environment variables')
    dotenv.config({ path: '.env' })
} else {
    console.error('Unable to locate .env file')
}

const client = new snoowrap({
    userAgent: process.env.USER_AGENT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
})
client.getSubreddit(process.env.SUBREDDIT).getModerators().map((moderator) => console.log(moderator))
