// Pet Options

let pet = {
    name: " ",
    hungry: true,
    weight: 0,
    age: 0,
}

function feed() {
    if (pet.hungry) {
        console.log("hungry :(")
        pet.weight += 2;
        pet.hungry = false;
    } else {
        console.log("Not hungry")
    }
}


function checkStats() {
    for (const property in pet) {
        const st = document.getElementById("stats");
        let p = document.createElement("li");
        p.innerHTML = `${property}: ${pet[property]}`;
        st.appendChild(p);
    }
}

function setName () {
    pet.name = "milton";
}

