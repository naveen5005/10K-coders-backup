function displayData(users) {
    document.querySelector("tbody").innerHTML = ""
    users.forEach((element,i) => {
        myTr = document.createElement("tr");
        for (a in element) {
            myTd = document.createElement("td");
            myTd.innerHTML = element[a];
            myTr.appendChild(myTd);
        }
        myeditTd = document.createElement("td");
        myeditBtn = document.createElement("button");
        myeditBtn.setAttribute("onclick","editUsers("+i+")")
        myeditBtn.innerHTML="EDIT"
        myeditTd.appendChild(myeditBtn);
        myTr.appendChild(myeditTd);

        mydeleteTd = document.createElement("td");
        mydelereBtn = document.createElement("button");
        mydelereBtn.setAttribute("onclick","deleteUsers("+i+")")
        mydelereBtn.innerHTML="DELETE"
        mydeleteTd.appendChild(mydelereBtn);
        myTr.appendChild(mydeleteTd);


        document.querySelector("tbody").appendChild(myTr)
    })
}
displayData(users);