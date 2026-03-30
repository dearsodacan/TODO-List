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
    
    this.container.appendChild(actLabel);
    this.container.appendChild(submitButton);
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
