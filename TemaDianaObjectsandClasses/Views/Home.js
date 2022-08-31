var apiURL = "https://api.agify.io?name=";
function findAgeForName() {
    var name = document.getElementById("name").value;

    fetch(`${apiURL}${name}`)
        .then(response => response.json())
        .then(post => document.getElementById("postID").innerHTML = post.age)
        .catch(error => console.log('Error: ' + error));
}

function addPost() {
    var post = {
        "name": "violeta",
        "age": 25,
        "count": 9000
    };

    fetch(`${apiURL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })

        .then(response => response.json())
        .then(post => console.log(post))
        .catch(error => console.log('Error: ' + error));
}

function editPost() {

    var post = {
        "name": "violeta",
        "age": 25,
        "count": 9000
    };

    fetch(`${apiURL}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
        .then(response => response.json())
        .then(post => console.log(post))
        .catch(error => console.log('Error: ' + error));
}

function deletePost() {
    var name = "Diana";

    fetch(`${apiURL}${name}`, {
        method: 'DELETE',
    })

        .then(response => response.json())
        .then(post => console.log(post))
        .catch(error => console.log('Error: ' + error));
}
