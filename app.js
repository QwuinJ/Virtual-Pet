// Pet Options

let pet = {
    name: " ",
    hunger: 1,
    happy: 0,
    health: 0,
    energy: 10,
    sleeping: false,
}

// actions:
// set name (once)
// feed (two options: sweets (+2 happy, +1 energy, -1 health) or veg (+2 health +2 energy -1 happy)) DONE
// play (+2 happy, -1 energy)
// exercise (+2 health, +1 happy, -2 energy)

function play() {
    pet.happy += 2;
    pet.energy -=1;
    pet.hunger -=2;
    checkStats();
}

function exercise() {
    pet.energy -= 2;
    pet.health += 2;
    pet.happy += 1;
    pet.hunger -=2;
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
    x.appendChild(btn1);
    x.appendChild(btn2);
    btn1.onclick = eatSweets;
    btn2.onclick = eatVeg;
}

function eatSweets() {
    if (pet.hunger < 10) {
        document.getElementById("update").innerHTML = "eating sweets :3"
        pet.health -= 1;
        pet.happy += 2;
        pet.hunger +=1;
    } else {
        document.getElementById("update").innerHTML ="Not hungry";
    }
    checkStats();
}

function eatVeg() {
    if (pet.hunger < 10) {
        document.getElementById("update").innerHTML = "eating vegetals :/"
        pet.health += 2;
        pet.hunger += 2;
        pet.happy -= 1;
    } else {
        document.getElementById("update").innerHTML ="Not hungry";
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
    st.innerHTML = (" ");
    for (const property in pet) {
        let p = document.createElement("li");
        p.innerHTML = `${property}: ${pet[property]}`;
        st.appendChild(p);
    }
    if (pet.energy <= 1) {
        pet.sleeping = true;
    }
}


