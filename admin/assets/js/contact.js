(function ($) {
  "use strict";

  $(document).ready(function () {
    var contacts = JSON.parse(localStorage.getItem("contacts"));
    var filteredContacts = contacts;

    // pagination start
    const contactsPerPage = 10;
    const maxVisiblePages = 3;
    let currentPage = 1;
    let filter = $("#message-status").val();

    function createPagination(totalPages, contacts) {
      $(".pagination .page-item").not(".prev-page, .next-page").remove(); // Clear existing page items
      for (let i = 1; i <= totalPages; i++) {
        $(".next-page").before(
          `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`
        );
      }
      $(".page-item").eq(1).addClass("active"); // Set the first page as active
      updatePagination(contacts);
    }

    function displayContacts(page, contacts) {
      const start = (page - 1) * contactsPerPage;
      const end = page * contactsPerPage;
      const paginatedContacts = contacts.slice(start, end);

      $("#list-tab-contact").empty();
      $("#nav-tab-content").empty();
      paginatedContacts.forEach((item) => {
        $("#list-tab-contact").append(`
        <a
        data="${item.id}"
        class="list-group-item list-group-item-action tab-item ${
          item.isReaded ? "" : "unRead"
        }"
        id="comment-${item.id}"
        data-bs-toggle="list"
        href="#contact-${item.id}"
        role="tab"
        aria-controls="list-home"
      >
        <p
          class="m-0 text-nowrap overflow-hidden fw-bold"
          style="text-overflow: ellipsis"
        >
          ${item.name}
        </p>
        <p
          class="m-0 text-nowrap overflow-hidden"
          style="text-overflow: ellipsis"
        >
          ${item.subject}
        </p>
      </a>
        `);
        $("#nav-tab-content").prepend(`
        <div
        class="tab-pane fade show "
        id="contact-${item.id}"
        role="tabpanel"
        aria-labelledby="list-home-list"
      >
        <div class="card info-card sales-card">
          <div class="card-body">
            <h5 class="card-title ps-3 p-0 fw-bold">
              ${item.name}
            </h5>
            <h5 class="card-title ps-3 p-0 mb-5">
              ${item.email}
            </h5>
  
            <p class="card-title ps-3 p-0 fw-bold">
              ${item.subject}
            </p>
  
            <p class="card-title ps-3 p-0">
              ${item.body}
            </p>
          </div>
        </div>
      </div>
        `);
      });

      updatePagination(contacts);
    }

    function updatePagination(contacts) {
      const totalPages = Math.ceil(contacts.length / contactsPerPage);
      const currentPageItem = $(".page-item.active");
      const currentIndex = $(".page-item").index(currentPageItem);

      $(".page-item").hide(); // Hide all pages
      $(".prev-page, .next-page").show(); // Always show prev and next buttons

      // Determine the range of pages to show
      let start = currentIndex - Math.floor(maxVisiblePages / 2);
      let end = currentIndex + Math.floor(maxVisiblePages / 2);

      // Adjust start and end if they go out of bounds
      if (start < 1) {
        start = 1;
        end = start + maxVisiblePages - 1;
      }
      if (end > totalPages) {
        end = totalPages;
        start = end - maxVisiblePages + 1;
      }

      // Show the appropriate pages
      $(".page-item")
        .slice(start, end + 1)
        .show();
      currentPageItem.show(); // Ensure current page is shown

      // Disable prev/next buttons if at the start or end
      $(".page-item").removeClass("disabled");

      if (currentIndex === 1) {
        $(".prev-page").addClass("disabled");
      }

      if (currentIndex === totalPages) {
        $(".next-page").addClass("disabled");
      }
    }

    $(".prev-page").on("click", function (e) {
      e.preventDefault();
      if ($(this).hasClass("disabled")) return;
      const currentPageItem = $(".page-item.active");
      const prevPageItem = currentPageItem.prev();
      if (!prevPageItem.hasClass("prev-page") && prevPageItem.length) {
        currentPageItem.removeClass("active");
        prevPageItem.addClass("active");
        currentPage--;
        displayContacts(currentPage, filteredContacts);
      }
    });

    $(".next-page").on("click", function (e) {
      e.preventDefault();
      if ($(this).hasClass("disabled")) return;
      const currentPageItem = $(".page-item.active");
      const nextPageItem = currentPageItem.next();
      if (!nextPageItem.hasClass("next-page") && nextPageItem.length) {
        currentPageItem.removeClass("active");
        nextPageItem.addClass("active");
        currentPage++;
        displayContacts(currentPage, filteredContacts);
      }
    });

    $(".pagination").on("click", ".page-link", function (e) {
      e.preventDefault();
      const pageItem = $(this).parent();
      if (!pageItem.hasClass("prev-page") && !pageItem.hasClass("next-page")) {
        $(".page-item").removeClass("active");
        pageItem.addClass("active");
        currentPage = parseInt($(this).text());
        displayContacts(currentPage, filteredContacts);
      }
    });

    // Initialize pagination
    const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);
    createPagination(totalPages, filteredContacts);
    displayContacts(currentPage, filteredContacts);
    // pagination end

    $("#message-status").on("change", function () {
      filter = $(this).val();
      filteredContacts = contacts;
      if (filter == "All") {
        createPagination(
          Math.ceil(filteredContacts.length / contactsPerPage),
          filteredContacts
        );
      }
      if (filter == "Readed") {
        filteredContacts = contacts.filter((item) => item.isReaded == true);
        createPagination(
          Math.ceil(filteredContacts.length / contactsPerPage),
          filteredContacts
        );
      }
      if (filter == "Unread") {
        filteredContacts = contacts.filter((item) => item.isReaded == false);
        createPagination(
          Math.ceil(filteredContacts.length / contactsPerPage),
          filteredContacts
        );
      }
      displayContacts(1, filteredContacts);
      currentPage = 1;
    });

    $(document).on("click", ".tab-item", function () {
      const currentIndex = $(this).attr("data") - 1;
      $(".mail-to").html(contacts[currentIndex].email);
      if (contacts[currentIndex].isReaded == false) {
        contacts[currentIndex].isReaded = true;
        localStorage.setItem("contacts", JSON.stringify(contacts));
        $(this).removeClass("unRead");
      }
    });

    $(".send-email").on("click", function (e) {
      // New subject and body (replace with your desired values)
      var newSubject = $("#subject").val();
      var newBody = $("#body").val();
      var mailTo = $(".mail-to").text();

      if (newSubject == "" || newBody == "" || mailTo == "null") {
        alert("Please fill in all fields");
        return;
      }
      // Encode special characters for URL (optional, but recommended for safety)
      newSubject = encodeURIComponent(newSubject);
      newBody = encodeURIComponent(newBody);

      window.location.href = `mailto:${mailTo}?subject=${newSubject}&body=${newBody}`;
    });
  });
})(jQuery);
