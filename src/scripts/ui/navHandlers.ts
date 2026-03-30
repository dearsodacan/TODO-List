import { Navigation } from './Nav';

export const navAddButton = document.querySelector(
  '#todoNavAddBtn',
) as HTMLButtonElement;

const modal = document.querySelector('#newGroupModal') as HTMLDialogElement;
const form = document.querySelector('#newGroupForm') as HTMLFormElement;
const input = document.querySelector('#newGroupInput') as HTMLInputElement;

const uListDOM = document.querySelector('#todoGroups') as HTMLUListElement;
export const uList = new Navigation(uListDOM);

navAddButton.addEventListener('click', () => {
  modal.showModal();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  uList.add(input.value);
});
