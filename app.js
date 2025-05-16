
const path = "https://api.nasa.gov/planetary/apod?api_key=lulR8KcgQkt7dvpiPxZbNloPv3sBncGPxXKiJObl"

class astronomyImage {
    constructor(date, explanation, media_type, title, url) {
        this.date = date;
        this.explanation = explanation;
        this.media_type = media_type;
        this.title = title;
        this.url = url;
    }
}

async function getData(path) {
    try {
        const response = await fetch(path);
        const data = await response.json();

        const astronomy_image_today = new astronomyImage(
            data.date,
            data.explanation,
            data.media_type,
            data.title,
            data.url
        ) 
        return astronomy_image_today

    } catch (error) {
        console.error("Error occured when fetching: ", error)
    }
}

async function display_content() {
    const astronomy_image_today = await getData(path);
    const img_title = document.getElementById("img_title");
    const img_expl = document.getElementById("img_expl");
    const photo_section = document.getElementById("photo_section");
    const img_date = document.getElementById("img_date");

    const new_title = document.createTextNode(astronomy_image_today.title);
    const new_expl = document.createTextNode(astronomy_image_today.explanation);
    const new_photo = document.createElement("img");
    const new_date = document.createTextNode(astronomy_image_today.date);
    new_photo.src = astronomy_image_today.url;
    
    img_title.appendChild(new_title);
    img_expl.appendChild(new_expl);
    photo_section.appendChild(new_photo);
    img_date.appendChild(new_date);

}

window.addEventListener("DOMContentLoaded", () => {
    display_content();
})


