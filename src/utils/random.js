let array = [];
for (let i = 1; i <= 16; i++) {
  array.push(i);
}

export const randomAssign = () => {
  let currentIndex = 16;
  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};
