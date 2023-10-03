(function (window) {
    var claudiaGreeter = {};

    claudiaGreeter.name = "Claudia";
    var greeting = "Hello ";
    
    claudiaGreeter.sayHello = function () {
        console.log(greeting + claudiaGreeter.name);
    }

    window.claudiaGreeter = claudiaGreeter;
 })(window);
