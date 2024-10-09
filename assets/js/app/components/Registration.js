import { domHandler } from '../handlers/dom-handler.js';
import { Game } from './Game.js';

export const Registration = () => {
  const componentName = 'registration';
  const name = 'name';
  const email = 'email';

  domHandler.app.insertAdjacentHTML('beforeend', `
    <div id="${componentName}" class="registration">
      <h1>Create account</h1>
      <form id="registration-form">
        <div class="user-box">
          <input type="text" id="${name}" name="name" required>
          <label class="userName" for="name">Name</label>
        </div>
        <div class="user-box">
          <input type="email" id="${email}" name="email" required>
          <label class="userEmail" for="email">Email</label>
        </div>
        <button type="submit">Start Game</button>
      </form>
    </div>
  `);

  domHandler.registerHtmlEl(componentName);
  domHandler.registerHtmlEl(name);
  domHandler.registerHtmlEl(email);
  if(domHandler.hasOwnProperty(componentName)){
    domHandler[componentName].addEventListener('submit', (e) => {
      e.preventDefault();
      domHandler[componentName].remove();
      Game({
        name: domHandler[name].value.trim(),
        email: domHandler[email].value.trim(),
      });
    });
  }
}
