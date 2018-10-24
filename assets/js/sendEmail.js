function sendMail(form) {
    emailjs.send("gmail", "dragon_ball", {
            "from_name": form.name.value,
            "from_email": form.emailaddress.value,
            "project_request": form.projectsummary.value
        })
        .then(
            function(response) {
                console.log(response);
            },
            function(error) {
                console.log(error);
            });
    return false;
}
