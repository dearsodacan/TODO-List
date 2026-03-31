import { Modal } from './actsModal';
import { Group } from '../core/Group.js';

type lastModalCallerType = {
  caller: HTMLButtonElement | null;
};

export const modal = document.querySelector('#actsModal') as HTMLDialogElement;
export const lastModalCaller: lastModalCallerType = {
  caller: null,
};

const form = document.querySelector('#actsForm') as HTMLFormElement;
const actsBtnsBlock = document.querySelector(
  '#actsBtnsBlock',
) as HTMLDivElement;

const contentBlockDOM = document.querySelector(
  '#actsContentBlock',
) as HTMLDivElement;
const contentBlock = new Modal(contentBlockDOM);

actsBtnsBlock.addEventListener('click', (event) => {
  const target = event.target as HTMLButtonElement;

  if (target.dataset.forContent === 'rename') {
    contentBlock.renderRenameBlock();
    form.dataset.actionStatus = 'rename';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const target = event.target as HTMLButtonElement;
  
  if (form.dataset.actionStatus === 'rename') {
    const input = document.querySelector('#renameInput')! as HTMLInputElement;

    const li = lastModalCaller.caller!.closest('li')!;
    const span = li.querySelector('.todo-group__title')!;

    Group.rename(span.textContent, input.value);
    span.textContent = input.value;

  }
});
