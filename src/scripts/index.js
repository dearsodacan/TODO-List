import "../styles/index.css";

import { Storage } from "./core/StorageAPI.js";
import { Project } from "./shared/Project.js";
import { Services } from "./core/Services.js";
import { Group } from "./core/Group.js";
import { Note } from "./core/Note.js";
import { navAddButton, uList } from "./ui/navHandlers.ts"

/* Init */
const project = new Project();

Storage.setSource(project);
Storage.syncSource();
Storage.sync({pageLoad: true});

Services.setSource(project);

uList.sync();