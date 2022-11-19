const axios = require('axios');
const { writeFile } = require('fs/promises');
require('dotenv').config();

axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env['GIPHY_API_KEY']}&q=what%20the%20fuck%20is%20this&limit=25&offset=0&rating=g&lang=en`)
  .then((res) => {
    writeFile('_data/globaldata.json', JSON.stringify(res.data.data))
  })
