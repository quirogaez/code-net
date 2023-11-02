let optionAdd = false;

function showAddOption() {
  if(optionAdd === false) {

    document.querySelector(".showPublication").style.display = "block";
    optionAdd = true;
   
  } else {
    document.querySelector(".showPublication").style.display = "none";
    optionAdd=false;
  } 
}
