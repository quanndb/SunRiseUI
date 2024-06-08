import adminsDatas from "../../mock/admins.js";
import usersDatas from "/client/mock/accounts.js";
import employeesDatas from "/client/mock/employees.js";
var adminsData = adminsDatas;
var usersData = usersDatas;
var employeesData = employeesDatas;
(function ($) {
  $(document).ready(function () {
    $(".accountsManager").append(`
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
            <td>${item.isADM ? "ADMIN" : item.role}</td>

            <td>
              <button type="button" class="btn btn-outline-warning rounded-2 editButton"
              data-bs-toggle="modal"
              target=${item.id}-${item.isADM ? "ADMIN" : item.role}
              data-bs-target="#updateModal">
              <i class="bi bi-pencil-square" ></i>
              </button>

              <button type="button" class="btn btn-outline-danger rounded-2
              deleteButton
              "
              data-bs-toggle="modal" data-bs-target="#deleteModal"
              data-target=${item.id}-${item.isADM ? "ADMIN" : item.role}
>
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
          fullName: $("#fullname1").val(),
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
      $("#email1").val("");
      $("#phone1").val("");
      $("#fullname1").val("");
      $("#address1").val("");
      $("#username1").val("");
      $("#password1").val("");
      $("#gender1").val("");
    });

    // Update
    $(document).on("click", ".editButton", function () {
      var target = $(this).attr("target");
      var parts = target.split("-"); // Tách chuỗi target thành ID và vai trò
      var id = parts[0]; // Lấy ID từ target
      var role = parts[1]; // Lấy vai trò từ target

      // Lưu ID của tài khoản vào thuộc tính target của modal
      $("#updateAccount").attr("target", id);
      $("#updateAccount").attr("role", role);

      console.log(id);
      console.log(role);
      var currentAccount;

      // Tìm tài khoản dựa trên ID và vai trò
      if (role === "USER") {
        currentAccount = usersData.find((item) => item.id === parseInt(id));
        console.log(usersData);
      } else if (role === "ADMIN") {
        currentAccount = adminsData.find((item) => item.id === parseInt(id));
      } else if (role === "EMPLOYEE") {
        currentAccount = employeesData.find((item) => item.id === parseInt(id));
      }

      console.log(currentAccount);

      $("#email").val(currentAccount.email);
      $("#fullname").val(
        role === "ADMIN" ? currentAccount.fullName : currentAccount.fullname
      );
      $("#phone").val(currentAccount.phone);
      $("#gender").val(currentAccount.gender);
      $("#address").val(currentAccount.address);
      $("#role").val(role);
    });

    // Xử lý sự kiện khi người dùng nhấn nút "Lưu" trong modal
    $("#updateAccount").click(function () {
      var id = $(this).attr("target");
      var role = $(this).attr("role");
      var currentAccount;

      // Tìm tài khoản dựa trên ID và vai trò
      if (role === "USER") {
        currentAccount = usersData.find(
          (item) => parseInt(item.id) === parseInt(id)
        );
      } else if (role === "ADMIN") {
        currentAccount = adminsData.find(
          (item) => parseInt(item.id) === parseInt(id)
        );
      } else if (role === "EMPLOYEE") {
        currentAccount = employeesData.find(
          (item) => parseInt(item.id) === parseInt(id)
        );
      }

      console.log(currentAccount);
      // Cập nhật thông tin của tài khoản dựa trên dữ liệu nhập từ modal
      // role === "ADMIN"
      //   ? (currentAccount.fullName ||currentAccount.fullname)
      //   : (currentAccount.fullname = $("#fullname").val());
      if (role === "ADMIN") {
        currentAccount.fullName = $("#fullname").val();
      } else {
        currentAccount.fullname = $("#fullname").val();
      }
      currentAccount.email = $("#email").val();
      currentAccount.phone = $("#phone").val();
      currentAccount.gender = $("#gender").val();
      currentAccount.address = $("#address").val();
      currentAccount.role = $("#role").val();
      // Hiển thị lại dữ liệu trong bảng tương ứng
      if (role === "USER") {
        renderTableData(usersContainer, usersData);
      } else if (role === "ADMIN") {
        renderTableData(adminsContainer, adminsData);
      } else if (role === "EMPLOYEE") {
        renderTableData(employeesContainer, employeesData);
      }
    });

    //deletemodal open
    $(document).on("click", ".deleteButton", function () {
      var target = $(this).attr("data-target");
      var parts = target.split("-"); // Tách chuỗi target thành ID và vai trò
      var id = parts[0]; // Lấy ID từ target
      var role = parts[1]; // Lấy vai trò từ target

      // Lưu ID của tài khoản vào thuộc tính target của modal
      $("#deleteAccount").attr("target", id);
      $("#deleteAccount").attr("role", role);

      console.log(id, role);
    });

    $(".deleteAccountButton").click(function () {
      var id = $("#deleteAccount").attr("target");
      var role = $("#deleteAccount").attr("role");
      console.log(id, role);
      if (role == "USER") {
        var data = usersData.filter((item) => item.id !== parseInt(id));
        usersData = data;
        renderTableData(usersContainer, data);
      } else if (role == "ADMIN") {
        var data = adminsData.filter((item) => item.id !== parseInt(id));
        adminsData = data;
        renderTableData(adminsContainer, data);
      } else if (role == "EMPLOYEE") {
        var data = employeesData.filter((item) => item.id !== parseInt(id));
        employeesData = data;
        renderTableData(employeesContainer, data);
      }
    });
  });
})(jQuery);
