import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import {backendRouter} from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", backendRouter);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
