let popup = document.querySelector('.extern');
let closeBtn = document.querySelector('.close')
let cancelBtn = document.querySelector('.down-side button');
let btnSubmit = document.querySelector('.btn-submit')

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
})

function hidePopup() {
    popup.style.display = 'none';
}