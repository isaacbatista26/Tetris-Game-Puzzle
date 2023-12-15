const Player = require('../Models/Player');

const registerPlayer = async (req, res) => {
    const {nickname, email, password} = req.body;
    const player = await Player.findOne({email});
    if(player){
        res.status(400).json({message: 'Player already exists'});   
        return;
    }
    const newPlayer = await Player.create({
        nickname,
        email,
        password,
        level: 0,
        record: 0
    })

    if(!newPlayer){
        res.status(400).json({message: 'Error creating player'});
        return;
    }

    res.status(200).json({
        nickname: newPlayer.nickname,
        email: newPlayer.email,
        level: newPlayer.level,
        record: newPlayer.record
    });
}

const getAllPlayers = async (req, res) => {
    const players = await Player.find({}).select('-password -_id -__v -createdAt -updatedAt');
    if(!players){
        res.status(400).json({message: 'Error getting players'});
        return;
    }
    res.status(200).json(players);
}

const loginPlayer = async (req, res) => {
    const {email, password} = req.body;
    const player = await Player.findOne({email}).select('-_id -__v -createdAt -updatedAt');
    if(!player) {
        res.status(401).json({
            error: "Unauthorized",
            message: "Credenciais inválidas"
        });
        return;
    }
    if(password != player.password){
        res.status(403).json({
            error: "Forbidden",
            message: "Acesso negado"
        });
        return;
    }

    res.status(200).json({
        nickname:player.nickname,
        email: player.email,
        level:player.level,
        record: player.record
    })
}

const updatePlayer = async (req, res) => {
    const {email, level, record} = req.body;
    const updatedPlayer = await Player.findOneAndUpdate(
        {email},
        {level: level, record: record},
        {new:true} 
    );
    if(!updatedPlayer){
        res.status(400).json({message: 'Error updating player'});
        return;
    }
    res.status(200).json({
        nickname: updatedPlayer.nickname,
        email: updatedPlayer.email,
        level: updatedPlayer.level,
        record: updatedPlayer.record
    });
}

module.exports = { registerPlayer, getAllPlayers, loginPlayer, updatePlayer };