import reviews from "../../mock/reviews.js";

(function ($) {
  $(document).ready(function () {
    var idx;

    var liked = false;
    var disliked = false;

    render();
    $(document).on("click", "#btnSubmit", function () {
      idx = $(this).attr("idx");

      let user = reviews[idx - 1].username;
      $("#comment-label").html(`Comment ${user}`);
    });

    $(document).on("click", "#like", function () {
      idx = $(this).attr("idx");
      liked = reviews[idx - 1].isLike;
      disliked = reviews[idx - 1].isDislike;

      if (!liked) {
        if (disliked) {
          reviews[idx - 1].disLike--;
          reviews[idx - 1].isDislike = false;
          reviews[idx - 1].isLike = true;
          reviews[idx - 1].like++;
        } else {
          reviews[idx - 1].like++;
          reviews[idx - 1].isLike = true;
          reviews[idx - 1].isDislike = false;
        }
      } else {
        reviews[idx - 1].like--;
        reviews[idx - 1].isLike = false;
        reviews[idx - 1].isDislike = false;
      }
      render();
    });

    $(document).on("click", "#dislike", function () {
      idx = $(this).attr("idx");
      liked = reviews[idx - 1].isLike;
      disliked = reviews[idx - 1].isDislike;
      
      if (!disliked) {
        if (liked) {
          reviews[idx - 1].like--;
          reviews[idx - 1].isLike = false;
          reviews[idx - 1].isDislike = true;
          reviews[idx - 1].disLike++;
        } 
        else {
          reviews[idx - 1].disLike++;
          reviews[idx - 1].isDislike = true;
          reviews[idx - 1].isLike = false;
        }

      } 
      else {
        reviews[idx - 1].disLike--;
        reviews[idx - 1].isDislike = false;
        reviews[idx - 1].isLike = false;
      }
      render();
    });

    $("#send-comment").click(function () {
      let rep = $(".form-control1").val();

      let currentDate = new Date();
      let hours = currentDate.getHours();
      let minutes = currentDate.getMinutes();
      let day = currentDate.getDate();
      let month = currentDate.getMonth() + 1;
      let year = currentDate.getFullYear();
      let formattedDate = year + "-" + month + "-" + day;
      let formattedTime =
        hours + ":" + (minutes < 10 ? "0" + minutes : minutes);

      let date = formattedDate + " " + formattedTime;

      let newReply = {
        id: reviews[idx - 1].reply.length + 1,
        username: "sunrise",
        img: "../client/img/logo.jpg",
        date: date,
        comment: rep,
      };
      reviews[idx - 1].reply.push(newReply);
      render();
      $("#comment-label").html(`Comment`);
      $(".form-control1").val("");
      idx = 0;
    });

    function render() {
      $(".comment-section").html("");
      reviews.forEach((item, index) => {
        $(".comment-section").append(
          `
        <div class="row reply-section shadow-sm mb-2">
            <div class="row w-100 mx-2 pt-4 flex-nowrap">
            <div class="avatar px-0 col-1 me-2">
              <img
                src="${item.img}"
                class="rounded-circle"
                alt=""
              />
            </div>
            <div class="pe-3 col-10">
              <p class="mb-0 fw-bold">${item.username}</p>
              <p class="mb-0">
                ${item.rate} <small class="fa fa-star text-primary"></small>
              </p>
              <p class="mb-0 text-break">
                ${item.date} | Room : ${item.room}
              </p>
              <p class="fw-bolder mb-0 text-break">
                ${item.comment}
              </p>

              <p>
                <span class="me-3"
                  ><i class="fa-solid fa-thumbs-up ${
                    item.isLike ? "text-primary" : ""
                  }" idx=${item.id} id="like"></i> ${item.like}</span
                >
                <span class="me-3"
                  ><i class="fa-solid fa-thumbs-down ${
                    item.isDislike ? "text-primary" : ""
                  }"  idx=${item.id} id="dislike"></i> ${item.disLike}</span
                >
                <a class="text-decoration-underline" idx=${
                  item.id
                } id="btnSubmit">Response</a>
              </p>
            </div>
          </div>
          ${item.reply.map((subItem, index) => {
            return `
              <div class="row w-100 pt-4 reply flex-nowrap">
                <div class="avatar px-0 col-1 me-2">
                  <img
                    src="${subItem.img}"
                    class="rounded-circle"
                    alt=""
                  />
                </div>
                <div class="p-0 col-10">
                  <p class="mb-0 fw-bold">${subItem.username}</p>
                  <p class="mb-0">${subItem.date}</p>
                  <p class="fw-bolder mb-0 text-break">
                    ${subItem.comment}
                  </p>
                  <p/>
                </div>
              </div>`;
          })}
        </div>`
        );
      });
    }
  });
})(jQuery);
