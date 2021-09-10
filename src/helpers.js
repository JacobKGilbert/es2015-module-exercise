const choice = (fruits) => {
  const fruit = fruits[Math.floor(Math.random() * fruits.length)]
  return fruit
}

const remove = (fruits, fruit) => {
  const idx = fruits.indexOf(fruit)
  fruits.splice(idx, 1)
}

export { choice, remove }