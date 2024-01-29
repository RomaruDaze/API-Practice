fetch("http://127.0.0.1:8000/leaderboard/showall/top").then((data) => {
    return data.json();
}).then((objectData) => {
    let tableData = "";
    objectData.map((values) => {
        tableData += `
        <tr>
            <td>${values.name}</td>
            <td>${values.level}</td>
            <td>${values.kill_count}</td>
            <td>${values.time}</td>
        </tr>
        `;
    })
    document.getElementById("table_body1").innerHTML = tableData;
}).catch((err) => {
    console.log(err);
})

fetch("http://127.0.0.1:8000/leaderboard/showall/log").then((data) => {
    return data.json();
}).then((objectData) => {
    let tableData = "";
    let dates = [];
    let logNums = [];
    objectData.map((values) => {
        tableData += `
        <tr>
            <td>${values.logdate}</td>
            <td>${values.lognum}</td>
        </tr>
        `;
        dates.push(values.logdate);
        logNums.push(values.lognum);
    })
    document.getElementById("table_body2").innerHTML = tableData;

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
                x: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
    });
}).catch((err) => {
    console.log(err);
});

function submitForm() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email.trim() === '' || message.trim() === '') {
        alert('Please enter a valid email and message.');
        return;
    }

    emailjs.init('user_your_emailjs_user_id');

    const templateParams = {
        from_email: email,
        message: message
    };

    // Send the email using emailjs
    emailjs.send('service_your_emailjs_service_id', 'template_your_emailjs_template_id', templateParams)
        .then(function (response) {
            console.log('Email sent successfully:', response);
            // Optionally, reset the form after successful submission
            document.getElementById('contactForm').reset();
        }, function (error) {
            console.error('Error sending email:', error);
        });
}
function openGame() {
    window.open('dedede/index.html', '_blank');
}