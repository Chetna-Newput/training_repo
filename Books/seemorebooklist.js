var limit=2,pg,strng;
var booksArr = [];
$(document).ready( function() {
   $('a').click(function(){
     $('a').removeClass("actve");
      $(this).addClass("actve");
   });

 var modal = document.getElementById('myModal');

 $(".close").click(function() {
     $("#myModal").hide();
  });
 
 $(window).click(function(event) {
    if (event.target == modal) {
       $("#myModal").hide();
    }
}  );
  
  
  $('body').on("click", "button", function(){
   
     var bookid = this.getAttribute("data-bookid");
     for(i=0;i<booksArr.length;i++) 
     { if(bookid==booksArr[i].ID)
        {  
         $("#titleShow").text(booksArr[i].Title); 
         jQuery("#modalImg").attr('src',booksArr[i].Image );
         $("#modalDesp").text(booksArr[i].Description); 
         $("#modalIsbn").text(booksArr[i].isbn); 
          $("#myModal").show();
           
         
        }
     
      }
   
    
   });
  
  $(window).scroll(function() {
   if($(document).height() <= ($(window).scrollTop()+$(window).height() ))  {
        change(strng,pg)
;   }
});
  
 });


function change(str, page) {
   strng=str; pg=page;
   if(pg==1)
        {
           booksArr=[]; 
        }
  var arr=[],i,cell="",cells=["","","",""],rem;
   
   
   str="http://it-ebooks-api.info/v1/search/".concat(str);
   str=str.concat("/page/"+page);
  console.log(str);
  pg++;
   $.getJSON(str,function(data, status) {
   
    
     limit=data.Total; 
     limit=Math.ceil((limit/10));
     console.log(pg)
     if(limit>=pg)
     {
     if(data.hasOwnProperty('Books')) 
       { 
         for(i=0;i<data.Books.length;i++)
           {  cell="<div id=\"addMargin\" class=\"grid\">" + 
                     "<image src=\""+data.Books[i].Image+"\"id=\"imgId\" class=\"img-responsive img-thumbnail\">" + 
                     "<p>Book Title :"+data.Books[i].Title+"</p>" + 
                     "<p>"+data.Books[i].Description+"</p>" + 
                     "<button  data-bookid=\""+data.Books[i].ID+"\">See More</button></div>";
               booksArr.push(data.Books[i]);
           
     
               rem=i%4;
               cells[rem]=cells[rem].concat(cell);
            }
         } console.log(booksArr);
     for(i=0;i<4;i++)
     { if(pg==2)
           document.getElementById("cn"+i).innerHTML=cells[i];
         else
          $("#cn"+i).append(cells[i]);
       }
     }
     } 
   );
};


