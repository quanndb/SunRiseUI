import adminsData from "../../mock/admins.js";
import usersData from "/client/mock/accounts.js";
import employeesData from "/client/mock/employees.js";

(function ($) {
  $(document).ready(function () {
    console.log("Admins Data:", adminsData);
    console.log("Users Data:", usersData);

    $(".accountsManager").append(`
      <div class="card">
        <div class="card-body">
          <div class="pagetitle">
            <h1>Dashboard</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="accountsManager.html">Home</a></li>
                <li class="breadcrumb-item active">Account manage</li>
              </ol>
            </nav>
          </div>

          <!-- Search Box -->
          <div class="d-flex justify-content-end">
          <input type="text" id="searchBox" class="form-control w-25" placeholder="Search...">
          </div>

          <!-- Bordered Tabs -->
          <ul class="nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active  btnsTap" id="admins-tab" data-bs-toggle="tab" data-bs-target="#bordered-home" type="button" role="tab" aria-controls="home" aria-selected="true"
              data-role="ADMIN"
               >Admins</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link btnsTap" id="users-tab" data-bs-toggle="tab" data-bs-target="#bordered-profile" type="button" role="tab" aria-controls="profile" aria-selected="false"
              data-role="USER"
              >Users</button>
            </li>

            <li class="nav-item" role="presentation">
              <button class="nav-link btnsTap" id="employee-tab" data-bs-toggle="tab" data-bs-target="#bordered-employees" type="button" role="tab" aria-controls="employees"
              data-role="EMPLOYEE"
              aria-selected="false">Employees</button>
            </li>
          </ul>
          <div class="tab-content pt-2" id="borderedTabContent">
            <div class="tab-pane fade show active" id="bordered-home" role="tabpanel" aria-labelledby="admins-tab">
              <div class="table-responsive">
                <table class="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>STT #</th>
                      <th>Email</th>
                      <th>Full Name</th>
                      <th>Gender</th>
                      <th>Phone Number</th>
                      <th>Address</th>
                      <th>Role</th>

                      <th scope="col"><button type="button" class="btn btn-outline-success rounded-2  ms-4 addClassBtn"
                      data-bs-toggle="modal" data-bs-target="#add"
                      data-role="ADMIN"
                      ><i class="bi bi-plus"></i>
                      </button></th>

                    </tr>
                  </thead>
                  <tbody class="adminsData"></tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade" id="bordered-profile" role="tabpanel" aria-labelledby="users-tab">
              <div class="table-responsive">
                <table class="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>STT #</th>
                      <th>Email</th>
                      <th>Full Name</th>
                      <th>Gender</th>
                      <th>Phone Number</th>
                      <th>Address</th>
                      <th>Role</th>

                      <th scope="col"><button type="button" class="btn btn-outline-success rounded-2  ms-4 addClassBtn"
                      data-bs-toggle="modal" data-bs-target="#add"
                      data-role="USER"

                      ><i class="bi bi-plus"></i>
                      </button></th>
                    </tr>
                  </thead>
                  <tbody class="usersData"></tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade" id="bordered-employees" role="tabpanel" aria-labelledby="employee-tab">
              <div class="table-responsive">
                <table class="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>STT #</th>
                      <th>Email</th>
                      <th>Full Name</th>
                      <th>Gender</th>
                      <th>Phone Number</th>
                      <th>Address</th>
                      <th>Role</th>

                      <th scope="col"><button type="button" class="btn btn-outline-success rounded-2  ms-4 addClassBtn"
                      data-bs-toggle="modal" data-bs-target="#add"
                      data-role="EMPLOYEE"

                      ><i class="bi bi-plus"></i>
                      </button></th>

                    </tr>
                  </thead>
                  <tbody class="employeesData"></tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- End Bordered Tabs -->
        </div>
      </div>

      <!-- Modal add -->
                <div class="modal fade" id="add" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="addModalLabel">Add New Account</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form id="addRoomForm">

                          <div class="row">
                              <div class="col-md-6 mb-3">
                                <label for="username" class="form-label">UserName</label>
                                <input type="text" class="form-control" id="username1" name="username" required>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password1" name="password" required>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-md-6 mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" id="email1" name="email" required>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label for="phone" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="phone1" name="phone" required>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-md-6 mb-3">
                                <label for="fullname" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="fullname1" name="fullname" required>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label for="gender" class="form-label">Gender</label>
                                <input type="text" class="form-control" id="gender1" name="gender" required>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-md-6 mb-3">
                              <label for="role" class="form-label">Role</label>
                              <input type="text" class="form-control" id="role1" name="role" required>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label for="address" class="form-label">Address</label>
                                <input type="text" class="form-control" id="address1" name="address" required>
                              </div>
                            </div>

                          </form>
                        </div>

                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-success  addClassBtn" data-role="ADMIN"  id="addAccountButton"
                          >Add</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Modal add End -->
    `);

    function renderTableData(container, data) {
      container.empty();
      let index = 1;
      data.forEach(function (item) {
        var itemRow = `
          <tr>
            <td>${index++}</td>
            <td>${item.email}</td>
            <td>${item.fullName || item.fullname}</td>
            <td>${item.gender}</td>
            <td>${item.phone}</td>
            <td>${item.address}</td>
            <td>${item.role}</td>

            <td>
              <button type="button" class="btn btn-outline-warning rounded-2 editButton"
              data-bs-toggle="modal"
              target=${item.id}
              data-bs-target="#updateModal">
              <i class="bi bi-pencil-square" ></i>
              </button>

              <button type="button" class="btn btn-outline-danger rounded-2
              deleteButton
              "
              data-role="${item.role}"
              data-bs-toggle="modal" data-bs-target="#deleteModal"
              data-id="${item.id}">
                <i class="bi bi-trash-fill"></i>
              </button>

            </td>
          </tr>
        `;
        container.append(itemRow);
      });
    }

    var adminsContainer = $(".adminsData");
    renderTableData(adminsContainer, adminsData);

    var usersContainer = $(".usersData");
    renderTableData(usersContainer, usersData);

    var employeesContainer = $(".employeesData");
    renderTableData(employeesContainer, employeesData);

    $("#searchBox").on("input", function () {
      var searchTerm = $(this).val().toLowerCase();
      var filteredAdmins = adminsData.filter(function (item) {
        return Object.values(item).some(function (value) {
          return String(value).toLowerCase().includes(searchTerm);
        });
      });

      var filteredUsers = usersData.filter(function (item) {
        return Object.values(item).some(function (value) {
          return String(value).toLowerCase().includes(searchTerm);
        });
      });

      var filteredEmployees = employeesData.filter(function (item) {
        return Object.values(item).some(function (value) {
          return String(value).toLowerCase().includes(searchTerm);
        });
      });

      renderTableData(adminsContainer, filteredAdmins);
      renderTableData(usersContainer, filteredUsers);
      renderTableData(employeesContainer, filteredEmployees);
    });

    $(".addClassBtn").click(function () {
      var role = $(this).attr("data-role");

      $("#addAccountButton").attr("data-role", role);
    });

    // Add new account
    $("#addAccountButton").click(function () {
      var role = $(this).attr("data-role");
      console.log(role);

      if (role == "USER") {
        var newUser = {
          id: usersData.length + 1,
          email: $("#email1").val(),
          phone: $("#phone1").val(),
          fullname: $("#fullname1").val(),
          address: $("#address1").val(),
          role: role,
          username: $("#username1").val(),
          password: $("#password1").val(),
          gender: $("#gender1").val(),
        };
        console.log(newUser);
        usersData.push(newUser);
        renderTableData(usersContainer, usersData);
      }

      if (role == "ADMIN") {
        var newAdmin = {
          id: adminsData.length + 1,
          email: $("#email1").val(),
          phone: $("#phone1").val(),
          fullname: $("#fullname1").val(),
          address: $("#address1").val(),
          role: role,
          username: $("#username1").val(),
          password: $("#password1").val(),
          gender: $("#gender1").val(),
        };
        console.log(newAdmin);

        adminsData.push(newAdmin);
        renderTableData(adminsContainer, adminsData);
      }
      if (role == "EMPLOYEE") {
        var newEmployee = {
          id: employeesData.length + 1,
          email: $("#email1").val(),
          phone: $("#phone").val(),
          fullname: $("#fullname1").val(),
          address: $("#address1").val(),
          role: role,
          username: $("#username1").val(),
          password: $("#password1").val(),
          gender: $("#gender1").val(),
        };
        console.log(newEmployee);

        employeesData.push(newEmployee);
        renderTableData(employeesContainer, employeesData);
      }

      // $("#add").modal("hide");
      // $("body").removeClass("modal-open");
      // $(".modal-backdrop").remove();
    });

    //Update

    $(document).on("click", ".editButton", function () {
      var id = $(this).attr("data-id");
      var role = $(this).attr("data-role");

      console.log(id, role);

      $("#updateAccountButton").click(function () {});
    });

    //updateAccount

    //deletemodal open
    $(document).on("click", ".deleteButton", function () {
      var id = $(this).attr("data-id");
      var role = $(this).attr("data-role");

      $("#deleteModal").modal("show");

      $(".deleteAccountButton").click(function () {
        var id = $(this).attr("data-id");
        var role = $(this).attr("data-role");

        console.log(id, role); // đúng

        if (role == "USER") {
          var data = usersData.filter((item) => item.id !== id);
          renderTableData(usersContainer, data);
        } else if (role == "ADMIN") {
          var data = adminsData.filter((item) => item.id !== id);
          renderTableData(adminsContainer, data);
        } else if (role == "EMPLOYEE") {
          var data = employeesData.filter((item) => item.id !== id);
          renderTableData(employeesContainer, data);
        }

        // $(`#deleteModal`).modal("hide");
        // $("body").removeClass("modal-open");
        // $(".modal-backdrop").remove();
      });
    });
  });
})(jQuery);
