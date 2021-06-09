new ClipboardJS('.btn');
let form = document.querySelector('form');
let nombre = document.querySelector('.unshorter');

function menu() {
    document.getElementById("menu").classList.toggle("menu");
}

form.addEventListener('submit', e => {
    e.preventDefault()
    if (nombre.value == ''){

        document.getElementById('error').classList.remove('hidde-error');
        document.getElementById('hidde-error-form').classList.add('show-error');
        document.getElementById('link').classList.add('hidde');
    
    } else {

        document.getElementById('error').classList.add('hidde-error');
        document.getElementById('hidde-error-form').classList.remove('show-error');
        document.getElementById('link').classList.add('hidde');
        document.getElementById('loader').classList.remove('hidde');

        let url = 'https://api.shrtco.de/v2/shorten?url=' + nombre.value;
    
        fetch(url)
        .then(response => response.json())
        .then(json => {
            document.getElementById('link').classList.remove('hidde');
            document.getElementById('loader').classList.add('hidde');
            document.getElementById('btn-onclick').classList.remove('btn-onclick');
            document.querySelector('.btn').textContent = 'Copy';
            document.querySelector(".link").textContent = nombre.value;
            document.querySelector(".linkUnshorter").textContent = json.result.full_short_link;
        });
    }
});

let links = document.querySelector(".links-container");
links.innerHTML = '<p class="link"></p>' + '<p class="linkUnshorter"></p>' + '<button id="btn-onclick" onclick="changeCopy()" class="btn" data-clipboard-action="copy" data-clipboard-target=".linkUnshorter">Copy</button>';

function changeCopy() {
    document.querySelector('.btn').textContent = 'Copied!';
    document.getElementById('btn-onclick').classList.add('btn-onclick');
}