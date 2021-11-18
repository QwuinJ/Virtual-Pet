// Pet Options

let pet = {
    name: " ",
    hungry: true,
    happy: 0,
    health: 0,
    energy: 0,
    sleeping: false,
}

// actions:
// set name (once)
// feed (two options: sweets (+2 happy, +1 energy, -1 health) or veg (+2 health +2 energy -1 happy))
// play (+2 happy, -1 energy)
// exercise (+2 health, +1 happy, -2 energy)

function feed() {
    if (pet.hungry) {
        console.log("hungry :(")
        pet.weight += 2;
        pet.hungry = false;
    } else {
        console.log("Not hungry")
    }
}

function makeName() {
    let n = document.getElementById("nameBar").value;
    console.log(n);
    pet.name = n;
    let na = document.getElementById("nameBar");
    na.style.visibility = "hidden";
}

function checkStats() {
    const st = document.getElementById("stats");
    st.innerHTML = (" ");
    for (const property in pet) {
        let p = document.createElement("li");
        p.innerHTML = `${property}: ${pet[property]}`;
        st.appendChild(p);
    }
}


