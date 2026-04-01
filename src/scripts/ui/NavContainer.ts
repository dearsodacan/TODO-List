import { uList, uListDOM } from './navHandlers';
import { modal } from './noteModalHandlers';

export class NavContainer {
  constructor(private container: HTMLElement) {}

  renderAddBtn() {
    const buttonAdd = document.createElement('button');
    buttonAdd.type = 'button';
    buttonAdd.id = 'todoNavAddBtn';
    buttonAdd.textContent = 'Add';
    buttonAdd.addEventListener('click', () => modal.showModal());

    const buttonBack = document.createElement('button');
    buttonBack.type = 'button';
    buttonBack.id = 'todoNavBackBtn';
    buttonBack.textContent = 'Back';
    buttonBack.addEventListener('click', () => {
      uListDOM.innerHTML = '';
      uListDOM.removeAttribute('data-current-group-tab');

      buttonAdd.remove();
      buttonBack.remove();

      newBtn.style.cssText = '';

      uList.sync();
    });

    const newBtn = this.container.querySelector(
      '#todoNavNewBtn',
    ) as HTMLElement;
    newBtn.style.cssText = 'display: none';

    this.container.appendChild(buttonAdd);
    this.container.appendChild(buttonBack);
  }
}
