const { 
    registerPlayer,
    getAllPlayers,
    loginPlayer,
    updatePlayer,
    delPlayer
} = require('../Controllers/PlayerController');

const express = require('express');

const router = express();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.post('/register', registerPlayer);

router.get('/players', getAllPlayers);

router.post('/login', loginPlayer);

router.patch('/update', updatePlayer);

router.delete('/delete', delPlayer);

module.exports = router;