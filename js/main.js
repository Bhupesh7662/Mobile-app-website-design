var header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.pageYOffset >= 300) {
        header.classList.add("sticky-header");
    } else{
       header.classList.remove("sticky-header"); 
    }
});


function registration() {
    $("#registration").validate({
        rules: {
            name: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "this feild is mandatory",
                minlength: "Usrname should contain atleast 4 characters"
            },
            email: {
                required: "this feild is mandatory",
                email: "Please enter valid eamil"
            },
            subject: {
                required: "this feild is mandatory"
            },
            message: {
                required: "this feild is mandatory"
            }
        }
    });
}
