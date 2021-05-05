// Dark theme changing
const darkTogle = document.querySelector('.switch-togle');
const dark3 = document.querySelectorAll('.dark-theme-3');
const dark4 = document.querySelectorAll('.dark-theme-4');
const darkW = document.querySelectorAll('.dark-theme-w');
const darkLogo = document.querySelectorAll('.dark-theme-logo');
const darkF2 = document.querySelectorAll('.dark-theme-f2');
const darkMap = document.querySelectorAll('.dark-theme-map');
const darkNumber = document.querySelectorAll('.dark-theme-number');
const darkScroll = document.querySelectorAll('.dark-theme-scroll');
const darkArrowLeft = document.querySelectorAll('.dark-theme-arrow-l');
const darkArrowRight = document.querySelectorAll('.dark-theme-arrow-r');

function tog(element, name) {
    element.forEach(el => {
        el.classList.toggle(name);
    });
}

darkTogle.addEventListener('click', (e) => {
    if (e.target.checked) {
        tog(dark3, 'dark3');
        tog(dark4, 'dark4');
        tog(darkW, 'dark-w');
        tog(darkLogo, 'dark-logo');
        tog(darkF2, 'dark-f2');
        tog(darkMap, 'dark-map');
        tog(darkNumber, 'dark-number');
        tog(darkScroll, '.dark-scroll');
        tog(darkArrowLeft,'dark-arrow-l');
        tog(darkArrowRight,'dark-arrow-r');
    } else {
        tog(dark3, 'dark3');
        tog(dark4, 'dark4');
        tog(darkW, 'dark-w');
        tog(darkLogo, 'dark-logo');
        tog(darkF2, 'dark-f2');
        tog(darkMap, 'dark-map');
        tog(darkNumber, 'dark-number');
        tog(darkScroll, '.dark-scroll');
        tog(darkArrowLeft,'dark-arrow-l');
        tog(darkArrowRight,'dark-arrow-r');
    }
});


//Scroll

const scroll = document.querySelectorAll('.scroll');


function changeNumber(value, output) {
    let arr = output.innerHTML.split('\n');
    arr[1] = arr[1].split('');
    arr[1][arr[1].length - 2] = value.toString();
    arr[1] = arr[1].join('');
    return arr.join('\n');
}

scroll.forEach(sc => {
    sc.addEventListener('click', (e) => {
        let parent;
        let output;
        parent = e.target.parentElement;
        output = parent.firstElementChild;
        output.innerHTML = changeNumber(e.target.value, output);

    });
});


scroll.forEach(sc => {
    sc.addEventListener('mousedown', () => {
        sc.onmousemove = function (e) {
            let parent;
            let output;
            parent = e.target.parentElement;
            output = parent.firstElementChild;
            output.innerHTML = changeNumber(e.target.value, output);
        };
    });
});

scroll.forEach(sc => {
    sc.addEventListener('mouseup', () => {
        sc.onmousemove = null;
    });
});


// Carousell Watch animals

const galleryContainer = document.querySelector('.gallery__container');
const galleryItems = document.querySelectorAll('.gallery__item');
const gC = document.querySelector('.g-c');
const galleryGap= 42;
gC.scrollTo(190,0);
const galleryScrollNumber = document.querySelector('.gallery__scroll');


function galleryRemoveActive (){
    const active = document.querySelector('.item_active');
    active.classList.remove('item_active');
}


function galleryMoveItem (ind){
    let width = galleryItems[0].offsetWidth;
    gC.scrollTo((width+galleryGap) * (ind-1), 0);
}

function galleryGetActiveInd(){
    for( let i = 0; i <galleryItems.length; i++ ){
        if(galleryItems[i].classList.contains('item_active')){
            return i;
        }
    }
}

function galleryScrollChange(ind){
    galleryScrollNumber.value = ind;
    let parent;
    let output;
    parent = galleryScrollNumber.parentElement;
    output = parent.firstElementChild;
    output.innerHTML = changeNumber(galleryScrollNumber.value, output);
}

galleryItems.forEach((item,ind)=>{
    if(!item.classList.contains('gallery-circle')){
        item.addEventListener('click', (e)=>{
            if(!item.classList.contains('item_active')){
                let index = galleryGetActiveInd();
                galleryRemoveActive();
                item.classList.add('item_active');
                ind = ind === index ? 0 : ind;
                galleryMoveItem(ind);
                galleryScrollChange(ind);
            }
        });
    }
});

galleryScrollNumber.addEventListener('click',(e)=>{
    let ind = galleryScrollNumber.value;
    let indActive =  galleryGetActiveInd();
    if(ind!=indActive){
        galleryRemoveActive();
        galleryItems[ind].classList.add('item_active');
        galleryMoveItem(ind);
    }
});

galleryScrollNumber.addEventListener('mousedown',()=>{
    galleryScrollNumber.onmousemove = function (e) {
        let ind = galleryScrollNumber.value;
        let indActive =  galleryGetActiveInd();
        if(ind!=indActive){
            galleryRemoveActive();
            galleryItems[ind].classList.add('item_active');
            galleryMoveItem(ind);
            galleryScrollChange(ind);
        }
    };
});

galleryScrollNumber.addEventListener('mouseup', () => {
    galleryScrollNumber.onmousemove = null;
});


// Pets

let petsAnimals = document.querySelector('.container');
if (petsAnimals) {
    petsAnimals = petsAnimals.children;
    const petsArrows = document.querySelectorAll('.pets__arrows .arrow');
    const petsScrollNumber = document.querySelector('.pets__scroll');
    const container = document.querySelector('.container-container');
    let index = 0;
    const gap = 16;
    let width = document.querySelector('.container__item').offsetWidth;
    const petsScroll = document.querySelector('.pets__range .scroll');
    function movePetsAnimals(direction, ind) {
        for (let i = 0; i < petsAnimals.length; i++) {
            if (petsAnimals[i].classList.contains('container__item_active')) {
                if (direction === 'right') {
                    if ((i + ind) < petsAnimals.length) {
                        let rectangle = petsAnimals[i + ind].getBoundingClientRect();
                        let cont = container.getBoundingClientRect();

                        if (rectangle.right > cont.right) moveOne(ind);
                        classAddRemove((i + ind), i);
                        movePetsScroll(i + ind + 1);
                        return;
                    } else {
                        moveDouble(ind);
                        classAddRemove(0, i);
                        movePetsScroll(ind);
                        return;
                    }

                } else if (direction === 'left') {
                    if ((i + ind) >= 0) {
                        let rectangle = petsAnimals[i + ind].getBoundingClientRect();
                        let cont = container.getBoundingClientRect();
                        if ((cont.right - rectangle.right) > 1100) moveOne(ind);
                        classAddRemove((i + ind), i);
                        movePetsScroll(i);
                        return;
                    } else {
                        moveDouble(ind);
                        classAddRemove(7, i);
                        movePetsScroll(8);
                        return;
                    }
                }
            }
        }
    }

    function moveDouble(sighn) {
        if (sighn > 0) {
            index = 0;
            container.scrollBy(-(container.offsetWidth) * 2, 0);
        } else {
            index = 4;
            container.scrollBy((container.offsetWidth) * 2, 0);
        }
    }

    function moveOne(sighn) {
        if (sighn > 0) {
            index++;
            container.scrollTo((width + gap) * index, 0);
        } else {
            index--;
            container.scrollTo((width + gap) * index, 0);
        }
    }

    function classAddRemove(add, remove) {
        petsAnimals[remove].classList.remove('container__item_active');
        petsAnimals[add].classList.add('container__item_active');
    }

    function movePetsScroll(ind) {
        petsScrollNumber.value = ind;
        let parent;
        let output;
        parent = petsScrollNumber.parentElement;
        output = parent.firstElementChild;
        output.innerHTML = changeNumber(petsScrollNumber.value, output);
    }

    petsArrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            if (arrow.classList.contains('arrow_right')) {
                movePetsAnimals('right', 1);
            } else {
                movePetsAnimals('left', -1);
            }
        });
    });


    function movePetsAnimalsScroll(direction, number) {
        for (let i = 0; i < petsAnimals.length; i++) {
            if (petsAnimals[i].classList.contains('container__item_active')) {
                if (direction === 'right') {
                    classAddRemove(number + i, i);
                    let rectangle = petsAnimals[number + i].getBoundingClientRect();
                    let cont = container.getBoundingClientRect();
                    if (rectangle.right > cont.right) {
                        defineIndex(1 + i + number);
                        let amount = (rectangle.right - cont.right) / 294;
                        container.scrollBy((petsAnimals[i].offsetWidth + gap) * amount, 0);
                    }
                    return;
                } else {
                    classAddRemove(i + number, i);
                    let rectangle = petsAnimals[i + number].getBoundingClientRect();
                    let cont = container.getBoundingClientRect();
                    if ((cont.right - rectangle.right) > 1100) {
                        defineIndex(1 + i + number);
                        let amount = (cont.right - rectangle.right) / 294 - 3;
                        container.scrollBy(-(petsAnimals[i].offsetWidth + gap) * amount, 0);
                    }
                    return;
                }
            }
        }
    }

    function defineIndex(number) {
        switch (number) {
            case 1:
                index = 0;
                break;
            case 2:
                index = 1;
                break;
            case 3:
                index = 2;
                break;
            case 4:
                index = 3;
                break;
            case 5:
                index = 1;
                break;
            case 6:
                index = 2;
                break;
            case 7:
                index = 3;
                break;
            case 8:
                index = 4;
                break;
            default:
                break;
        }

    }


    petsScroll.addEventListener('click', (e) => {
        let number = +e.target.value - 1;
        let i = 0;
        for (i; i < petsAnimals.length; i++) {
            if (petsAnimals[i].classList.contains('container__item_active')) break;
        }
        if (number === i) return;
        let direction = number > i ? 'right' : 'left';
        number = number - i;
        movePetsAnimalsScroll(direction, number);
    });

    petsScroll.addEventListener('mousedown', (e) => {
        petsScroll.onmousemove = function (e) {
            movePetsScroll(e.target.value);
            let number = +e.target.value - 1;
            let i = 0;
            for (i; i < petsAnimals.length; i++) {
                if (petsAnimals[i].classList.contains('container__item_active')) break;
            }
            if (number === i) return;
            let direction = number > i ? 'right' : 'left';
            number = number - i;
            movePetsAnimalsScroll(direction, number);
        };
    });

    petsScroll.addEventListener('mouseup', (e) => {
        petsScroll.onmousemove = null;
    });





}





// Map

const intermediateArrows = document.querySelectorAll('.intermediate__arrows .arrow');
if(intermediateArrows.length){
    const intermediateAnimals = document.querySelectorAll('.intermediate__item');
    const intermediateAnimalsLink = document.querySelectorAll('.intermediate__link');
    const intermediateScrollNumber = document.querySelector('.intermediate__scroll');
    const intermediateScroll = document.querySelector('.intermediate__range .scroll');
    const intermediatePin = document.querySelectorAll('.intermediate .map__content .animal');
    const intermediateBtn = document.querySelector('.intermediate .btn');


    function moveIntermediateAnimals(direction,ind) {
        for (let i = 0; i < intermediateAnimals.length; i++) {
            if (intermediateAnimals[i].classList.contains('side-bar__item_active')) {
                if(direction==='right'){
                    if(i+ind<intermediateAnimals.length){
                        moveIntermediateScroll(i+ind+1);
                        intermediateAddRemoveClass(i+ind,i);
                    }else{
                        moveIntermediateScroll(ind);
                        intermediateAddRemoveClass(0,i);
                    }
                    return;

                } else{
                    if(i+ind>=0){
                        moveIntermediateScroll(i+ind+1);
                        intermediateAddRemoveClass(i+ind,i);
                    } else{
                        moveIntermediateScroll(8);
                        intermediateAddRemoveClass(7,i);
                    }
                    return ;
                }
            }
        }
    }

    function moveIntermediateScroll(ind){
        intermediateScrollNumber.value = ind;
        let parent;
        let output;
        parent = intermediateScrollNumber.parentElement;
        output = parent.firstElementChild;
        output.innerHTML = changeNumber(intermediateScrollNumber.value, output);
    }

    function intermediateAddRemoveClass(add, remove) {
        intermediateAnimals[remove].classList.remove('side-bar__item_active');
        intermediateAnimalsLink[remove].classList.remove('side-bar__link_active');
        let imgRemoved = intermediateAnimalsLink[remove].firstElementChild;
        imgRemoved.width = 108;
        intermediateAnimals[add].classList.add('side-bar__item_active');
        intermediateAnimalsLink[add].classList.add('side-bar__link_active');
        let imgAdd = intermediateAnimalsLink[add].firstElementChild;
        imgAdd.width = 138;
        intermediateAddRemovePin(add,remove);
    }

    function addLinkBtn (name){
        let parent = intermediateBtn.parentElement;
        switch (name){
            case 'panda':
                parent.href = 'live-broadcast_panda.html';
                break;
            case 'eagle':
                parent.href = 'live-broadcast_eagle.html';
                break;
            case 'alligator':
                parent.href = 'live-broadcast_alligator.html';
                break;
            case 'gorilla':
                parent.href = 'live-broadcast_gorilla.html';
                break;
            default:
                parent.href = '#';
            break;
        }
    }


    function intermediateAddRemovePin(add,remove){
        let imgRemoved = intermediateAnimalsLink[remove].firstElementChild;
        imgRemoved = imgRemoved.src.split('/').pop().split('.')[0].split('-')[1];
        let imgAdd = intermediateAnimalsLink[add].firstElementChild;
        imgAdd = imgAdd.src.split('/').pop().split('.')[0].split('-')[1];
        addLinkBtn(imgAdd);
        for(let i = 0; i <intermediatePin.length; i++){
            let pinName = intermediatePin[i].classList[1].split('_')[1];
            if(imgRemoved==pinName){
                let span = intermediatePin[i].firstElementChild;
                span.classList.remove('pin_active');
            }
            if(imgAdd==pinName){
                let span = intermediatePin[i].firstElementChild;
                span.classList.add('pin_active');
            }
        }
    }


    intermediateArrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            let direction = arrow.classList.contains('arrow_right') ? 'right' : 'left';
            let ind = direction === 'right' ? 1 : -1;
            moveIntermediateAnimals(direction,ind);
        });
    });


    intermediateScroll.addEventListener('click', (e) => {
        let ind = +e.target.value-1;
        let i = 0;
        for (i; i < intermediateAnimals.length; i++){
            if(intermediateAnimals[i].classList.contains('side-bar__item_active')){
                break;
            }
        }
        let direction = i > ind ? 'left' : 'right';
        ind = i  < ind ? ind-i :  ind -i;
        moveIntermediateAnimals(direction,ind);
    });

    intermediateScroll.addEventListener('mousedown', (e) => {
        intermediateScroll.onmousemove = function (e) {
            let ind = +e.target.value-1;
            let i = 0;
            for (i; i < intermediateAnimals.length; i++){
                if(intermediateAnimals[i].classList.contains('side-bar__item_active')){
                    break;
                }
            }
            let direction = i > ind ? 'left' : 'right';
            ind = i  < ind ? ind-i :  ind -i;
            moveIntermediateAnimals(direction,ind);
        };
    });

    intermediateScroll.addEventListener('mouseup', (e) => {
        intermediateScroll.onmousemove = null;
    });

    function switchClass(ind){
        for( let i = 0; i < intermediateAnimals.length; i++){
            if(intermediateAnimals[i].classList.contains('side-bar__item_active')){
                moveIntermediateScroll(ind+1);
                intermediateAddRemoveClass(ind,i);
            }
        }
    }

    intermediateAnimals.forEach((animal,ind)=>{
        animal.addEventListener('click', ()=>{
            if(!animal.classList.contains('side-bar__item_active')) {
                switchClass(ind);
            }
        });
    });

    intermediatePin.forEach(pin=>{
        pin.addEventListener('click',(e)=>{
            if(!e.target.classList.contains('pin_active')){
                let pinName = pin.classList[1].split('_')[1];
                for( let i = 0; i < intermediateAnimals.length; i++){
                    let img = intermediateAnimals[i].firstElementChild.firstElementChild;
                    img = img.src.split('/').pop().split('.')[0].split('-')[1];
                    if(pinName===img){
                        switchClass(i);
                    }
                }
            }
        });
    });
}



const videoBtns = document.querySelectorAll('.videos__btn');
const videoContainer = document.querySelector('.videos__small');
const videosBlock = document.querySelectorAll('.video-block');
let videoMain = document.querySelector('.video__main');
const videoGap = 26;

function videoRemoveActive (){
    const active = document.querySelector('.btn_active');
    active.classList.remove('btn_active');
}

function videoMove (ind){
    console.log((videoContainer.offsetWidth) * ind);
    videoContainer.scrollTo((videoContainer.offsetWidth+videoGap) * ind, 0);
}

videosBlock.forEach(block=>{
    block.addEventListener('click',()=>{
        let parent = block.parentElement;
        let video = parent.children[1];
        let src = video.src;
        video.src = videoMain.src;
        videoMain.src = src;
    });
});

videoBtns.forEach((btn,ind)=>{
    btn.addEventListener('click',(e)=>{
        if(!btn.classList.contains('btn_active')){
            videoRemoveActive();
        }
        btn.classList.add('btn_active');
        videoMove(ind);
    });
});


