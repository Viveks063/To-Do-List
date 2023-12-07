
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
        function dislayDate()
        {
            const dateElement=document.getElementById("date");
            const options={weekday:"long",year:"numeric",month:"long",day:"numeric"};
            const today=new Date();
            const dateString=today.toLocaleDateString(undefined,options);
            dateElement.textContent=dateString;
        }
        dislayDate();
    
        setInterval(dislayDate,1000);
