const chng=document.getElementById("blahblah")

const increment=document.getElementById("inc")
const decrement=document.getElementById('dec')

increment.addEventListener("click",function() {
  user_inp1.innerHTML++;
  chng.innerHTML++;
})

decrement.addEventListener("click",function(){
  user_inp1.innerHTML--;
  chng.innerHTML++;
})
