var first=true;
var second=false;
var win=false;
function change(element) {
  if(element.innerHTML==""){
    if(first){
      element.innerHTML='X';
      element.style.color='##1d076b';
      element.style.fontSize = "200%";
      element.style.textAlign = "center";
      first=false;
      second=true;
      if(check_winner()){
        alert('X is the winner');
        win=true;
        location.reload()
      }
    }
    else{
      element.innerHTML='O';
      element.style.color='red';
      element.style.fontSize = "200%";
      element.style.textAlign = "center";
      first=true;
      second=false;
      if(check_winner()){
        element.innerHTML='O';
        alert('O is the winner');
        win=true;
        location.reload()
      }
    }
  }
  if(check_draw()){
    if(!win){
      alert('Match Draw');
      location.reload();
    }
  }
}

function check_winner(){
  i1=document.getElementById('1').innerHTML;
  i2=document.getElementById('2').innerHTML;
  i3=document.getElementById('3').innerHTML;
  i4=document.getElementById('4').innerHTML;
  i5=document.getElementById('5').innerHTML;
  i6=document.getElementById('6').innerHTML;
  i7=document.getElementById('7').innerHTML;
  i8=document.getElementById('8').innerHTML;
  i9=document.getElementById('9').innerHTML;
  console.log(i1);
  if((i1==i2 && i1==i3)||(i1==i4 && i1==i7)||(i1==i5 && i1==i9)){
    if(i1!=""){
      return true;
    }

  }
  if((i4==i5 && i4==i6)){
    if(i4!=""){
      return true;
    }
  }
  if ((i7==i8 && i7==i9)) {
    if(i7!=""){
      return true;
    }
  }
  if (i2==i5 && i2==i8) {
    if(i2!=""){
      return true;
    }
  }
  if (i3==i6 && i3==i9) {
    if (i3!="") {
      return true;
    }
  }
  else if (i3==i5 && i3==i7) {
    if(i3!=""){
      return true;
    }
  }
  return false;
}
function check_draw(){
  for(i=1;i<=9;i++){
    if(document.getElementById(i).innerHTML==""){
        return false;
    }
      
  }
  return true;
}
