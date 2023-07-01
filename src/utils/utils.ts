export const shuffleArray = (array: string[]) :string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const generateRandomColor = (): string => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

export const generateDifferentRandomColor = (colorToAvoid: string): string => {
  let randomColor = "";
  while (1) {
    randomColor = Math.floor(Math.random() * 16777215).toString(16);
    if (randomColor !== colorToAvoid) {
      break;
    }
  }
  return randomColor;
};
