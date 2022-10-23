const dict = {
    '': {
        es: ''
    },
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
        es: 'Proyectos'
    },
    'Review': {
        es: ''
    },
    'Web Developer, Web Designer, Apps Developer, Video Editor': {
        es: 'Desarrollador Web, Diseñador Web, Desarrollador de Apps, Editor de videos'
    },
    
    "I'm": {
        es: "Soy"
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


    'About Me': {
        es: 'Sobre mí'
    },
    'About': {
        es: ''
    },
    'Web Developer - Video Editor': {
        es: 'Sobre mí'
    },
    '': {
        es: ''
    },
    'Name: <span class="text-secondary">Lucas Sebastián Martinez</span>': {
        es: 'Nombre: <span class="text-secondary">Lucas Sebastián Martinez</span>'
    },
    'Birthday: <span class="text-secondary">9 July 1986</span>': {
        es: 'Fecha de nacimiento <span class="text-secondary">9 de Julio de 1986</span>'
    },
    'Phone: <span class="text-secondary trn">+054 11 2386 8020</span>': {
        es: 'Teléfono: <span class="text-secondary trn">+054 11 2386 8020</span>'
    },
    'Email:': {
        es: ''
    },
    'Address: <span class="text-secondary">Recoleta, BsAs. ARG</span>': {
        es: 'Dirección: <span class="text-secondary">Recoleta, BsAs. ARG</span>'
    },
    'Freelance: <span class="text-secondary">Available</span>': {
        es: 'Freelance: <span class="text-secondary">Disponible</span>'
    },
    /* EDUCACION Y EXPERIENCIA */
    '': {
        es: ''
    },
    'Education & Expericence': {
        es: 'Educación y experiencia'
    },
    'My Education': {
        es: 'Educación'
    },
    'Fullstack Developer': {
        es: 'Desarrollador Fullstack'
    },
    '': {
        es: ''
    },
    'Frontend Developer': {
        es: 'Desarrollador Frontend'
    },
    '': {
        es: ''
    },
    'My Expericence': {
        es: 'Experiencia'
    },
    'Web Designer': {
        es: 'Desarrollador Web'
    },
    '': {
        es: ''
    },
    /* MIS HABILIDADES */
    'My Skills': {
        es: 'Habilidades'
    },
    /* SERVICIOS */
    'My Services': {
        es: 'Servicios'
    },
    'Web Design': {
        es: 'Diseño web'
    },
    '': {
        es: ''
    },
    'Web Development': {
        es: 'Desarrollo web'
    },
    '': {
        es: ''
    },

    '': {
        es: ''
    },
    '': {
        es: ''
    },
    '': {
        es: ''
    },
    '': {
        es: ''
    },
    'Translations': {
        es: 'Traducciones'
    },
    '': {
        es: ''
    },
    'Content Creating': {
        es: 'Contenidos creativos'
    },
    /* GALERIA */
    'My Portfolio': {
        es: 'Galería'
    },
    'Skydiving. I am a Packer, I am rigger': {
        es: 'Paracaidismo. Packer y rigger'
    },
    'Government page replica in english and portuguese': {
        es: 'Replica de página del gobierno en idiomas'
    },
    '': {
        es: ''
    },
    'Crypto converter - React': {
        es: 'Convertidor de criptomonedas - React'
    },
    'Task Notepad - React': {
        es: 'Anotador de tareas - React'
    },
    'Car insurance quotes - React': {
        es: 'Cotizador de seguros - React'
    },
    '': {
        es: ''
    },
    'Contact Me': {
        es: 'Contactame'
    },
    'Send Message': {
        es: 'Enviar'
    },
    '': {
        es: ''
    },
    '': {
        es: ''
    },
    '': {
        es: ''
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
    $("#spanish").addClass('text-white');
    $('#name').attr('placeholder','Tu nombre');
    $('#email').attr('placeholder','Tu correo');
    $('#subject').attr('placeholder','Asunto');
    $('#message').attr('placeholder','mensaje');
    /*
    $('#about-a').attr('href','#me');
    $('#about').attr('id','#about?lang=es');
    */
} else {
    $("#english").addClass('text-white');
}

$(document).ready(function(){
    if(getUrlParameter('lang') == 'es'){
        console.log('es');
        $('a').each(function(i,v){
            let viejoHREF = $(v).attr('href');
            $(v).attr('href', viejoHREF+'?lang=es');
            console.log(v);
            $(v)('#about-a').attr('href', "#me" + viejoHREF+'?lang=es');
        });
        /*
        $('.eng-url').attr('href','http://127.0.0.1:5500/');git
        */
        $('.eng-url').find('h4').text('Inglés');
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