var form = $("#cyberform");
var url = $("#cyberurl");
var modal = $("#cybermodal");
var bar = $("#progressbar");
var text = $("#progresstext");
var iframe = $("#iframe");

var timeouts = [];

function rand(max, min) {
  if (min === undefined) {
    var min = 100;
  }
  if (max === undefined) {
    var max = 100000;
  }
  return Math.floor(Math.random() * (max-min) + min);
}

function getErrorPage() {
  var pages = [ "500-apache.html" ];
  return pages[rand(pages.length, 0)];
}

function getDevices() {
  var devices = ["Toaster", "Kühlschränke", "Glühlampen", "Heizungen", "Industriesteuerungen", "Saftpressen", "Rauchmelder", "Geldautomaten", "Fahrkartenautomaten", "Anzeigetafeln", "Bügeleisen", "Sexspielzeuge"];
  for (var i = devices.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = devices[i];
    devices[i] = devices[j];
    devices[j] = tmp;
  }
  return devices;
}

form.submit(function() {
  modal.modal();
});

modal.on("show.bs.modal", function() {
  var devices = getDevices();
  bar.css("width", "0%");
  text.text("Initialisiere IoT-Botnetz...");
  iframe.attr("src", url.val());
  timeouts.push(setTimeout(function() {
    bar.css("width", "20%");
    text.text(rand() + " " + devices[0] + "...");
  }, 2000));
  timeouts.push(setTimeout(function() {
    bar.css("width", "40%");
    text.text(rand() + " " + devices[1] + "...");
  }, 4000));
  timeouts.push(setTimeout(function() {
    bar.css("width", "60%");
    text.text(rand() + " " + devices[2] + "...");
  }, 6000));
  timeouts.push(setTimeout(function() {
    bar.css("width", "80%");
    text.text(rand() + " " + devices[3] + "...");
  }, 8000));
  timeouts.push(setTimeout(function() {
    bar.css("width", "100%");
    text.text("DDoS abgeschlossen!");
  }, 10000));
  timeouts.push(setTimeout(function() {
    iframe.attr("src", getErrorPage());
  }, 11000));
});

modal.on("hidden.bs.modal", function() {
  iframe.attr("src", "about:blank");
  for (var t in timeouts) {
    clearTimeout(timeouts[t]);
  }
  timeouts = [];
});
