
function addTask() {
    var taskInput = document.getElementById("taskinput").value;
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            setTimeout(function(){
            ul.removeChild(li);
                
            },500);
        }
    });
        
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskInput));
        ul.appendChild(li);
        
        taskInput.value=" ";
        }

