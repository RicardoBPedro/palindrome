const express = require('express');
const router = express.Router();

const PalindromeController = require('../controllers/palindromes');

router.get('/:words', PalindromeController.isPalindrome);

module.exports = router;