(function (window) {
    var speakWord = "Good Bye";
    var jBye = function (name) {
        console.log(speakWord + " " + name);
    };

    window.jBye = jBye;

})(window);