function Printing() {
    let Input = document.getElementById("EingabeFeld");
    let Info = Input.value;
    
    document.getElementById("Printer").innerText = "- " + Info;
    document.getElementById("EingabeFeld").value = "";
}