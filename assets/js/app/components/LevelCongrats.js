import { domHandler } from '../handlers/dom-handler.js';


export const LevelCongrats = ({ name, level}) => {
  const componentName = 'levelCongratulations';

  domHandler.app.insertAdjacentHTML('beforeend', `
    <div id="${componentName}" class="congratulations">
      <h2>Congratulations!</h2>
      <p id="end-message-text" class="end-message-text">
         You have defeated the ${name} and advanced to level ${level + 1}!
      </p>
    </div>
  `);

  domHandler.registerHtmlEl(componentName);
  if(domHandler.hasOwnProperty(componentName)){
    document.body.style.pointerEvents = 'none';
    setTimeout(() => {
      domHandler[componentName].remove();
      document.body.style.pointerEvents = 'auto';
    }, 2000);
  }
}
