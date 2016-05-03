    // change h1 text based on selections.. pretend there's more pages :P
    $('nav a').on('click',function(e){
        var elem = $(this);
        menuSelect(elem);
    });
    $('nav .top-lvl').on('click',function(e){
        $('#filler').addClass('hidden');
        var elem = $(this);
        $('#main h2').text(elem.text());
        setSubMenu(elem.siblings('ul.dropdown-menu').html());
    })
    function menuSelect(elem){
        $('#submenu').addClass('hidden');
        $('#main h2').text(elem.text());
        $('#filler').removeClass('hidden');
    }
    function setSubMenu(content){
        $('#submenu').html(content).find('a').on('click',function(e){
            menuSelect($(this));
        });;
        $('li.menu-super a').on('click',function(e){
            var elem = $(this);
            $('#main h2').text(elem.text());
            setSubMenu(elem.parent().nextUntil('.menu-super').clone());
            $('#filler').removeClass('hidden');
        });
        $('#submenu').removeClass('hidden');
    }