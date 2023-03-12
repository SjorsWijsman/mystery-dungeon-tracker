import { writable } from 'svelte/store';
import { persistStore } from '../scripts/persist-store';

export const pageColor = writable(['var(--color-black)']);
export const recruitedPokemon = persistStore('PMD-recruitedPokemon', []);
