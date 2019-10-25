const app = require('express')();
const PORT = process.env.PORT || 8080;

app.get('/', (req,res) => {
    res
    .send('Express server running!')
    .status(200)
    .end()
});

app.listen(PORT, () => {
    console.info(`Server running on port: ${PORT}`)
    console.info('Press CTRL+C to quit')
});

