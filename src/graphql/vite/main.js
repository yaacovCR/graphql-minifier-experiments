export const TEST = globalThis.process && process.env.NODE_ENV === 'development' ? 'development' : 'production';
console.log(TEST);
