import { Unit } from "$lib/enums";
import { derived, writable } from "svelte/store";

export const unit = writable(Unit.KILOMETER);

export const unitFactor = derived(
    unit,
    $unit => $unit === Unit.KILOMETER ? 1000 : 1609
)