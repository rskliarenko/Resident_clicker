import { domHandler } from '../handlers/dom-handler.js';
import { EnemyModel } from '../models/EnemyModel.js';
import { GameModel } from '../models/GameModel.js';
import { FinalCongrats } from './FinalCongrats.js';
import { PlayerModel } from '../models/PlayerModel.js';
import { LevelCongrats } from './LevelCongrats.js';

export const Game = ({ name: playerName, email }) => {
  const componentName = 'game';
  const enemy = 'enemy-image';
  const levelGame = 'level';
  const enemyName = 'enemy-name';
  const progressbar = 'progressbar';
  const playerNameId = 'player-name';
  const playerScore = 'player-score';

  const enemies = [
    new EnemyModel('Crazy Zombie', './assets/images/monster_1.png', 1),
    new EnemyModel('Walking Dead', './assets/images/monster_2.png', 2),
    new EnemyModel('Zombie Cop', './assets/images/monster_3.png', 3),
    new EnemyModel('Blood Doc', './assets/images/monster_4.png', 4),
    new EnemyModel('Licker', './assets/images/monster_5.png', 5),
  ];
  const player = new PlayerModel(playerName, email);
  const game = new GameModel(enemies, player);
  const { currentEnemy: { name, image, level, power }} = game;

  domHandler.app.insertAdjacentHTML('beforeend', `
    <div id="${componentName}">
      <div class="game">
        <h2>
          Level
          <span id="${levelGame}">${level}</span>
          <span id="${enemyName}">${name}</span>
        </h2>
        <p>Click on the zombie to defeat it.</p>
        <label class="progressBar" for="${progressbar}">Enemy HP:</label>
        <progress id="${progressbar}" value="${power}" max="100">${power}%</progress>
        <a id="${enemy}" href="#">
          <img src='${image}' alt='${image}'/>
        </a>
      </div>
      <div id="player" class="player">
        <p class="player-name">Player name: <span id="${playerNameId}">${player.name}</span></p>
        <p class="player-score">Score: <span id="${playerScore}">${player.score}</span></p>
      </div>
    </div>
  `);

  domHandler.registerHtmlEl(componentName);
  domHandler.registerHtmlEl(enemy);
  domHandler.registerHtmlEl(levelGame);
  domHandler.registerHtmlEl(enemyName);
  domHandler.registerHtmlEl(progressbar);
  domHandler.registerHtmlEl(playerNameId);
  domHandler.registerHtmlEl(playerScore);
  domHandler[enemy].addEventListener('click', () => {
    game.killEnemy();
    if(game.currentEnemy.isDead() && !game.isFinalLevel()){
      LevelCongrats(game.currentEnemy);
      game.upLevel();
      game.setCurrentEnemy();
    }
    const {
      currentEnemy: { name, image, level, power },
      player: { score, name: playerName }
    } = game;
    domHandler.insertImage(enemy, image);
    domHandler.setTextContent(playerNameId, playerName);
    domHandler.setTextContent(playerScore, score);
    domHandler.setTextContent(levelGame, level);
    domHandler.setTextContent(enemyName, name);
    domHandler.updateProgressBar(progressbar, power);

    if(game.isOver()){
      domHandler[componentName].remove();
      FinalCongrats(game.player);
    }
  });
}
