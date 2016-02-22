
function container() {
  var template;
  var currentMonth, ptrDay = 1;
  var currentYear, lastDayofMonth;
  var todaysDay, todaysMonth, todaysYear;
  var data = {Date : "0"};
  var birthdayThisMonth = [];
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
    setDate();
    printMonth();
    template = $("#template").html();
    Mustache.parse(template);
    templateToday = $("#template-today").html();
    Mustache.parse(templateToday);
    templateBirth = $("#template-birth").html();
    Mustache.parse(templateBirth);
    this.printCalender();
    this.bindEvents();
  }
  
  function setData(day) {
    data = { Date : day,
            Month : currentMonth};
  }
  
  function printMonth() {
    var month = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var LastDate = new Date(currentYear, currentMonth+1,0);
    console.log(LastDate.getDate());
    var templateMon = $("#template-month").html();
    Mustache.parse(templateMon);
    setData(currentYear);
    var cell = Mustache.render(templateMon,data);
    $(".year").html(cell);
    setData(month[currentMonth]);
    var cell = Mustache.render(templateMon,data);
    $(".month").html(cell);
    lastDayofMonth = LastDate.getDate();
  }
  
  this.printCalender = function () {
     var cellArr=["","","","","","",""], i;
     birthdayThisMonth = [];
    addDaysHeader(); 
    if(ptrDay > 0) { 
      i=0;
        while(i < ptrDay) { 
          setData(" ");
          var cell = Mustache.render(template,data);
          cellArr[i] = cellArr[i].concat(cell);
          i++;
        }
     }
     for(i=0; i< lastDayofMonth; i++)
        {  setData(i+1);
           var cell = Mustache.render(template,data);
           if((todaysDay == (i+1))&&(todaysMonth == currentMonth)&&(todaysYear == currentYear))
             { 
               cell = Mustache.render(templateToday,data);
             }
           for(var j=0; j<birthday.length; j++)
             if((birthday[j].Month == currentMonth)&&(birthday[j].Day == (i+1)))
               { birthdayThisMonth.push(birthday[j]);
                 cell = Mustache.render(templateBirth,data);
              }
             cellArr[ptrDay]= cellArr[ptrDay].concat(cell);
             ptrDay++;
             ptrDay= (ptrDay%7);
        }
     for(i=0 ; i< 7; i++)
       $(".cn"+i).html(cellArr[i]);console.log(ptrDay);
    
   function addDaysHeader() {
      var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      for(var i=0; i<7; i++)
      {  setData(days[i]);
         var cell = Mustache.render(template,data);
         cellArr[i]= cellArr[i].concat(cell);
      }
    }; 
  };
  
  this.bindEvents= function() {
   $('body').on("click", "#next", function(){
      if(currentMonth == 11) {
        currentMonth = 0;
        currentYear++;
       } else { 
         currentMonth++;
       }
        setFirstDay();
        printMonth();
        content.printCalender();
   });
    
  $('body').on("click", "#previous", function() {
    if(currentMonth==0) { 
      currentMonth = 11;
      currentYear--;
    } else { 
      currentMonth--;
    }
       setFirstDay();
       printMonth();
       content.printCalender();
  });
    
  $('body').on("click",".birth", function() {
    $(".show").html("");
    var birthId = this.getAttribute("birth-id");
    for(var i=0;i<birthdayThisMonth.length;i++)
      { 
        if(birthdayThisMonth[i].Day ==birthId)
         {
           $(".show").append(birthdayThisMonth[i].Name+" has Birthday on "+birthdayThisMonth[i].Day+ " \n ");
         }
       }
    $(".pop-up").show();
  });  
    
  $(".pop-up").click(function(event) {
    $(".pop-up").hide();
  });    
  }
  
  function setFirstDay() {
     ptrDay= new Date(currentYear,currentMonth,1).getDay();
  };
  
  function setDate(){
    var todaysDate = new Date();
    todaysDay = todaysDate.getDate();  
    todaysMonth = todaysDate.getMonth(); 
    todaysYear = todaysDate.getFullYear();
    currentYear = todaysDate.getFullYear();
    currentMonth = todaysDate.getMonth();
    setFirstDay();
  };
  
};

