interface Fish {
  swim: Function;
}

interface Bird {
  fly: Function;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return 'swim' in pet;
}

const pet = {} as Fish | Bird;

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
