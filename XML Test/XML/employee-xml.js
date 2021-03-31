function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      xmlFunc(this);
    }
  };
  xhttp.open("GET", "Employee.xml", true);
  xhttp.send();
}

function xmlFunc(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table =
    "<tr><th>Name</th><th>Email</th><th>Salary</th><th>Designation</th><th>Experience</th></tr>";
  var x = xmlDoc.getElementsByTagName("employee");
  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("salary")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("designation")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("experience")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
  document.getElementById("employee-info").innerHTML = table;

  var table1 = 
    "<tr><th>Name</th><th>Email</th><th>Salary</th></tr>";
  for (i = 0; i < x.length; i++) {
    table1 +=
      "<tr><td>" +
      x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("salary")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
  document.getElementById("employee-info-2").innerHTML = table1;

  var table2 = 
    "<tr><th>Name</th><th>Email</th><th>Designation</th><th>Experience</th></tr>";
  for (i = 0; i < x.length; i++) {
    if (
      x[i].getElementsByTagName("salary")[0].childNodes[0].nodeValue > 50000
    ) {
      table2 +=
        "<tr><td>" +
        x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("designation")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("experience")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
  }
  document.getElementById("employee-info-3").innerHTML = table2;
}