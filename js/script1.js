(function (window) {
    var speakWord = "Hello";
    var helloAnyone = function (name) {
        console.log(speakWord + " " + name);
    };

    window.helloAnyone = helloAnyone;

})(window);
