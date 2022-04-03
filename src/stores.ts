import { writable } from "svelte/store";
import { Unit } from "$lib/enums";

export const unit = writable(Unit.KILOMETER);


