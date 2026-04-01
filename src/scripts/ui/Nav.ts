import { Group } from '../core/Group.js';
import { Storage } from '../core/StorageAPI.js';
import { modal as actsModal, lastModalCaller } from './actsModalHandlers';
import { uList, nav, uListDOM } from './navHandlers';

interface noteInter {
  dueDate: string;
  title: string;
  description: string;
  priority: string;
}

interface NavigationInter {
  add(input: string, options?: { sync: boolean }): void;
  renderNotes(notes: noteInter[]): void;
  sync(): void;
  renderNotesControls(): void;
}

export class Navigation implements NavigationInter {
  constructor(private container: HTMLUListElement) {}

  add(input: string, options?: { sync: boolean }) {
    if (Group.getGroup(input) && !options?.sync) return;

    /* 
      Why condition?
      Because if it's called to sync - it won't create a
      new instances for each group, but for DOM only 
    */
    !options ? Group.push(Group.create(input)) : '';

    const li = document.createElement('li');
    li.classList.add('todo-group');

    const span = document.createElement('span');
    span.classList.add('todo-group__title');
    span.innerText = input;
    span.addEventListener('click', () => {
      const spanContent = span.textContent;
      uListDOM.dataset.currentGroupTab = `${spanContent}`;

      uList.renderNotesControls();
      uList.renderNotes(Group.getGroup(spanContent));
    });

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

  renderNotesControls() {
    nav.renderAddBtn();
  }

  renderNotes(notes: noteInter[]) {
    this.container.innerHTML = '';

    notes.forEach((note) => {
      const li = document.createElement('li');

      const titleSpan = document.createElement('span');
      titleSpan.textContent = note.title;

      const descSpan = document.createElement('span');
      descSpan.textContent = note.description;

      const dateSpan = document.createElement('span');
      dateSpan.textContent = note.dueDate;

      const priorSpan = document.createElement('span');
      priorSpan.textContent = note.priority;

      const metaSpans = [titleSpan, descSpan, dateSpan, priorSpan];

      metaSpans.forEach((span) => li.appendChild(span));
      uListDOM.appendChild(li);
    });
  }

  sync() {
    const actualJSON = Storage.getGroups();
    for (let group of Object.keys(actualJSON)) {
      this.add(group, { sync: true });
    }
  }
}
