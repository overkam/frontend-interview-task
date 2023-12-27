type TLogger = 'log' | 'error' | 'warn' | 'info';

export const logger = (title?: string, msg?: string | any, type: TLogger = 'info'): void => {
  if (import.meta.env.NODE_ENV === 'development') {
    console[type](title, msg);
  }
};
