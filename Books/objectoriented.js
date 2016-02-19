
function container(){
  var pg,search;
  var booksArr = [];
  var count=[0,0,0,0];
  var template;

  this.initialize = function() {
    template = $("#template").html();
    Mustache.parse(template);
    this.change("java",1);
    this.bindEvents();
  }
  
  this.change = function (str, page) {
   var arr=[],i,cell="",cells=["","","",""],limit; 
   search = str; pg = page;
   if(pg == 1)
        {  count=[0,0,0,0]
           booksArr=[]; 
        }
    
   str="http://it-ebooks-api.info/v1/search/".concat(str);
   str=str.concat("/page/"+page);
   pg++;
   
   $.getJSON(str,function(data, status) {
     limit=data.Total; 
     limit=Math.ceil((limit/10));
     if(limit>=pg)
     {
          for(i=0;i<data.Books.length;i++)
            {
              cell = Mustache.render(template, data.Books[i]);
              booksArr.push(data.Books[i]);
              loc= calculateMin();
              cells[loc]=cells[loc].concat(cell);
              count[loc]++;
          } 
     for(i=0;i<4;i++)
     { if(pg==2)
         $(".cn"+i).html(cells[i]);
       else
         $(".cn"+i).append(cells[i]);
       }
     }
     } 
   );
  
};

function calculateMin(){
  var min, j, loc;
  min= count[0];
   loc=0;
   for(j=1;j<4;j++)
    { if(min>count[j])
       { min=count[j];
         loc=j;
        }
               
   }
   return loc;
};

this.bindEvents= function() {
   $('a').click(function(){
     $('a').removeClass("actve");
      $(this).addClass("actve");
   })

  var modal =document.getElementsByClassName('modal')[0];

  $(".close").click(function() {
     $(".modal").hide();
  });
 
  $(window).click(function(event) {
   if (event.target == modal) {
       $(".modal").hide();
    }
  });
  
  $('body').on("click", "button", function(){
   
     var bookid = this.getAttribute("data-bookid");
     for(i=0;i<booksArr.length;i++) 
     { if(bookid==booksArr[i].ID)
        {  
         $(".titleShow").text(booksArr[i].Title); 
         jQuery(".modal-img").attr('src',booksArr[i].Image );
         $(".modalDesp").text(booksArr[i].Description); 
         $(".modalIsbn").text(booksArr[i].isbn); 
          $(".modal").show();
         }
     }
    });
  
  $('body').on("click","a",function() {
     var category= this.getAttribute("data-id");
     content.change(category,1);
  
  });
  
  $(window).scroll(function() {
    if($(document).height() <= ($(window).scrollTop()+$(window).height() )) 
    {
       console.log("scroll");
       content.change(search,pg);
    }
  });
 }
};

