const tip = (total, tipPercent = 0.2) => {
  return total * tipPercent;
};

console.log(tip(10, 0.05));
