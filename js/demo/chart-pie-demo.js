// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = "Nunito"),
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#858796";

// Pie Chart Example
var ctx2 = document.getElementById("myCircleChart");

async function getLocales(url) {
  const response = await fetch(`${url}/locales`);
  return await response.json();

}

async function drawPieChart() {
  const locales = await getLocales("https://demo02.deno.dev");
  const labels = locales.map((local) => local.nombre);
  const data = locales.map((local) => local.ventas);
  var myPieChart = new Chart(ctx2, {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor: ["#15003f", "#1cc88a", "#36b9cc"],
          hoverBackgroundColor: ["#3c2075", "#17a673", "#2c9faf"],
          hoverBorderColor: "rgba(234, 236, 244, 1)",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
      },
      legend: {
        display: false,
      },
      cutoutPercentage: 80,
    },
  });
}

drawPieChart();