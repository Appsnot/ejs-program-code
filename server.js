const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get('/',(req,res) => {
    res.render('view', {
        people: [
         {name: 'basil',age:'40',place:'Idukki'},
         {name: 'arjun',age: '41',place:'Thrissur'},
         {name: 'amal',age: '22',place:'Ernakulam'}
        ]
    })
})

app.listen(3000,console.log('listening on port 3000'))
