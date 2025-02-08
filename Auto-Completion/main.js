let keywords = [
    "Coff", "Coffee shops near me",
    "Coffee recipes", "Coffee beans", "Coffee makers", "Coffee health benefits",
    "Rest", "Restaurants near me", "Restaurants open now", "Restaurant reservations,", "Restaurant reviews", "Restaurant deals",
    "Weath", "Weather today", "Weather forecast", "Weather radar", "Weather in London", "Weather app",
    "Movi", "Movies playing now", "Movies near me", "Movie trailers", "Movie reviews", "Movie tickets",
    "Lear", "Learn to code", "Learn Spanish", "Learn guitar", "Learning resources", "Learning disabilities"
]

const input = document.getElementById('input');
const result = document.querySelector(".result");


input.onkeyup = () => {
    let suggestion = []
    let inputValue = input.value;

    if (inputValue.length) {
        suggestion = keywords.filter((e) => {
            return e.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());
        })
    }
    console.log(suggestion)
    display(suggestion);

    if (!suggestion.length) {
        result.innerHTML = ''
    }
}

function display(suggestion) {
    const content = suggestion.map((list) => {
        return "<li onclick=selectList(this)>" + list + "</li>"
    })
    // map return a new array so we need to convert it to string (to remove comma)
    result.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectList(data) {
    input.value = data.innerHTML
    result.innerHTML = '';
}