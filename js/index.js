function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '/fancyindex/json/supported_os.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

var app = Vue.createApp({
    data() {
        return {
            supported_os: [],
        }
    },
    mounted() {
        var self = this;
        loadJSON(function (response) {
            self.supported_os = JSON.parse(response);
        });
    }
}).mount('#os-list');