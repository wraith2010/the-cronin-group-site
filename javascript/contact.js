class contact {
    constructor(namefield, email, message) {
        this.namefield = namefield;
        this.email = email;
        this.message = message;
    }
}

function sendContact() {
    contact.namefield = document.getElementById('name').value;
    contact.email = document.getElementById('email').value;
    contact.message = document.getElementById('message').value;


    alert("name: " + contact.namefield + " email: " + contact.email + " message: " + contact.message);


    Email.send({
        Host: "smtp.gmail.com",
        Username: "username",
        Password: "password",
        To: 'benmitchelliii@gmail.com',
        From: contact.email,
        Subject: "The Cronin Group websites contact form",
        Body:  "name: " + contact.name + "<br/>" + contact.message
    })
    .then(function (message) {
        alert("Mail sent successfully") // Alert message on successful email delivery
    });


}

