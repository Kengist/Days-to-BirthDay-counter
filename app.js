
    const btn = document.getElementById('btn');
    const time = document.getElementById('time');

    
    // time =time.value;
    
    // let birthday = new Date('03/09/2022');
   
    const second = 1000;
    const minute =  second * 60;
    const hour = minute * 60;
    const day = hour * 24; //miliseconds


// let timer;


const countDown = () =>{
    let timer;
   const birthday1 = document.getElementById('time-left').value;
   let birthday = Date.parse(birthday1)
   let today = new Date();
   const birthTime = birthday - today;

   const count =()=>{
    let birthday = Date.parse(birthday1)
    let today = new Date();
    const birthTime = birthday - today;
    const days = Math.floor(birthTime / day);
    const hours = Math.floor((birthTime % day) / hour);
    const minutes = Math.floor((birthTime % hour) / minute);
    const seconds = Math.floor((birthTime % minute) / second);
    time.innerHTML = `${days.toString()}days ${hours} hours ${minutes}  mins ${seconds}seconds`;
    time.style.color = 'teal';
    time.style.fontSize = '30px';
    time.style.fontWeight = 'bold';
}
   if(birthTime <= day){
       console.log('val')
       time.innerHTML = 'your birthday have passed'
       time.style.color = 'teal';
       time.style.fontSize = '30px';
    //    clearInterval(timer);
       setTimeout(()=>{
       time.innerHTML = "Hope you enjoyed your Day"
       
    },4000)
       
       return
    }
     else if(birthTime == 0){
        time.innerHTML = "Happy Birhday";
        time.style.color = 'teal';
    time.style.fontSize = '30px';
    setTimeout(()=>time.innerHTML = "Happy Many returns",4000)
        clearInterval(timer);
        return
    }

    else{
        const timer = setInterval(count, 1000);
    }
}

btn.addEventListener('click', ()=>{
    const birthday1 = document.getElementById('time-left').value;
    if(birthday1 == ""){
        time.innerHTML = "Input Your BirthDate Young Man"
            time.style.color = 'red';
        time.style.fontSize = '30px';
        time.style.fontWeight = 'bold';
     setTimeout(()=>time.innerHTML = "",4000)
    
        // clearInterval(timer);




        return
        }

        countDown()
        //  const birthInput = document.getElementById('time-left').value;
      
            
        })




