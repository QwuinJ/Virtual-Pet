// Pet Options

let pet = {
  name: " ",
  hunger: 4,
  happy: 4,
  health: 4,
  energy: 6,
  sleeping: false,
};

// actions:
// set name (once)
// feed (two options: sweets (+2 happy, +1 energy, -1 health) or veg (+2 health +2 energy -1 happy)) DONE
// play (+2 happy, -1 energy) DONE
// exercise (+2 health, +1 happy, -2 energy) DONE

// Make nap function 

function nap() {
    if (pet.energy > 4 ){
        document.getElementById("update").innerHTML = `${pet.name} is too awake to take a nap!`
    } else {
        document.getElementById("update").innerHTML = `${pet.name} is taking a little nap.`
        checkStats();
        pet.sleeping = true;
        setTimeout(() => {
            pet.energy = 10;
            pet.sleeping = false;
            document.getElementById("update").innerHTML = `${pet.name} is awake again.`
            checkStats();
         }, 5000)
    }
}

function play() {
  if (pet.sleeping == true) {
    document.getElementById("update").innerHTML = `${pet.name} is asleep!`;
  } else if (pet.health < 3) {
    document.getElementById(
      "update"
    ).innerHTML = `${pet.name} is feeling too ill to play.`;
  } else if (pet.hunger > 6) {
    document.getElementById(
      "update"
    ).innerHTML = `${pet.name} is too hungry to play.`;
  } else {
    pet.happy += 2;
    pet.energy -= 1;
    pet.hunger += 2;
  }
  checkStats();
}

function exercise() {
  if (pet.sleeping == true) {
    document.getElementById(
        "update"
      ).innerHTML = `${pet.name} is sleeping!`;
  } else if (pet.energy < 4) {
    document.getElementById(
      "update"
    ).innerHTML = `${pet.name} is too tired to exercise.`;
  } else if (pet.hunger > 6) {
    document.getElementById(
      "update"
    ).innerHTML = `${pet.name} is too hungry to exercise.`;
  } else if (pet.happy < 4) {
    document.getElementById(
      "update"
    ).innerHTML = `${pet.name} is too sad to exercise.`;
  } else {
    pet.energy -= 2;
    pet.health += 2;
    pet.happy += 1;
    pet.hunger += 2;
  }
  checkStats();
}

function feed() {
  checkStats();
  let x = document.getElementById("placeholder");
  x.innerHTML = "";
  document.getElementById("update").innerHTML = "";
  makeButtons();
}

function makeButtons() {
  let x = document.getElementById("placeholder");
  let btn1 = document.createElement("button");
  btn1.innerHTML = "Sweets";
  let btn2 = document.createElement("button");
  btn2.innerHTML = "Veg";
  btn1.onclick = eatSweets;
  btn2.onclick = eatVeg;
  x.appendChild(btn1);
  x.appendChild(btn2);
  
}

function eatSweets() {
    if (pet.sleeping == true) {
        document.getElementById("update").innerHTML = `${pet.name} is asleep!`;
    } else if (pet.hunger == 0) {
    document.getElementById("update").innerHTML = `${pet.name} is not hungry`;
  } else {
    document.getElementById("update").innerHTML = "eating sweets :3";
    pet.health -= 1;
    pet.happy += 2;
    pet.hunger -= 1;
  }
  checkStats();
}

function eatVeg() {
  if (pet.sleeping == true) {
      document.getElementById("update").innerHTML = `${pet.name} is asleep!`;
  } else if (pet.hunger == 0) {
    document.getElementById("update").innerHTML = `${pet.name} is not hungry`;
  } else {
    document.getElementById("update").innerHTML = "eating vegetals :/";
    pet.health += 2;
    pet.hunger -= 2;
    pet.happy -= 1;
  }
  checkStats();
}

function makeName() {
  let n = document.getElementById("nameBar");
  console.log(n.value);
  pet.name = n.value;
  n.style.visibility = "hidden";
  let nb = document.getElementById("nameButt");
  nb.style.visibility = "hidden";
  checkStats();
}

function checkStats() {
  const st = document.getElementById("stats");
  st.innerHTML = " ";
  for (const property in pet) {
    let p = document.createElement("li");
    p.innerHTML = `${property}: ${pet[property]}`;
    st.appendChild(p);
  }
}
