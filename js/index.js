var supported_os_file = '/fancyindex/data/supported_os.json';
var side_link_file = '/fancyindex/data/side_link.json';
var announcement_file = '/fancyindex/data/remote/announcement.json';

function sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}

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
            announcement: []
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
        loadJSON(announcement_file, function (response) {
            self.announcement = JSON.parse(response)['topic_list']['topics'];
            self.announcement = sortByKey(self.announcement, 'id');
            self.announcement.splice(8);
            self.announcement.forEach(element => {
                element['id'] = "//socoding.cn/t/topic/" + element['id'];
            });
        });
    }
}).mount('#app');