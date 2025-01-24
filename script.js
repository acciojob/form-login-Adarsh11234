
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form1"); 

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        getFormvalue();
    });
});

function getFormvalue() {
   
    const firstName = document.querySelector("input[name='fname']").value;
    const lastName = document.querySelector("input[name='lname']").value;

   
    alert(`${firstName} ${lastName}`);
}

