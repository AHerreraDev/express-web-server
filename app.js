const app = require('express')();
const morgan = require('morgan');

/* Define Middleware
** @param 'short': Short description in the output log
*/
app.use(morgan(('short')));


app.get('/', (req,res) => {
    res
    .status(200)
    .send('Express server running!')
});


app.use(((req,res) => {
    res.status(404).send(`URI \'${req.url}\', not found!`)
}));

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.info(`Server running on port: ${PORT}`)
    console.info('Press CTRL+C to exit')
});

