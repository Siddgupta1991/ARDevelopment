const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files with proper MIME types
app.use(express.static(__dirname, {
    setHeaders: function (res, path, stat) {
        if (path.endsWith('.html')) {
            res.set('Content-Type', 'text/html');
        }
        if (path.endsWith('.js')) {
            res.set('Content-Type', 'application/javascript');
        }
        if (path.endsWith('.css')) {
            res.set('Content-Type', 'text/css');
        }
    }
}));

// Explicitly serve index.html for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Mobile access: http://192.168.29.71:${port}`);
});