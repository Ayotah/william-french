



const form = document.getElementById('sendmail');
console.log("form", form)

																
const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    
    try {
        await fetch("https://connect.kitoform.com/f/3c12457fdffa", {
            method: 'POST',
            body: data
        });
        location.href = "thanks.html";
    } catch (e) {
        alert("An Error Occurred", e.message)
        console.log(e)
    }
}	

form.addEventListener('submit', handleSubmit);

