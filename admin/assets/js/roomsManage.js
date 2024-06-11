(function ($) {
  $(document).ready(function () {
    function renderRooms() {
      var items = JSON.parse(localStorage.getItem("rooms"));

      items.forEach((item) => {
        $("#room").append(
          `<option value="${item.roomName}">${item.roomName}</option>`
        );
      });

      var rows = items
        .map(function (item) {
          return `
          <tr>
            <th scope="row">
              <a href="#"><img src="
              ${item.images[0]?.img}
              " alt="" /></a>
            </th>
            <td>
              <a href="#" class="text-primary fw-bold">${item.roomName}</a>
            </td>
            <td>${item.bedType}</td>
            <td class="fw-bold">${item.size} m<sup>2</sup></td>
            <td>${item.description}</td>
            <td>${item.isActive}</td>
            <td>${item.price}  Triệu</td>
            <td>${item.rate}</td>
            <td>
              <button type="button" class="btn btn-outline-warning rounded-2 editButton" data-bs-toggle="modal" data-bs-target="#update-${
                item.id
              }">
              <i class="bi bi-pencil-square" ></i>
              </button>
              
              <button type="button" class="btn btn-outline-danger rounded-2" 
              data-bs-toggle="modal" data-bs-target="#delete-${item.id}"
              ><i class="bi bi-trash-fill"  id="${item.id}"></i>
              </button>

            </td>

          </tr>



          <!-- Modal update -->
          <div class="modal fade" id="update-${
            item.id
          }" tabindex="-1" aria-labelledby="updateModalLabel-${item.id}" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="updateModalLabel-${
                    item.id
                  }">Update Room</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form class="updateRoomForm">
                    
                  <div class="row d-flex">
                  <div class="col-md-2 mb-3 mt-3">
                  <div class="image-container update" 
                  data=4
                  data-item=${item.id}
                  id="imageContainer4">
                    <img id="imagePreview4${
                      item.id
                    }" src="${item.images ? item.images[0]?.img : ""}" />
                  </div>
                  <input type="file" class="files fileIP4${
                    item.id
                  }" data=4 dataIP=${item.id} id="fileInput4" style="display: none;" />
                </div>
                <div class="col-md-2 mb-3 mt-3">
                  <div class="image-container update"
                  data=5
                  data-item=${item.id}
                  id="imageContainer5">
                    <img id="imagePreview5${
                      item.id
                    }" src="${item.images ? item.images[1]?.img : ""}" />
                  </div>
                  <input type="file" class="files fileIP5${
                    item.id
                  }" data=5 dataIP=${item.id} id="fileInput5" style="display: none;" />
                </div>
                <div class="col-md-2 mb-3 mt-3">
                  <div class="image-container update" 
                  data=6
                  data-item=${item.id}
                  id="imageContainer6">
                    <img id="imagePreview6${
                      item.id
                    }" src="${item.images ? item.images[2]?.img : ""}" />
                  </div>
                  <input type="file" class="files fileIP6${
                    item.id
                  }" data=6 dataIP=${item.id} id="fileInput6" style="display: none;" />
                </div>
                
             <div class="col-md-6 mb-3 ">
                  <label for="roomName" class="form-label">Room Name</label>
                 <input type="text" class="form-control" id="roomName-${
                   item.id
                 }" name="roomName" value="${item.roomName}" required>  
                 </div>
              </div>


                          <div class="row">
                          <div class="col-md-6 mb-3">
                            <label for="bedType-${
                              item.id
                            }" class="form-label">Bed Type</label>
                            <input type="text" class="form-control" id="bedType-${
                              item.id
                            }" name="bedType" value="${item.bedType}" required>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="size-${
                              item.id
                            }" class="form-label">Size (m²)</label>
                            <input type="number" class="form-control" id="size-${
                              item.id
                            }" name="size" value="${item.size}" required>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label for="isActive-${
                              item.id
                            }" class="form-label">Active Status</label>
                            <select class="form-select" id="isActive-${
                              item.id
                            }" name="isActive" required>
                              <option value="true" ${
                                item.isActive ? "selected" : ""
                              }>true</option>
                              <option value="false" ${
                                !item.isActive ? "selected" : ""
                              }>false</option>
                            </select>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="rate-${
                              item.id
                            }" class="form-label">Rate</label>
                            <input type="number" class="form-control" id="rate-${
                              item.id
                            }" name="rate" value="${item.rate}" required>
                          </div>
                        </div>
                        <div class="row">
                        
                          <div class="col-md-6 mb-3">
                          <label for="price-${
                            item.id
                          }" class="form-label">Price</label>
                          <input type="number" class="form-control" id="price-${
                            item.id
                          }" name="rate" value="${item.price}" required>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="description-${
                              item.id
                            }" class="form-label">Description</label>
                            <textarea class="form-control" id="description-${
                              item.id
                            }" name="description" rows="3" required>${item.description}</textarea>
                          </div>
                        </div>


                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" data-bs-dismiss="modal" class="btn btn-warning updateRoomButton" data-id="${
                    item.id
                  }" data-images='${JSON.stringify(item.images)}'>
                  Update
                  </button>
                  </div>
              </div>
            </div>
          </div>
          <!-- Modal update End -->

          <!-- Modal Delete -->
          <div class="modal fade" id="delete-${
            item.id
          }" tabindex="-1" aria-labelledby="deleteModalLabel-${item.id}" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="deleteModalLabel">Xác nhận xóa!</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Bạn chắc chắn muốn xóa phòng ${item.id} này?
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" data-bs-dismiss="modal" class="btn btn-danger deleteRoomButton" data-id="${
                    item.id
                  }">Yes</button>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal End Delete -->
        `;
        })
        .join("");

      $(".roomsManage").html(
        `
        <div class="card top-selling overflow-auto">
        <div class="card-body pb-0">
          <h5 class="card-title">All Rooms <span>| View</span></h5>

          <table class="table table-borderless ">
            <thead>
              <tr>
                <th scope="col">Preview</th>
                <th scope="col">Room Name</th>
                <th scope="col">Bed Type</th>
                <th scope="col">Size</th>
                <th scope="col">Description</th>
                <th scope="col">isActive</th>
                <th scope="col">Price</th>
                <th scope="col">Rate</th>
                <th scope="col"><button type="button" class="btn btn-outline-success rounded-2  ms-4"
                data-bs-toggle="modal" data-bs-target="#add"
                ><i class="bi bi-plus"></i>
                </button></th>

                <!-- Modal add -->
                <div class="modal fade" id="add" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="addModalLabel">Add New Room</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form id="addRoomForm">
                            <div class="row d-flex">
                            <div class="col-md-2 mb-3 mt-3">
                              <div class="image-container" id="imageContainer1">
                                <span class="plus-sign1">+</span>
                                <img id="imagePreview1" class="" />
                              </div>
                              <input type="file" id="fileInput1" style="display: none;" />
                            </div>
                        
                            <div class="col-md-2 mb-3 mt-3">
                              <div class="image-container" id="imageContainer2">
                                <span class="plus-sign2">+</span>
                                <img id="imagePreview2" class="" />
                              </div>
                              <input type="file" id="fileInput2" style="display: none;" />
                            </div>
                        
                            <div class="col-md-2 mb-3 mt-3">
                              <div class="image-container" id="imageContainer3">
                                <span class="plus-sign3">+</span>
                                <img id="imagePreview3" class="" />
                              </div>
                              <input type="file" id="fileInput3" style="display: none;" />
                            </div>
                            <div class="col-md-6 mb-3 ">
                              <label for="roomName" class="form-label">Room Name</label>
                              <input type="text" class="form-control" id="roomName" name="roomName" required>  
                            </div>
                          </div>


                            <div class="row">
                              <div class="col-md-6 mb-3">
                                <label for="bedType" class="form-label">Bed Type</label>
                                <input type="text" class="form-control" id="bedType" name="bedType" required>  
                              </div>
                              <div class="col-md-6 mb-3">
                                <label for="price" class="form-label">Price</label>
                                <input type="number" class="form-control" id="price" name="price" required>  
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6 mb-3">
                                <label for="size" class="form-label">Size (m²)</label>
                                <input type="number" class="form-control" id="size" name="size" required>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label for="rate" class="form-label">Rate</label>
                                <input type="number" class="form-control" id="rate" name="rate" required>
                              </div>
                            </div> 

                            <div class="mb-3">
                              <label for="description" class="form-label">Description</label>
                              <textarea class="form-control" id="description" name="description" rows="3" required></textarea>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-success" data-bs-dismiss="modal" id="addRoomButton">Add</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Modal add End -->
              </tr>
            </thead>
            <tbody>
              ${rows}
              
            </tbody>
          </table>
        </div>
      </div>
    `
      );
    }

    renderRooms();

    $(document).on("click", "#addRoomButton", function () {
      var items = JSON.parse(localStorage.getItem("rooms")) || [];
      const imageURL1 = getSelectedImageURL(1);
      const imageURL2 = getSelectedImageURL(2);
      const imageURL3 = getSelectedImageURL(3);
      items.images = []; // Initialize the images array

      if (imageURL1) {
        items.images.push({ img: imageURL1 });
      }
      if (imageURL2) {
        items.images.push({ img: imageURL2 });
      }
      if (imageURL3) {
        items.images.push({ img: imageURL3 });
      }

      var newRoom = {
        id: items.length + 1 + "",
        roomName: $("#roomName").val(),
        bedType: $("#bedType").val(),
        size: $("#size").val(),
        description: $("#description").val(),
        isActive: true,
        price: $("#price").val(),
        images: items.images,
        rate: $("#rate").val(),
      };

      var items = JSON.parse(localStorage.getItem("rooms")) || [];
      items.push(newRoom);
      localStorage.setItem("rooms", JSON.stringify(items));

      renderRooms();
    });

    // Update Room
    $(document).on("click", ".updateRoomButton", function () {
      var id = $(this).attr("data-id");
      var items = JSON.parse(localStorage.getItem("rooms")) || [];

      const currentRoom = items.find((item) => item.id === id);

      // Lấy thông tin mới từ modal
      currentRoom.id = id;
      currentRoom.roomName = $(`#roomName-${id}`).val();
      currentRoom.bedType = $(`#bedType-${id}`).val();
      currentRoom.size = $(`#size-${id}`).val();
      currentRoom.description = $(`#description-${id}`).val();
      currentRoom.isActive = $(`#isActive-${id}`).val() === "true";
      currentRoom.price = $(`#price-${id}`).val();
      currentRoom.rate = $(`#rate-${id}`).val();

      // Lấy URL của 3 ảnh từ modal
      var imageURL1 = $(`#imagePreview4${id}`).attr("src");
      var imageURL2 = $(`#imagePreview5${id}`).attr("src");
      var imageURL3 = $(`#imagePreview6${id}`).attr("src");
      // Cập nhật mảng images

      currentRoom.images = [
        { img: imageURL1 },
        { img: imageURL2 },
        { img: imageURL3 },
      ];

      // Cập nhật thông tin phòng trong localStorage
      localStorage.setItem("rooms", JSON.stringify(items));

      renderRooms();
    });

    // deleting the room
    $(document).on("click", ".deleteRoomButton", function () {
      var id = $(this).data("id");
      console.log(id);
      var items = JSON.parse(localStorage.getItem("rooms")) || [];
      console.log(items);
      items = items.filter((item) => item.id != id);
      localStorage.setItem("rooms", JSON.stringify(items));

      renderRooms();
    });

    // Sự kiện khi nhấp vào
    $(document).on("click", "#imageContainer1", function () {
      $("#fileInput1").click();
    });
    $(document).on("click", "#imageContainer2", function () {
      $("#fileInput2").click();
    });
    $(document).on("click", "#imageContainer3", function () {
      $("#fileInput3").click();
    });

    $(document).on("click", ".image-container.update", function () {
      const data = $(this).attr("data");
      const dataItem = $(this).attr("data-item");
      console.log(data, dataItem);
      $(`.fileIP${data}${dataItem}`).click();
    });
    $(document).on("change", ".files", function (event) {
      var file1 = event.target.files[0];
      var data = $(this).attr("data");
      var dataIP = $(this).attr("dataIP");
      if (file1) {
        var fileSrc1 = URL.createObjectURL(file1);
        $(`#imagePreview${data}${dataIP}`).attr("src", fileSrc1).show();
        $(`.plus-sign${data - 3}`).hide();
      }
      $(this).val("");
    });

    $(document).on("change", "#fileInput1", function (event) {
      var file2 = event.target.files[0];
      if (file2) {
        var fileSrc2 = URL.createObjectURL(file2);
        $("#imagePreview1").attr("src", fileSrc2).show();
        $(".plus-sign1").hide();
      }
      $(this).val("");
    });
    $(document).on("change", "#fileInput2", function (event) {
      var file2 = event.target.files[0];
      if (file2) {
        var fileSrc2 = URL.createObjectURL(file2);
        $("#imagePreview2").attr("src", fileSrc2).show();
        $(".plus-sign2").hide();
      }
      $(this).val("");
    });
    $(document).on("change", "#fileInput3", function (event) {
      var file2 = event.target.files[0];
      if (file2) {
        var fileSrc2 = URL.createObjectURL(file2);
        $("#imagePreview3").attr("src", fileSrc2).show();
        $(".plus-sign3").hide();
      }
      $(this).val("");
    });

    function getSelectedImageURL(index) {
      const imagePreviewElement = $(`#imagePreview${index}`);
      if (imagePreviewElement.attr("src")) {
        return imagePreviewElement.attr("src");
      } else {
        return null;
      }
    }
  });
})(jQuery);
