// import contactData from "../mock/contacts.js";
(function ($) {
  $(document).ready(function () {
    const contactsData = JSON.parse(localStorage.getItem("contacts"));
    $(".contact-form").append(`<form>
            <div class="row g-3">
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label for="name">Your Name</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label for="email">Your Email</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label for="subject">Subject</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style="height: 150px"
                  ></textarea>
                  <label for="message">Message</label>
                </div>
              </div>
              <div id="contact-message" class="text-danger col-10 d-flex"></div>

              <div class="col-12">
                <button class="btn btn-primary w-100 py-3" id="sendContact" type="button">
                  Send Message
                </button>
              </div>
            </div>
          </form>`);
    $("#sendContact").on("click", function (event) {
      console.log(contactsData);

      event.preventDefault();

      var name = $("#name").val();
      var email = $("#email").val();
      var subject = $("#subject").val();
      var message = $("#message").val();
      if (name == "" || email == "" || subject == "" || message == "") {
        $("#contact-message").text("Please fill in all fields");
      } else {
        $("#contact-message").text("Please fill in all fields");
        var newContact = {
          id: contactsData.length + 1,
          name: name,
          email: email,
          subject: subject,
          body: message,
          isReaded: false,
        };

        console.log(newContact);
        contactsData.push(newContact);
        localStorage.setItem("contacts", JSON.stringify(contactsData));
        window.location.href = "contact.html";
      }
    });
  });
})(jQuery);
