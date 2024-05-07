export const toTitleCase = (str: string | null) => {
  if (!str || str?.includes('://')) return '';
  return str.toLowerCase().replace(/(?:^|\b|-)\w/g, (char) => {
    return char.toUpperCase();
  });
};
