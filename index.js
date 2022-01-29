document.addEventListener("DOMContentLoaded", function () {
    var d = new Date();

    var getday = d.getDay();

    var weekday = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];

    var n = weekday[getday];

    var dd = d.getDate();

    var mm = d.getMonth() + 1;

    var yyyy = d.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    
    setInterval(function () {
      var currentTime = new Date();

      var hours = currentTime.getHours();

      var minutes = currentTime.getMinutes();

      var seconds = currentTime.getSeconds();

      var period = "오전";

      if (hours >= 12) {
        period = "오후";
      }

      if (hours > 12) {
        hours = hours - 12;
      }

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;

        search.searchtext.placeholder = `${yyyy}년 ${mm}월 ${dd}일 ${n} ${clockTime}`
    }, 1000);
    
   
  });

  const cal = document.getElementById('cal');
  const calculator = document.getElementById('calculator');
  const ti = document.getElementById('ti');
  const timer = document.getElementById('timer');
  
  cal.addEventListener('click',function(){
   if(calculator.style.display== 'inline-block'){
    calculator.style.display='none'
   }else{calculator.style.display= 'inline-block';
  }
  });
 

  ti.addEventListener('click',function(){
    if(timer.style.display=='inline-block'){
      timer.style.display= 'none'}else{
        timer.style.display= 'inline-block'
      };
   
  });
   
   
    
    //  search.addEventListener('click',function(){search.sc.value = 'randText';});
 