  $(document).ready(function(){
    $("#form").validate({
        rules:{
           
            email1:{
                required:true
            },
            password1:{
                required:true
            },
            repassword1:{
                required:true,
                equalTo: ("#password")
            },
            skills1:{
                required:true,
            },
            dob1:{
                required:true,
            },
            dob1:{
                required:true,
            },
            sreeni:{
                required:true,
            },
            fb1:{
                required:true,
            }
       
            
        }
    }
        
    )
})    



function valid(){
    var que = $("#password").val()
    var reg = /^([A-Z])/
    var res = reg.test(que)


    if (res == false) {
        document.getElementById("headache").style.display="inline"
        return false;
    }
    

}







