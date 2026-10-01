const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ exposedHeaders: ['Content-Disposition'] }));

const fileDatabase = {
    "reports": "q4_financial_report.pdf",
    "bundle": "complete_asset_package.zip",
    "metrics": "user_analytics_2026.csv"
};

app.get('/api/download', (req, res) => {
    const searchQuery = req.query.search;

    if (!searchQuery) {
        return res.status(400).json({ error: 'Search query parameter is required.' });
    }

    const lookupKey = searchQuery.toLowerCase().trim();
    const fileName = fileDatabase[lookupKey];

    if (!fileName) {
        return res.status(404).json({ error: 'No matching file found for your search term.' });
    }

    const storageDir = path.join(__dirname, 'storage');
    const safeFilePath = path.join(storageDir, fileName);

    if (!safeFilePath.startsWith(storageDir)) {
        return res.status(403).json({ error: 'Access denied.' });
    }

    fs.access(safeFilePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({ error: 'File could not be retrieved from storage.' });
        }

        res.download(safeFilePath, fileName, (downloadError) => {
            if (downloadError && !res.headersSent) {
                res.status(500).json({ error: 'Could not complete file download.' });
            }
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
