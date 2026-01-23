const nav = document.querySelector('.profile-nav');
const cards = document.querySelectorAll('.card');

function addActiveLink(elm) {
    const links = nav.querySelectorAll('.link');
    links.forEach(elm => {
        elm.classList.remove('active');
    })

    elm.classList.add('active');
}

function renderCard(data, day) {

    data.forEach((d, ind) => {

        cards[ind + 1].getElementsByClassName('card-type')[0].innerText = d?.title;
        cards[ind + 1].getElementsByClassName('current-hours')[0].innerHTML = d?.timeframes[day].current + "hrs";
        ;
        cards[ind + 1].getElementsByClassName('previous-hours')[0].innerHTML = `Last ${day == 'daily' ? 'day' : day == 'weekly' ? 'week' : 'month'} - ${d?.timeframes[day].previous + "hrs"}`;

    })
}

async function fetchData(day = 'weekly') {
    const res = await fetch('./data.json');
    const data = await res.json();

    if (data) {
        renderCard(data, day.toLowerCase());
    }
}

fetchData();

nav.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
        addActiveLink(e.target);
        fetchData(e.target.id)
    }
})

