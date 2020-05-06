let data_0 = {
    photo: 'fotky/jastericka.jpg',
    title: 'Jašterička',
    description: 'Jašterica si užíva prvé jarné slnko a hľadá pritom niečo dobrého pod zub.'
};

let data_1 = {
    photo: 'fotky/chopok.jpg',
    title: 'Chopok',
    description: 'Pohľad z Ďumbiera, najvyššieho vrcholu Nízkych Tatier (2043 m.n.m) na susedný Chopok (2024 m.n.m.). '
};

let data_2 = {
    photo: 'fotky/kamzik.jpg',
    title: 'Kamzík',
    description: 'Zvedavý tatranský kamzík si ide svojou cestou bez ohľadu na turistov. '
};

let data_3 = {
    photo: 'fotky/mlok.jpg',
    title: 'Salamandra',
    description: 'Salamandra škvrnitá sa teší z ďažďa pričom svojím výstražným sfarbením odrádza možných predátorov. '
};

let data_4 = {
    photo: 'fotky/poniklec.jpg',
    title: 'Poniklec',
    description: 'Chlpatý Poniklec slovenský je zákonom chránený posol jari. '
};

let data_5 = {
    photo: 'fotky/ruza.jpg',
    title: 'Skalná ruža',
    description: 'Skalná ruža zdobí hory po celý rok. Bez problémov prežije v mraze, v suchu a takmer bez pôdy. Jej vlastnosti využívajú tiež ľudoví liečitelia.'
};

let data_6 = {
    photo: 'fotky/stangariegel.jpg',
    title: 'Štangarígeľ',
    description: 'Unikátny prírodný výtvor Štangarígeľ  pozostáva z pravidelných päťbokých andezitových pilierov. Niektoré dosahujú výšku až 6 metrov.'
}

let data_7 = {
    photo: 'fotky/vazka.jpg',
    title: 'Vážka červená',
    description: 'Samček Vážky červenej je sfarbený dočervena, zaitaľ čo samičky bývajú menej nápadné, hnedo-žlté.'
}

let data_8 = {
    photo: 'fotky/zapad_zima.jpg',
    title: 'Západ slnka',
    description: 'Ružový západ slnka v snehom pocukrovaných Nízkych Tatrách. '
}

let currentPhoto = 0;
let imagesData = [data_0, data_1, data_2, data_3, data_4, data_5, data_6, data_7, data_8]

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').html(`<h1>${imagesData[photoNumber].title}</h1>`);
    $('#photo-description').html(`<p>${imagesData[photoNumber].description}</p>`);
};

loadPhoto(currentPhoto)

imagesData.forEach((item, index) => {
    $('.thumbnails').append(`<div class="thumbnail-box"><div class="hidden-title">${item.title}</div><div class="arrow-bottom"></div><div data-arrow="${index}"></div><img src="${item.photo}" class="nahled" data-index="${index}"></div>`);
});

$(`[data-index="${currentPhoto}"]`).toggleClass('active-nahled');
$(`[data-arrow="${currentPhoto}"]`).toggleClass('arrow-top');

$('#right').click(() => {
    if(currentPhoto === (imagesData.length - 1)) {
        currentPhoto = 0;           
    } else {
    currentPhoto++;
    };
    loadPhoto(currentPhoto);
    $('.active-nahled').toggleClass('active-nahled'); 
    $('.arrow-top').toggleClass('arrow-top');   
    $(`[data-index="${currentPhoto}"]`).toggleClass('active-nahled');
    $(`[data-arrow="${currentPhoto}"]`).toggleClass('arrow-top');
});

$('#left').click(() => {
    if(currentPhoto === 0) {
        currentPhoto = (imagesData.length - 1);        
    } else {
    currentPhoto--;
    };
    loadPhoto(currentPhoto);
    $('.active-nahled').toggleClass('active-nahled');
    $('.arrow-top').toggleClass('arrow-top');
    $(`[data-index="${currentPhoto}"]`).toggleClass('active-nahled');
    $(`[data-arrow="${currentPhoto}"]`).toggleClass('arrow-top');
});

$('.nahled').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    currentPhoto = parseInt(indexClicked);
    loadPhoto(currentPhoto)
    $('.active-nahled').toggleClass('active-nahled');
    $('.arrow-top').toggleClass('arrow-top');   
    $(event.target).toggleClass('active-nahled');
    $(`[data-arrow="${currentPhoto}"]`).toggleClass('arrow-top');
});  

$('.active-nahled')