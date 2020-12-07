export const unsafeKeys = Object.keys as <T extends object>(
  x: T
) => (keyof T)[];
