//bouton pour mettre le titre en rouge
let i=0;
function fclick (event){
     let h1=document.getElementById("h1");
	if (i==0){
			h1.style.color="red";
			i=1;
		}
	else {
			h1.style.color="#612c84";
			i=0;
		}
	}

 let bouton1 = document.getElementById("bouton1");
 bouton1.addEventListener("click",fclick);



//bouton pour mettre le texte en italique
let t=0;
function fclick2 (event){
     let txt=document.getElementById("content");
	if (t==0){
			txt.style.fontStyle = "italic";
			t=1;
		}
	else {
			txt.style.fontStyle = "normal";
			t=0;
		}
	}

 let bouton2 = document.getElementById("bouton2");
 bouton2.addEventListener("click",fclick2);
