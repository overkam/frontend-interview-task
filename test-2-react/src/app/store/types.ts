import { store } from './configure-store';

export type State = ReturnType<typeof store.getState>;
