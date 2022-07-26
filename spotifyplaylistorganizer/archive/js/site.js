// import express from 'express'
// import { readFile } from 'fs'

// var app = express()
// const port = 8888

// var scopes = [
//     'playlist-read-collaborative',
//     'playlist-modify-public', 
//     'playlist-read-private', 
//     'playlist-modify-private'
// ]


// app.get('/', (req, res) => {
//     res.write(readFile('index.html', (error, data) => {
//         if (error) {
//             res.writeHead(404)
//             res.write('404 File not found.')
//             res.end()
//             console.log('index.html was not found')
//         } else {
//             res.writeHead(200, {'Content-Type' : 'text/html'})
//             res.write(data)
//             res.end()
//         }
//     }))
// })

// app.get('/terminate', (req, res) => {
//     res.write('Process terminated')
//     res.end()
//     console.log('Process was terminated')
//     process.exit()
// })

// app.listen(port, (error) => {
//     if (error) {
//         console.log('Error occurred.', error)
//     } else {
//         console.log('Server running on port: ', port)
//     }
// })