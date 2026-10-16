
function upDate(previewPic) {
    console.log("Preview image selected");
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    const imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    const imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}

function addTabindex() {
    console.log("Page loaded. Adding tabindex to images.");

    const images = document.querySelectorAll(".preview");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }

    console.log("Tabindex added to", images.length, "images.");
}
