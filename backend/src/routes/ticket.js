const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const auth = require('../middlewares/auth');

router.get('/', ticketController.getAllTickets);
router.post('/', auth, ticketController.createTicket);

module.exports = router; 