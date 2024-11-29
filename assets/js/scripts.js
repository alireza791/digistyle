// mini cart
document.getElementById('cart').addEventListener('mouseover',(event)=>{
    document.getElementById('detail-cart').classList.add('detail-cart-show')
})
document.getElementById('cart').addEventListener('mouseout',(event)=>{
    document.getElementById('detail-cart').classList.remove('detail-cart-show')
})



// mega menu

let items_menu= document.querySelectorAll('.header-navigtions-item')
Array.from(items_menu).forEach(link => {
    link.addEventListener('mouseover',(event)=>{
        link.children[1].classList.add('show');
        link.children[0].children[0].style= 'display:inline-block;'


    })
    link.addEventListener('mouseout',(event)=>{
        link.children[1].classList.remove('show');
        link.children[0].children[0].style= 'display:none;'
        
    })
    
})



let megaMenus = document.querySelectorAll('.tab-mega-menu');

megaMenus.forEach(menu => {
    menu.addEventListener('mouseover', () => {
        megaMenus.forEach(m => m.classList.remove('active'));
        menu.classList.add('active');
    });
});


// mega search
let search_mega= document.getElementById('search-filde');
search_mega.addEventListener('focusin', (event)=>{
    let  mega_search= document.querySelectorAll('.mega-search');
    mega_search[0].classList.add('mega-search-show');
});

let close_search_mega= document.querySelector('.mega-search-close')
close_search_mega.addEventListener('click',(event)=>{
    let  mega_search= document.querySelectorAll('.mega-search');
    mega_search[0].classList.remove('mega-search-show');
});

// counterdown
let totalSeconds = 60000; 
        
function updateTimerDisplay() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    let displayHorse = hours <10  ? '0' + hours : hours;
    let displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    let displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    let counter=document.querySelectorAll('.counter-incredible');
    counter.forEach(item=>{
        item.innerText = `${displayHorse}:${displayMinutes}:${displaySeconds}`;
    })
}

function startCountdown() {
    let countdownInterval = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateTimerDisplay();
        } else {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

window.onload = startCountdown;

// tab banner


document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.title-tab');
    const tabBodies = document.querySelectorAll('.tab-body');


    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabData = this.getAttribute('tab-data');

            tabs.forEach(t => t.classList.remove('title-tab-active'));
            tabBodies.forEach(body => body.classList.remove('tab-body-active'));

            this.classList.add('title-tab-active');
            document.querySelector(`.tab-body[tab-data="${tabData}"]`).classList.add('tab-body-active');
        });
    });
});


// design iranian

document.addEventListener('DOMContentLoaded', function () {
    let tabs_2 = document.querySelectorAll('.tab-design-iranian-brand-title-item');
    let tabBodies_2 = document.querySelectorAll('.tab-design-iranian-brand-body');
    tabs_2.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabData_2 = this.getAttribute('tab-data');

            tabs_2.forEach(t => t.classList.remove('tab-design-iranian-brand-title-item-active'));
            tabBodies_2.forEach(body =>{ 
                body.classList.remove('tab-design-iranian-brand-body-active')});

            this.classList.add('tab-design-iranian-brand-title-item-active');
            document.querySelector(`.tab-design-iranian-brand-body[tab-data="${tabData_2}"]`).classList.add('tab-design-iranian-brand-body-active');
        });
    });
});