$(document).ready(function () {
    // $('#datatable').dataTable();
    $("[data-toggle=tooltip]").tooltip();


});


var new_ele;
function del(ele) {
    new_ele = ele.closest("tr");
}
var rowId = 0;

function clickEdit(rowId) {
    let row = document.getElementById(rowId);
    let firstName = row.cells[0].innerHTML;
    let lastName = row.cells[1].innerHTML;
    let address = row.cells[2].innerHTML;
    let age = row.cells[3].innerHTML;
    let email = row.cells[4].innerHTML;
    let phone = row.cells[5].innerHTML;
    console.log(firstName, lastName, address, age, email, phone);
    document.getElementById('editFirstName').value = firstName;
    document.getElementById('editLastName').value = lastName;
    document.getElementById('editAddress').value = address;
    document.getElementById('editAge').value = age;
    document.getElementById('editEmail').value = email;
    document.getElementById('editPhone').value = phone;
    document.getElementById('updateRecord').setAttribute('onclick', 'updateRecord(' + rowId + ')');
}

function updateRecord(rowId) {
    let row = document.getElementById(rowId);
    row.cells[0].innerHTML = document.getElementById('editFirstName').value;
    row.cells[1].innerHTML = document.getElementById('editLastName').value;
    row.cells[2].innerHTML = document.getElementById('editAddress').value;
    row.cells[3].innerHTML = document.getElementById('editAge').value;
    row.cells[4].innerHTML = document.getElementById('editEmail').value;
    row.cells[5].innerHTML = document.getElementById('editPhone').value;
}

function deleteRecord() {
    new_ele.remove();
    $('#delete').modal('toggle');
}

function clickAdd() {
    var fname = document.getElementById("addFirstName").value;
    var lname = document.getElementById("addLastName").value;
    var address = document.getElementById("addAddress").value;
    var age = document.getElementById("addAge").value;
    var email = document.getElementById("addEmail").value;
    var phone = document.getElementById("addPhone").value;
    addRecord(fname, lname, address, age, email, phone);
    console.log(fname, lname, address, age, email, phone);
}

function addRecord(fname, lname, address, age, email, phone) {

    //   var abc = new Add(fname,lname,address,age,email,phone);
    // console.log(abc);
    var table = document.getElementById("tableBody");
    var tablerow = document.createElement("tr");
    tablerow.id = rowId;
    var d1 = document.createElement("td");
    var t1 = document.createTextNode(fname);
    var d2 = document.createElement("td");
    var t2 = document.createTextNode(lname);
    var d3 = document.createElement("td");
    var t3 = document.createTextNode(address);
    var d4 = document.createElement("td");
    var t4 = document.createTextNode(age);
    var d5 = document.createElement("td");
    var t5 = document.createTextNode(email);
    var d6 = document.createElement("td");
    var t6 = document.createTextNode(phone);
    var d7 = document.createElement("td");
    var p1 = document.createElement("p");
    p1.setAttribute("data-placement", "top");
    p1.setAttribute("data-toggle", "tooltip");
    p1.setAttribute("title", "Edit");
    var b1 = document.createElement("button");
    b1.setAttribute("class", "btn btn-primary btn-xs");
    b1.setAttribute("data-title", "Edit");
    b1.setAttribute("data-toggle", "modal");
    b1.setAttribute("data-target", "#edit");
    b1.setAttribute("onclick", "clickEdit(" + rowId + ")");
    var span1 = document.createElement("span");
    span1.setAttribute("class", "glyphicon glyphicon-pencil");
    d7.appendChild(p1);
    p1.appendChild(b1);
    b1.appendChild(span1);


    var d8 = document.createElement("td");
    var p2 = document.createElement("p");
    p2.setAttribute("data-placement", "top");
    p2.setAttribute("data-toggle", "tooltip");
    p2.setAttribute("title", "Delete");
    var b2 = document.createElement("button");
    b2.setAttribute("class", "btn btn-danger btn-xs");
    b2.setAttribute("data-title", "Delete");
    b2.setAttribute("data-toggle", "modal");
    b2.setAttribute("data-target", "#delete");
    b2.setAttribute("onclick", "del(this);");
    var span2 = document.createElement("span");
    span2.setAttribute("class", "glyphicon glyphicon-trash");
    d8.appendChild(p2);
    p2.appendChild(b2);
    b2.appendChild(span2);

    d1.appendChild(t1);
    d2.appendChild(t2);
    d3.appendChild(t3);
    d4.appendChild(t4);
    d5.appendChild(t5);
    d6.appendChild(t6);
    tablerow.appendChild(d1);
    tablerow.appendChild(d2);
    tablerow.appendChild(d3);
    tablerow.appendChild(d4);
    tablerow.appendChild(d5);
    tablerow.appendChild(d6);
    tablerow.appendChild(d7);
    tablerow.appendChild(d8);

    table.appendChild(tablerow);
    rowId++;
    document.getElementById("addFirstName").value = "";
    document.getElementById("addLastName").value = "";
    document.getElementById("addAddress").value = "";
    document.getElementById("addAge").value = "";
    document.getElementById("addEmail").value = "";
    document.getElementById("addPhone").value = "";
    document.getElementById("close").click()
}
function generateRecord(fname, lname, address, age, email, phone) {
    var table = document.getElementById("tableBody");
    var tablerow = document.createElement("tr");
    tablerow.id = rowId;
    var d1 = document.createElement("td");
    var t1 = document.createTextNode(fname);
    var d2 = document.createElement("td");
    var t2 = document.createTextNode(lname);
    var d3 = document.createElement("td");
    var t3 = document.createTextNode(address);
    var d4 = document.createElement("td");
    var t4 = document.createTextNode(age);
    var d5 = document.createElement("td");
    var t5 = document.createTextNode(email);
    var d6 = document.createElement("td");
    var t6 = document.createTextNode(phone);
    var d7 = document.createElement("td");
    var p1 = document.createElement("p");
    p1.setAttribute("data-placement", "top");
    p1.setAttribute("data-toggle", "tooltip");
    p1.setAttribute("title", "Edit");
    var b1 = document.createElement("button");
    b1.setAttribute("class", "btn btn-primary btn-xs");
    b1.setAttribute("data-title", "Edit");
    b1.setAttribute("data-toggle", "modal");
    b1.setAttribute("data-target", "#edit");
    b1.setAttribute("onclick", "clickEdit(" + rowId + ")");
    var span1 = document.createElement("span");
    span1.setAttribute("class", "glyphicon glyphicon-pencil");
    d7.appendChild(p1);
    p1.appendChild(b1);
    b1.appendChild(span1);
    var d8 = document.createElement("td");
    var p2 = document.createElement("p");
    p2.setAttribute("data-placement", "top");
    p2.setAttribute("data-toggle", "tooltip");
    p2.setAttribute("title", "Delete");
    var b2 = document.createElement("button");
    b2.setAttribute("class", "btn btn-danger btn-xs");
    b2.setAttribute("data-title", "Delete");
    b2.setAttribute("data-toggle", "modal");
    b2.setAttribute("data-target", "#delete");
    b2.setAttribute("onclick", "del(this);");
    var span2 = document.createElement("span");
    span2.setAttribute("class", "glyphicon glyphicon-trash");
    d8.appendChild(p2);
    p2.appendChild(b2);
    b2.appendChild(span2);

    d1.appendChild(t1);
    d2.appendChild(t2);
    d3.appendChild(t3);
    d4.appendChild(t4);
    d5.appendChild(t5);
    d6.appendChild(t6);
    tablerow.appendChild(d1);
    tablerow.appendChild(d2);
    tablerow.appendChild(d3);
    tablerow.appendChild(d4);
    tablerow.appendChild(d5);
    tablerow.appendChild(d6);
    tablerow.appendChild(d7);
    tablerow.appendChild(d8);

    table.appendChild(tablerow);
    rowId++;
    document.getElementById("close").click()
}

for (let i = 0; i < 10; i++) {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
            let user = data.results[0];
            let fname = user.name.first;
            let lname = user.name.last;
            let address = user.location.street + ', ' + user.location.city + ', ' + user.location.state;
            let age = Math.floor((Math.random() * 60) + 1);
            let email = user.email;
            let phone = user.phone;
            addRecord(fname, lname, address, age, email, phone);
        }
    });
}
