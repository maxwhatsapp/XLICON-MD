const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "265997133051"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://wa.me/265997133051'
global.location = 'Lahore Pak'
global.gurl = 'https://wa.me/265997133051' // add your username
global.sudo = process.env.SUDO || '265997133051' 
global.devs = '923184070915';
global.website = 'https://wa.me/265997133051' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0R5dHhwNVIzNERyZmllVEw1Q3JSWlRYbk55RGgrM1lpVHE2REIvTk4wTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnp2aDlsa2tENUpuSVFRVXVmVVhWL0NxR0x3VGZEOWdwRzU4eW1qYzN5MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSHpwaWFHNm9HNWRTbUdWcElUQWtJMDV6Rm83bHNsTWhhSzQ1MHhsTmxrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWZVQ1NTAzUDhFck9FTTEzdDFUenJ0K2xrQU8yZGg2dUcvL2NRSTNtSGdrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJPUEVhT1Y5U0FpY2FrZ2FSbFdkM09ZNnVZMjNaZGxObkVDajBqWE9vR1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhaVi9JV1A1L1VrdlZuQlBvazQ4b1h2NDBacGFzVm51ZUhqYnhPd2hCRk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU52NCsvWmhHaFUwRHRrRHI2dGZzVVgyQ0xPNTljOVo2cyszVHBPODhYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVNueEhRb1JjRjFwai9GVE5FVjJyYUJsODB1SXp0dnFMdDlMN2ZmOFRIdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklPbnh3VGlRQ2xPa3ZYZVh0OWlRZXRVamhsTFNoWjI2UE43WkxvdUNmUUF4UFJ0THUzSmc4ZFB5MnBPUXlNbk9NRWJrMHBmS2xGMC9kallzc0dMQ2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6ImpwZGV4UVZsVjZWQ1BhblBaa053LzVuUG0vZVIzK1JhOFhYdFgvWjN1ZWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImIwZ1dESW5mUm02NThabWVTdV9xeUEiLCJwaG9uZUlkIjoiYWQ0YmMwYzktYTRlMi00OGE5LWJjMjctODk3NGEzMmEzYzdkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNTazFPWURHQmhNTzRBOEhFVGcweElad1RxTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrVE5zaDYxWWFkMTJTQ0JJSEtsZGJYVVNCY1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1pBUkE2MUciLCJtZSI6eyJpZCI6IjI2NTg4NDMyNDQ2MDo4MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBdXN0aW4gTWF4In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJVENyZDBIRU5HMXZLNEdHQVk9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlN2UFdxTVZxZVVaeUFoZjFkYkZMN1RjOUlJTlkxSlJIZDFXakNiUmN5MXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFpTEhodjlEaUhSZnhOUXdCUWV1bmhrdEZHak5rR051SjlQMjR4a2VjSXp6SDJrOUVWUCsvNTBCZDQvV09lcjkyZWU0d3QyVVdKeVFpTVVJZk83VEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0MXNRSnVlWS95ak82Z0phRXRCTzNXT2lVR05BYnJmeVZRVU81eXovWkV3YVJ0eHZHbmlPbGZrT2liNHVFSUkwZWJTK3FsemFGSVZicFlGNWhOVEpoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2NTg4NDMyNDQ2MDo4MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVcnoxcWpGYW5sR2NnSVg5WFd4UyswM1BTQ0RXTlNVUjNkVm93bTBYTXRiIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA4MDcxNjM2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFHSiJ9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'Austin Max',
  packname:  process.env.PACK_NAME || 'MaxBot',
   
  botname:   process.env.BOT_NAME === undefined ? "MAXBOT" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Austin Max' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '233' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
