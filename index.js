// Add your code here
function submitData(name, email) {
    let formData = {
        name,
        email
    }

    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    // const tag = document.createElement('h3');
    document.body.innerHTML = object["id"];
    // tag.innerText = `${object.id}`;
    // console.log(object);
  })
  .catch(function(error) {
    alert("Unauthorized Access");
    // const errorMessage = document.createElement("h3");
    document.body.innerHTML = error.message;
    // errorMessage.innerText = `${error.message}`;
  }); 
};