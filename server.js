const express = require('express')
const cors = require('cors')
const ObjectsToCsv = require('objects-to-csv');
const fs = require('fs')
const app = express()
const port = 31862
app.use(cors())
app.use(express.json())

app.post('/export/docx', (req, res) => {
    res.send('//TODO')
})

app.post('/export/csv', async (req, res) => {
    fileTemp = new Date().getTime()+'.csv'
    var fileTempName = await './temp/'+new Date().getTime()+'.csv'
    const csv = await new ObjectsToCsv(req.body.data).toDisk(fileTempName);
    await res.send({dataGenerated:csv.toString(),name:fileTemp})
    //await res.download(fileTempName)
})

app.post('/export/xml', (req, res) => {
    res.send('//TODO')
})

app.get('/view/:file', (req, res) => {
        res.download('./temp/'+req.params.file)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))