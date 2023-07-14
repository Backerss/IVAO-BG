
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
                        //if Swal is success when click ok to reload page
                        Swal.fire({
                            icon: 'success',
                            title: 'Login Success!',
                            showConfirmButton: true,
                            timer: 1500
                        });


                        //reload page
                        location.reload();
                        
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
    

    //url decode from cookie _data
    var data = decodeURIComponent(document.cookie.replace(/(?:(?:^|.*;\s*)_data\s*\=\s*([^;]*).*$)|^.*$/, "$1"));
     //chang data to json
    var json = JSON.parse(data);

    if(GetCookieVal("_vid") == "")
    {
        $("#name_lastname").text('Hello Guest');
    }else
        $("#name_lastname").text(json['bg_vid']+ ' ' + json['bg_fristname'] + ' ' + json['bg_lastname']);


    //chang src of img #profile-vid_id
    $("#profile-vid_id").attr("src", "https://status.ivao.aero/" + json['bg_ivaoid'] + ".png");
    
});


$(document).ready(function(){
    $("#login-out").click(function(){
        
        console.log(document.cookie);
        
        //delete cookie
        document.cookie = "_vid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "_data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        //reload page
        location.reload();

    });
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