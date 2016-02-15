var jsonOb = {};
$(document).ready( function() {
   $('a').click(function(){
     $('a').removeClass("actve");
      $(this).addClass("actve");
   });

 $('body').on("click", "button", function(){
      var bookid = this.getAttribute("data-bookid");
     for(i=0;i<jsonOb.Books.length;i++) 
     { if(bookid==jsonOb.Books[i].ID)
        {  console.log(jsonOb.Books[i].Title);
             console.log(jsonOb.Books[i].Image);
             console.log(jsonOb.Books[i].Description);
             console.log(jsonOb.Books[i].isbn);
        }
     
          }
   
    console.log(bookid);
   });
 });


function change(str) {
  var arr=[],i,cell="",cells=["","","",""],rem;
    
   str="http://it-ebooks-api.info/v1/search/".concat(str);
   $.getJSON(str,function(data, status) {
     jsonOb=data;
     
     if(jsonOb.hasOwnProperty('Books')) 
       { 
         for(i=0;i<jsonOb.Books.length;i++)
           {  cell="<div class=\"grid\">" + 
                     "<image src=\""+jsonOb.Books[i].Image+"\"id=\"imgId\" class=\"img-responsive img-thumbnail\">" + 
                     "<p>ISBN :"+jsonOb.Books[i].isbn+"</p>" + 
                     "<p>Book Title :"+jsonOb.Books[i].Title+"</p>" + 
                     "<p>"+jsonOb.Books[i].Description+"</p>" + 
                     "<button  data-bookid=\""+jsonOb.Books[i].ID+"\">See More</button></div>";
               
           
     
               rem=i%4;
               cells[rem]=cells[rem].concat(cell);
            }
         }
     for(i=0;i<4;i++)
          document.getElementById("cn"+i).innerHTML=cells[i];
   } 
   );
};


