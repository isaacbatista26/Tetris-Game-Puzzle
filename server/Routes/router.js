const { registerPlayer, getAllPlayers, loginPlayer } = require('../Controllers/PlayerController');

const express = require('express');

const router = express();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.post('/register', registerPlayer);

router.get('/players', getAllPlayers);

router.post('/login', loginPlayer);

module.exports = router;