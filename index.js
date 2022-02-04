//검색창 place holder 입력값
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

  //캘린더
function Calender(Date, CalTableId){
    this.tbl = document.getElementById(CalTableId);
    this.isFirst = true;
    this.today = Date;
};

Calender.prototype.setNext = function(){
    const d = this.today;
    this. today= new Date(d.getFullYear(),d.getMonth() + 1, d.getDay());
    this.build();
};
Calender.prototype.setPrev=function(){
    const d = this.today;
    this. today= new Date(d.getFullYear(),d.getMonth() - 1, d.getDay());
    this.build();
};

Calender.prototype.build = function(){
    let i=0;
    let row= null;
    let cell= null;
    const t = this.tbl;
    const year = this.today.getFullYear();
    const month= this.today.getMonth();

    if(this.isFirst){
        row= t.insertRow();
        cell = row.insertCell();
        const prev = "prev"+t.id;
        const next = 'next'+t.id;
        
        cell.innerHTML ="<button id ="+prev+">&lt;</button>";
        document.getElementById(prev).addEventListener('click',(e)=>{
                e.preventDefault();
                this.isFirst=false;
                this.setPrev();
            });
        cell = row.insertCell();
        cell.colSpan = 5;
        cell.innerHTML ="<div id = head"+t.id+">"+year+"년"+(month+1)+"월</div>";

        cell = row.insertCell();
        cell.innerHTML="<button id="+next+">&gt;</button>";

        document.getElementById(next).addEventListener('click',(e)=>{
            e.preventDefault();
            this.isFirst=false;
            this.setNext();
        })
        const week = ["일","월","화","수","목","금","토"];
        row = t.insertRow();
        for(i=0; i<week.length;i++){
            cell = row.insertCell()
            cell.textContent = week[i];
        }
    }else{
        while(t.rows.length > 2){
            t.deleteRow(t.rows.length-1);
        }
        this.isFirst = false;

    }
    if(!this.isFirst){
        document.getElementById("head"+t.id).innerHTML =
        "<div id= head"+ t.id + ">" +year+"년"+(month+1)+"월</div>";
    }
    const nMonth = new Date(year,month,1);
    const lastDate = new Date(year,month+1 ,0);

    row = t.insertRow();
    let cnt = 0;

    for(i=0;i<nMonth.getDay(); i++){
        cell = row.insertCell();
        cnt++;
    }
    for(i=1;i<=lastDate.getDate(); i++){
        cell = row.insertCell();
        cell.textContent = i;
        if(cnt++&&cnt%7==0)

        row=t.insertRow();   

    }
}


  const cal = document.getElementById('cal');
  const calculator = document.getElementById('calculator');
  const ti = document.getElementById('ti');
  const timer = document.getElementById('timer');
  const mo = document.getElementById('mo');
  const memo = document.getElementById('me');
  const calen = document.getElementById('calen');
  const calender = document.getElementById('calender');
 
  
  cal.addEventListener('click',function(){
   if(calculator.style.display== 'inline-block'){
    calculator.style.display='none';
     }else{calculator.style.display= 'inline-block';
  }
  });
 

  ti.addEventListener('click',function(){
    if(timer.style.display=='inline-block'){
      timer.style.display= 'none'}else{
        timer.style.display= 'inline-block';
      };   
  });
    
  memo.addEventListener('click',function(){
    if(mo.style.display=='inline-block'){
      mo.style.display= 'none'}else{
        mo.style.display= 'inline-block';
      };   
  });
  mo.addEventListener('click', function(){
    mo.innerText=" "
  })
 
  calender.addEventListener('click',function(){
    if(calen.style.display=='inline-block'){
      calen.style.display= 'none'}else{
        calen.style.display= 'inline-block';
      };   
  });

  
  //drag and drop
  var img_L = 0;
  var img_T = 0;
  var targetObj;

  function getLeft(o) {
    return parseInt(o.style.left.replace("px", ""));
  }
  function getTop(o) {
    return parseInt(o.style.top.replace("px", ""));
  }

  // 이미지 움직이기
  function moveDrag(e) {
    var e_obj = window.event ? window.event : e;
    var dmvx = parseInt(e_obj.clientX + img_L);
    var dmvy = parseInt(e_obj.clientY + img_T);
    targetObj.style.left = dmvx + "px";
    targetObj.style.top = dmvy + "px";
    return false;
  }

  // 드래그 시작
  function startDrag(e, obj) {
    targetObj = obj;
    var e_obj = window.event ? window.event : e;
    img_L = getLeft(obj) - e_obj.clientX;
    img_T = getTop(obj) - e_obj.clientY;

    document.onmousemove = moveDrag;
    document.onmouseup = stopDrag;
    if (e_obj.preventDefault) e_obj.preventDefault();
  }

  // 드래그 멈추기
  function stopDrag() {
    document.onmousemove = null;
    document.onmouseup = null;
  }