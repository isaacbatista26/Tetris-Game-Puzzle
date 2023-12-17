import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { createStage, checkCollision } from './gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from '../Components/TetrisGame/styles/StyledTetris';

// Custom Hooks
import { useInterval } from '../Hooks/useInterval';
import { usePlayer } from '../Hooks/usePlayer';
import { useStage } from '../Hooks/useStage';
import { useGameStatus } from '../Hooks/useGameStatus';

// Components
import Stage from '../Components/TetrisGame/Stage';
import Display from '../Components/TetrisGame/Display';
import Button from '../Components/TetrisGame/Button';
import { StyledLogo }  from '../Components/TetrisGame/styles/Logo';

import Logo from '../Assets/logo.png';
import tetrisSong from '../Assets/tetris-song.mp3';
import tetrisFail from '../Assets/tetris-fail.mp3';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [audio] = useState(new Audio(tetrisSong));
  const [audioFail] = useState(new Audio(tetrisFail));

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const navigate = useNavigate();

  const [ playerInfo, setPlayerInfo ] = useState(JSON.parse(localStorage.getItem('tetris@user')));
  const [storageUser, setStorageUser] = useState(playerInfo);

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1));
      }
    }
  };

  const startGame = () => {
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
  };

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      setDropTime(500 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        console.log('GAME OVER!!!');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  const updatePlayerStats = async () => {
    if(score <= playerInfo.record) return;
    playerInfo.record = score;
    try {

      const data = {
        "nickname": playerInfo.nickname,
        "email": playerInfo.email,
        "record": playerInfo.record,
        "level": playerInfo.level,
    }
      const res = await axios.patch('http://localhost:5000/update', data);
      console.log(res);
      console.log(res.data);
      localStorage.setItem('tetris@user', JSON.stringify(playerInfo));
      setStorageUser(playerInfo);
      setPlayerInfo(data);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  useEffect(() => {
    if(!storageUser) {
      navigate("/");
    }
    
    audio.loop = true;

    if(!gameOver && audio.paused) {
      audio.play();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio, storageUser, gameOver]);

  useEffect(() => {
    if (!gameOver) {
      audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
    updatePlayerStats();
    audioFail.play();
  }
  
  return () => {
    audio.pause();
    audio.currentTime = 0;
  };
},[gameOver, audio]);

  const logOut = () => {
    localStorage.removeItem('tetris@user');
    navigate('/');
  }

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={e => move(e)}
      onKeyUp={keyUp}
    >
      <StyledLogo src={Logo} alt="logo" />
      <StyledTetris>
        <aside>
          <div>
            <Display text={`Nickname: ${playerInfo?.nickname}`} />
            <Display text={`Record: ${playerInfo.record}`} />
          </div>
          <div>
            <Display text={`Level: ${level}`} />
            <Display text={`Score: ${score}`} />
            <Display text={`Rows: ${rows}`} />
          </div>
        </aside>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Next Piece`} />
              <div style={{ display: 'none' }}>
                <audio controls>
                  <source src={tetrisSong} type="audio/mp3"/>
                </audio>
              </div>
            </div>
              //<Stage stage={player.nextPiece} />
          )}
          <Button callback={startGame} label="Start Game" />
        </aside>
      </StyledTetris>
      <Button callback={logOut} label="Log out"/>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
