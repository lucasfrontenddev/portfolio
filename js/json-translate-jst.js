let textAlert = 'You will be redirected to an external website for English language / Você será conduzido a uma página web externa para o Idioma Português';

var dict = {
    'About me': {
        es: 'Sobre mi'
    },
    "Quality": {
        es: 'Experiencia'
    },
    'Skill': {
        es: 'Teconologías'
    },
    'Service': {
        es: 'Servicios'
    },
    'Portfolio': {
        es: 'Mis cositas'
    },
    'Review': {
        es: ''
    },
    'Web Developer, Web Designer, Apps Developer, Video Editor': {
        es: 'Desarrollador Web, Diseñador Web, Desarrollador de Apps, Editor de videos'
    },
    'Download CV': {
        es: 'Descargar CV'
    },
    'Spanish': {
        es: 'Español'
    },
    'English': {
        es: 'Inglés'
    },
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var translator = $('body').translate({ lang: "en", t: dict }); //use English
if (getUrlParameter('lang') == 'es') {
    translator.lang("es");
    document.getElementById("switch").checked = true;
} else {
    document.getElementById("switch").checked = false;
}

$(document).ready(function(){
    if(getUrlParameter('lang') == 'es'){
        console.log('es');
        $('a').each(function(i,v){
            let viejoHREF = $(v).attr('href');
            $(v).attr('href', viejoHREF+'?lang=es');
        });
        $('.cepi-url').attr('href','http://127.0.0.1:5500/');
        $('.cepi-url').find('h4').text('Ingles');
    }
})

/*
$(document).ready(function(){
    if(getUrlParameter('lang') == 'es'){
        location.href='http://127.0.0.1:5500/?lang=es';
        $("#switch").attr("checked");
        console.log('essssss');
        $('a').each(function(i,v){
            let viejoHREF = $(v).attr('href');
            $(v).attr('href', viejoHREF+'?lang=es');
        });

    } else {
        $("#switch").removeAttr("checked");
    }
})

let check = document.getElementById("switch");
check.addEventListener("click", translate);
function translate(){
    let id = check.checked;
    if(id=true){
        location.href='http://127.0.0.1:5500/?lang=es';

    } else {
        location.href='http://127.0.0.1:5500/';

    }
}

function isChecked(){
    let checkbox = document.getElementById("switch").checked;
    if(checkbox == true){
        location.href='http://127.0.0.1:5500/?lang=es';
        $("#switch").attr('checked');
    } else {
        $("#switch").removeAttr('checked');
    }
}

function isChecked(){
    let checkbox = document.getElementById("switch").checked;
    if(checkbox == true){
        location.href='http://127.0.0.1:5500/?lang=es';
        $("#switch").addAttr('checked');
    } else {
        location.href='http://127.0.0.1:5500/';
        $("#switch").removeAttr('checked');
    }
}








const checkbox = document.getElementById('switch');
checkbox.addEventListener('click', ()=> {

    console.log( "el chebops es" , checkbox)
    if (checkbox.checked === true){
        checkbox.checked = true
        location.href='http://127.0.0.1:5500/?lang=es';
        
    } else {
        checkbox.checked = false;
        location.href='http://127.0.0.1:5500/'
        console.log('pija')
    }
    
})

*/
/*'

$(document).ready(function(){
    if(getUrlParameter('lang') == 'es'){
        console.log('es');
        $('a').each(function(i,v){
            let viejoHREF = $(v).attr('href');
            $(v).attr('href', viejoHREF+'?lang=es');
        });
        $('.lucas-url').attr('href','http://127.0.0.1:5500/');
        $('.lucas-url').find('h3').text('Web - English');
    }
})
*/