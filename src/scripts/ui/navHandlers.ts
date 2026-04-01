import { Navigation } from './Nav';
import { NavContainer } from './NavContainer';

const navDOM = document.querySelector('#todoNav') as HTMLElement;
export const nav = new NavContainer(navDOM);

export const navAddButton = document.querySelector(
  '#todoNavNewBtn',
) as HTMLButtonElement;
const modal = document.querySelector(
  '#newGroupModal',
) as HTMLDialogElement;
const form = document.querySelector(
  '#newGroupForm',
) as HTMLFormElement;
const input = document.querySelector(
  '#newGroupInput',
) as HTMLInputElement;

export const uListDOM = document.querySelector(
  '#todoGroups',
) as HTMLUListElement;
export const uList = new Navigation(uListDOM);

navAddButton.addEventListener('click', () => {
  modal.showModal();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  uList.add(input.value);
});
