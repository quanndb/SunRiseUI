var payments = JSON.parse(localStorage.getItem("payments"));
// Hàm để nhóm dữ liệu theo ngày, tuần, tháng
function groupByDate(payments, period) {
  const grouped = {};

  payments.forEach((item) => {
    const date = new Date(item.createdDate);
    let key;

    if (period === "day") {
      key = date.toISOString().split("T")[0]; // YYYY-MM-DD
    } else if (period === "week") {
      const startOfWeek = new Date(
        date.setDate(date.getDate() - date.getDay())
      );
      key = startOfWeek.toISOString().split("T")[0];
    } else if (period === "month") {
      key = `${date.getFullYear()}-${date.getMonth() + 1}`; // YYYY-MM
    }

    if (!grouped[key]) {
      grouped[key] = 0;
    }

    grouped[key] += item.total;
  });

  return grouped;
}

const dailyTotals = groupByDate(payments, "day");
const weeklyTotals = groupByDate(payments, "week");
const monthlyTotals = groupByDate(payments, "month");

function createChart(ctx, labels, data) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Total",
          data: data,
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

const dailyLabels = Object.keys(dailyTotals);
const dailyData = Object.values(dailyTotals);

const weeklyLabels = Object.keys(weeklyTotals);
const weeklyData = Object.values(weeklyTotals);

const monthlyLabels = Object.keys(monthlyTotals);
const monthlyData = Object.values(monthlyTotals);

$("#paymentsChart").html(
  `<canvas id="dailyChart" width="400" height="200"></canvas>`
);
createChart($("#dailyChart")[0].getContext("2d"), dailyLabels, dailyData);
$(".typeReport").text("/Daily");

(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".todayPayment").on("click", function (e) {
      e.preventDefault();
      $("#paymentsChart").html(
        `<canvas id="dailyChart" width="400" height="200"></canvas>`
      );
      createChart($("#dailyChart")[0].getContext("2d"), dailyLabels, dailyData);
      $(".typeReport").text("/Daily");
    });

    $(".monthPayment").on("click", function (e) {
      e.preventDefault();
      $("#paymentsChart").html(
        `<canvas id="monthlyChart" width="400" height="200"></canvas>`
      );
      createChart(
        $("#monthlyChart")[0].getContext("2d"),
        monthlyLabels,
        monthlyData
      );
      $(".typeReport").text("/This month");
    });

    $(".weekPayment").on("click", function (e) {
      e.preventDefault();
      $("#paymentsChart").html(
        `<canvas id="weeklyChart" width="400" height="200"></canvas>`
      );
      createChart(
        $("#weeklyChart")[0].getContext("2d"),
        weeklyLabels,
        weeklyData
      );
      $(".typeReport").text("/This week");
    });
  });
})(jQuery);
