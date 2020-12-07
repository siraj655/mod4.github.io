(function () {

    var names = ["Messi", "James", "Joe", "Javier", "Werner", "Lampard", "Bale", "Casemiro", "Neymar", "Janetti"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            jBye(names[i]);
        } else {
            helloAnyone(names[i]);
        }
    }

})();