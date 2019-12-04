// const axios = require("axios");
const sendEmail = () => {
    const trigger = document.getElementById("submit");
    trigger.addEventListener(
        "click",
        () => {
            console.log("clicked");
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            const form = document.getElementById("form");
            const sender = {
                name,
                email,
                message
            };

            const senderString = JSON.stringify(sender);
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "/js/modules/mail.js", true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(senderString);

            xhr.onload = () => {
                if (xhr.readyState !== 4 || xhr.status !== 200) {
                    form.innerHTML = `<p style="color: #fff; font-size: 24px">Humm.. something went wrong. Please try later or use email instead.</p>`;
                    return;
                } else {
                    form.innerHTML = `<p style="color: #fff; font-size: 24px">Thank you ${name}, I'll get back to you soon!</p>`;
                }
            };
        },
        false
    );
};

module.exports = sendEmail;
