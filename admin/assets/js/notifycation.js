(function () {
  $(document).ready(function () {
    var bookings = JSON.parse(localStorage.getItem("bookings"));
    var contacts = JSON.parse(localStorage.getItem("contacts"));
    bookings.slice(bookings.length - 3, bookings.length).forEach((item) => {
      $(".notifications-container").append(`
                    <li class="notification-item">
                      <i class="bi bi-info-circle text-primary"></i>
                      <a href="order.html">
                        New order from
                        <span class="text-primary fw-bold ">${item.name}</span>
                      </a>
                    </li>
                    <hr />
                `);
    });
    $(".num-orders").html(
      bookings.reduce((total, item) => {
        //if isReaded = false then total plus 1
        return total + (item.isReaded == false ? 1 : 0);
      }, 0)
    );

    contacts.slice(contacts.length - 3, contacts.length).forEach((item) => {
      $(".message-container").append(`
        <li class="message-item overflow-hidden">
        <a href="contact.html" class="d-flex flex-column text-nowrap" >
          <h4>${item.name}</h4>
          <p>
            ${item.subject}
          </p>
        </a>
      </li>
      <hr />
          `);
    });
    $(".num-message").html(
      contacts.reduce((total, item) => {
        //if isReaded = false then total plus 1
        return total + (item.isReaded == false ? 1 : 0);
      }, 0)
    );
  });
})(jQuery);
