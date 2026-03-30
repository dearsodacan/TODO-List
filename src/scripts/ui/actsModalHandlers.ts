import { Modal } from './actsModal';

export const modal = document.querySelector('#actsModal') as HTMLDialogElement;
const modalActsBlock = document.querySelector(
  '#actsBtnsBlock',
) as HTMLDivElement;
const form = document.querySelector('#actsForm') as HTMLFormElement;
const contentBlockDOM = document.querySelector(
  '#actsContentBlock',
) as HTMLDivElement;
const contentBlock = new Modal(contentBlockDOM);

form.addEventListener('click', (event) => {
  event.preventDefault();
  
  const target = event.target as HTMLButtonElement;
  console.log(target.dataset.forContent);
  
  if (target.dataset.forContent === 'rename') {
    contentBlock.renderRenameBlock();
  }
});
