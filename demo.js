const fs = require('fs')

fs.readFile('text-demo.txt', 'utf8', function (err, data) {
  if (err) throw err
  console.log(data)
})
