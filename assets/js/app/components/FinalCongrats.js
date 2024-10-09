import { domHandler } from '../handlers/dom-handler.js';
import { Game } from './Game.js';

export const FinalCongrats = ({ name, email, score }) => {
  const componentName = 'congratulations';
  const restartButton = 'restart';

  domHandler.app.insertAdjacentHTML('beforeend', `
    <div id="${componentName}" class="congratulations">
      <h2>Congratulations ${name}!</h2>
      <p id="end-message-text" class="end-message-text">
         You have defeated all enemies and win this game
      </p>
      <p id="result-score" class="result-score">
        Your final score is ${score}
      </p>
      <button id="restart">Restart Game</button>
    </div>
  `);

  domHandler.registerHtmlEl(componentName);
  domHandler.registerHtmlEl(restartButton);
  if(domHandler.hasOwnProperty(restartButton)){
    domHandler[componentName].addEventListener('click', () => {
      domHandler[componentName].remove();
      Game({ name, email });
    });
  }
}
