//loads/gets score from local storage
    //turn scoreString BACK INTO an object
    let score=JSON.parse(localStorage.getItem('scoreString'));

    
    

    //give score default scores if null
    if(score === null){ //!score is equvilent
      score ={
        wins:0,
        losses:0,
        ties:0
      };
    }

    updateScoreHTML();



    function resetHTML(){
      document.querySelector('.js-result').innerHTML= '';
      document.querySelector('.js-moves').innerHTML= '';
    }

    //function to return random computer choice
    function computerChoiceFunc(){ 
      const randNumber= Math.floor(Math.random() * 3);
      let computerChoice='';

      if(randNumber === 0){
        computerChoice = 'rock';
      }else if(randNumber === 1){
        computerChoice = 'paper';
      }else if(randNumber === 2){
        computerChoice = 'scissor';
      }
      return computerChoice;
    }
    
    //function to start game
    function playGame(userChoice){
      const computerChoice=computerChoiceFunc(); //getting computer choice
      let result='';

      if(userChoice === 'rock'){ // IF USER PICKS ROCK
        if(computerChoice === 'rock'){
          result='Tie.';
        }else if (computerChoice === 'paper'){
          result='You lose.';
        }else if(computerChoice === 'scissor'){
          result='You win.';
        }
      }else if(userChoice === 'paper'){ // IF USER PICKS PAPER
        if(computerChoice === 'rock'){
          result='You win.';
        }else if(computerChoice === 'paper'){
          result='Tie.';
        }else if(computerChoice === 'scissor'){
          result='You lose.';
        }
      }else if(userChoice === 'scissor'){
        if(computerChoice === 'rock'){
          result='You lose.';
        }else if(computerChoice === 'paper'){
          result='You win.';
        }else if(computerChoice === 'scissor'){
          result = 'Tie.';
        }
      }

      //updating score
      if(result==='You win.'){
        score.wins +=1;
      }else if(result === 'You lose.'){
        score.losses +=1;
      }else if(result === 'Tie.'){
        score.ties +=1;
      }
      

      //converts javascript object into a string and save into key name scoreString into localStorage
      localStorage.setItem('scoreString', JSON.stringify(score));

      updateScoreHTML();

      document.querySelector('.js-result').innerHTML= result;


      // print result
      if (localStorage.getItem('theme') === 'theme-dark') {
        document.querySelector('.js-moves').innerHTML= 
      `You <img src="IMAGES/${userChoice+2}.png"> 
      &nbsp;&nbsp;&nbsp;&nbsp;VS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src="IMAGES/${computerChoice+2}.png"> Bot`;
      } else {
        document.querySelector('.js-moves').innerHTML= 
      `You <img src="IMAGES/${userChoice}.png"> 
      &nbsp;&nbsp;&nbsp;&nbsp;VS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src="IMAGES/${computerChoice}.png"> Bot`;
      }

      let themeButton = document.querySelector('.themeButton');
      themeButton.addEventListener('click', function(){
        // print result
        if (localStorage.getItem('theme') === 'theme-dark') {
          document.querySelector('.js-moves').innerHTML= 
          `You <img src="IMAGES/${userChoice+2}.png"> 
          &nbsp;&nbsp;&nbsp;&nbsp;VS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="IMAGES/${computerChoice+2}.png"> Bot`;
        } else {
          document.querySelector('.js-moves').innerHTML= 
          `You <img src="IMAGES/${userChoice}.png"> 
          &nbsp;&nbsp;&nbsp;&nbsp;VS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="IMAGES/${computerChoice}.png"> Bot`;
        }
      });
    }


    function updateScoreHTML(){
      //update in html too
      document.querySelector('.js-score').innerHTML = `wins: ${score.wins}   losses: ${score.losses}   ties: ${score.ties}`;
    }

    // function to set a given theme/color-scheme
    function setTheme(themeName){
      localStorage.setItem('theme', themeName);
      document.documentElement.className = themeName;
    }

    // function to toggle between light and dark theme
    function toggleTheme(){
      if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
      } else {
        setTheme('theme-dark');
      }
    }

    // Immediately invoked function to set the theme on initial load
    (function () {
      if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
      } else {
        setTheme('theme-light');
      }
    })();


    // function changeImages(){
    //   let image = document.getElementById("themeIcon");
    //   if (image.src === "http://127.0.0.1:5500/IMAGES/theme1.png"){
    //     image.src = "http://127.0.0.1:5500/IMAGES/theme2.png";
    //   }else{
    //     image.src = "http://127.0.0.1:5500/IMAGES/theme1.png"
    //   }
    // }

