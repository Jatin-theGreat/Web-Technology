function analyzeResume() {
    const text = document.getElementById("resume").value;

    if (text.trim() === "") {
        alert("Please enter resume text!");
        return;
    }

    fetch("/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Server error");
        }
        return res.json();
    })
    .then(data => {
        let output = "";

        output += `<div class="score">Score: ${data.score}/100</div>`;
        output += `<p><b>Word Count:</b> ${data.words}</p>`;

        output += `<p><b>Suggestions:</b></p>`;

        if (data.feedback.length === 0) {
            output += `<p style="color:green;">Excellent Resume!</p>`;
        } else {
            output += `<ul>`;
            data.feedback.forEach(f => {
                output += `<li>${f}</li>`;
            });
            output += `</ul>`;
        }

        document.getElementById("result").innerHTML = output;
    })
    .catch(err => {
        console.error(err);
        document.getElementById("result").innerHTML =
            `<p style="color:red;">Error analyzing resume. Try again.</p>`;
    });
}