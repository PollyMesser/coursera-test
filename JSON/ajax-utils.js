(function (global) {
    // set up a namespace for our utility
    var ajaxUtils = {};

    // returns a http request object
    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }
        else if (window.ActiveXObject) {
            // for very old IE browsers (optional)
            return (new ActiveXObject("Microsift.XMLHTTP"));
        }
        else {
            global.alert("Ajax is not supported!");
            return(null);
        }
    }

    // makes an ajax GET request to 'requestUrl'
    ajaxUtils.sendGetRequest =
        function(requestUrl, responseHandler, isJsonResponse) {
            var request = getRequestObject();
            request.onreadystatechange =
                function() {
                    handleResponse(request, 
                        responseHandler, 
                        isJsonResponse);
                };
            request.open("GET", requestUrl, true);
            request.send(null); //for POST only
        };

    // only calls user provided 'responseHandler'
    // function if response is ready
    // and not an error
    function handleResponse(request, responseHandler, isJsonResponse) {
        if ((request.readyState == 4) &&
            (request.status == 200)) {
            
            // default to isJsonResponse = true
            if (isJsonResponse == undefined) {
                isJsonResponse = true;
            }

            if (isJsonResponse) {
                responseHandler(JSON.parse(request.responseText))
            }
            else {
                responseHandler(request.responseText);
            }
                
        }
    }

    // expose utility to the global object
    global.$ajaxUtils = ajaxUtils;
}
)(window);