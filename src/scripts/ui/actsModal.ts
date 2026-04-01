import { modal, toggleButtons } from './actsModalHandlers';

interface ModalInter {
  render(actLabel: HTMLLabelElement): void;
  renderRenameBlock(): void;
}

export class Modal implements ModalInter {
  constructor(private container: HTMLDivElement) {}

  render(actLabel: HTMLLabelElement) {
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'actSubmitBtn';
    submitButton.textContent = 'Submit';

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => {
      this.container.innerHTML = '';
      toggleButtons(false);
      modal.close();
    });

    this.container.appendChild(actLabel);
    this.container.appendChild(submitButton);
    this.container.appendChild(cancelButton);
  }

  renderRenameBlock() {
    const label = document.createElement('label');
    label.setAttribute('for', 'renameInput');

    const input = document.createElement('input');
    input.id = 'renameInput';

    label.appendChild(input);

    this.render(label);
  }
}
