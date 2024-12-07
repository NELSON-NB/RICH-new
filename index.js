const express = require('express');
const morgan = require('morgan');
const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.render('index',{message:'Hello AM NELSON'});
});
app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });

});
app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });

});
app.get('*', (req, res) => {
    res.status(404).render('index', { message: 'Not Found' });
});

<button className="px-5 py-2 text-white bg-blue-500 border">Subscribe</button>
    
const PORT = 3000;
    
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

