var supported_os_file = '/fancyindex/data/supported_os.json';
var side_link_file = '/fancyindex/data/side_link.json';

function loadJSON(json_url, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', json_url, true);
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
            side_link: [],
        }
    },
    mounted() {
        var self = this;
        loadJSON(supported_os_file, function (response) {
            self.supported_os = JSON.parse(response);
        });
        loadJSON(side_link_file, function (response) {
            self.side_link = JSON.parse(response);
        });
    }
}).mount('#app');