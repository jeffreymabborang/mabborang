//Services

var JOKE_SERVICE = {
    get:  function(){
            return $.ajax({
                type: 'get',
                url: JOKES_API
            })
            .done(function(data){             
                loadoflist=$('#jokes-list');
                newRandomJoke=document.createElement('li');
                newRandomJoke.append(data);               
            });
        },
    answer: function(){
            return $.ajax({
                type: 'get',
                url: YN_API
            })
            .done(function(data){
                var obj=data;
                var img=document.createElement('img');
                $(img).attr('src',obj.imag);
                newRandomJoke.append(img);
                loadoflist.append(newRandomJoke);
            });
        },
}




