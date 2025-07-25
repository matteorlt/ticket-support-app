const Ticket = require('../models/Ticket');

// Récupérer tous les tickets (pour l'instant, tous les tickets, plus tard: filtrer par user)
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().populate('author', 'name email').sort({ createdAt: -1 });
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Créer un ticket
exports.createTicket = async (req, res) => {
  try {
    const { title, description } = req.body;
    const ticket = new Ticket({
      title,
      description,
      author: req.user._id
    });
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}; 