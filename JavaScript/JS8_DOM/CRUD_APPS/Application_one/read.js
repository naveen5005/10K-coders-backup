// function displayUserData(users,i) {
//     document.querySelector("td").innerHTML=""
//     users.forEach((element) => {
//         var myTr = document.createElement("tr");
//         for (a in element) {
//             var myTd = document.createElement("td");
//             myTd.innerHTML = element[a];
//             myTr.appendChild(myTd);
//         }

//         document.querySelector("tbody").appendChild(myTr);

//         var editTd = document.createElement("td");
//         var editBtn = document.createElement("button");
//         editBtn.innerHTML = "EDIT"
//         editTd.appendChild(editBtn)
//         myTr.append(editTd)

//         var deleteTd = document.createElement("td");
//         var deleteBtn = document.createElement("button");
//         deleteBtn.setAttribute("onclick","deleteUsers("+i+")")
//         deleteBtn.innerHTML = "DELETE";
//         deleteTd.appendChild(deleteBtn)
//         myTr.appendChild(deleteTd)
//     });
// }


function displayUserData(users){
    document.querySelector("tbody").innerHTML=""
    users.forEach((element,i)=>{
        var myTr = document.createElement("tr");
        for(a in element){
            var myTd = document.createElement("td");
            myTd.innerHTML = element[a];
            myTr.appendChild(myTd);
            document.querySelector("tbody").appendChild(myTr);
        }
        
        // myeditTr = document.createElement("tr");
        myeditTd = document.createElement("td");
        myeditbtn = document.createElement("button");
        myeditbtn.setAttribute("onclick","editValues("+i+")");
        myeditbtn.innerHTML = "EDIT"
        myeditTd.appendChild(myeditbtn);
        myTr.appendChild(myeditTd);

        mydeleteTd = document.createElement("td");
        mydeleteBtn = document.createElement("button");
        mydeleteBtn.innerHTML = "DELETE";
        mydeleteBtn.setAttribute("onclick","deleteUsers("+i+")");
        mydeleteTd.appendChild(mydeleteBtn);
        myTr.appendChild(mydeleteTd)

    })
}

displayUserData(users);
