function editValues(i) {
    // console.log(users[i])
    gIndex = i
    var newUser = users[i];
    for (a in newUser) {
        // console.log(newUser[a])
        if (a !== "status" && a !== "degree" && a !== "branch" && a !== "website") {
            document.getElementById(a).value = newUser[a];
        }
        else if (a == "status") {
            var statusClearDetails = document.getElementsByName(a);
            // console.log(statusClearDetails)
            statusClearDetails.forEach((element) => {
                if (element.value == newUser[a]) {
                    element.checked = true
                }
            })
        }
        else if (a == "degree") {
            var degreeClearDetails = document.getElementById(a).children;
            // console.log(degreeClearDetails)
            for (i = 0; i < degreeClearDetails.length; i++) {
                if (degreeClearDetails[i].value == newUser[a]) {
                    degreeClearDetails[i].selected = true
                }
            }
        }
        else if (a == "branch") {
            var branchClearDetails = document.getElementById(a).children;
            for (i = 0; i < branchClearDetails.length; i++) {
                if (branchClearDetails[i] == newUser[a]) {
                    branchClearDetails[i].selected = true
                }
            }
        }
        else if (a == "website") {
            document.getElementById(a).value = newUser[a]
        }

    }
    console.log("Edit can be applied to ", i)
    document.querySelector("#updateBtn").style.display = "inline-block";
    document.querySelector("#addBtn").style.display = "none";
}


function updateValues(){
    var user = readUserFromForm();
    users[gIndex] = user;
    localStorage.setItem("userDetails",JSON.stringify(users));
    displayUserData(users);

    document.querySelector("#updateBtn").style.display = "none";
    document.querySelector("#addBtn").style.display = "inline-block";
}