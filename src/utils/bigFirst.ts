export const bigFirst = (str: string | undefined): string | undefined => {
  return str
    ?.split(" ")
    .map((char) => char[0].toUpperCase() + char.slice(1))
    .join(" ");
};
