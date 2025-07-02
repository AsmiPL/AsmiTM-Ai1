

module.exports = {
  TOKEN: "MTIzODQ5ODAxNTEyNDEyNzc4NA.GLVdcv.mTWZaEKXBJ-VTz-CSZ2t4Rndo4wazSLaB5ZAwI",
  language: "en",
  ownerID: ["909013353396043798", ""], 
  mongodbUri : "srv://shiva:shiva@musicbotyt.ouljyww.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "4bfb37679f754afa9a93676d3807eb65",
  spotifyClientSecret : "7a1f0521991449d789ea196b6c90ad69",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 20, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "5.39.63.207",
      port:  8262,
      secure: false
    }
  ]
}
