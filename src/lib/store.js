// src/lib/store.js
import { writable } from 'svelte/store';

export const answers = writable({});
export const skipRageStore = writable(false);