// Fetch data for leaderboard section
fetch("http://127.0.0.1:8000/leaderboard/showall/top")
    .then((data) => data.json())
    .then((objectData) => {
        let tableData = "";
        objectData.forEach((values) => {
            tableData += `
            <tr>
                <td>${values.name}</td>
                <td>${values.level}</td>
                <td>${values.kill_count}</td>
                <td>${values.time}</td>
            </tr>
            `;
        });
        document.getElementById("table_body1").innerHTML = tableData;
    })
    .catch((err) => {
        console.error("Error fetching leaderboard data:", err);
    });

// Fetch data for login data log section
fetch("http://127.0.0.1:8000/leaderboard/showall/log")
    .then((data) => data.json())
    .then((objectData) => {
        let tableData = "";
        let dates = [];
        let logNums = [];
        objectData.forEach((values) => {
            tableData += `
            <tr>
                <td>${values.logdate}</td>
                <td>${values.lognum}</td>
            </tr>
            `;
            dates.push(values.logdate);
            logNums.push(values.lognum);
        });
        document.getElementById("table_body2").innerHTML = tableData;

        // Chart.js configuration
        var ctx = document.getElementById('lineChart').getContext('2d');
        var lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Log Numbers',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    data: logNums,
                    fill: false,
                }]
            },
            options: {
                scales: {
                    x: [{   // Change 'x' to 'xAxis' or 'xAxes'
                        type: 'linear',
                        position: 'bottom'
                    }]
                }
            }
        });
    })
    .catch((err) => {
        console.error("Error fetching log data:", err);
    });

// Submit form function
function submitForm() {
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    if (!nameInput || !messageInput) {
        alert('Please enter a valid email and message.');
        return;
    }

    const name = nameInput.value;
    const message = messageInput.value;

    emailjs.init('eJ3u_IouqlrfGO-_7');

    const templateParams = {
        name: name,
        message: message
    };
    

    // Replace 'service_jj3kf1g' and 'template_35xercf' with your actual Service ID and Template ID
    emailjs.send('service_jj3kf1g', 'template_35xercf', templateParams)
        .then((response) => {
            console.log('Email sent successfully:', response);
            document.getElementById('contactForm').reset();
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            alert('Oops! Something went wrong. Please try again later.');
        });
}

// Open game function
function openGame() {
    window.open('dedede/index.html', '_blank');
}
