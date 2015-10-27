$(document).ready(function(){

    
//get ALL CATEGORIES WHISKEY -- loop ALL categories!
   /* var allCatUpdates = {};
    
    allCatUpdates = data.results.map(function(obj) {
        return {listingId: obj.listing_id,
               url_75x75: obj.Images[0].url_75x75,
                price: obj.price};
    });
    
    
    
//send text, render to html, send data via jquery
*/
    
var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';    

$.ajax({
    url: etsyURL,
    method: "get",
    dataType: "jsonp",  
}).then(function (data) {
        var allCatUpdates = data.results.map(function(obj) {
            return {
                listingId: obj.listing_id,
                url_75x75: obj.Images[0].url_75x75,
                price: obj.price
        };
    });

    
    var catUpdates = {
        allCatUpdates : allCatUpdates
    };
    
});
    
var allCatTemplate = $("#allCatTemplate").text();
var allCatHTML = Mustache.render(allCatTemplate, catUpdates);
$("#allCatWhiskey").html(allCatHTML);
  
    
    

});//closes doc ready