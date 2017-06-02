var body = $("body");
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

form.submit(function(e) {
  modal.modal();
  e.preventDefault();
});

modal.on("show.bs.modal", function() {
  var devices = getDevices();
  bar.css("width", "0%");
  text.text("Initialisiere IoT-Botnetz...");
  //iframe.attr("src", url.val());
  iframe.attr("src", "about:blank");
  body.css("cursor", "wait");
  timeouts.push(setTimeout(function() {
    bar.css("width", "14%");
    text.text(rand() + " " + devices[0] + "...");
  }, 2000));
  timeouts.push(setTimeout(function() {
    bar.css("width", "29%");
    text.text(rand() + " " + devices[1] + "...");
  }, 4000));
  timeouts.push(setTimeout(function() {
    bar.css("width", "43%");
    text.text(rand() + " " + devices[2] + "...");
  }, 6000));
  timeouts.push(setTimeout(function() {
    bar.css("width", "57%");
    text.text(rand() + " " + devices[3] + "...");
  }, 8000));
  timeouts.push(setTimeout(function() {
    bar.css("width", "71%");
    text.text(rand() + " " + devices[4] + "...");
  }, 10000));
  timeouts.push(setTimeout(function() {
    bar.css("width", "86%");
    text.text("DDoS abgeschlossen, versuche Zielseite zu laden...");
  }, 12000));
  timeouts.push(setTimeout(function() {
    bar.css("width", "100%");
    text.text("Zielseite geladen!");
    iframe.attr("src", getErrorPage());
    body.css("cursor", "initial");
  }, 14000));
});

modal.on("hidden.bs.modal", function() {
  body.css("cursor", "initial");
  iframe.attr("src", "about:blank");
  for (var t in timeouts) {
    clearTimeout(timeouts[t]);
  }
  timeouts = [];
});
