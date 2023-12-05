const express = require('express');
var xlsx = require("xlsx")
const app = express();
app.use(express.json());

app.get('/read', (req, res) => {
    var wb = xlsx.readFile("data/book1.xlsx", { cellDates: true })
    var ws = wb.Sheets["Sheet1"]
    var data = xlsx.utils.sheet_to_json(ws)
    res.status(200).json({ data: data })
})

app.listen(3000, () => console.log('Xls app is listening on port 3000.'));