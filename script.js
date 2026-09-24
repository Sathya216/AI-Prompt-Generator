function generatePrompt() {

    let purpose = document.getElementById("purpose").value;
    let topic = document.getElementById("topic").value;

    if (topic.trim() === "") {
        document.getElementById("output").innerText =
            "Please enter a topic first!";
        return;
    }

    let prompt = "";

    if (purpose === "Resume") {

        prompt = `Act as a professional resume writer.
Help me create a strong resume section for ${topic}.
Keep it simple, professional and ATS-friendly.`;

    } 
    else if (purpose === "Interview") {

        prompt = `Act as an interviewer.
Ask me beginner-level interview questions about ${topic}.
Ask one question at a time and wait for my answer.`;

    } 
    else if (purpose === "Coding") {

        prompt = `Act as a coding mentor.
Teach me ${topic} step by step.
Explain the concept simply and give me a small practice problem.`;

    } 
    else if (purpose === "Study") {

        prompt = `Act as a study mentor.
Teach me ${topic} in simple language.
Give me examples, important points and a short quiz.`;
    }

    document.getElementById("output").innerText = prompt;
}


function copyPrompt() {

    let prompt = document.getElementById("output").innerText;

    navigator.clipboard.writeText(prompt);

    alert("Prompt copied successfully! ✅");
}