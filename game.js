var buttonColours=["red","blue","green","yellow"],gamePattern=[],userClickedPattern=[],started=!1,level=0;function checkAnswer(e){gamePattern[e]===userClickedPattern[e]?(console.log("success"),userClickedPattern.length===gamePattern.length&&setTimeout(function(){nextSequence()},1e3)):(console.log("wrong"),new Audio("sounds/wrong.mp3").play(),$("body").addClass("game-over"),setTimeout(function(){$("body").removeClass("game-over")},200),$("body").removeClass("media"),$("#level-title").text("Game Over, Press Any keyboard Key to Restart"),startOver())}function nextSequence(){userClickedPattern=[],level++,$("#level-title").text("level "+level);var e=Math.round(3*Math.random()),t=buttonColours[e];gamePattern.push(t),$("#"+t).fadeOut(150).fadeIn(150),playSound(t)}function playSound(e){switch(e){case"green":new Audio("sounds/green.mp3").play();break;case"blue":new Audio("sounds/blue.mp3").play();break;case"red":new Audio("sounds/red.mp3").play();break;case"yellow":new Audio("sounds/yellow.mp3").play();break;default:console.log(e)}}function animatePress(e){$("#"+e).addClass("pressed"),setTimeout(function(){$("#"+e).removeClass("pressed")},100)}function startOver(){level=0,gamePattern=[],started=!1}function myFunction(e){e.matches&&($("#level-title").html("<button>Start</button>"),$("body").on("click",function(){started||(nextSequence(),started=!0)}))}$("body").on("keypress",function(){started||($("#level-title").text("Level "+level),nextSequence(),started=!0)}),$(".btn").on("click",function(){var e=$(this).attr("id");userClickedPattern.push(e),checkAnswer(userClickedPattern.length-1),playSound(e),animatePress(e)});var x=window.matchMedia("(max-width: 1024px)");myFunction(x),x.addListener(myFunction);
