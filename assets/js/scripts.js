
window.addEventListener('DOMContentLoaded', event => {

  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector('#sidebarToggle');
  if (sidebarToggle) {
      // Uncomment Below to persist sidebar toggle between refreshes
      // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
      //     document.body.classList.toggle('sb-sidenav-toggled');
      // }
      sidebarToggle.addEventListener('click', event => {
          event.preventDefault();
          document.body.classList.toggle('sb-sidenav-toggled');
          localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      });
  }

});


// Input Type Phone Number JS

var telInput = $(".phone"),
  errorMsg = $("#error-msg"),
  validMsg = $("#valid-msg");

telInput.intlTelInput({

  allowExtensions: true,
  formatOnDisplay: false,
  autoFormat: true,
  autoHideDialCode: true,
  autoPlaceholder: false,
  defaultCountry: "auto",
  ipinfoToken: "yolo",

  nationalMode: true,
  numberType: "MOBILE", 
  preferredCountries: ['sa', 'ae', 'qa','om','bh','kw','ma'],
  preventInvalidNumbers: true,
  separateDialCode: true,
  initialCountry: "auto",
  geoIpLookup: function(callback) {
  $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
    var countryCode = (resp && resp.country) ? resp.country : "";
    callback(countryCode);
  });
},
   utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"
});

var reset = function() {
  telInput.removeClass("error");
  errorMsg.addClass("hide");
  validMsg.addClass("hide");
};

telInput.blur(function() {
  reset();
  if ($.trim(telInput.val())) {
    if (telInput.intlTelInput("isValidNumber")) {
      validMsg.removeClass("hide");
    } else {
      telInput.addClass("error");
      errorMsg.removeClass("hide");
    }
  }
});

telInput.on("keyup change", reset);



// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

   const forms = document.querySelectorAll('.needs-validation');

   Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();



// Jquery show hide div using checkboxes

$(document).ready(function(){
  $('input[type="checkbox"]').click(function(){
      var inputValue = $(this).attr("value");
      $("." + inputValue).toggle();
  });
});



// Bargraph Jquery 

var data1 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  datasets: [{
    backgroundColor: "#007AFF",
    data: [25, 30, 20, 30, 25, 10, 20, 10, 20, 20],
                  
  }]
};

var options1 = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
   },
  scales: {
    yAxes: [{
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(100,100,100,0.1)"                  
      }
    }],
    xAxes: [{
      gridLines: {
        display: false
      }
    }]
  }
};

Chart.Bar('chart-1', {
  options: options1,
  data: data1
});



// progress-bar

$(".progress-bar").loading();
          $('input').on('click', function () {
            $(".progress-bar").loading();
          });