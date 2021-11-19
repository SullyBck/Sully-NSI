//boite de dialogue affichée uniquement à la premieère ouverture de la page
var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
     alert("Bienvenue sur ma page espace libre, dans laquelle j'ai décidé de
     présenter le montage vidéo");
     localStorage.setItem('alerted','yes');
    }
