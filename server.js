const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    fs.appendFileSync('ips.txt', `${ipAddress}\n`);
    res.redirect('https://www.google.com/search');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
