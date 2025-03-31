console.log("prout")

const numberOfGradings = 5;

const possibleNotations = [
    [ "inexistant", "passable", "correct", "bien", "très bien" ],
    [ "inexistant", "passable", "correct", "bonne", "idéale" ],
    [ "inutile", "peu pertinent", "utile", "pertinent", "indispensable" ],
    [ "très facile", "facile", "adaptée", "difficile", "Chuck Norris" ],
]

const pickARandom = (list) => {
    return list[Math.floor(Math.random() * list.length)];
}

function shuffleTheNotes(ratingsDiv) {
    ratingsDiv.forEach(div => {
        const notesContainers = div.querySelector(".ui-rating.pull-right.label.important");
        if (!notesContainers)
            return;

        const notationLevel = Math.floor(Math.random() * numberOfGradings);
    
        for (n = 0; n < possibleNotations.length; ++n) {
            const notation = possibleNotations[n][notationLevel];

            const button = notesContainers.querySelector(`.ui-rating-star.ui-rating-empty[title="${[notation]}"]`);
            if (!button)
                continue;

            button.click();
            break;
        }
    })
}

function onLoad() {
    const alreadyHere = document.querySelector(".idontwannanote");
    if (alreadyHere)
        return;

    const targetDiv = document.querySelector(".modal.popup.custom.module.rating.ui-draggable");
    if (!targetDiv)
        return;

    const dataDiv = targetDiv.querySelector("div.data");
    if (!dataDiv)
        return;

    const errorDiv = dataDiv.querySelector("div.error");
    if (!errorDiv)
        return;

    const ratingsDiv = dataDiv.querySelectorAll("div.rating");
    if (!ratingsDiv)
        return;

    const myButton = document.createElement("button")
    myButton.textContent = "i dont want to note !";
    myButton.className = "idontwannanote";
    myButton.addEventListener("click", () => {
        shuffleTheNotes(ratingsDiv);
    });

    dataDiv.insertBefore(myButton, errorDiv);
    console.log("finished setup");
}

window.addEventListener("load", () => {
    setTimeout(onLoad, 100);
});

window.addEventListener("click", () => {
    setTimeout(onLoad, 100);
}, true);
