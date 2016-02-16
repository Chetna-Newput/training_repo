var limit=2,pg,strng;
var jsonOb = {};
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
     for(i=0;i<jsonOb.Books.length;i++) 
     { if(bookid==jsonOb.Books[i].ID)
        {  
         $("#titleShow").text(jsonOb.Books[i].Title); 
         jQuery("#modalImg").attr('src',jsonOb.Books[i].Image );
         $("#modalDesp").text(jsonOb.Books[i].Description); 
         $("#modalIsbn").text(jsonOb.Books[i].isbn); 
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
  if(page==1)
   {jsonOb={};
     }
   strng=str; pg=page;
  var arr=[],i,cell="",cells=["","","",""],rem;
   
   
   str="http://it-ebooks-api.info/v1/search/".concat(str);
   str=str.concat("/page/"+page);
  console.log(str);
  pg++;
   $.getJSON(str,function(data, status) {
     jsonOb=data;
     limit=jsonOb.Total; 
     limit=Math.ceil((limit/10));
     console.log(pg)
     if(limit>=pg)
     {
     if(jsonOb.hasOwnProperty('Books')) 
       { 
         for(i=0;i<jsonOb.Books.length;i++)
           {  cell="<div id=\"addMargin\" class=\"grid\">" + 
                     "<image src=\""+jsonOb.Books[i].Image+"\"id=\"imgId\" class=\"img-responsive img-thumbnail\">" + 
                     "<p>Book Title :"+jsonOb.Books[i].Title+"</p>" + 
                     "<p>"+jsonOb.Books[i].Description+"</p>" + 
                     "<button  data-bookid=\""+jsonOb.Books[i].ID+"\">See More</button></div>";
               
           
     
               rem=i%4;
               cells[rem]=cells[rem].concat(cell);
            }
         }
     for(i=0;i<4;i++)
     {  if(pg==2)
           document.getElementById("cn"+i).innerHTML=cells[i];
         else
           $("#cn"+i).append(cells[i]);
       } 
     }
     } 
   );
};


