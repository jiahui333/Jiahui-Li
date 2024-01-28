import express from "express";
import axios from 'axios';

const app = express();
const port = 8000;

app.get('/api/images', async (req, res) => {
    try {
        const tags = req.query.tags;
        const response = await axios.get('https://api.flickr.com/services/feeds/photos_public.gne', {
            params: { format: 'json', nojsoncallback: 1, tags },
            headers: { 'Content-Type': 'application/json' }
        });

        console.log(response.data);
        res.json(response.data.items);
    } catch (error) {
        console.error('Error fetching data from Flickr:', error);
        res.status(500).send('Error fetching data from Flickr');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

export default app;
