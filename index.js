var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten() {
  kittens.push();
  return kittens;
}

function destructivelyPrependKitten() {
  kittens.shift();
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.unshift();
  return kittens;
}

function appendKitten(){
  moreKittens [...kittens]
}

