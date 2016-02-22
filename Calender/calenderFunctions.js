
function container(){
  var template;
  var ptrMonth = 0, ptrDay;
  var monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var data={Date : "0"};
  var birthday =[{Name : "Vipin", Day : 15, Month : 0, year : 1946}, 
                {Name : "Chetna", Day : 25, Month : 2, year : 1993},
                {Name : "Sonam", Day : 22, Month : 3, year : 1987},
                {Name : "Siyaram", Day : 3, Month : 4, year : 1985},
                {Name : "Rahul", Day : 28, Month : 4, year : 1988},
                {Name : "Deepak", Day : 10, Month : 4, year : 1990},
                {Name : "Amit", Day : 10, Month : 4, year : 1986},
                {Name : "Surendra", Day : 21, Month : 6, year : 1988},
                {Name : "Deepti", Day : 3, Month : 6, year : 1991},
                {Name : "Awanish", Day : 6, Month : 6, year : 1974},
                {Name : "Anjana", Day : 24, Month : 6, year : 1992},
                {Name : "Neemesh", Day : 20, Month : 7, year : 1986},
                {Name : "Aaditya", Day : 8, Month : 7, year : 1994},
                {Name : "Varsha", Day : 13, Month : 9, year : 1992},
                {Name : "Kumud", Day : 16, Month : 10, year : 1989},
                {Name : "Shashank", Day : 11, Month : 11, year : 1990},
                {Name : "Satya Narayan", Day : 12, Month : 11, year : 1983},
               {Name : "Nitesh", Day : 12, Month : 11, year : 1990}];
    
  this.initialize = function() {
    ptrDay=setDay(2016,0,1);
    printMonth();
    template = $("#template").html();
    Mustache.parse(template);
    this.printCalender();
    this.bindEvents();
  }
  
  function setData(day) {
    data= { Date : day,
            Month : ptrMonth};
  }
  
  function printMonth(){
    var month=["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var templateMon = $("#template-month").html();
    Mustache.parse(templateMon);
    setData(month[ptrMonth]);
    var cell = Mustache.render(templateMon,data);
    $(".month").html(cell);
  }
  
  this.printCalender = function () {
     var cellArr=["","","","","","",""], rem, i;
    addDaysHeader(); 
    if(ptrDay > 0) 
      { i=0;
       while(i < ptrDay)
       { setData(" ");
         var cell = Mustache.render(template,data);
         cellArr[i]= cellArr[i].concat(cell);
         i++;
         }
       }
     for(i=0; i< monthDays[ptrMonth]; i++)
        {  setData(i+1);
           var cell = Mustache.render(template,data);
           
            for(var j=0; j<birthday.length; j++)
              if((birthday[j].Month == ptrMonth)&&(birthday[j].Day == (i+1)))
                {  templateBirth = $("#template-birth").html();
                   Mustache.parse(templateBirth);
                   $(".show").text(birthday[j].Name); 
                 cell = Mustache.render(templateBirth,data);
              }
            cellArr[ptrDay]= cellArr[ptrDay].concat(cell);
            ptrDay++;
            ptrDay= (ptrDay%7);
        }
     for(i=0 ; i< 7; i++)
       $(".cn"+i).html(cellArr[i]);
   function addDaysHeader(){
      var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
      for(var i=0; i<7; i++)
      {  setData(days[i]);
         var cell = Mustache.render(template,data);
         cellArr[i]= cellArr[i].concat(cell);
      }
      }; 
  
  };
  
  this.bindEvents= function() {
   $('body').on("click", "#next", function(){
      if(ptrMonth!=12) 
       {ptrMonth++;
        ptrDay=setDay(2016, ptrMonth, 1);
        printMonth();
        content.printCalender();
       }
  });
  $('body').on("click", "#previous", function(){
       
       if(ptrMonth!=1)
        {ptrMonth--;
         ptrDay= setDay(2016, ptrMonth, 1);
         printMonth();
         content.printCalender();
        }
  });
  $('body').on("mouseover",".birth", function() {
      
      $(".pop-up").show();
  });  
  $(window).click(function(event) {
  
       $(".pop-up").hide();
  });    
  }
  
  function setDay(year, month, day){
    var d = new Date(year, month, day);
    return d.getDay();
  };
  
  function currentMonthDays()
  
};

