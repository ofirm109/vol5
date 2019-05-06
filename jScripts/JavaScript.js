var myPageAll = 1;


var fName = "";
var lName = "";
var Email = "";
var cantry = "";
var age = 0;
var gender = "";
var Q1 = "";
var Q2 = [];
var Q3 = "";
var Q4 = "";


$(document).ready(function () {
    $("#page2").hide();
    $("#page3").hide();
    $("#page4").hide();
    $("#page5").hide();
    $(".btnPreview").hide();
    $(".submit").hide();
    $("#sent").hide();

    $("#buttonHead").click(function () {
        $('html, body').animate({
            scrollTop: $("#myFrom").offset().top
        }, 500);
    });

    $(".btnNext").click(function () {
        fName = $("#fname").val();
        lName = $("#lname").val();
        Email = $("#Email").val();
        cantry = $("#contry option:selected").text();
        age = $("#year").val();
        gender = $(".jender input[type='radio']:checked").val();
        var myerorr = false;
        var objecterorr = "";



        if (fName != "") {
            if (lName != "") {
                if (Email != "") {
                    if (cantry != "היבשת שלך") {
                        if (gender == "זכר" || gender == "נקבה") {
                            if (age > 1) {
                                if ($('input[id="AC"]:checked').val() == "true") {

                                    page2();





                                } else {
                                    myerorr = true;
                                    objecterorr = ".AC";
                                }
                            } else {
                                myerorr = true;
                                objecterorr = "#year";
                            }
                        } else {
                            myerorr = true;
                            objecterorr = ".jender";
                        }
                    } else {
                        myerorr = true;
                        objecterorr = "#contry";
                    }
                } else {
                    myerorr = true;
                    objecterorr = "#Email";
                }
            } else {
                myerorr = true;
                objecterorr = "#lname";
            }
        } else {
            myerorr = true;
            objecterorr = "#fname";

        }

        $("#fname").tooltip("hide");
        $("#fname").mouseout(function () {
            $("#fname").tooltip("hide");
        });
        $("#fname").focusout(function () {
            $("#fname").tooltip("hide");
        });
        $("#fname").hover(function () {
            $("#fname").tooltip("hide");
        });
        $("#fname").click(function () {
            $("#fname").tooltip("hide");
        });
        $("#fname").mousedown(function () {
            $("#fname").tooltip("hide");
        });
        $("#fname").mouseup(function () {
            $("#fname").tooltip("hide");
        });


        $("#lname").tooltip("hide");
        $("#lname").mouseout(function () {
            $("#lname").tooltip("hide");
        });
        $("#lname").focusout(function () {
            $("#lname").tooltip("hide");
        });
        $("#lname").hover(function () {
            $("#lname").tooltip("hide");
        });
        $("#lname").click(function () {
            $("#lname").tooltip("hide");
        });
        $("#lname").mousedown(function () {
            $("#lname").tooltip("hide");
        });
        $("#lname").mouseup(function () {
            $("#lname").tooltip("hide");
        });

        $("#Email").tooltip("hide");
        $("#Email").mouseout(function () {
            $("#Email").tooltip("hide");
        });
        $("#Email").focusout(function () {
            $("#Email").tooltip("hide");
        });
        $("#lname").hover(function () {
            $("#lname").tooltip("hide");
        });
        $("#Email").click(function () {
            $("#Email").tooltip("hide");
        });
        $("#Email").mousedown(function () {
            $("#lname").tooltip("hide");
        });
        $("#Email").mouseup(function () {
            $("#lname").tooltip("hide");
        });

        $("#contry").tooltip("hide");
        $("#contry").mouseout(function () {
            $("#contry").tooltip("hide");
        });
        $("#contry").focusout(function () {
            $("#contry").tooltip("hide");
        });
        $("#contry").hover(function () {
            $("#contry").tooltip("hide");
        });
        $("#contry").click(function () {
            $("#contry").tooltip("hide");
        });
        $("#contry").mousedown(function () {
            $("#contry").tooltip("hide");
        });
        $("#contry").mouseup(function () {
            $("#contry").tooltip("hide");
        });


        $(".jender").tooltip("hide");
        $(".jender").mouseout(function () {
            $(".jender").tooltip("hide");
        });
        $(".jender").focusout(function () {
            $(".jender").tooltip("hide");
        });
        $(".jender").hover(function () {
            $(".jender").tooltip("hide");
        });
        $(".jender").click(function () {
            $(".jender").tooltip("hide");
        });
        $(".jender").mousedown(function () {
            $(".jender").tooltip("hide");
        });
        $(".jender").mouseup(function () {
            $(".jender").tooltip("hide");
        });

        $("#year").tooltip("hide");
        $("#year").mouseout(function () {
            $("#year").tooltip("hide");
        });
        $("#year").focusout(function () {
            $("#year").tooltip("hide");
        });
        $("#year").hover(function () {
            $("#year").tooltip("hide");
        });
        $("#year").click(function () {
            $("#year").tooltip("hide");
        });
        $("#year").mousedown(function () {
            $("#year").tooltip("hide");
        });
        $("#year").mouseup(function () {
            $("#year").tooltip("hide");
        });

        $(".AC").tooltip("hide");
        $(".AC").mouseout(function () {
            $(".AC").tooltip("hide");
        });
        $(".AC").focusout(function () {
            $(".AC").tooltip("hide");
        });
        $(".AC").hover(function () {
            $(".AC").tooltip("hide");
        });
        $(".AC").click(function () {
            $(".AC").tooltip("hide");
        });
        $(".AC").mousedown(function () {
            $(".AC").tooltip("hide");
        });
        $(".AC").mouseup(function () {
            $(".AC").tooltip("hide");
        });


        if (myerorr == true) {


            $(objecterorr).tooltip("show");
            $(objecterorr).mouseout(function () {
                $(objecterorr).tooltip("show");
            });
            $(objecterorr).focusout(function () {
                $(objecterorr).tooltip("show");
            });
            $(objecterorr).hover(function () {
                $(objecterorr).tooltip("show");
            });
            $(objecterorr).click(function () {
                $(objecterorr).tooltip("show");
            });
            $(objecterorr).mousedown(function () {
                $(objecterorr).tooltip("show");
            });
            $(objecterorr).mouseup(function () {
                $(objecterorr).tooltip("show");
            });
        }




    });

});



function page2() {

    if (myPageAll == 2) {
        myEror();


    }


    if (myPageAll == 1) {
        noteror();
        $("#page1").fadeOut(500);
        var time = setInterval(function () {
            $("#page2").fadeIn(500);
            $(".btnPreview").fadeIn(500);
            clearInterval(time)
        }, 500);
        myPageAll = 2;
        $('input[name="correctAnswer"]').prop('checked', false);


    }


    Q1 = $("#radioinPage2 input[type='radio']:checked").val();

    if (Q1 != null) {


        page3();

    } else {


    }


}

function page3() {
    if (myPageAll == 3) {
        myEror();
    }

    if (myPageAll == 2) {
        noteror();
        $("#page2").fadeOut(500);
        var time = setInterval(function () {
            $("#page3").fadeIn(500);
            clearInterval(time)
        }, 480);
        myPageAll = 3;
    }




    if ($('input[id="page3Check1"]:checked').val() == "חיפוש בגוגל" || $('input[id="page3Check2"]:checked').val() == "המלצה של חברים" || $('input[id="page3Check3"]:checked').val() == "פרסום מודפס" || $('input[id="page3Check4"]:checked').val() == "בעיתון" || $('input[id="page3Check5"]:checked').val() == "אחר") {
        var myNumSelect = 0;

        if ($('input[id="page3Check1"]:checked').val() == "חיפוש בגוגל") {
            Q2[myNumSelect] = $('input[id="page3Check1"]:checked').val();
            myNumSelect++
        }
        if ($('input[id="page3Check2"]:checked').val() == "המלצה של חברים") {
            Q2[myNumSelect] = $('input[id="page3Check2"]:checked').val();
            myNumSelect++
        }
        if ($('input[id="page3Check3"]:checked').val() == "פרסום מודפס") {
            Q2[myNumSelect] = $('input[id="page3Check3"]:checked').val();
            myNumSelect++
        }
        if ($('input[id="page3Check4"]:checked').val() == "בעיתון") {
            Q2[myNumSelect] = $('input[id="page3Check4"]:checked').val();
            myNumSelect++
        }
        if ($('input[id="page3Check5"]:checked').val() == "אחר") {
            Q2[myNumSelect] = $('input[id="page3Check5"]:checked').val();
        }
        


        page4();

    } else {
        //לחזור
    }

}

function page4() {
    if (myPageAll == 4) {
        myEror();
    }
    if (myPageAll == 3) {
        noteror();
        $("#page3").fadeOut(500);
        var time = setInterval(function () {
            $("#page4").fadeIn(500);
            clearInterval(time)
        }, 480);
        myPageAll = 4;
    }

    Q3 = $("#radioinPage4 input[type='radio']:checked").val();
    Q4 = $("whay").val();
    if (Q3 != null) {
        page5();

    }

}

function page5() {
    if (myPageAll == 4) {
        noteror();
        $("#page4").fadeOut(500);
        var time = setInterval(function () {
            $("#page5").fadeIn(500);
            clearInterval(time)
        }, 480);
        myPageAll = 5;
        $(".btnNext").hide();
        $(".submit").show();
    }
    $("#answer1").html(Q1);
    var answer2Text = "";
    for (i = 0; i < Q2.length; i++) {
        answer2Text += Q2[i];
        if (i != (Q2.length - 1)) {
            answer2Text += " ,"
        }

    }
    $("#answer2").html(answer2Text);
    $("#answer3").html(Q3);

}


function per() {
    if (myPageAll == 2) {
        $("#page2").fadeOut(500);
        $(".btnPreview").fadeOut(500);
        var time = setInterval(function () {
            $("#page1").fadeIn(500);
            clearInterval(time)
        }, 480);
        myPageAll = 1;

    } else if (myPageAll == 3) {
        Q1 = "";
        $("#page3").fadeOut(500);
        var time = setInterval(function () {
            $("#page2").fadeIn(500);
            clearInterval(time)
        }, 480);
        myPageAll = 2;

    } else if (myPageAll == 4) {
        $("#page4").fadeOut(500);
        var time = setInterval(function () {
            $("#page3").fadeIn(500);
            clearInterval(time)
        }, 480);
        myPageAll = 4;

    } else if (myPageAll == 4) {
        $("#page5").fadeOut(500);
        var time = setInterval(function () {
            $("#page4").fadeIn(500);
            clearInterval(time)
        }, 480);
        myPageAll = 5;

    }
}
function per2() {
    noteror();
    if (myPageAll == 2) {
        $("#page2").fadeOut(500);
        $(".btnPreview").fadeOut(500);
        var time = setInterval(function () {
            $("#page1").fadeIn(500);
            clearInterval(time)
        }, 480);
        $('input[name="page2Radio"]').prop('checked', false);
        Q1 = "";
        myPageAll--;
    }
    if (myPageAll == 3) {
        $("#page3").fadeOut(500);
        var time = setInterval(function () {
            $("#page2").fadeIn(500);
            clearInterval(time)
        }, 480);
        $('input[name="myBox3"]').prop('checked', false);
        Q2 = [];
        myPageAll--;
    }
    if (myPageAll == 4) {
        $("#page4").fadeOut(500);
        var time = setInterval(function () {
            $("#page3").fadeIn(500);
            clearInterval(time)
        }, 480);
        $('input[name="page4Radio"]').prop('checked', false);
        Q3 = "";
        myPageAll--;
    }
    if (myPageAll == 5) {
        $("#page5").fadeOut(500);
        var time = setInterval(function () {
            $("#page4").fadeIn(500);
            $("#answer1").html("");
            $("#answer2").html("");
            $("#answer3").html("");
            $(".btnNext").show();
            $(".submit").hide();
            clearInterval(time);
        }, 500);

        myPageAll--;
    }
}

function myEror() {
    if (myPageAll == 2) {
        $("#myEror").tooltip("show");
        $("#myEror").mouseout(function () {
            $("#myEror").tooltip("show");
        });
        $("#myEror").focusout(function () {
            $("#myEror").tooltip("show");
        });
        $("#myEror").hover(function () {
            $("#myEror").tooltip("show");
        });
        $("#myEror").click(function () {
            $("#myEror").tooltip("show");
        });
        $("#myEror").mousedown(function () {
            $("#myEror").tooltip("show");
        });
        $("#myEror").mouseup(function () {
            $("#myEror").tooltip("show");
        });
    } if (myPageAll == 3) {

        $("#myEror3").tooltip("show");
        $("#myEror3").mouseout(function () {
            $("#myEror3").tooltip("show");
        });
        $("#myEror3").focusout(function () {
            $("#myEror3").tooltip("show");
        });
        $("#myEror3").hover(function () {
            $("#myEror3").tooltip("show");
        });
        $("#myEror3").click(function () {
            $("#myEror3").tooltip("show");
        });
        $("#myEror3").mousedown(function () {
            $("#myEror3").tooltip("show");
        });
        $("#myEror3").mouseup(function () {
            $("#myEror3").tooltip("show");
        });

    }
    if (myPageAll == 4) {
        $("#myEror4").tooltip("show");
        $("#myEror4").mouseout(function () {
            $("#myEror4").tooltip("show");
        });
        $("#myEror4").focusout(function () {
            $("#myEror4").tooltip("show");
        });
        $("#myEror4").hover(function () {
            $("#myEror4").tooltip("show");
        });
        $("#myEror4").click(function () {
            $("#myEror4").tooltip("show");
        });
        $("#myEror4").mousedown(function () {
            $("#myEror4").tooltip("show");
        });
        $("#myEror4").mouseup(function () {
            $("#myEror4").tooltip("show");
        });
    }

}
function noteror() {

    $("#myEror").tooltip("hide");
    $("#myEror").mouseout(function () {
        $("#myEror").tooltip("hide");
    });
    $("#myEror").focusout(function () {
        $("#myEror").tooltip("hide");
    });
    $("#myEror").hover(function () {
        $("#myEror").tooltip("hide");
    });
    $("#myEror").click(function () {
        $("#myEror").tooltip("hide");
    });
    $("#myEror").mousedown(function () {
        $("#myEror").tooltip("hide");
    });
    $("#myEror").mouseup(function () {
        $("#myEror").tooltip("hide");
    });

    $("#myEror3").tooltip("hide");
    $("#myEror3").mouseout(function () {
        $("#myEror3").tooltip("hide");
    });
    $("#myEror3").focusout(function () {
        $("#myEror3").tooltip("hide");
    });
    $("#myEror3").hover(function () {
        $("#myEror3").tooltip("hide");
    });
    $("#myEror3").click(function () {
        $("#myEror3").tooltip("hide");
    });
    $("#myEror3").mousedown(function () {
        $("#myEror3").tooltip("hide");
    });
    $("#myEror3").mouseup(function () {
        $("#myEror3").tooltip("hide");
    });

    $("#myEror4").tooltip("hide");
    $("#myEror4").mouseout(function () {
        $("#myEror4").tooltip("hide");
    });
    $("#myEror4").focusout(function () {
        $("#myEror4").tooltip("hide");
    });
    $("#myEror4").hover(function () {
        $("#myEror4").tooltip("hide");
    });
    $("#myEror4").click(function () {
        $("#myEror4").tooltip("hide");
    });
    $("#myEror4").mousedown(function () {
        $("#myEror4").tooltip("hide");
    });
    $("#myEror4").mouseup(function () {
        $("#myEror4").tooltip("hide");
    });
}

function saveData() {

    save();
    $("#sent").fadeIn(500);

    $("#page5").fadeOut(500);
    $(".btnPreview").fadeOut(500);
    var time = setInterval(function () {
        $("#page1").fadeIn(500);
        clearInterval(time)
    }, 480);
    myPageAll = 1;

    $("#fname").val("");
    $("#lname").val("");
    $("#Email").val("");
    $("#year").val("");
    $('input[name="customRadioInline1"]').prop('checked', false);
    $('input[id="AC"]').prop('checked', false);
    $('input[name="page2Radio"]').prop('checked', false);
    $('input[name="myBox3"]').prop('checked', false);
    $('input[name="page4Radio"]').prop('checked', false);
    $("#whay").val("");
    $(".submit").hide();
    $(".btnNext").show();
    //$("#contry option:selected").prop('selectedIndex', "eror");
    $('#contry option[value="eror"]').attr('selected', 'selected');


    fName = "";
    lName = "";
    Email = "";
    age = 0;
    Q1 = "";
    Q2 = [];
    Q3 = "";
    Q4 = "";

}
function save() {

    var user = [fName, lName,Email, cantry, age, gender, Q1, Q2, Q3, Q4];
    var allQ2 = "";
    myNumQCunter = 0;
    for (i = 0; i < Q2.length; i++) {
        allQ2 += "&Q2A" + i.toString()+"=";
        allQ2 += Q2[i];
        myNumQCunter++;
    }
    var myNumQ2 = 5 - Q2.length+1;
    for (i = 0; i < myNumQ2; i++) {
        allQ2 += "&Q2A" + myNumQCunter.toString() + "=";
        myNumQCunter++;
    }


    $.post("Default.aspx/?fname=" + fName + "&lName=" + lName + "&Email=" + Email + "&cantry=" + cantry + "&age=" + age + "&gender=" + gender + "&Q1=" + Q1 + allQ2 + "&Q3=" + Q3 + "&Q4=" + Q4,
        function (data, status)
        {
            //alert("Data: " + data + "\nStatus: " + status);
            SentEnd();
        });
}

function SentEnd() {
    var time = setInterval(function () {
        $("#sent").fadeOut(500);
        clearInterval(time)
    }, 1500);


}