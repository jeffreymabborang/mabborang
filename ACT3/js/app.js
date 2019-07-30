$(function(){
    //Cached selectors
    var jokeButton = $('#joke-button');
    var jokeResetButton = $('#joke-reset-button');
    var jokesList = $('#jokes-list');
    var reaction = $('#reaction');
    var jokeLoader = $('#joke-loader');
    var NumberofJokes=0;
    var reactImage;
    var CountOfLaugh=0;
    jokeLoader.hide();
    jokeResetButton.hide();
  
    //Events
    jokeButton.on('click', async function(e){
      //Do the magic here
        NumberofJokes++;
        if(NumberofJokes<=4)
        {
            jokeLoader.show();
            await JOKE_SERVICE.get();
            await JOKE_SERVICE.answer();
            jokeLoader.hide();  
            JSalert();
        }
        else
        {
            if(NumberofJokes==5)
            {
                jokeLoader.show();
                await JOKE_SERVICE.get();
                await JOKE_SERVICE.answer();
                jokeLoader.hide();
                
            }
            
            jokeButton.empty();
            jokeButton.append('YOU ALREADY HAVE 5');
            $(jokeButton).css("background","#b1f4eb");
            $('#joke-reset-button').css("display","inline-block");
            var answer= confirm('Are you laugh?');
            if(answer)
            {
                CountOfLaugh+=1;
                if(CountOfLaugh>2)
                {
                    var div=$(reaction);
                    var reactImage=document.createElement('img');
                    $(reactImage).attr('src','./img/funny.gif');
                    div.append(reactImage);
                    var DispText="<br>Congratulations it's your lucky day my friend. Spread the good vibes, make everyone smile.";
                    div.append(DispText);
                }
                else
                {   
                    var div=$(reaction);
                    reactImage=document.createElement('img');
                    $(reactImage).attr('src','./img/not-funny.gif');
                    div.append(reactImage);
                    var DispText="<br>We're feelin' what you feel. It's okay, don't die yet. You can still breathe but not try to be funny right now of else ...";
                    div.append(DispText);

                }
                CountOfLaugh=0;
                NumberofJokes=6;
               
            }

        }
        //count the number of Jokes
        if(NumberofJokes<=5)
        {
            var answer= confirm('Are you laugh?');
            if(answer)
            {
                CountOfLaugh+=1;
                console.log(CountOfLaugh);
            }
        }
        else
        {
            NumberofJokes=0;
        }
              
    });
  
    jokeResetButton.on('click', async function(data){
        $('#jokes-list').empty();
        $('#joke-reset-button').css("display","none"); 
        $(jokeButton).css("background","transparent");
        jokeButton.empty();
        jokeButton.append('GENERATE A JOKE');
        reaction.empty();

    });

  });