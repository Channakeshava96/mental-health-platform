const express = require('express');
const Problem = require('../models/Problem');
const router = express.Router();

// Post a Problem
router.post('/problems', async (req, res) => {
  try {
    const { description, postedBy } = req.body;
    const newProblem = new Problem({ description, postedBy });
    await newProblem.save();
    res.status(201).json({ message: 'Problem posted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to post problem.' });
  }
});

// Fetch All Problems
router.get('/problems', async (req, res) => {
  const problems = await Problem.find();
  res.status(200).json(problems);
});

module.exports = router;
