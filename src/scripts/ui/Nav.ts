import { Group } from '../core/Group.js';
import { Storage } from '../core/StorageAPI.js';
import { modal as actsModal, lastModalCaller } from './actsModalHandlers';

interface NavigationInter {
  add(input: string, options?: { sync: boolean }): void;
  sync(): void;
}

export class Navigation implements NavigationInter {
  constructor(private container: HTMLUListElement) {}

  add(input: string, options?: { sync: boolean }) {
    if (Group.getGroup(input) && !options?.sync) return;

    Group.push(Group.create(input));

    const li = document.createElement('li');
    li.classList.add('todo-group');

    const span = document.createElement('span');
    span.classList.add('todo-group__title');
    span.innerText = input;

    const button = document.createElement('button');
    button.classList.add('btn', 'todo-group__btn-actions');
    button.type = 'button';
    button.addEventListener('click', () => {
      actsModal.showModal();
      lastModalCaller.caller = button;
    });

    li.appendChild(span);
    li.appendChild(button);

    this.container.appendChild(li);
  }

  sync() {
    const actualJSON = Storage.getGroups();
    for (let group of Object.keys(actualJSON)) {
      this.add(group, { sync: true });
    }
  }
}
