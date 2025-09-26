
    let containerBox = document.getElementById("box");
    const ButtonBox = document.getElementById("buttonBox");
    let cnt = 0;
    const button = document.createElement("input");
    button.type = "button"; 
    button.value = "Del all"

    document.getElementById("spawn").addEventListener("click", function(event) {
        cnt+=1
        ButtonBox.appendChild(button);
        const container = document.createElement("div");

        container.className = "container";
        container.textContent = "#"+cnt;
        container.onclick = () => {
            containerBox.removeChild(container);
            cnt--;
            if (cnt == 0) {
                ButtonBox.removeChild(button);
            }
        }
        containerBox.appendChild(container);
    });