
$(document).ready(function () {

    //Making the table to use as grid
    var body = document.getElementsByTagName("body")[0];
    var table = document.createElement('TABLE');
    var tblB = document.createElement('TBODY');
    table.appendChild(tblB);
    var num = [1];


    for (var i = 0; i < 10; i++) {
        var tr = document.createElement('TR');
        tblB.appendChild(tr);
        $(tr).attr('data-x', i)

        for (var j = 0; j < 10; j++) {
            var td = document.createElement('TD');
            tr.appendChild(td);

            $(td).attr('id', num++);
            $(td).attr('data-y', j);
        
        }

    }



    body.appendChild(table);

    //Cell ids to get battle cells
    var cell = $('td');
    for (cell = 0; cell < 100; cell++){
        
    }


    //Weapon objects
    var snowballs = {
        name: "snowballs",
        damage: 20,
        image: "snowball.png" 
    }

    // Characters
    var Jim = {
        name: "Jim",
        health: 100,
        weapon: "snowballs",
        dashboard: $('#leftDashboard'),
        highlightPath: $('.highlightPath')
    }


    //When names are entered, and play is clicked, put the names on the dashboards

    $('#play').click(function() {
        var player1Name = $('#P1').val()
        var player2Name = $('#P2').val()
        $('#Name1').text(player1Name);
        $('#Name2').text(player2Name);
        if ($('#P1').val().length === 0) {
         $('#Name1').text('Jim')
         player1Name = 'Jim';
        }
        if ($('#P2').val().length === 0) {
            $('#Name2').text('Name: Dwight')
        }
    });
    

    //assign Jim's weapon to the sidebar
    $('#weaponJim').attr('src','snowball.png');
    $('#leftDashboard').addClass('snowball');

    var Dwight = {
        name: "Dwight",
        health: 100,
        weapon: "snowballs",
        dashboard: $('#rightDashboard'),
        highlightPath: $('.highlightPath2')

    }
     //assign Dwight's weapon to the sidebar
     $('#weaponDwight').attr('src','snowball.png');
     $('#rightDashboard').addClass('snowball');

    var currentHealthDwight = $('#DwightHealth').append(parseInt(Dwight.health));
    var currentHealthDPoints = parseInt(Dwight.health);
    var snowballpoints = 20;
    var gunpoints = 25;
    var ninjastarpoints = 30;
    var nunchuckspoints = 40;
    var currentHealthJim = $('#JimHealth').append(parseInt(Jim.health));
    var currentHealthJPoints = parseInt(Jim.health);
    let scoreJim = 100;
    let scoreDwight = 100;
    
    //empty cells for weapons and characters
    $("td").addClass('empty');
    //Place Jim and Dwight on set squares
    var Jimcell = $("tr[data-x=" + 5 + "] > td[data-y=" + 5 + "]").addClass('Jim');
   
    $('.snowballs').addClass('weapon');
    $('.gun').addClass('weapon');
    $('.nunchucks').addClass('weapon');
    $('.ninjastar').addClass('weapon');

    
    var Dwightcell = $("tr[data-x=" + 9 + "] > td[data-y=" + 9 + "]").addClass('Dwight');
    Jimcell.removeClass('empty');
    Dwightcell.removeClass('empty');
    

    var obs = 0;

    while (obs < 10) {
        var randomRow = Math.floor((Math.random() * 9) + 1);
        var randomCol = Math.floor((Math.random() * 9) + 1);
    
        

        var randomCell = $("tr[data-x=" + randomRow + "] > td[data-y=" + randomCol + "]");		
        if( randomCell.hasClass('dimmed') === false && randomCell.hasClass('empty') === true){
            
            randomCell.addClass('dimmed');
            randomCell.removeClass('empty');

            obs++

        }else{
            console.log("Col " + randomCol + " and row " + randomRow + " already dimmed. Trying again." );
        }

    }

    var weapons = 0;
    
    // while (weapons < 4) {
        var randomRow = Math.floor((Math.random() * 9) + 1);
        var randomCol = Math.floor((Math.random() * 9) + 1);
        var randomRow2 = Math.floor((Math.random() * 9) + 1);
        var randomCol2 = Math.floor((Math.random() * 9) + 1);
        var randomRow3 = Math.floor((Math.random() * 9) + 1);
        var randomCol3 = Math.floor((Math.random() * 9) + 1);
        var randomRow4 = Math.floor((Math.random() * 9) + 1);
        var randomCol4 = Math.floor((Math.random() * 9) + 1);

        var randomCellNew = $($("tr[data-x=" + randomRow + "] > td[data-y=" + randomCol + "]"));
        var randomCellNew2 = $($("tr[data-x=" + randomRow2 + "] > td[data-y=" + randomCol2 + "]"));
        var randomCellNew3 = $($("tr[data-x=" + randomRow3 + "] > td[data-y=" + randomCol3 + "]"));
        var randomCellNew4 = $($("tr[data-x=" + randomRow4 + "] > td[data-y=" + randomCol4 + "]"));
        if (randomCellNew.hasClass('Jim') === false){
            randomCellNew.addClass('snowballs').removeClass('empty');
        }
    
            randomCellNew2.addClass('gun').removeClass('empty');
            randomCellNew3.addClass('nunchucks').removeClass('empty');
            randomCellNew4.addClass('ninjastar').removeClass('empty');





var jimDataYCombat = $(".Jim").attr("data-y");
var jimDataXCombat = $(".Jim").parent().attr("data-x");
var DwightDataYCombat = $(".Dwight").attr("data-y");
var DwightDataXCombat = $(".Dwight").parent().attr("data-x");
var JimCombat = parseInt(jimDataYCombat) + 1;
var DwightCombat = parseInt(DwightDataYCombat) - 1;

//Function for weapon change

function swapWeapon(cell, player, newWeapon){


    if(player.weapon != "none"){

        cell.addClass(player.weapon);
    }

    // $('#weaponJimName').remove(player.weapon);
    $(player.dashboard).removeClass();
    player.weapon = newWeapon;

    $('.' + player.name).removeClass(player.name);

    // collect the weapon
    cell.removeClass(newWeapon);
    cell.addClass(player.name); 

    $(player.dashboard).addClass(player.weapon);
    $('#weapon' + player.name).attr("src", newWeapon + ".png");   
     

    $(player.dashboard).addClass(newWeapon);

}

////////////////////////////
    
    JimsTurn();
    ///////////////Find where Jim is and use that do highlight his path and find all the obstacles in his way
    function JimsTurn() {
    $('.Jim').prevAll().slice(9,10).addClass('poop');
    var jimDataY = $(".Jim").attr("data-y");
    var jimDataX = $(".Jim").parent().attr("data-x");
    

    // Getting next cells with dimmed
    var nearestDim = $('.Jim').nextAll('.dimmed:first');
    var blockPath = nearestDim.nextAll();
    var rowAbove = $('.Jim').closest("tr").index();
    //No covering Dwight with highlight
    var dwightcross = $('.Jim').nextAll('.Dwight');
    var afterDwight = dwightcross.nextAll();
    var dwightRight = $('.Jim').next('td');
    

    // Getting previous cells with dimmed
    var nearestDimLeft = $('.Jim').prevAll('.dimmed:first');
    var blockPathLeft = nearestDimLeft.prevAll();
    //Getting previous cell with Jim
    var nearestDwight = $('.Jim').prevAll('.Dwight');
    var beforeDwight = nearestDwight.prevAll();
    var nearestWeapon = $('.Jim').prevAll('.weapon');



    //Trying to get cell above Jim
    var aboveJim = parseInt(jimDataX) - 1;
    let aboveFirst = $($("tr[data-x=" + aboveJim + "] > td[data-y=" + jimDataY + "]"))
    //Get 2nd cell above Jim
    var aboveJim2 = parseInt(jimDataX) - 2;
    var aboveSecond = $($("tr[data-x=" + aboveJim2 + "] > td[data-y=" + jimDataY + "]"))
    //Get 3rd cell above Jim
    var aboveJim3 = parseInt(jimDataX) - 3;
    var aboveThird = $($("tr[data-x=" + aboveJim3 + "] > td[data-y=" + jimDataY + "]"))


    // Tying to get cell below Jim
    var belowJim = parseInt(jimDataX) + 1;
    var belowFirst = $($("tr[data-x=" + belowJim + "] > td[data-y=" + jimDataY + "]"))
    //Get 2nd cell above Jim
    var belowJim2 = parseInt(jimDataX) + 2;
    var belowSecond = $($("tr[data-x=" + belowJim2 + "] > td[data-y=" + jimDataY + "]"))
    //Get 3rd cell above Jim
    var belowJim3 = parseInt(jimDataX) + 3;
    var belowThird = $($("tr[data-x=" + belowJim3 + "] > td[data-y=" + jimDataY + "]"))
    


   
    //Loop to give Jim's available path to the right
    for (var y = 1; y <= 3; y++){
        var jimNewY = parseInt(jimDataY) + y;        
        var availablePathJim = $($("tr[data-x=" + jimDataX + "] > td[data-y=" + jimNewY + "]"));
        
        availablePathJim.addClass('highlightPath');

        //Stopping path from going through obstacles or players
        nearestDim.removeClass('highlightPath');
        blockPath.removeClass('highlightPath');
        dwightcross.removeClass('highlightPath');
        afterDwight.removeClass('highlightPath');
        $('.Dwight').removeClass('highlightPath');
        beforeDwight.removeClass('highlightPath');
    }

    //Path Down
    for (var x=1; x <= 3; x++) {
        var jimNewX = parseInt(jimDataX) + x;

        var availablePathJimD = $($("tr[data-x=" + jimNewX + "] > td[data-y=" + jimDataY + "]"))

        availablePathJimD.addClass('highlightPath');
        $('.Dwight').removeClass('highlightPath');

        //Removing class from obstacles
        if (belowFirst.hasClass('dimmed') === true) {
            availablePathJimD.removeClass('highlightPath');
        } else if (belowSecond.hasClass('dimmed') === true) {
            belowSecond.removeClass('highlightPath');
            belowThird.removeClass('highlightPath');
        } else if (belowThird.hasClass('dimmed') === true) {
            belowThird.removeClass('highlightPath');

        } 
    
    }

    //Path Left
    for (var i=-1; i >= -3 ; i--){
        var jimNewYLeft = parseInt(jimDataY) + i;

        var availablePathJimL = $($("tr[data-x=" + jimDataX + "] > td[data-y=" + jimNewYLeft + "]"));
        
        availablePathJimL.addClass('highlightPath');

        //Stop characters from going through obstacles or other character
        nearestDimLeft.removeClass('highlightPath');
        blockPathLeft.removeClass('highlightPath');
        nearestDwight.removeClass('highlightPath');
        beforeDwight.removeClass('highlightPath');
        $('.Dwight').removeClass('highlightPath');

    }





    //Path Up
    for (var j=-1; j >= -3; j--) {
        var jimNewXUp = parseInt(jimDataX) + j;

        var availablePathJimU = $($("tr[data-x=" + jimNewXUp + "] > td[data-y=" + jimDataY + "]"))

        availablePathJimU.addClass('highlightPath');
        $('.Dwight').removeClass('highlightPath');

        //Checking if cell above Jim has obstacle on it
    if (aboveFirst.hasClass('dimmed') === true) {
        availablePathJimU.removeClass('highlightPath');
    } else if (aboveSecond.hasClass('dimmed') === true) {
        aboveSecond.removeClass('highlightPath');
        aboveThird.removeClass('highlightPath');
    } else if (aboveThird.hasClass('dimmed') === true) {
        aboveThird.removeClass('highlightPath');
    } else if (aboveSecond.hasClass('Dwight') === true) {
        aboveSecond.removeClass('highlightPath');
        aboveThird.removeClass('highlightPath');
    }
    }

    $('.highlightPath').off( "click");

    //Making character move on click
    $('.highlightPath').on('click', function(){

        if(!$(this).hasClass('highlightPath'))
        {
            return;
        }
       
            //Swapping weapons
            if($(this).hasClass('snowballs')) {
                swapWeapon($(this), Jim, 'snowballs');
                $('.highlightPath').removeClass('highlightPath');
            } else if($(this).hasClass('gun')) {
                swapWeapon($(this), Jim, 'gun');
                $('.highlightPath').removeClass('highlightPath');
            } else if($(this).hasClass('ninjastar')) {
                swapWeapon($(this), Jim, 'ninjastar');
                $('.highlightPath').removeClass('highlightPath');
            } else if($(this).hasClass('nunchucks')) {
                swapWeapon($(this), Jim, 'nunchucks');
                $('.highlightPath').removeClass('highlightPath');
            } else if ($(this).hasClass('Dwight') === false) {

        $('.Jim').removeClass('Jim')
        $('.highlightPath').removeClass('highlightPath');
        $(aboveFirst).removeClass('battlesquare');      
        $(this).addClass('Jim').removeClass('empty');

        //If characters land on adjacent squares, commence battle.
        above = +$(this).attr("id") - 10;
        bellow = +$(this).attr("id") + 10;

        left = +$(this).attr("id") - 1;
        right = +$(this).attr("id") + 1;

        
        if(($("#"+above) && $("#"+above).hasClass('Dwight')) ||
        ($("#"+bellow) && $("#"+bellow).hasClass('Dwight')) ||
        ($('.Jim').nextAll().slice(0,1).hasClass('Dwight')) ||
        ($('.Jim').prevAll().slice(0,1).hasClass('Dwight')))
        {
            setTimeout(() => {  alert("Battle begins now"); battle()}, 500)
        }
        
    }
       
        DwightsTurn();
        $(this).removeClass('highlightPath2')
         
     });
        
    }
 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     //////////////////////Dwight code

     function DwightsTurn() 
     {
     var DwightDataY = $(".Dwight").attr("data-y");
     var DwightDataX = $(".Dwight").parent().attr("data-x");
 
     // Getting next cells with dimmed
     var nearestDimDwight = $('.Dwight').nextAll('.dimmed:first');
     var blockPathDwight = nearestDimDwight.nextAll();
     var rowAboveD = $('.Dwight').closest("tr").index();

     //Getting next cells with Jim
     var jimcross = $('.Dwight').nextAll('.Jim');
     var jimcrossAfter = jimcross.nextAll();
 
     // Getting previous cells with dimmed
     var nearestDimLeftD = $('.Dwight').prevAll('.dimmed:first');
     var blockPathLeftD = nearestDimLeftD.prevAll();

     //Getting previous cells with jim
     var nearJim = $('.Dwight').prevAll('.Jim');
     var nearestBeforeJim = nearJim.prevAll();
     var dwightBeside = parseInt(DwightDataYCombat) - 1;

 
     //Trying to get cell above Dwight
     var aboveDwight = parseInt(DwightDataX) - 1;
     var aboveFirstD = $($("tr[data-x=" + aboveDwight + "] > td[data-y=" + DwightDataY + "]"))
     //Get 2nd cell above Dwight
     var aboveDwight2 = parseInt(DwightDataX) - 2;
     var aboveSecondD = $($("tr[data-x=" + aboveDwight2 + "] > td[data-y=" + DwightDataY + "]"))
     //Get 3rd cell above Dwight
     var aboveDwight3 = parseInt(DwightDataX) - 3;
     var aboveThirdD = $($("tr[data-x=" + aboveDwight3 + "] > td[data-y=" + DwightDataY + "]"))
 
 
     // Tying to get cell below Dwight
     var belowDwight = parseInt(DwightDataX) + 1;
     var belowFirstD = $($("tr[data-x=" + belowDwight + "] > td[data-y=" + DwightDataY + "]"))
     //Get 2nd cell above Dwight
     var belowDwight2 = parseInt(DwightDataX) + 2;
     var belowSecondD = $($("tr[data-x=" + belowDwight2 + "] > td[data-y=" + DwightDataY + "]"))
     //Get 3rd cell above Dwight
     var belowDwight3 = parseInt(DwightDataX) + 3;
     var belowThirdD = $($("tr[data-x=" + belowDwight3 + "] > td[data-y=" + DwightDataY + "]"))
     
 
 
     //Loop to give Dwight's available path to the right
     for (var y = 1; y <= 3; y++){
         var DwightNewY = parseInt(DwightDataY) + y;
         
         var availablePathDwight = $($("tr[data-x=" + DwightDataX + "] > td[data-y=" + DwightNewY + "]"));        
         availablePathDwight.addClass('highlightPath2');
         $('.Jim').removeClass('highlightPath2');

         nearestDimDwight.removeClass('highlightPath2');
         blockPathDwight.removeClass('highlightPath2');
         jimcross.removeClass('highlightPath2')
         jimcrossAfter.removeClass('highlightPath2');
        
     }
 
     //Path Down
     for (var x=1; x <= 3; x++) {
         var DwightNewX = parseInt(DwightDataX) + x;
 
         var availablePathDwightD = $($("tr[data-x=" + DwightNewX + "] > td[data-y=" + DwightDataY + "]"))
 
         availablePathDwightD.addClass('highlightPath2');
         $('.Jim').removeClass('highlightPath2');

         //Removing class from obstacles
         if (belowFirstD.hasClass('dimmed') === true) {
             availablePathDwightD.removeClass('highlightPath2');
         } else if (belowSecondD.hasClass('dimmed') === true || belowSecondD.hasClass('Jim')) {
             belowSecondD.removeClass('highlightPath2');
             belowThirdD.removeClass('highlightPath2');
         } else if (belowThirdD.hasClass('dimmed') === true) {
             belowThirdD.removeClass('highlightPath2');
 
         }
     
     }
 
     //Path Left
     for (var i=-1; i >= -3; i--){
         var DwightNewYLeft = parseInt(DwightDataY) + i;
          var availablePathDwightL = $($("tr[data-x=" + DwightDataX + "] > td[data-y=" + DwightNewYLeft + "]"));
         
         availablePathDwightL.addClass('highlightPath2');
         $('.Jim').removeClass('highlightPath2');

         //Blocking character from passing through obstacles or other charcter
         nearestDimLeftD.removeClass('highlightPath2');
         blockPathLeftD.removeClass('highlightPath2');

         $('.Jim').removeClass('highlightPath2');
         nearJim.removeClass('highlightPath2');
         nearestBeforeJim.removeClass('highlightPath2');
     }
 
 

 
     //Path Up
     for (var j=-1; j >= -3; j--) {
         var DwightNewXUp = parseInt(DwightDataX) + j;
 
         var availablePathDwightU = $($("tr[data-x=" + DwightNewXUp + "] > td[data-y=" + DwightDataY + "]"))
 
         availablePathDwightU.addClass('highlightPath2');
         //Checking if cell above Dwight has obstacle on it
     if (aboveFirstD.hasClass('dimmed') === true || aboveFirstD.hasClass('Jim')) {
         availablePathDwightU.removeClass('highlightPath2');
     } else if (aboveSecondD.hasClass('dimmed') === true || aboveSecondD.hasClass('Jim')) {
         aboveSecondD.removeClass('highlightPath2');
         aboveThirdD.removeClass('highlightPath2');
     } else if (aboveThirdD.hasClass('dimmed') === true || aboveThirdD.hasClass('Jim')) {
         aboveThirdD.removeClass('highlightPath2');
 
     }
     }
 
     $('.highlightPath').off( "click");

     //Making character move on click
     $('.highlightPath2').on('click', function(){

        if(!$(this).hasClass('highlightPath2'))
        {
            return;
        }

        

        //Swapping weapon
         if($(this).hasClass('snowballs')) {
            swapWeapon($(this), Dwight, 'snowballs');
            $('.highlightPath2').removeClass('highlightPath2');
         } else if($(this).hasClass('gun')) {
            swapWeapon($(this), Dwight, 'gun');
            $('.highlightPath2').removeClass('highlightPath2');
         }  else if($(this).hasClass('ninjastar')) {
            swapWeapon($(this), Dwight, 'ninjastar');
            $('.highlightPath2').removeClass('highlightPath2');
         } else if($(this).hasClass('nunchucks')) {
            swapWeapon($(this), Dwight, 'nunchucks');
            $('.highlightPath2').removeClass('highlightPath2');
         }


         else if ($(this).hasClass('Jim') === false && $(this).hasClass('highlightPath2') ===  true) {
            $('.Dwight').removeClass('Dwight').addClass('empty')
            $('.highlightPath2').removeClass('highlightPath2');
            $(this).addClass('Dwight').removeClass('empty');
        }

        //If characters land on adjacent squares, commence battle.

        above = +$(this).attr("id") - 10;
        bellow = +$(this).attr("id") + 10;

        left = +$(this).attr("id") - 1;
        right = +$(this).attr("id") + 1;

        
        if(($(".Dwight"+above) && $("#"+above).hasClass('Jim')) ||
        ($(".Dwight"+bellow) && $("#"+bellow).hasClass('Jim')) ||
        (($('.Dwight').nextAll().slice(0,1).hasClass('Jim'))) ||
        ($('.Dwight').prevAll().slice(0,1).hasClass('Jim')))
        {
            setTimeout(() => {  alert("Battle begins now"); battle()}, 500)
        }
         $(this).removeClass('highlightPath')
         JimsTurn();
      });

    }
    
    function battle() {
        document.getElementById("battlebackground").style.visibility = "visible";
        document.getElementById("leftDashboard").style.visibility = "visible";
        document.getElementById("rightDashboard").style.visibility = "visible";
        document.querySelector('tbody').style.visibility = "hidden";
        $('#JimAt, #JimDefend, #DwightAt, #DwightDefend').css('visibility', 'visible');
        JimGo()

        function JimGo() {
            $('#showGoJ').css('visibility', 'visible')
            $('#JimAt').off("click");

            //function to call game over
            function checkPoints() {
                if (currentHealthDPoints <= 0){
                    var player1Name = $('#Name1').text()
                    
                    setTimeout(function() {$('#gameover').css('visibility', 'visible'), $('#Winner').text(player1Name + ' wins!'),                  $('#jimhaswon').css('visibility', 'visible')

                 }, 1000);
                  $('audio#pop')[0].play()
                 $('#rightDashboard, #JimAt, #JimDefend, #DwightAt, #DwightDefend, #showGoD').css('visibility', 'hidden');
                }
            }

            ///////////If Jim has snowballs///////////////////
             if ($('#leftDashboard').hasClass('snowball')) {
            //If Dwight is defending/////////////////
            if ($('#rightDashboard').hasClass('Defend') === true) {
            ///When Jim's attack button is pressed////////
            $('#JimAt').click(function(){
                let currentHealthDPointsNew = currentHealthDPoints - (snowballpoints / 2);
                currentHealthDPoints = currentHealthDPointsNew;
                $('#DwightHealth').empty();
                currentHealthDwight = $('#DwightHealth').append("Health: " + currentHealthDPoints);
                checkPoints();
                $('#rightDashboard').removeClass('Defend');
                $('#showGoD').css('visibility', 'visible')
                $('#showGoJ').css('visibility', 'hidden');
                DwightGo();
             });
             //////If Dwight is not defending/////////
            } else if ($('#rightDashboard').hasClass('Defend') === false){
               
                $('#JimAt').click(function(){

                    let currentHealthDPointsNew = currentHealthDPoints - snowballpoints;
                    currentHealthDPoints = currentHealthDPointsNew;
                    $('#DwightHealth').empty();
                    currentHealthDwight = $('#DwightHealth').append("Health: " + currentHealthDPoints);
                    checkPoints();
                    $('#showGoD').css('visibility', 'visible')
                    $('#showGoJ').css('visibility', 'hidden');
                    DwightGo();
                    })
                }
             //If Jim's defend button clicked, add Class of defend
             $('#JimDefend').click(function() {
                $('#leftDashboard').addClass('Defend')
                $('#showGoD').css('visibility', 'visible')
                $('#showGoJ').css('visibility', 'hidden');
                DwightGo()
            })

             } else if ($('#leftDashboard').hasClass('gun')) {

                if ($('#rightDashboard').hasClass('Defend') === true) {
                    ///When Jim's attack button is pressed////////
                    $('#JimAt').click(function(){
                        let currentHealthDPointsNew = currentHealthDPoints - (gunpoints / 2);
                        currentHealthDPoints = currentHealthDPointsNew;
                        $('#DwightHealth').empty();
                        currentHealthDwight = $('#DwightHealth').append("Health: " + currentHealthDPoints);
                        checkPoints();
                        $('#rightDashboard').removeClass('Defend');
                        $('#showGoD').css('visibility', 'visible')
                         $('#showGoJ').css('visibility', 'hidden');
                        DwightGo();
                     })
                    } else if ($('#rightDashboard').hasClass('Defend') === false){

                  $('#JimAt').click(function(){
                    let currentHealthDPointsNew = currentHealthDPoints - gunpoints;
                    currentHealthDPoints = currentHealthDPointsNew;
                    $('#DwightHealth').empty();
                    currentHealthDwight = $('#DwightHealth').append("Health: " + currentHealthDPoints);
                    checkPoints();
                    $('#showGoD').css('visibility', 'visible')
                    $('#showGoJ').css('visibility', 'hidden');
                    DwightGo();
                })
            
            }
            //If Jim's defend button clicked, add Class of defend
              $('#JimDefend').click(function() {
                $('#leftDashboard').addClass('Defend')
                $('#showGoD').css('visibility', 'visible')
                $('#showGoJ').css('visibility', 'hidden');
                DwightGo()
                })
              } else if ($('#leftDashboard').hasClass('ninjastar')) {

                if ($('#rightDashboard').hasClass('Defend') === true) {
                    ///When Jim's attack button is pressed////////
                    $('#JimAt').click(function(){
                        let currentHealthDPointsNew = currentHealthDPoints - (ninjastarpoints / 2);
                        currentHealthDPoints = currentHealthDPointsNew;
                        $('#DwightHealth').empty();
                        currentHealthDwight = $('#DwightHealth').append("Health: " + currentHealthDPoints);
                        checkPoints();
                        $('#rightDashboard').removeClass('Defend');
                        $('#showGoD').css('visibility', 'visible')
                        $('#showGoJ').css('visibility', 'hidden');
                        DwightGo();
                     })
                 } else if ($('#rightDashboard').hasClass('Defend') === false){

                $('#JimAt').click(function(){
                  let currentHealthDPointsNew = currentHealthDPoints - ninjastarpoints;
                  currentHealthDPoints = currentHealthDPointsNew;
                  $('#DwightHealth').empty();
                  currentHealthDwight = $('#DwightHealth').append("Health: " + currentHealthDPoints);
                  checkPoints();
                  $('#showGoD').css('visibility', 'visible')
                  $('#showGoJ').css('visibility', 'hidden');
                  DwightGo();
                })
            }
                //If Jim's defend button clicked, add Class of defend
                $('#JimDefend').click(function() {
                    $('#leftDashboard').addClass('Defend')
                    $('#showGoD').css('visibility', 'visible')
                    $('#showGoJ').css('visibility', 'hidden');
                    DwightGo()
                })
            } else if ($('#leftDashboard').hasClass('nunchucks')) {

                if ($('#rightDashboard').hasClass('Defend') === true) {
                    ///When Jim's attack button is pressed////////
                    $('#JimAt').click(function(){
                        let currentHealthDPointsNew = currentHealthDPoints - (nunchuckspoints / 2);
                        currentHealthDPoints = currentHealthDPointsNew;
                        $('#DwightHealth').empty();
                        currentHealthDwight = $('#DwightHealth').append("Health: " + currentHealthDPoints);
                        checkPoints();
                        $('#rightDashboard').removeClass('Defend');
                        $('#showGoD').css('visibility', 'visible')
                        $('#showGoJ').css('visibility', 'hidden');
                        DwightGo();
                     });

                    } else if ($('#rightDashboard').hasClass('Defend') === false){

                $('#JimAt').click(function(){
                  let currentHealthDPointsNew = currentHealthDPoints - nunchuckspoints;
                  currentHealthDPoints = currentHealthDPointsNew;
                  $('#DwightHealth').empty();
                  currentHealthDwight = $('#DwightHealth').append("Health: " + currentHealthDPoints);
                  checkPoints();
                  $('#showGoD').css('visibility', 'visible')
                  $('#showGoJ').css('visibility', 'hidden');
                  DwightGo();
                })
            }
                 //If Jim's defend button clicked, add Class of defend
                $('#JimDefend').click(function() {
                    $('#leftDashboard').addClass('Defend')
                    $('#showGoD').css('visibility', 'visible')
                    $('#showGoJ').css('visibility', 'hidden');
                    DwightGo()
                })
            }

        }


        //Dwights turn
        function DwightGo() {
            $('#DwightAt').off("click");

            function checkPoints2() {
                if (currentHealthJPoints <= 0){
                    var player2Name = $('#Name2').text() 
                    setTimeout(function() {$('#gameover').css('visibility', 'visible'), $('#Winner').text(player2Name + ' wins!'),$('#Dwighthaswon').css('visibility', 'visible')
                 }, 1000);
                  $('audio#pop1')[0].play()
                 $('#leftDashboard, #JimAt, #JimDefend, #DwightAt, #DwightDefend, #showGoJ').css('visibility', 'hidden');
                 }
            }

            if ($('#rightDashboard').hasClass('snowball')) {
                
                //If Jim defended and Dwight has snowballs
                if ($('#leftDashboard').hasClass('Defend') === true) {
                    $('#DwightAt').click(function(){
                   let currentHealthJPointsNew = currentHealthJPoints - (snowballpoints / 2);
                   currentHealthJPoints = currentHealthJPointsNew;
                   $('#JimHealth').empty();
                   currentHealthJim= $('#JimHealth').append("Health: " + currentHealthJPoints);
                   checkPoints2()
                   $('#leftDashboard').removeClass('Defend');
                   $('#showGoJ').css('visibility', 'visible');
                   $('#showGoD').css('visibility', 'hidden');
                   JimGo()
               });
               //If he didn't defend
           } else if ($('#leftDashboard').hasClass('Defend') === false){

                /////////////////////////////////
               $('#DwightAt').click(function(){
                   let currentHealthJPointsNew = currentHealthJPoints - snowballpoints;
                   currentHealthJPoints = currentHealthJPointsNew;
                   $('#JimHealth').empty();
                   currentHealthJim = $('#JimHealth').append("Health: " + currentHealthJPoints);
                   Jim.health = currentHealthJPoints;
                   checkPoints2();
                   $('#showGoJ').css('visibility', 'visible');
                   $('#showGoD').css('visibility', 'hidden');
                   JimGo();
                }) 
            }
                //If Dwight's defend button clicked, add class defend
                $('#DwightDefend').click(function() {
                    $('#rightDashboard').addClass('Defend')
                    $('#showGoJ').css('visibility', 'visible');
                    $('#showGoD').css('visibility', 'hidden');
                    JimGo()
                })
        
                } else if ($('#rightDashboard').hasClass('gun')) {
                //If Jim defend
                if ($('#leftDashboard').hasClass('Defend') === true) {
                    $('#DwightAt').click(function(){
                   let currentHealthJPointsNew = currentHealthJPoints - (gunpoints / 2);
                   currentHealthJPoints = currentHealthJPointsNew;
                   $('#JimHealth').empty();
                   currentHealthJim= $('#JimHealth').append("Health: " + currentHealthJPoints);
                   checkPoints2()
                   $('#leftDashboard').removeClass('Defend');
                   $('#showGoJ').css('visibility', 'visible');
                   $('#showGoD').css('visibility', 'hidden');
                   JimGo()
               })
               //If he didn't defend
                 } else if ($('#leftDashboard').hasClass('Defend') === false){
                //
                 $('#DwightAt').click(function(){
                   let currentHealthJPointsNew = currentHealthJPoints - gunpoints;
                   currentHealthJPoints = currentHealthJPointsNew;
                   $('#JimHealth').empty();
                   currentHealthJim = $('#JimHealth').append("Health: " + currentHealthJPoints);
                   checkPoints2()
                   $('#showGoJ').css('visibility', 'visible')
                   $('#showGoD').css('visibility', 'hidden');
                   JimGo();
               })
            }
               $('#DwightDefend').click(function() {
                $('#rightDashboard').addClass('Defend')
                $('#showGoJ').css('visibility', 'visible');
                $('#showGoD').css('visibility', 'hidden');
                JimGo()
            })
                 } else if ($('#rightDashboard').hasClass('ninjastar')) {
                //If Jim is defending
                if ($('#leftDashboard').hasClass('Defend') === true) {
                    $('#DwightAt').click(function(){
                   let currentHealthJPointsNew = currentHealthJPoints - (ninjastarpoints / 2);
                   currentHealthJPoints = currentHealthJPointsNew;
                   $('#JimHealth').empty();
                   currentHealthJim= $('#JimHealth').append("Health: " + currentHealthJPoints);
                   checkPoints2()
                   $('#leftDashboard').removeClass('Defend');
                   $('#showGoJ').css('visibility', 'visible');
                   $('#showGoD').css('visibility', 'hidden');
                   JimGo()
               });
               //If he didn't defend
           } else if ($('#leftDashboard').hasClass('Defend') === false){
                //If he didn't defend
                   $('#DwightAt').click(function(){
                     let currentHealthJPointsNew = currentHealthJPoints - ninjastarpoints;
                     currentHealthJPoints = currentHealthJPointsNew;
                     $('#JimHealth').empty();
                     currentHealthJim = $('#JimHealth').append("Health: " + currentHealthJPoints);
                     checkPoints2()
                     $('#showGoJ').css('visibility', 'visible')
                     $('#showGoD').css('visibility', 'hidden');
                     JimGo();
                   })
                }

                $('#DwightDefend').click(function() {
                    $('#rightDashboard').addClass('Defend')
                    $('#showGoJ').css('visibility', 'visible');
                    $('#showGoD').css('visibility', 'hidden');
                    JimGo()
                })

               } else if ($('#rightDashboard').hasClass('nunchucks')) {
                   //If Jim defended
                   if ($('#leftDashboard').hasClass('Defend') === true) {
                    $('#DwightAt').click(function(){
                   let currentHealthJPointsNew = currentHealthJPoints - (nunchuckspoints / 2);
                   currentHealthJPoints = currentHealthJPointsNew;
                   $('#JimHealth').empty();
                   currentHealthJim= $('#JimHealth').append("Health: " + currentHealthJPoints);
                   checkPoints2()
                   $('#leftDashboard').removeClass('Defend');
                   $('#showGoJ').css('visibility', 'visible');
                   $('#showGoD').css('visibility', 'hidden');
                   JimGo()
               });
               //If he didn't defend
           } else if ($('#leftDashboard').hasClass('Defend') === false){
                   ////
                   $('#DwightAt').click(function(){
                     let currentHealthJPointsNew = currentHealthJPoints - nunchuckspoints;
                     currentHealthJPoints = currentHealthJPointsNew;
                     $('#JimHealth').empty();
                     currentHealthJim = $('#JimHealth').append("Health: " + currentHealthJPoints);
                     checkPoints2()
                     $('#showGoJ').css('visibility', 'visible')
                     $('#showGoD').css('visibility', 'hidden');
                     JimGo();
                   })
                }
                $('#DwightDefend').click(function() {
                    $('#rightDashboard').addClass('Defend')
                    $('#showGoJ').css('visibility', 'visible');
                    $('#showGoD').css('visibility', 'hidden');
                    JimGo()

                })
               }
            } 

           }


//End of code
})

