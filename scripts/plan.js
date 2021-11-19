let i=0;

let img=document.getElementById("diapo");
img.addEventListener("click", imgchange);

function imgchange (event){
  let img=document.getElementById("diapo");
  if (i==0) {
      img.setAttribute("src","../imgs/plan.jpg");
      i=1;
    }
  else if (i==1) {
      img.setAttribute("src","../imgs/montage.jpg");
      i=2;
    }
  else if (i==2) {
      img.setAttribute("src","../imgs/processing.jpg");
      i=3;
    }
  else if (i==3) {
      img.setAttribute("src","../imgs/cv.jpg");
      i=4;
    }
  else if (i==4) {
      img.setAttribute("src","../imgs/accueil.jpg");
      i=0;
    }
}
