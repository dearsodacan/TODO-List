import { Group } from '../core/Group.js';
import { log } from '../shared/logger';
import { Note } from '../core/Note.js';
import { uListDOM, uList } from './navHandlers';

export const modal = document.querySelector(
  '#newNoteModal',
) as HTMLDialogElement;
const form = document.querySelector(
  '#newNoteForm',
) as HTMLFormElement;
const inputTitle = document.querySelector(
  '#newNoteTitle',
) as HTMLInputElement;
const inputDesc = document.querySelector(
  '#newNoteDesc',
) as HTMLInputElement;
const selectPriority = document.querySelector(
  '#newNotePriority',
) as HTMLSelectElement;
const inputDate = document.querySelector(
  '#newNoteDueDate',
) as HTMLInputElement;
const eachInput = [inputTitle, inputDesc, selectPriority, inputDate];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (eachInput.every((input) => !!input.value)) {
    const currentLi = uListDOM.dataset.currentGroupTab;
    
    Note.push(
      Note.create({
        title: inputTitle.value,
        description: inputDesc.value,
        priority: selectPriority.value,
        dueDate: inputDate.value,
      }), currentLi);

      uList.renderNotes(Group.getGroup(currentLi));
  } else {
    log('Inputs have to be filled.');
  }
});
