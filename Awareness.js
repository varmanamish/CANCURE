var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['0-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85+'],
            datasets: [
            {
                label: 'Male',
                backgroundColor: 'rgba(84, 122, 225, 0.85)',
                borderColor: 'rgb(55, 99, 255)',
                opacity:0.9,
                data: [1, 1, 1, 1,1,1,1,1,1,2,3, 6, 7, 10, 15, 16],
            },
            {
                label: 'Female',
                backgroundColor: 'rgba(255, 175, 192, 0.75)',
                borderColor: 'rgb(255, 98, 131)',
                data: [10, 15, 20, 25,30,60,120,185,210,275,340,420,460,460,410,340]
            }, 
            ],
            xAxisID: "Age",
        },

        options: {
            scales: {
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'No. of cases per 100,000 women/men each year'
                  }
                }],
                xAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Age(years)'
                    }
                }]
            },  
        }
    });
