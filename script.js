const form = document.getElementById("resumeForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const linkedin = document.getElementById("linkedin").value.trim();
    const github = document.getElementById("github").value.trim();

    const school = document.getElementById("school").value.trim();
    const schoolMarks = document.getElementById("schoolMarks").value.trim();
    const schoolYear = document.getElementById("schoolYear").value.trim();

    const inter = document.getElementById("inter").value.trim();
    const interMarks = document.getElementById("interMarks").value.trim();
    const interYear = document.getElementById("interYear").value.trim();

    const graduation = document.getElementById("graduation").value.trim();
    const graduationMarks = document.getElementById("graduationMarks").value.trim();
    const graduationYear = document.getElementById("graduationYear").value.trim();

    const skills = document.getElementById("skills").value.trim();
    const project = document.getElementById("project").value.trim();

    const internship = document.getElementById("internship").value;
    const internRole = document.getElementById("internRole").value.trim();
    const internCompany = document.getElementById("internCompany").value.trim();
    const internDuration = document.getElementById("internDuration").value.trim();

    const workRole = document.getElementById("workRole").value.trim();
    const workCompany = document.getElementById("workCompany").value.trim();
    const workDuration = document.getElementById("workDuration").value.trim();

    const certificate = document.getElementById("certificate").value;
    const certificateName = document.getElementById("certificateName").value.trim();

    const achievement = document.getElementById("achievement").value;
    const achievementDetails = document.getElementById("achievementDetails").value.trim();
    const languages = document.getElementById("languages").value.trim();

    const emailRegex =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (name.length < 3) {
        alert("Enter a valid name.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid email.");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return;
    }

    if (skills.split(",").length < 3) {
        alert("Enter at least 3 skills.");
        return;
    }

    if (linkedin !== "" &&
        !linkedin.startsWith("https://www.linkedin.com/")) {

        alert("Invalid LinkedIn URL");
        return;
    }

    if (github !== "" &&
        !github.startsWith("https://github.com/")) {

        alert("Invalid GitHub URL");
        return;
    }

    const data = {

        name,
        email,
        phone,
        linkedin,
        github,

        education: {

            school,
            schoolMarks,
            schoolYear,

            inter,
            interMarks,
            interYear,

            graduation,
            graduationMarks,
            graduationYear
        },

        skills,

        project,

        internship: {

            available: internship,

            role: internRole,

            company: internCompany,

            duration: internDuration
        },

        workExperience: {

            role: workRole,

            company: workCompany,

            duration: workDuration
        },

        certificate: {

            available: certificate,

            name: certificateName
        },

        achievement: {

            available: achievement,

            details: achievementDetails
        }
    };

    try {

        const response = await fetch("http://127.0.0.1:5000/generate", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        alert("Resume Generated Successfully!");

        console.log(result);

    } catch (error) {

        console.log(error);

        alert("Unable to connect to Flask Server.");
    }

});