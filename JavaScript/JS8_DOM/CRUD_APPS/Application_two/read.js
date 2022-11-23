function displayUsers(users) {
    document.querySelector("tbody").innerHTML = "";
    users.forEach((element, i) => {
        myTr = document.createElement("tr");
        for (a in element) {
            myTd = document.createElement("td");
            myTd.innerHTML = element[a];
            myTr.appendChild(myTd);
        }

        myeditTd = document.createElement("td");
        myeditBtn = document.createElement("button");
        myeditBtn.innerHTML = "EDIT"
        myeditBtn.setAttribute("onclick", "editUser(" + i + ")")
        myeditTd.appendChild(myeditBtn);
        myTr.appendChild(myeditTd);


        mydeleteTd = document.createElement("td");
        mydeleteBtn = document.createElement("button");
        mydeleteBtn.innerHTML = "DELETE"
        mydeleteBtn.setAttribute("onclick", "deleteUsers(" + i + ")");
        mydeleteTd.appendChild(mydeleteBtn);
        myTr.appendChild(mydeleteTd);

        document.querySelector("tbody").appendChild(myTr);
    })
}

displayUsers(users);