(function () {
    $(window).scroll(function () {
     	var oVal;
        oVal = $(window).scrollTop() / 240;
        return $('.class-name').css('opacity', oVal);
    });
}.call(this));
