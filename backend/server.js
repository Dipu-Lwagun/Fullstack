// server.js

const express = require('express');
const multer = require('multer');
const { PrismaClient } = require('@prisma/client');
const cors = require ('cors')
const path = require('path');
const fs = require('fs');

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(cors())
// Middleware
app.use(express.json());

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' });

app.post('/api/issues', upload.array('photos', 12), async (req, res) => {
  try {
    const { brand, model, issuetitle, issue_des, category, issuetype } = req.body;
  
    console.log(req.body)

    
    // Handle photo uploads
    const photoFiles = req.files;
    const photos = [];

    console.log(prisma, "prisma")




    // Save issue to database
    const issue = await prisma.issue.create({
      data: {
        brand,
        model,
        issuetitle,
        issue_des,
        category,
        issuetype,
      },
    });
    
    for (const file of photoFiles) {
      const photo = await prisma.photo.create({
        data: {
          url: file.path, 
          issueId:issue.id
        },
      });
      photos.push(photo);
    }

    res.status(201).json(issue);
  } catch (error) {
    console.error('Error creating issue:', error);
    res.status(500).json({ error: 'Failed to create issue' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
