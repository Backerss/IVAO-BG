
//from id run-date change to date and time and keep running time
function runDate() {
    var d = new Date();
    var n = d.toLocaleString();

  //format date and time change month to name
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    var monthName = month[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();
    var hour = d.getHours() - 7;
    var min = d.getMinutes();
    var sec = d.getSeconds();



    if(hour < 10)
    {
        hour = "0" + hour;
    }

    if(min < 10)
    {
        min = "0" + min;
    }


    var date = day + " " + monthName + " " + hour + ":" + min + ":" + sec + " UTC";   


    document.getElementById("run-date").innerHTML = date;
    setTimeout(runDate, 1000);
}


//when click on the button at id name "btn-login-submit"
//it will run the function
$(document).ready(function(){
    $("#btn-login-submit").click(function(){
        var vid = $("#login-vid").val();
        var pass = $("#login-pass").val();

        //if vid is empty
        if(vid == "")
        {
           Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your VID!',
            });

        }
        //if password is empty
        else if(pass == "")
        {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your password!',
            });
        }
        //if both vid and password is not empty
        else
        {
            //send data to server nodejs
            $.ajax({
                url: '/login/login_check',
                type: 'POST',
                data: {
                    vid: vid,
                    pass: pass
                },
                success: function(data){
                    if(data == "success")
                    {
                        Swal.fire({
                            icon: 'success',
                            title: 'Login Success!',
                            text: 'Welcome to IVAO!',
                        });
                    }
                    else
                    {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: data,
                        });
                    }
                }
            });
        }

    });
});


//เรื่องของ cookie
$(document).ready(function(){
    
    



    $("#name_lastname").text('Hello ' + GetCookieVal("_vid"));
});



//function get data from cookie
function GetCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if(endstr == -1)
    {
        endstr = document.cookie.length;
    }

    //delete cookie name
    var cookie = document.cookie.substring(offset, endstr);
    var cookie_name = cookie.substring(0, cookie.indexOf("="));
    var cookie_value = cookie.substring(cookie.indexOf("=") + 1);


    return unescape(cookie_value);
}

runDate();