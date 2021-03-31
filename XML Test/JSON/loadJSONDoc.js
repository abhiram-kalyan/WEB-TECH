function loadJSONDoc() {
    var xhttp =  new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            jsonFunc(this);
        }
    };
    xhttp.open("GET", "Employee.json", true);
    xhttp.send();
}

function jsonFunc(jsonObj){
    var jsonDoc = jsonObj.responseText;
    var myObj = JSON.parse(jsonDoc);

    var list = document.createElement('ul');

    for(var i in myObj.employee){
        if(myObj.employee[i].Experience > 5){
            var li = document.createElement('li');
            li.textContent = myObj.employee[i].EmpName;
            list.appendChild(li);
        }
    }

    var app = document.querySelector('#employeelist');
    app.appendChild(list);
}