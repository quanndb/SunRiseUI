import ACCOUNTS from "../../mock/accounts.js";

(function ($) {
  $(document).ready(function () {
    var userID = JSON.parse(localStorage.getItem("user")).id;

    ACCOUNTS.forEach((item, id) => {
      if (item.id === userID) {
        $(".userProfile").append(`
        <div class="col-md-6 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              width="200px"
              height="200px"
              src="img/initimageprofile.jpg"
              id="imgprofile"
            />
            <input type="file" id="fileInput" class="d-none " accept="image/*">
            <span class="font-weight-bold">${item.fullname}</span
            ><span class="text-black-50">${item.email}</span
            ><span> </span>
          </div>
        </div>
        
        <div class="col-md-6 border-right p-3 py-5">
                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                  <div class="col-md-12">
                    <label class="labels">Name</label
                    ><input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value="${item.fullname}"
                    />
                  </div>
                  
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Mobile Number</label
                    ><input
                      type="text"
                      class="form-control"
                      placeholder=""
                      value="${item.phone}"
                    />
                  </div>
                  
                  <div class="col-md-12">
                    <label class="labels">Gender</label
                    ><input
                      type="text"
                      class="form-control"
                      placeholder="Gender"
                      value="${item.gender}"
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Email</label
                    ><input
                      type="text"
                      class="form-control"
                      placeholder="enter email"
                      value="${item.email}"
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <label class="labels">Address</label
                    ><input
                      type="text"
                      class="form-control"
                      placeholder="Address"
                      value="${item.address}"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">National</label
                    ><input
                      type="text"
                      class="form-control"
                      value=""
                      placeholder="${item.national}"
                    />
                  </div>
                </div>
                <div class="mt-5 text-center">
                  <button class="btn btn-primary profile-button" type="button">
                    Save Profile
                  </button>
                </div>       
      </div>
        `); 
        
        // Sự kiện khi nhấp vào ảnh hồ sơ
        $("#imgprofile").on("click", function () {
          $("#fileInput").click();
        });

        // Sự kiện khi người dùng chọn tệp mới
        $("#fileInput").on("change", function (event) {
          var file = event.target.files[0];
          if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
              $("#imgprofile").attr("src", e.target.result);
            };
            reader.readAsDataURL(file);
          }
        });
      }
    });
  });
})(jQuery);
